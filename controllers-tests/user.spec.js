const server = require("../api/server");
const knex = require("../data/db-config");
const request = require("supertest");

const token = process.env.AUTH0_TEST_TOKEN || "testing access denied";

describe("user.js", () => {
  beforeEach(() => {
    return knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run());
  });
  afterEach(() => {
    return knex.migrate.rollback();
  });
  describe("GET /api/users", () => {
    it("should return the 500 seeded users", async () => {
      const response = await request(server)
        .get("/api/users")
        .set({ Authorization: `Bearer ${token}` });
      expect(response.status).toBe(200);
      expect(response.body.users.length).toBe(500);
    });
  });
});
