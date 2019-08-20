const express = require('express');

const Groups = require('./groups-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Groups.find()
      .where({ user_id: req.user.id })
      .then(groups => {
        res.status(200).json(groups);
      })
      .catch(err => {
        res.status(500).json({ err: 'Could not retrieve the list of groups' });
      });
  });

    