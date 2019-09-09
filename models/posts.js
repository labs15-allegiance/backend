const db = require("../data/db-config");

module.exports = {
	add,
	find,
	update,
	remove
};

function add(post) {
	return db("posts")
		.insert(post, ["*"])
		.then(post => find({ id: post[0].id }).first());
}

function find(filters) {
	if (Array.isArray(filters.group_id)) {
		return db("posts")
			.select("*")
			.whereIn("group_id", filters.group_id);
	} else if (filters) {
		return db("posts")
			.select("*")
			.where(filters);
	} else {
		return db("posts").select("*");
	}
}

function update(filters, changes) {
	// only allow one update at a time, so uses .first()
	return db("posts")
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
	return db("posts")
		.where(filters)
		.del();
}
