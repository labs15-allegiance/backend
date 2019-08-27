const express = require("express");
const zipcodes = require("zipcodes");

const Groups = require("../models/groups");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { groupSchema } = require("../schemas");

router.route("/search").post(async (req, res) => {
  if (req.body.column === "location") {
    // Ternary check for zip code or text; zip gets passed along as is, city + state gets converted. city and state should be provided as object with those labels
    const zip = isNaN(req.body.row)
      ? zipcodes.lookupByName(req.body.row.city, req.body.row.state)[0].zip
      : req.body.row;

    console.log(zip);
    // Takes optional radius from request or sets default
    const rad = 10 || req.body.radius;

    // Returns an array of zipcodes within mile radius of the zip
    req.body.row = zipcodes.radius(zip, rad);

    const groupByFilter = await Groups.find(req.body);
    console.log("getting groups");

    // Sort results by smallest to largest distance as the crow flies
    groupByFilter.sort(
      (a, b) =>
        zipcodes.distance(a.location, zip) - zipcodes.distance(b.location, zip)
    );

    res.status(200).json({
      groupByFilter
    });
  } else if (req.body.column) {
    const groupByFilter = await Groups.find(req.body);
    console.log("getting groups");

    res.status(200).json({
      groupByFilter
    });
  } else {
    const groupByFilter = await Groups.find();
    console.log("getting all groups");

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
