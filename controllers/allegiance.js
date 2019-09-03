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
    res.status(201).json({ newAllegiance });
  });

router
  .route("/:id")
  .put(async (req, res) => {
    const { id } = req.params;
    const updated = await Allegiances.update({ id }, req.body);
    res.status(200).json({ updated });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const deleted = await Allegiances.remove({ id });
    res.status(200).json({ deleted });
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const allegiance = await Allegiances.find({ id }).first();
    res.status(200).json({ allegiance });
  });

module.exports = router;
