const express = require("express");
const zipcodes = require("zipcodes");

const Groups = require("../models/groups");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { groupSchema } = require("../schemas");

router.route("/").post(async (req, res) => {
  if (req.body.column === "location") {
    // Takes zip code and optional radius from request body
    const zip = req.body.row;
    const rad = 10 || req.body.radius;

    // Returns an array of zipcodes within mile radius of the zip
    req.body.row = zipcodes.radius(zip, rad);

    const groupByFilter = await Groups.find(req.body);
    console.log("getting groups");
    console.log(req.body.row);

    res.status(200).json({
      groupByFilter
    });
  } else {
    const groupByFilter = await Groups.find(req.body);
    console.log("getting groups");

    res.status(200).json({
      groupByFilter
    });
  }
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
