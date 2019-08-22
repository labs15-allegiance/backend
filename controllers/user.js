const express = require("express");

const Users = require("../models/users");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { userSchema } = require("../schemas");

router
  .route("/")
  .get(async (req, res) => {
    const users = await Users.find();
    res.status(200).json({
      users
    });
  })
  .post(validation(userSchema), async (req, res) => {
    const newUser = await Users.add(req.body);
    res.status(201).json({
      newUser
    });
  });

router
  .route("/:id")
  .put(validation(userSchema), async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const userExists = await Users.find({ id }).first();
    if (!userExists) {
      res.status(404).json({ message: "That user does not exist." });
    }
    const updated = await Users.update({ id }, changes);

    res.status(200).json({ updated });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const userExists = await Users.find({ id }).first();
    if (!userExists) {
      res.status(404).json({ message: "That user does not exist." });
    }
    await Users.remove({ id });
    res.status(200).json({ message: "The user has been deleted." });
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const user = await Users.find({ id }).first();
    if (user && user.id) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "That user does not exist." });
    }
  });

module.exports = router;
