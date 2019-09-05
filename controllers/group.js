const express = require("express");
const zipcodes = require("zipcodes");

const Users = require("../models/users");
const Groups = require("../models/groups.js");
const GroupsUsers = require("../models/groups_users.js");
const GroupsAllegiances = require("../models/groups_allegiances.js");

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

      const groups = await Groups.search(req.body);
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
        error: `Error during ${req.method} at ${req.originalUrl}: Please provide valid zip code`
      });
    }
  }
  // Branch for non location searches
  else {
    const groupByFilter = await Groups.search(req.body);
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
    // Finds group members and stores wanted data from them in array
    const memberCall = await GroupsUsers.find({ group_id: id });
    const members = memberCall.map(member => {
      const { user_id, username, email, user_type } = member;
      return { user_id, username, email, user_type };
    });
    // Finds group allegiances and stores wanted data from them in array
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
    if (group) {
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
