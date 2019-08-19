const express = require("express");

const Users = require("../models/users");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  })
  .post(async (req, res) => {
    try {
      const newUser = await req.body;
      console.log("trying to add user:", newUser);
      Users.add(newUser).then(user => {
        res.status(201).json(user);
      });
    } catch (error) {
      res.status(500).json({ error: "Error trying to add new user" });
    }
  });

module.exports = router;
