const express = require("express");

const Groups = require("../models/groups");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { groupSchema } = require("../schemas");

router
  .route("/")
  //   .get(async (req, res) => {
  //     const filter = req.body;
  //     const groups = await Groups.find();
  //     const filteredGroups = groups.filter(group => {
  //       return group.group_name.includes(filter.group_name);
  //     });
  //     res.status(200).json({
  //       filteredGroups
  //     });
  //   })
  .get(async (req, res) => {
    const filter = req.body;
    const groupByFilter = await Groups.find(filter);
    res.status(200).json({
      groupByFilter
    });
  })
  .post(validation(groupSchema), async (req, res) => {
    const newGroup = await Groups.add(req.body);
    console.log("trying to add group:", newGroup);
    res.status(201).json({ newGroup });
  });

router
  .route("/:id")
  .put(validation(groupSchema), async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const filter = { id: id };
    const updated = await Groups.update(filter, changes);
    res.status(200).json({ updated });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const deleted = await Groups.remove(filter);
    res.status(200).json({ deleted });
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const group = await Groups.find(filter);
    res.status(200).json({ group });
  });

module.exports = router;
