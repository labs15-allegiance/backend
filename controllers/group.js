const express = require("express");

const Groups = require("../models/groups");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { groupSchema } = require("../schemas");

router.route("/").post(async (req, res) => {
  const groupByFilter = await Groups.find(req.body);
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
