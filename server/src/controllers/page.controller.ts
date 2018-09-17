"use strict";
import * as express from "express";
import { model as moongooseModel } from "mongoose";
import { SocketMiddleware } from "./socket.controller";
import { ObjectId } from "bson";

const GridModel = moongooseModel("Grid");
const Model = moongooseModel("Page");

const router = express.Router();

router.get("/", function (req, res) {
	Model.find({ owner: req.user.id })
		.then(Result => res.json({ Result }))
		.catch(err => res.sendStatus(500).json(err));
});
router.get("/:name", function (req, res) {
	Model.findOne({ name: req.params.name, owner: req.user.id }).then(Result => res.json({ Result }));
});
router.post("/", function (req, res) {
	debugger;
	if (!req.body._id) req.body._id = new ObjectId();
	req.body.owner = req.user.id;
	// TODO: use async
	if (!req.body.grids || req.body.grid == "") {
		const grid = new GridModel({
			name: req.body.name,
			owner: req.user.id
		});
		grid.save();
		req.body.grid = grid._id.toString();
	}

	// TODO: set user
	Model.findOneAndUpdate({ _id: req.body._id, owner: req.user.id }, req.body, { upsert: true, new: true })
		.then(Result => {
			// TODO:
			SocketMiddleware.server.dispatchActionToClients("[PAGE][DB] UPSERT", [Result]);
			res.send({ Result });
		})
		.catch(err => {
			res.sendStatus(500).json(err);
		});
});
router.delete("/:_id", function (req, res) {
	Model.findByIdAndRemove(req.params._id)
		.then(Result => res.json({ Result }))
		.catch(err => res.sendStatus(500).json(err));
});
export { router };
