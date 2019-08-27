const express = require("express");
const zipcodes = require("zipcodes");

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
  });

// endpoint to retrieve groups for fuzzy search
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
