const db = require('../data/db-Config');

module.exports = {
  add
};

async function add(group) {

  const {
    id
  } = await db('groups').insert(group, 'id');

  //Creates relevant entry for `users_groups` table as well
  await db('groups_users').insert({
    user_id: group.creator_id,
    user_type: 'admin',
    group_id: id
  })

  return find(id);
}


function find(filters) {
  return db('groups')
    .select("group_name", "privacy_setting", "location", "creator_id", "image", "timestamps")
    .where(
      filters
    )
    .first();
}