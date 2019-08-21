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
  .put(async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const filter = { id: id }
    const updated = await Users.update(filter, changes)
    res.status(200).json({ updated });
  })
  .delete(async (req, res)=> {
    const { id } = req.params;
    const filter = { id: id }
    const deleted = await Users.remove(filter)
    res.status(200).json({ deleted })
  })
  .get(async (req, res)=> {
    const { id } = req.params;
    const filter = { id: id }
    const user = await Users.find(filter)
    res.status(200).json({ user })
  })

module.exports = router;
