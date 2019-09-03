const express = require("express");
const zipcodes = require("zipcodes");

const Users = require("../models/users");
const Groups = require("../models/groups.js");
const GroupsAllegiances = require("../models/groups_allegiances.js");
const GroupsUsers = require("../models/groups_users");

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

// endpoint to retrieve groups for search
router.route("/search").post(async (req, res) => {
  if (req.body.column === "location") {
    // Use zipcodes package to search for zip codes
    if (zipcodes.lookup(req.body.row)) {
      const zip = req.body.row;

      console.log(zip);
      // Takes optional radius from request or sets default
      const rad = 10 || req.body.radius;

      // Returns an array of zipcodes within mile radius of the zip
      req.body.row = zipcodes.radius(zip, rad);

      const groupByFilter = await Groups.search(req.body);
      console.log("getting groups");

      // Sort results by smallest to largest distance as the crow flies
      groupByFilter.sort(
        (a, b) =>
          zipcodes.distance(a.location, zip) -
          zipcodes.distance(b.location, zip)
      );

      res.status(200).json({
        groupByFilter
      });
    } else {
      res.status(400).json({
        error: `Error during ${req.method} at ${
          req.originalUrl
        }: Please provide valid zip code`
      });
    }
  }
  // Branch for non location searches
  else {
    const groups = await Groups.search(req.body);
    console.log("getting groups");
    const group_id = groups.map(group => group.id);

    const members = await GroupsUsers.find({ group_id });
    const groupByFilter = groups.map(group => {
      return {
        ...group,
        members: members.filter(member => member.group_id === group.id)
      };
    });
    res.status(200).json({
      groupByFilter,
      members
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

    const allegianceCall = await GroupsAllegiances.find({ group_id: id });
    const allegiances = allegianceCall.map(allegiance => {
      const {
        allegiance_id,
        allegiance_name,
        allegiance_image,
        sport
      } = allegiance;
      return {
        id: allegiance_id,
        name: allegiance_name,
        image: allegiance_image,
        sport
      };
    });

    const userCall = await GroupsUsers.find({ group_id: id });
    const members = userCall.map(member => {
      const {
        user_id,
        username,
        first_name,
        last_name,
        email,
        user_location,
        user_image,
        user_type
      } = member;
      return {
        id: user_id,
        name: `${first_name} ${last_name}`,
        image: user_image,
        username,
        email,
        location: user_location,
        status: user_type
      };
    });
    if (group && group.id) {
      res.status(200).json({
        group,
        allegiances,
        members
      });
    } else {
      res.status(404).json({ message: "That group does not exist." });
    }
  });

module.exports = router;
