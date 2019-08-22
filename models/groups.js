const db = require('../data/db-Config');

module.exports = {
  add
};

async function add(group) {
  console.log('start add function')

  const
    newGroup
      = await db('groups').insert(group, ['id']);
  console.log("new group", newGroup)

  //Creates relevant entry for `users_groups` table as well
  await db('groups_users').insert({
    user_id: group.creator_id,
    user_type: 'admin',
    group_id: newGroup.id
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