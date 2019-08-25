const express = require("express");

const GroupsUsers = require("../models/groups_users");
const Users = require("../models/users");
const Groups = require("../models/groups");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { groupUsersSchema } = require("../schemas");

router
	.route("/")
	.get(async (req, res) => {
		const groupUsers = await GroupsUsers.find();
		res.status(200).json({
			groupUsers
		});
	})
	.post(validation(groupUsersSchema), async (req, res) => {
		const { user_id, group_id } = req.body;
		const user = await Users.find({
			id: user_id
		}).first();
		const group = await Groups.find({
			id: group_id
		}).first();
		if (user && group) {
			const newGroupUsers = await GroupsUsers.add(req.body);
			res.status(201).json({
				newGroupUsers
			});
		} else {
			res.status(404).json({
				message:
					"User id provided or Group id provided does not exist, please double check inputs"
			});
		}
	});

// endpoint to retrieve group relationship for logged in user
router.route("/search").post(async (req, res) => {
	// check for user_id and group_id in request body
	const { user_id, group_id } = req.body;
	// if both user_id and group_id are defined in body move along this branch
	if (user_id !== undefined || group_id !== undefined) {
		// find if relation between user and group entered exists, if so return find function from groups_users model
		const relationExists = await GroupsUsers.find(req.body);
		console.log("searching for relationship");
		if (relationExists.length !== 0) {
			res.status(200).json({
				relationExists
			});
			// if relation does not already exist, check for user and group existence
		} else {
			console.log("searching for user and group");
			const user = await Users.find({
				id: user_id
			}).first();
			const group = await Groups.find({
				id: group_id
			}).first();
			// if user and group exists, send group information
			if (user && group) {
				res.status(200).json({
					group
				});
			} else {
				res.status(404).json({
					message:
						"User id provided or Group id provided does not exist, please double check inputs"
				});
			}
		}
		// if either user_id and group_id are undefined throw 400 message
	} else {
		res.status(400).json({ message: "Column and Row must be provided." });
	}
});

router
	.route("/:id")
	.put(validation(groupUsersSchema), async (req, res) => {
		const { id } = req.params;
		const changes = req.body;
		const relationExists = await GroupsUsers.find({ id }).first();
		if (!relationExists) {
			res
				.status(404)
				.json({ message: "That user to group pairing does not exist." });
		} else {
			const updated = await GroupsUsers.update({ id }, changes);
			res.status(200).json({ updated });
		}
	})
	.delete(async (req, res) => {
		const { id } = req.params;

		const deleted = await GroupsUsers.remove({ id });
		if (deleted) {
			res
				.status(200)
				.json({ message: "The user to group pairing has been deleted." });
		} else {
			res
				.status(404)
				.json({ message: "That user to group pairing does not exist." });
		}
	})
	.get(async (req, res) => {
		const { id } = req.params;
		const groupUsers = await GroupsUsers.find({ id }).first();
		if (groupUsers && groupUsers.id) {
			res.status(200).json({ groupUsers });
		} else {
			res
				.status(404)
				.json({ message: "That user to group pairing does not exist." });
		}
	});

module.exports = router;
