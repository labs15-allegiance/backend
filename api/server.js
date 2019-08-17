const express = require("express");
const helmet = require("helmet");

const server = express();
const usersRouter = require("../routers/users-router");
const authRouter = require("../auth/auth-router");

const cors = require("cors");

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Allegiance!");
});

server.use("/auth", authRouter);
server.use("/users", usersRouter);

module.exports = server;
