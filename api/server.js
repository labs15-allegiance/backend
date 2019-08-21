// Dependencies
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Server instance
const server = express();

// Library Middleware
server.use(cors(), helmet(), express.json());
const authenticate = require("../middleware/auth-middleware");

// Routers
const usersRouter = require("../controllers/user");
const authRouter = require("../controllers/auth");
const allegiancesRouter = require("../controllers/allegiance");

// Internal middleware
const errorHandler = require("../middleware/errorHandling");

// API endpoints
server.use("/users", usersRouter);
server.use("/auth", authRouter);
server.use("/allegiances", allegiancesRouter);

// sanity check
server.get("/", (req, res) => {
  res.send("Welcome to Allegiance!");
});

// async error handling. must come AFTER API routes or will raise TypeError
server.use(errorHandler);

module.exports = server;
