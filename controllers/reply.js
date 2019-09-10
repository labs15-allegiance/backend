const express = require("express");

const Users = require("../models/users");
const Posts = require("../models/posts");
const Replies = require("../models/replies");
const RepliesLikes = require("../models/replies_likes");

const router = express.Router();

const validation = require("../middleware/dataValidation");

const { replySchema } = require("../schemas");

async function addLikesToReply(replies, error, res) {
	if (replies.length !== 0) {
		// Obtain list of reply ids for likes lookup
		const replyIds = replies.map(reply => reply.id);
		// Obtain array of all reply likes from reply IDs specified
		const repliesLikes = await RepliesLikes.find({ reply_id: replyIds });
		// Map in likes to the proper reply ids
		const repliesWithLikes = replies.map(reply => {
			return {
				...reply,
				replyLikes: repliesLikes.filter(
					replyLike => replyLike.reply_id === reply.id
				)
			};
		});
		res.status(200).json({ repliesWithLikes });
	} else {
		res.status(404).json({
			message: `That/those ${error} does not exist or does not have any likes`
		});
	}
}

router
	.route("/post/:post_id")
	.get(async (req, res) => {
		const { post_id } = req.params;
		const replies = await Replies.find({ post_id });
		addLikesToReply(replies, "post", res);
	})
	.post(validation(replySchema), async (req, res) => {
		const { post_id } = req.params;
		const { user_id, reply_content } = req.body;
		const user = await Users.find({
			id: user_id
		}).first();
		const post = await Posts.find({
			"p.id": post_id
		}).first();
		if (user && post) {
			const newReply = { post_id, user_id, reply_content };
			const reply = await Replies.add(newReply);
			res.status(201).json({
				reply
			});
		} else {
			res.status(404).json({
				message: "User and/or Post provided does not exist"
			});
		}
	});

router.route("/post_search").post(async (req, res) => {
	const { post_id } = req.body;
	if (post_id) {
		const replies = await Replies.find({ post_id });
		addLikesToReply(replies, "post(s)", res);
	} else {
		res.status(400).json({
			message: "Please include post_id(s) in the body of the request"
		});
	}
});

router.route("/user/:user_id").get(async (req, res) => {
	const { user_id } = req.params;
	const replies = await Replies.find({ user_id });
	addLikesToReply(replies, "user", res);
});

router
	.route("/:id")
	.delete(async (req, res) => {
		const { id } = req.params;
		const deleted = await Replies.remove({ id });
		if (deleted) {
			res.status(200).json({
				message: "reply successfully deleted."
			});
		} else {
			res.status(404).json({ message: "That reply does not exist." });
		}
	})
	.get(async (req, res) => {
		const { id } = req.params;
		const reply = await Replies.find({ "r.id": id }).first();
		if (reply && reply.id) {
			// Find likes for the reply
			const likes = await RepliesLikes.find({ reply_id: id });
			// Add likes in as array to the reply object
			const replyWithLikes = { ...reply, likes };
			res.status(200).json({
				replyWithLikes
			});
		} else {
			res.status(404).json({ message: "That reply does not exist." });
		}
	});

module.exports = router;
