exports.seed = function(knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("users").insert([
    { username: "micheal", email: "bob@gmail.com", location: 89103 },
    { username: "jarred", email: "jarred@gmail.com", location: 23602 },
    { username: "ang", email: "ang@gmail.com", location: 33014 },
    { username: "angel", email: "angel@gmail.com", location: 92704 },
    { username: "john", email: "john@gmail.com", location: 89104 },
    { username: "dan", email: "dan@gmail.com", location: 89104 },
    { username: "adam", email: "adam@gmail.com", location: 89104 },
    { username: "van", email: "larry@gmail.com", location: 89104 },
    { username: "cassandra", email: "cassandra@gmail.com", location: 89104 }
  ]);
};
