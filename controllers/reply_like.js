const express = require("express");

const Users = require("../models/users");
const Replies = require("../models/replies");
const RepliesLikes = require("../models/replies_likes");

const router = express.Router();

const validation = require("../middleware/dataValidation");

const { replyLikeSchema } = require("../schemas");

router
	.route("/reply/:reply_id")
	.get(async (req, res) => {
		const { reply_id } = req.params;
		const replyLikes = await RepliesLikes.find({ reply_id });
		if (replyLikes.length !== 0) {
			res.status(200).json({ replyLikes });
		} else {
			res.status(404).json({
				message: "That reply does not exist or does not have any likes"
			});
		}
	})
	.post(validation(replyLikeSchema), async (req, res) => {
		const { reply_id } = req.params;
		const { user_id } = req.body;
		const user = await Users.find({
			id: user_id
		}).first();
		const reply = await Replies.find({
			"r.id": reply_id
		}).first();
		if (user && reply) {
			const newLike = { reply_id, user_id };
			const likeResult = await RepliesLikes.add(newLike);
			res.status(201).json({
				likeResult
			});
		} else {
			res.status(404).json({
				message: "User and/or reply provided does not exist"
			});
		}
	});

router.route("/reply_search").post(async (req, res) => {
	const { reply_id } = req.body;
	if (reply_id) {
		const repliesLikes = await RepliesLikes.find({ reply_id });
		if (repliesLikes.length !== 0) {
			res.status(200).json({ repliesLikes });
		} else {
			res.status(404).json({
				message: "Reply(ies) provided do(es) not exist or have no likes"
			});
		}
	} else {
		res.status(400).json({
			message: "Please include reply_id(s) in the body of the request"
		});
	}
});

router.route("/user/:user_id").get(async (req, res) => {
	const { user_id } = req.params;
	const repliesLikes = await RepliesLikes.find({ user_id });
	if (repliesLikes.length !== 0) {
		res.status(200).json({ repliesLikes });
	} else {
		res.status(404).json({
			message: "That user does not exist or has not liked any replies"
		});
	}
});

router
	.route("/:id")
	.delete(async (req, res) => {
		const { id } = req.params;
		const deleted = await RepliesLikes.remove({ id });
		if (deleted) {
			res.status(200).json({
				message: "Reply successfully un-liked."
			});
		} else {
			res
				.status(404)
				.json({ message: "That reply-like association does not exist." });
		}
	})
	.get(async (req, res) => {
		const { id } = req.params;
		const replyLike = await RepliesLikes.find({ "r_l.id": id }).first();
		if (replyLike && replyLike.id) {
			res.status(200).json({
				replyLike
			});
		} else {
			res
				.status(404)
				.json({ message: "That reply-like association does not exist." });
		}
	});

module.exports = router;
