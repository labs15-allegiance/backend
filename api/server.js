const express = require("express");
const helmet = require("helmet");

const server = express();
const usersRouter = require("../routers/users-router");

const cors = require("cors");

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Allegiance!");
});

server.use("/users", usersRouter);

module.exports = server;
