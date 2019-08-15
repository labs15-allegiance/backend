exports.up = function(knex) {
  return knex.schema.createTable("groups_allegiances", allegiances => {
    allegiances.increments();

    allegiances
      .integer("group_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("groups")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    allegiances
      .integer("allegiance_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("allegiances")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("groups_allegiances");
};
