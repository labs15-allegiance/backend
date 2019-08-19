const express = require("express");

const Users = require("../models/users");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const users = await Users.find();
    res.status(200).json({ users });
  })
  .post(async (req, res) => {
    const newUser = await Users.add(req.body);
    console.log("trying to add user:", newUser);
    res.status(201).json({ newUser });
  });

module.exports = router;
