
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'micheal', email: 'bob@gmail.com', password: 'pass', location: 89103},
        {username: 'jarred', email: 'jarred@gmail.com', password: 'pass', location: 23602},
        {username: 'ang', email: 'ang@gmail.com', password: 'pass', location: 33014},
        {username: 'angel', email: 'angel@gmail.com', password: 'pass', location: 92704},
        {username: 'john', email: 'john@gmail.com', password: 'pass', location: 89104},
        {username: 'dan', email: 'dan@gmail.com', password: 'pass', location: 89104},
        {username: 'adam', email: 'adam@gmail.com', password: 'pass', location: 89104},
        {username: 'van', email: 'larry@gmail.com', password: 'pass', location: 89104},
        {username: 'cassandra', email: 'cassandra@gmail.com', password: 'pass', location: 89104},
      ]);
    });
};
