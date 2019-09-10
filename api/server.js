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
const groupsRouter = require("../controllers/group");
const groupsUsersRouter = require("../controllers/group_user");
const groupsAllegiancesRouter = require("../controllers/group_allegiance");
const postsRouter = require("../controllers/post");
const postsLikesRouter = require("../controllers/post_like");
const repliesRouter = require("../controllers/reply");

// Internal middleware
const errorHandler = require("../middleware/errorHandling");

// API endpoints
server.use("/api/users", authenticate, usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/allegiances", authenticate, allegiancesRouter);
server.use("/api/groups", authenticate, groupsRouter);
server.use("/api/groups_users", authenticate, groupsUsersRouter);
server.use("/api/groups_allegiances", authenticate, groupsAllegiancesRouter);
server.use("/api/posts", authenticate, postsRouter);
server.use("/api/posts_likes", authenticate, postsLikesRouter);
server.use("/api/replies", authenticate, repliesRouter);

// sanity check
server.get("/", (req, res) => {
	res.send("Welcome to Allegiance!");
});

// async error handling. must come AFTER API routes or will raise TypeError
server.use(errorHandler);

module.exports = server;
