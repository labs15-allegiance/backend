const express = require("express");

const UsersAllegiances = require("../models/users_allegiances");
const Allegiances = require("../models/allegiances");
const Users = require("../models/users");

const router = express.Router();

const validation = require("../middleware/dataValidation");
const { userAllegianceSchema } = require("../schemas");

router
	.route("/")
	.get(async (req, res) => {
		// check if there are filters present on request body, if so pass filter to find function
		if (Object.keys(req.body).length > 0) {
			const userAllegiance = await UsersAllegiances.find(req.body);
			res.status(200).json({
				userAllegiance
			});
			// if there are no filters being passed on request body, send entire listing of associations
		} else {
			const userAllegiance = await UsersAllegiances.find();
			res.status(200).json({
				userAllegiance
			});
		}
	})
	.post(validation(userAllegianceSchema), async (req, res) => {
		const { allegiance_id, user_id } = req.body;
		// Check if allegiance exists
		const allegiance = await Allegiances.find({
			id: allegiance_id
		}).first();
		// Check if user exists
		const user = await Users.find({
			id: user_id
		}).first();
		if (allegiance && user) {
			// If both user and allegiance exists, create new association
			const newUserAllegiances = await UsersAllegiances.add(req.body);
			res.status(201).json({
				newUserAllegiances
			});
		} else {
			res.status(404).json({
				message:
					"User id provided or Allegiance id provided does not exist, please double check inputs"
			});
		}
	});

router
	.route("/:id")
	.delete(async (req, res) => {
		const { id } = req.params;
		const deleted = await UsersAllegiances.remove({ id });
		if (deleted) {
			res
				.status(200)
				.json({ message: "The user to allegiance pairing has been deleted." });
		} else {
			res
				.status(404)
				.json({ message: "That user to allegiance pairing does not exist." });
		}
	})
	.get(async (req, res) => {
		const { id } = req.params;
		// Check if user to allegiance pairing exists
		const userAllegiances = await UsersAllegiances.find({
			"u_a.id": id
		}).first();
		if (userAllegiances) {
			res.status(200).json({ userAllegiances });
		} else {
			res
				.status(404)
				.json({ message: "That user to allegiance pairing does not exist." });
		}
	});

module.exports = router;
