const faker = require("faker");

exports.seed = function(knex) {
	// Deletes ALL existing entries

	// Inserts seed entries
	return knex("groups_users").insert([
		{
			user_id: 1,
			user_type: "admin",
			group_id: 1,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 1,
			user_type: "admin",
			group_id: 2,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 1,
			user_type: "admin",
			group_id: 3,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 2,
			user_type: "member",
			group_id: 4,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 2,
			user_type: "invited",
			group_id: 5,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 2,
			user_type: "invited",
			group_id: 6,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 3,
			user_type: "admin",
			group_id: 7,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 3,
			user_type: "member",
			group_id: 8,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 3,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 4,
			user_type: "invited",
			group_id: 10,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 4,
			user_type: "member",
			group_id: 11,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 4,
			user_type: "member",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 5,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 5,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 5,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 6,
			user_type: "member",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 6,
			user_type: "member",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 6,
			user_type: "invited",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 7,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 7,
			user_type: "invited",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 7,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 8,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 8,
			user_type: "member",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 8,
			user_type: "invited",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 9,
			user_type: "admin",
			group_id: 9,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 501,
			user_type: "admin",
			group_id: 1,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 501,
			user_type: "member",
			group_id: 2,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		},
		{
			user_id: 501,
			user_type: "invited",
			group_id: 3,
			created_at: faker.date.past(),
			updated_at: faker.date.past()
		}
	]);
};
