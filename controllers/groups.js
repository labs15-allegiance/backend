const express = require('express');

const Users = require('../models/users');
const Groups = require('../models/groups.js');

const router = express.Router();

router.post('/', (req, res) => {
  const groupInfo = req.body;
  if (isValidGroup(groupInfo)) {
    Users.findById(groupInfo['creator_id']).then(user => {
        if (user) {
          Groups.add(groupInfo)
            .then(group => {
              res.status(201).json(group)
            }).catch(err => {
              res.status(500).json(err)
            })
        } else {
          res.status(404).json({
            message: 'the creator of this group does not exist'
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: 'ran into error inserting the group'
        });
      })
  } else {
    res.status(400).json({
      message: 'Please provide the information about the group'
    })
  }
});

module.exports = router;

function isValidGroup(group) {
  return group.location && group['group_name'] && group['privacy_setting'] && group['creator_id'];
}