const server = require("../../api/server");
const db = require("../../data/db-config");
const request = require("supertest");

const token = process.env.AUTH0_TEST_TOKEN || "testing access denied";

describe("user router", () => {
  beforeEach(async () => {
    await db.migrate.latest().then(() => db.seed.run());
  });

  afterEach(async () => {
    await db.migrate.rollback();
  });

  describe("GET /api/users", () => {
    it("returns the database users if successful", async () => {
      const response = await request(server)
        .get("/api/users")
        .set({ Authorization: `Bearer ${token}` });
      expect(response.type).toBe("application/json");
      expect(response.status).toBe(200);
      expect(response.body.users.length).toEqual(500);
    });
    it.skip("fails without valid authentication", async () => {
      const response = await request(server).get("/api/users");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({});
    });
  });
  describe("POST /api/users", () => {
    const newUser = {
      username: "LesterTheTester",
      email: "testing@gmail.com",
      location: "77338"
    };
    it("returns the newly created user if successful", async () => {
      const response = await request(server)
        .post("/api/users")
        .send(newUser)
        .set({ Authorization: `Bearer ${token}` });
      expect(response.type).toBe("application/json");
      expect(response.status).toBe(201);
      expect(response.body.newUser.id).toBe(501);
    });
    it("returns 400 status if required fields are not submitted", async () => {
      const response = await request(server)
        .post("/api/users")
        .send({ ...newUser, email: null })
        .set({ Authorization: `Bearer ${token}` });
      expect(response.status).toBe(400);
    });
  });

  describe("PUT /api/users/:id", () => {
    const changes = {
      username: "LesterTheTester",
      email: "testing@gmail.com",
      location: "77338"
    };
    it("returns newly updated user if successful", async () => {
      const response = await request(server)
        .put("/api/users/1")
        .send(changes)
        .set({ Authorization: `Bearer ${token}` });
      expect(response.status).toBe(200);
      expect(response.body.updated.username).toBe("LesterTheTester");
    });

    it("returns 404 if user not found", async () => {
      const response = await request(server)
        .put("/api/users/10000")
        .send(changes)
        .set({ Authorization: `Bearer ${token}` });
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("That user does not exist.");
    });
  });

  describe("GET /api/users/:id", () => {
    it("returns specified user if successful", async () => {
      const response = await request(server)
        .get("/api/users/1")
        .set({ Authorization: `Bearer ${token}` });
      expect(response.type).toBe("application/json");

      expect(response.status).toBe(200);
      expect(response.body.user.username).toBeDefined();
    });
    it("returns 404 if user not found", async () => {
      const response = await request(server)
        .get("/api/users/10000")
        .set({ Authorization: `Bearer ${token}` });
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("That user does not exist.");
    });
  });

  describe("DELETE /api/users/:id", () => {
    it("returns success message if succesful", async () => {
      const response = await request(server)
        .delete("/api/users/1")
        .set({ Authorization: `Bearer ${token}` });
      expect(response.type).toBe("application/json");
      expect(response.status).toBe(200);
    });
    it("returns 404 if user not found", async () => {
      const response = await request(server)
        .delete("/api/users/10000")
        .set({ Authorization: `Bearer ${token}` });
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("That user does not exist.");
    });
  });
});
