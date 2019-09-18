const moment = require("moment");
const db = require("../data/db-config");
const Posts = require("./posts");

module.exports = {
	findPosts,
	findReplies,
	findPostLikes,
	findReplyLikes
};

function findPosts(filters) {
	// Set interval as number of hours
	const n = filters.interval;
	// Use moment js to convert desired start time for retrieval of data
	const ts = moment(Date.now()).subtract(n, "hours");
	// If multiple groups are received, use whereIn
	if (Array.isArray(filters.group_id)) {
		return db("posts as p")
			.leftJoin("users as u", "u.id", "p.user_id")
			.select(
				"p.id",
				"u.id as user_id",
				"p.group_id",
				"p.post_content",
				"p.created_at",
				"p.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("p.created_at", ">=", ts)
			.whereIn("p.group_id", filters.group_id);
	} else {
		// if single group is received, use where
		return db("posts as p")
			.leftJoin("users as u", "u.id", "p.user_id")
			.select(
				"p.id",
				"u.id as user_id",
				"p.group_id",
				"p.post_content",
				"p.created_at",
				"p.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("p.created_at", ">=", ts)
			.where("p.group_id", filters.group_id);
	}
}

function findReplies(filters) {
	// Set interval as number of hours
	const n = filters.interval;
	// Use moment js to convert desired start time for retrieval of data
	const ts = moment(Date.now()).subtract(n, "hours");
	// If multiple groups are received, use whereIn
	if (Array.isArray(filters.group_id)) {
		return db("replies as r")
			.leftJoin("users as u", "u.id", "r.user_id")
			.leftJoin("posts as p", "p.id", "r.post_id")
			.select(
				"r.id",
				"p.group_id",
				"u.id as user_id",
				"r.post_id",
				"r.reply_content",
				"r.created_at",
				"r.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("r.created_at", ">=", ts)
			.whereIn("p.group_id", filters.group_id);
	} else {
		// if single group is received, use where
		return db("replies as r")
			.leftJoin("users as u", "u.id", "r.user_id")
			.leftJoin("posts as p", "p.id", "r.post_id")
			.select(
				"r.id",
				"p.group_id",
				"u.id as user_id",
				"r.post_id",
				"r.reply_content",
				"r.created_at",
				"r.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("r.created_at", ">=", ts)
			.where("p.group_id", filters.group_id);
	}
}

function findPostLikes(filters) {
	// Set interval as number of hours
	const n = filters.interval;
	// Use moment js to convert desired start time for retrieval of data
	const ts = moment(Date.now()).subtract(n, "hours");
	// If multiple groups are received, use whereIn
	if (Array.isArray(filters.group_id)) {
		return db("posts_likes as p_l")
			.leftJoin("users as u", "u.id", "p_l.user_id")
			.leftJoin("posts as p", "p.id", "p_l.post_id")
			.select(
				"p_l.id",
				"p.group_id",
				"p.post_content",
				"u.id as user_id",
				"p_l.post_id",
				"p_l.created_at",
				"p_l.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("p_l.created_at", ">=", ts)
			.whereIn("p.group_id", filters.group_id);
	} else {
		// if single group is received, use where
		return db("posts_likes as p_l")
			.leftJoin("users as u", "u.id", "p_l.user_id")
			.leftJoin("posts as p", "p.id", "p_l.post_id")
			.select(
				"p_l.id",
				"p.group_id",
				"p.post_content",
				"u.id as user_id",
				"p_l.post_id",
				"p_l.created_at",
				"p_l.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("p_l.created_at", ">=", ts)
			.where("p.group_id", filters.group_id);
	}
}

function findReplyLikes(filters) {
	// Set interval as number of hours
	const n = filters.interval;
	// Use moment js to convert desired start time for retrieval of data
	const ts = moment(Date.now()).subtract(n, "hours");
	// If multiple groups are received, use whereIn
	if (Array.isArray(filters.group_id)) {
		return db("replies_likes as r_l")
			.leftJoin("users as u", "u.id", "r_l.user_id")
			.leftJoin("replies as r", "r.id", "r_l.reply_id")
			.leftJoin("posts as p", "p.id", "r.post_id")
			.select(
				"r_l.id",
				"p.group_id",
				"p.post_content",
				"r.reply_content",
				"u.id as user_id",
				"r_l.reply_id",
				"r_l.created_at",
				"r_l.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("r_l.created_at", ">=", ts)
			.whereIn("p.group_id", filters.group_id);
	} else {
		// if single group is received, use where
		return db("replies_likes as r_l")
			.leftJoin("users as u", "u.id", "r_l.user_id")
			.leftJoin("replies as r", "r.id", "r_l.reply_id")
			.leftJoin("posts as p", "p.id", "r.post_id")
			.select(
				"r_l.id",
				"p.group_id",
				"p.post_content",
				"r.reply_content",
				"u.id as user_id",
				"r_l.reply_id",
				"r_l.created_at",
				"r_l.updated_at",
				"u.first_name",
				"u.last_name",
				"u.image"
			)
			.where("r_l.created_at", ">=", ts)
			.where("p.group_id", filters.group_id);
	}
}
