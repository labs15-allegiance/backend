const express = require("express");

const GroupUsers = require("../models/groups_users");
const Users = require("../models/users");
const Groups = require("../models/groups");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { groupUsersSchema } = require("../schemas");

router
	.route("/")
	.get(async (req, res) => {
		const groupUsers = await GroupUsers.find();
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
			const newGroupUsers = await GroupUsers.add(req.body);
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

router
	.route("/:id")
	.put(validation(groupUsersSchema), async (req, res) => {
		const { id } = req.params;
		const changes = req.body;
		const relationExists = await GroupUsers.find({ id }).first();
		if (!relationExists) {
			res
				.status(404)
				.json({ message: "That user to group pairing does not exist." });
		} else {
			const updated = await GroupUsers.update({ id }, changes);
			res.status(200).json({ updated });
		}
	})
	.delete(async (req, res) => {
		const { id } = req.params;

		const deleted = await GroupUsers.remove({ id });
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
		const groupUsers = await GroupUsers.find({ id }).first();
		if (groupUsers && groupUsers.id) {
			res.status(200).json({ groupUsers });
		} else {
			res
				.status(404)
				.json({ message: "That user to group pairing does not exist." });
		}
	});

module.exports = router;
