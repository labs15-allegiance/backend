
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groups_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups_users').insert([
        {user_id: 1, user_type: 'admin', group_id: 1},
        {user_id: 1, user_type: 'admin', group_id: 2},
        {user_id: 1, user_type: 'admin', group_id: 3},
        {user_id: 2, user_type: 'admin', group_id: 4},
        {user_id: 2, user_type: 'admin', group_id: 5},
        {user_id: 2, user_type: 'admin', group_id: 6},
        {user_id: 3, user_type: 'admin', group_id: 7},
        {user_id: 3, user_type: 'admin', group_id: 8},
        {user_id: 3, user_type: 'admin', group_id: 9},
        {user_id: 4, user_type: 'admin', group_id: 10},
        {user_id: 4, user_type: 'admin', group_id: 11},
        {user_id: 4, user_type: 'admin', group_id: 12},
        {user_id: 5, user_type: 'admin', group_id: 13},
        {user_id: 5, user_type: 'admin', group_id: 14},
        {user_id: 5, user_type: 'admin', group_id: 15},
        {user_id: 6, user_type: 'admin', group_id: 16},
        {user_id: 6, user_type: 'admin', group_id: 17},
        {user_id: 6, user_type: 'admin', group_id: 18},
        {user_id: 7, user_type: 'admin', group_id: 19},
        {user_id: 7, user_type: 'admin', group_id: 20},
        {user_id: 7, user_type: 'admin', group_id: 21},
        {user_id: 8, user_type: 'admin', group_id: 22},
        {user_id: 8, user_type: 'admin', group_id: 23},
        {user_id: 8, user_type: 'admin', group_id: 24},
        {user_id: 9, user_type: 'admin', group_id: 25},



      ]);
    });
};
