const express = require("express");

const Users = require("../models/users");

const router = express.Router();

router.route("/").post(async (req, res) => {
  const isRegistered = await Users.find({ email: req.body.email });
  const newUser = await Users.add(req.body);
  console.log(req.body);
  console.log("trying to add user:", newUser);
  res.status(201).json({ newUser });
});

module.exports = router;
