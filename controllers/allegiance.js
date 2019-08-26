const express = require("express");

const Allegiances = require("../models/allegiances");

const router = express.Router();

router
	.route("/")
	.get(async (req, res) => {
		const allegiances = await Allegiances.find();
		res.status(200).json({ allegiances });
	})
	.post(async (req, res) => {
		const newAllegiance = await Allegiances.add(req.body);
		console.log("trying to add allegiance:", newAllegiance);
		res.status(201).json({ newAllegiance });
	});

router
	.route("/:id")
	.put(async (req, res) => {
		const { id } = req.params;
		const changes = req.body;
		const filter = { id: id };
		const updated = await Allegiances.update(filter, changes);
		res.status(200).json({ updated });
	})
	.delete(async (req, res) => {
		const { id } = req.params;
		const filter = { id: id };
		const deleted = await Allegiances.remove(filter);
		res.status(200).json({ deleted });
	})
	.get(async (req, res) => {
		const { id } = req.params;
		const filter = { id: id };
		const allegiance = await Allegiances.find(filter);
		res.status(200).json({ allegiance });
	});

module.exports = router;
