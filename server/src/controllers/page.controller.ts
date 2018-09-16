"use strict";
import * as express from "express";
import { model as moongooseModel } from "mongoose";
import { SocketMiddleware } from "./socket.controller";
import { ObjectId } from "bson";

const GridModel = moongooseModel("Grid");
const Model = moongooseModel("Page");

const router = express.Router();

router.get("/", function(req, res) {
	Model.find({ owner: req.query.userId })
		.then(Result => res.json({ Result }))
		.catch(err => res.sendStatus(500).json(err));
});
router.get("/:name", function(req, res) {
	Model.findOne({ name: req.params.name, owner: req.query.userId }).then(Result => res.json({ Result }));
});
router.post("/", function(req, res) {
	if (!req.body._id) req.body._id = new ObjectId();
	req.body.owner = req.query.userId;
	// TODO: use async
	if (!req.body.grids || req.body.grid == "") {
		const grid = new GridModel({
			name: req.body.name,
			owner: req.query.userId
		});
		grid.save();
		req.body.grid = grid._id.toString();
	}

	// TODO: set user
	Model.findOneAndUpdate({ _id: req.body._id, owner: req.query.userId }, req.body, { upsert: true, new: true })
		.then(Result => {
			// TODO:
			SocketMiddleware.server.dispatchActionToClients("[PAGE][DB] UPSERT", [ Result ]);
			res.send({ Result });
		})
		.catch(err => {
			res.sendStatus(500).json(err);
		});
});
router.delete("/:_id", function(req, res) {
	Model.findByIdAndRemove(req.params._id)
		.then(Result => res.json({ Result }))
		.catch(err => res.sendStatus(500).json(err));
});
export { router };
