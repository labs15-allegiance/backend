const express = require("express");

const Users = require("../models/users");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { userSchema } = require("../schemas");

router
  .route("/")
  .get(async (req, res) => {
    const users = await Users.find();
    res.status(200).json({ users });
  })
  .post(validation(userSchema), async (req, res) => {
    const newUser = await Users.add(req.body);
    console.log("trying to add user:", newUser);
    res.status(201).json({ newUser });
  });

module.exports = router;
