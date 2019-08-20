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


    router.get('/:id', async (req, res) => {
  try {
    const group = await Groups.findById(req.params.id);

    if (group) {
      res.status(200).json(group);
    } else {
      res.status(404).json({ message: 'Group not found' });
    }
  } catch (error) {
    // log error to server  
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the group',
    });
  }
});


router.post('/', (req, res) => {
    const groupInfo = { ...req.body, user_id: req.user.id };
  
    if (groupIsValid(groupInfo)) {
      Groups.add(groupInfo)
        .then(group => {
          console.log('router group', group);
          res.status(201).json(group);
        })
        .catch(error => {
          res.status(500).json(error);
        });
    } else {
      res
        .status(400)
        .json({ message: 'Please provide a name and a user id for the group' });
    }
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
  
    Groups.update(id, changes)
      .then(updated => {
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({ message: 'The group could not be found' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Groups.remove(id)
      .then(deleted => {
        if (deleted) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: "can't find that group" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
