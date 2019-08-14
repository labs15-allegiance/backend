const express = require("express");
const helmet = require("helmet");

const server = express();
const cors = require("cors");

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Allegiance!");
});

module.exports = server;
