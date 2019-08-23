const express = require("express");

const Users = require("../models/users");

const Groups = require("../models/groups.js");

const router = express.Router();

const validation = require("../middleware/dataValidation");

const { groupSchema } = require("../schemas");

router
  .route("/")
  .get(async (req, res) => {
    const groups = await Groups.find();
    res.status(200).json({ groups });
  })
  .post(validation(groupSchema), async (req, res) => {
    const { creator_id } = req.body;
    const user = await Users.find({
      id: creator_id
    }).first();
    if (user) {
      const newGroup = await Groups.add(req.body);

      res.status(201).json({
        newGroup
      });
    } else {
      res.status(404).json({
        message: "the creator of this group does not exist"
      });
    }

  // endpoint to retrieve groups for fuzzy search
router.route("/search").post(async (req, res) => {
  const groupByFilter = await Groups.search(req.body);
  console.log("getting groups");
  res.status(200).json({
    groupByFilter
  });
});

router
  .route("/:id")
  .put(validation(groupSchema), async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const userExists = await Users.find({
      id: req.body.creator_id
    }).first();
    if (!userExists) {
      res.status(404).json({ message: "User cannot be found" });
    }
    const groupExists = await Groups.find({ id }).first();
    if (!groupExists) {
      res.status(404).json({ message: "That group does not exist." });
    }

    const updated = await Groups.update({ id }, changes);
    res.status(200).json({
      updated
    });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const deleted = await Groups.remove({ id });
    if (deleted) {
      res.status(200).json({
        message: "Group successfully deleted."
      });
    } else {
      res.status(404).json({ message: "That group does not exist." });
    }
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const group = await Groups.find({ id }).first();
    if (group && group.id) {
      res.status(200).json({
        group
      });
    } else {
      res.status(404).json({ message: "That group does not exist." });
    }
  });

module.exports = router;
