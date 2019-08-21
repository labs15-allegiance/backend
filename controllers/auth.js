const express = require("express");

const Users = require("../models/users");

const router = express.Router();

router.route("/").post(async (req, res) => {
  const currentUser = await Users.find({ email: req.body.email }).first();
  if (currentUser) {
    console.log("loggin in");
    res.status(200).json({ currentUser });
  } else {
    const newUser = await Users.add(req.body);
    console.log(req.body);
    console.log("trying to add user:", newUser);
    res.status(201).json({ newUser });
  }
});

module.exports = router;
