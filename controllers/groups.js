const express = require('express');

const Users = require('../models/users');

const Groups = require('../models/groups.js');

const router = express.Router();

const validation = require("../middleware/dataValidation");

const {
  groupSchema
} = require("../schemas");

router
  .route('/')
  .post(validation(groupSchema), async (req, res) => {

    const {
      creator_id
    } = req.body
    // const id = creator_id
    const user = await Users.find({
      id: 500
    }).first()
    console.log(user)
    if (user) {
      const newGroup = await Groups.add(req.body)

      res.status(201).json({
        newGroup
      })

    } else {
      res.status(404).json({
        message: 'the creator of this group does not exist'
      });
    }
  });

router
  .route("/:id")
  .put(validation(groupSchema), async (req, res) => {
    const {
      id
    } = req.params;
    const changes = req.body;
    const filter = {
      id: id
    };
    const updated = await Groups.update(filter, changes);
    if (updated) {
      res.status(200).json({
        updated
      })
    } else {
      res.status(404).json({ message: 'Group cannot be found' })
    }
    res.status(200).json({
      updated
    });
  })
  .delete(async (req, res) => {
    const {
      id
    } = req.params;
    const filter = {
      id: id
    };
    const deleted = await Groups.remove(filter);
    res.status(200).json({
      deleted
    });
  })
  .get(async (req, res) => {
    const {
      id
    } = req.params;
    const filter = {
      id: id
    };
    const group = await Groups.find(filter);
    res.status(200).json({
      user
    });
  });

module.exports = router;