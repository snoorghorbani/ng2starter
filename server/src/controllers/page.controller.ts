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
router.get("/:name", function(req, res) {
	Model.findOne({ name: req.params.name }).then((Result) => res.json({ Result }));
});
router.post("/", function(req, res) {
	// chek agar _id => y doc jadid
	// grid jadid besaz save kon bad _id assign kon b in

	// TODO: set user
	Model.findOneAndUpdate({ name: req.body.name }, req.body, { upsert: true, new: true })
		.then((Result) => {
			// TODO:
			SocketMiddleware.server.dispatchActionToClients("[PAGE][DB] UPSERT", [ Result ]);
			res.send({ Result });
		})
		.catch((err) => {
			debugger;
		});
});
router.delete("/:name", function(req, res) {
	Model.findByIdAndRemove(req.params.id);
});
export { router };
