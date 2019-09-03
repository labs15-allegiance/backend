const express = require("express");

const Users = require("../models/users");
const GroupsUsers = require("../models/groups_users");

const router = express.Router();

router.route("/").post(async (req, res) => {
  const currentUser = await Users.find({ email: req.body.email }).first();
  if (currentUser) {
    const userGroups = await GroupsUsers.find({ user_id: currentUser.id });
    if (userGroups) {
      const basicGroupInfo = userGroups.map(group => {
        return (
          {
            "name": group.group_name,
            "image": group.group_image,
            "id": group.group_id
          }
        )
      })
      return res.status(200).json({ currentUser, basicGroupInfo });
    } else res.status(200).json({ currentUser });
    console.log("loggin in");
  } else {
    const newUser = await Users.add(req.body);
    console.log(req.body);
    console.log("trying to add user:", newUser);
    res.status(201).json({ newUser });
  }
});

module.exports = router;
