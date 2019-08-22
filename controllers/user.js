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

router
  .route("/:id")
  .put(validation(userSchema), async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const filter = { id: id };
    const updated = await Users.update(filter, changes);
    if (updated) {
      res.status(200).json({ updated });
    } else {
      res.status(404).json({ message: "That user could not be found." });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const deleted = await Users.remove(filter);
    if (deleted) {
      res.status(200).json({ message: "The user has been deleted." });
    } else {
      res.status(404).json({ message: "That user could not be found." });
    }
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const user = await Users.find(filter);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "That user could not be found." });
    }
  });

module.exports = router;
