exports.up = function(knex) {
  return knex.schema.createTable("allegiances", allegiances => {
    allegiances.increments();

    allegiances.string("allegiance_name").notNullable();
    allegiances.string("image");
    allegiances.string("banner_image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("allegiances");
};
