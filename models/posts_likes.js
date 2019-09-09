const db = require("../data/db-config");

module.exports = {
	add,
	find,
	update,
	remove
};

function add(posts_likes) {
	return db("posts_likes")
		.insert(posts_likes, ["*"])
		.then(posts_likes => find({ id: posts_likes[0].id }).first());
}

function find(filters) {
	if (Array.isArray(filters.post_id)) {
		return db("posts_likes")
			.select("*")
			.whereIn("post_id", filters.post_id);
	} else if (filters) {
		return db("posts_likes")
			.select("*")
			.where(filters);
	} else {
		return db("posts_likes").select("*");
	}
}

function update(filters, changes) {
	// only allow one update at a time, so uses .first()
	return db("posts_likes")
		.update(changes, ["*"])
		.where(filters)
		.then(p =>
			find({
				id: p[0].id
			}).first()
		);
}

function remove(filters) {
	// only returns the number of deleted entries
	return db("posts_likes")
		.where(filters)
		.del();
}
