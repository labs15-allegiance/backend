const express = require("express");

const Feeds = require("../models/feeds");

const router = express.Router();

router.route("/").post(async (req, res) => {
	const { group_id, interval } = req.body;
	if (group_id && interval) {
		const filters = { group_id, interval };
		const posts = await Feeds.findPosts(filters);
		const replies = await Feeds.findReplies(filters);
		const postLikes = await Feeds.findPostLikes(filters);
		const replyLikes = await Feeds.findReplyLikes(filters);
		res.status(200).json({
			posts,
			replies,
			postLikes,
			replyLikes
		});
	} else {
		res.status(400).json({
			message: "Please enter group_id and interval in the body of the request"
		});
	}
});

module.exports = router;
