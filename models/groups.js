const db = require("../data/db-config");

module.exports = {
  add,
  find,
  update,
  remove
};

async function add(group) {
  const [newGroup] = await db("groups").insert(group, ["*"]);

  // Creates relevant entry for `users_groups` table as well
  await db("groups_users").insert({
    user_id: group.creator_id,
    user_type: "admin",
    group_id: newGroup.id
  });

  return find({ id: newGroup.id }).first();
}

function find(filters) {
  if (filters) {
    return db("groups")
      .select(
        "id",
        "group_name",
        "privacy_setting",
        "location",
        "creator_id",
        "image"
      )
      .where(filters);
  } else {
    return db("groups").select(
      "id",
      "group_name",
      "privacy_setting",
      "location",
      "creator_id",
      "image"
    );
  }
}

function update(filter, changes) {
  // only allow one update at a time, so uses .first()
  return db("groups")
    .update(changes, ["*"])
    .where(filter)
    .then(g =>
      find({
        id: g[0].id
      }).first()
    );
}

function remove(filter) {
  // only returns the number of deleted entries
  return db("groups")
    .where(filter)
    .del();
}
