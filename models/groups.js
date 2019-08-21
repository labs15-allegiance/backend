const db = require("../data/db-config");

module.exports = {
  add,
  find,
  update,
  remove
};

function add(group) {
  return db("groups")
    .insert(group, ["*"])
    .then(g => find({ id: g[0].id }).first());
}

function find(filters) {
  // if filters were passed in, search by filter. otherwise return all
  // note that neither return use the .first() method -- it's on a use-by-use basis if that is required or not
  if (filters) {
    return (
      db("groups")
        .select("*")
        //   .where(filters);
        .where("group_name", "like", `%${filters.group_name}%`)
    );
  }
  return db("groups");
}

function update(filter, changes) {
  // only allow one update at a time, so uses .first()
  return db("groups")
    .update(changes, "*")
    .where(filter)
    .then(g => find({ id: g[0].id }).first());
}

function remove(filter) {
  // only returns the number of deleted entries
  return db("groups")
    .where(filter)
    .del();
}
