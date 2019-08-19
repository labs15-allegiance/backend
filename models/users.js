const db = require("../data/db-config");

module.exports = {
  add,
  find,
  update,
  remove
};

function add(user) {
  return db("users")
    .insert(user, ["*"])
    .then(u => find({ id: u[0].id }).first());
}

function find(filters) {
  if (filters) {
    return db("users")
      .select("id", "username", "location", "email", "image", "banner_image")
      .where(filters);
  }
  return db("users").select(
    "id",
    "username",
    "location",
    "email",
    "image",
    "banner_image"
  );
}

function update(filter, changes) {
  return db("users")
    .update(changes, ["*"])
    .where(filter)
    .then(u => find({ id: u[0].id }))
    .first();
}

function remove(filter) {
  return db("users")
    .where(filter)
    .del();
}
