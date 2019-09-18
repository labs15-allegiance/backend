const express = require("express");

const Feeds = require("../models/feeds");

const router = express.Router();

router.route("/").post(async (req, res) => {
	const { group_id, interval } = req.body;
	if (group_id && interval) {
		const filters = { group_id, interval };
		// Obtain posts from stated interval
		const posts = await Feeds.findPosts(filters);
		// Obtain replies from stated interval
		const replies = await Feeds.findReplies(filters);
		// Obtain post likes from stated interval
		const postLikesSeparateNames = await Feeds.findPostLikes(filters);
		// Map post likes to combine first and last name for posters and likers
		const postLikes = postLikesSeparateNames.map(p_l => {
			// Destructure to remove first/last names from callback
			const {
				liker_first_name,
				liker_last_name,
				poster_first_name,
				poster_last_name,
				...rest
			} = p_l;
			return {
				// Return remainder of callback object and the combined names for posters and likers
				...rest,
				liker_name: `${p_l.liker_first_name} ${p_l.liker_last_name}`,
				poster_name: `${p_l.poster_first_name} ${p_l.poster_last_name}`
			};
		});
		// Obtain reply likes from stated interval
		const replyLikesSeparateNames = await Feeds.findReplyLikes(filters);
		// Map reply likes to combine first and last name for repliers and likers
		const replyLikes = replyLikesSeparateNames.map(r_l => {
			// Destructure to remove first/last names from callback
			const {
				liker_first_name,
				liker_last_name,
				replier_first_name,
				replier_last_name,
				...rest
			} = r_l;
			return {
				// Return remainder of callback object and the combined names for repliers and likers
				...rest,
				liker_name: `${r_l.liker_first_name} ${r_l.liker_last_name}`,
				replier_name: `${r_l.replier_first_name} ${r_l.replier_last_name}`
			};
		});
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
