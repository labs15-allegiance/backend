exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users.string("username", 256);
    users
      .string("email")
      .notNullable()
      .unique()
      .comment("This is the email field");
    users.string("password", 999).notNullable();
    users
      .integer("location")
      .notNullable()
      .comment("This is the location field");
    users.string("image");
    users.string("banner_image");
    users.text("bio", 999);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
