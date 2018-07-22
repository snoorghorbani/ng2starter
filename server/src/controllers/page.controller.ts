"use strict";
import * as express from "express";
import { model as moongooseModel } from "mongoose";
import { SocketMiddleware } from "./socket.controller";
import { ObjectId } from "bson";

const Model = moongooseModel("Page");

const router = express.Router();

router.get("/", function(req, res) {
	Model.find().then((Result) => res.json({ Result }));
});
router.get("/:id", function(req, res) {
	Model.findById(req.params.id).then((Result) => res.json({ Result }));
});
router.post("/", function(req, res) {
	if (!req.body._id) req.body._id = new ObjectId();
	// TODO: set user
	Model.findOneAndUpdate({ _id: req.body._id }, req.body, { upsert: true, new: true })
		.then((Result) => {
			// TODO:
			SocketMiddleware.server.dispatchActionToClients("[PAGE][DB] UPSERT", [ Result ]);
			res.send({ Result });
		})
		.catch((err) => {
			debugger;
		});
});
router.delete("/:id", function(req, res) {
	Model.findByIdAndRemove(req.params.id);
});
export { router };
