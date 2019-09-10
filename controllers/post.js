const express = require("express");

const Users = require("../models/users");
const Groups = require("../models/groups");
const Posts = require("../models/posts");
const PostsLikes = require("../models/posts_likes");

const router = express.Router();

const validation = require("../middleware/dataValidation");

const { postSchema } = require("../schemas");

async function addLikesToPost(posts, error, res) {
	if (posts.length !== 0) {
		// Obtain list of post ids for likes and replies lookup
		const postIds = posts.map(post => post.id);
		// Obtain array of all likes from post IDs specified
		const allLikes = await PostsLikes.find({ post_id: postIds });
		// Map in likes to the proper post ids
		const postsWithLikes = posts.map(post => {
			return {
				...post,
				likes: allLikes.filter(like => like.post_id === post.id)
			};
		});
		// Return post with likes included
		res.status(200).json({ postsWithLikes });
	} else {
		res.status(404).json({
			message: `That/those ${error} does not exist or does not have any posts`
		});
	}
}

router
	.route("/group/:group_id")
	.get(async (req, res) => {
		const { group_id } = req.params;
		const posts = await Posts.find({ group_id });
		addLikesToPost(posts, "group", res);
	})
	.post(validation(postSchema), async (req, res) => {
		const { group_id } = req.params;
		const { user_id, post_content } = req.body;
		const user = await Users.find({
			id: user_id
		}).first();
		const group = await Groups.find({
			id: group_id
		}).first();
		if (user && group) {
			const newPost = { group_id, user_id, post_content };
			const postResult = await Posts.add(newPost);
			res.status(201).json({
				postResult
			});
		} else {
			res.status(404).json({
				message: "User and/or Group provided does not exist"
			});
		}
	});

router.route("/group_search").post(async (req, res) => {
	const { group_id } = req.body;
	if (group_id) {
		const posts = await Posts.find({ group_id });
		addLikesToPost(posts, "group(s)", res);
	} else {
		res.status(400).json({
			message: "Please include group_id(s) in the body of the request"
		});
	}
});

router.route("/user/:user_id").get(async (req, res) => {
	const { user_id } = req.params;
	const posts = await Posts.find({ user_id });
	addLikesToPost(posts, "user", res);
});

router
	.route("/:id")
	.delete(async (req, res) => {
		const { id } = req.params;
		const deleted = await Posts.remove({ id });
		if (deleted) {
			res.status(200).json({
				message: "post successfully deleted."
			});
		} else {
			res.status(404).json({ message: "That post does not exist." });
		}
	})
	.get(async (req, res) => {
		const { id } = req.params;
		const post = await Posts.find({ "p.id": id }).first();
		if (post && post.id) {
			// Find likes for the post
			const likes = await PostsLikes.find({ post_id: id });
			// Add likes in as an array to the post object
			const postWithLikes = { ...post, likes };
			res.status(200).json({
				postWithLikes
			});
		} else {
			res.status(404).json({ message: "That post does not exist." });
		}
	});

module.exports = router;
