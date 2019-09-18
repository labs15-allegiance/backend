const server = require("../../api/server");
const db = require("../../data/db-config");
const request = require("supertest");

const token = process.env.AUTH0_TEST_TOKEN || "testing access denied";

describe("auth router", () => {
  let token;

  beforeEach(async () => {
    await db.migrate
      .rollback()
      .then(() => db.migrate.latest().then(() => db.seed.run()));
  });

  afterEach(async () => {
    await db.migrate.rollback();
  });

  it("db environment set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("POST /api/auth", () => {
    it("adds new user if successful and user email does not exist in the database", async () => {
      const newUser = {
        email: "a@a.com"
      };
      const response = await request(server)
        .post("/api/auth")
        .send(newUser);
      expect(response.type).toBe("application/json");
      expect(response.status).toBe(201);
      expect(response.body.userInfo.newUser).toBeTruthy();
    });

    it("returns current user if successful and user email already exists", async () => {
      const currentUser = {
        email: "a@a.com"
      };
      const response = await request(server)
        .post("/api/auth")
        .send(currentUser);
      expect(response.type).toBe("application/json");
      expect(response.status).toBe(201);
      expect(response.body.userInfo.newUser).toBeTruthy();
    });

    it("returns 400 error if email is not defined", async () => {
      const error = {
        username: "derek"
      };
      const response = await request(server)
        .post("/api/auth")
        .send(error);
      //   expect(response.type).toBe("application/json");
      expect(response.status).toBe(400);
    });
  });
});
