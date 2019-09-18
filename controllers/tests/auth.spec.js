const server = require("../../api/server");
const db = require("../../data/db-config");
const request = require("supertest");

const token = process.env.AUTH0_TEST_TOKEN || "testing access denied";

describe("auth router", () => {
  let token;
  it("db environment set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  beforeAll(() => {
    return db.migrate.latest();
  });

  afterAll(() => {
    return db.migrate.rollback();
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
      expect(response.body.newUser).toBeTruthy();
    });

    it("returns current user if successful and user email already exists", async () => {
      const currentUser = {
        email: "a@a.com"
      };
      const response = await request(server)
        .post("/api/auth")
        .send(currentUser);
      expect(response.type).toBe("application/json");
      expect(response.status).toBe(200);
      expect(response.body.currentUser).toBeTruthy();
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
