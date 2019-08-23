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
    console.log(filters.column, filters.row);
    // Checks for array being passed to filter.row and checks over it if so
    if (Array.isArray(filters.row)) {
      return db("groups")
        .select("*")
        .whereIn(filters.column, filters.row);
    }
    // Checks 1 to 1 text queries with some forgiveness from ilike
    return db("groups")
      .select("*")
      .where(`${filters.column}`, "ilike", `%${filters.row}%`);
  }
  return db("groups").select("*");
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
