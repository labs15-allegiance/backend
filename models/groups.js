const db = require('../data/db-Config');

module.exports = {
  add
};

async function add(group) {
  try {

    const [id] = await db('groups').insert(group, 'id');

    //Creates relevant entry for `users_groups` table as well
    await db('groups_users').insert({
      user_id: group.creator_id,
      user_type: 'admin',
      group_id: id
    })

    return findById(id);
  } catch (error) {
    console.log('error', error);
  }
}

async function findById(id) {
  const group = await db('groups')
    .where({
      id
    })
    .first();

  if (group) {
    return group;
  } else {
    return null;
  }
}