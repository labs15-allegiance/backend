const express = require("express");

const Users = require("../models/users");
const Groups = require("../models/groups");
const Posts = require("../models/posts");

const router = express.Router();

const validation = require("../middleware/dataValidation");

const { postSchema } = require("../schemas");

router
	.route("/group/:group_id")
	.get(async (req, res) => {
		const { group_id } = req.params;
		const posts = await Posts.find({ group_id });
		res.status(200).json({ posts });
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

router.route("/user/:user_id").get(async (req, res) => {
	const { user_id } = req.params;
	const posts = await Posts.find({ user_id });
	res.status(200).json({ posts });
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
		const post = await Posts.find({ id }).first();
		if (post && post.id) {
			res.status(200).json({
				post
			});
		} else {
			res.status(404).json({ message: "That post does not exist." });
		}
	});

module.exports = router;
