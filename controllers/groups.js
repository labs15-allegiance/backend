const express = require('express');

const Users = require('../models/users');
const Groups = require('../models/groups.js');
const validation = require('../')

const router = express.Router();

router.post('/', async (req, res) => {

  const {
    creator_id
  } = req.body
  const user = await Users.find({
    creator_id
  }).first()
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

module.exports = router;