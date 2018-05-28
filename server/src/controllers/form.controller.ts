"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";
import { model as moongooseModel } from "mongoose";
import { SocketMiddleware } from "./socket.controller";

const Model = moongooseModel("Form");

const router = express.Router();

router.get("/", function(req, res) {
	Model.find().then(Result => res.json({ Result }));
});
router.get("/:id", function(req, res) {
	Model.findById(req.params.id).then(Result => res.json({ Result }));
});
router.post("/", function(req, res) {
	const model = new Model(req.body);
	model
		.save()
		.then(Result => {
			SocketMiddleware.server.dispatchActionToClients("[FORM][ADD] ADD_FORM_SUCCEED", Result);
			res.json({ Result });
		})
		.catch(err => {
			debugger;
		});
});
router.put("/", function(req, res) {
	Model.findByIdAndUpdate(req.body._id, req.body, { upsert: true, new: true })
		.then(Result => {
			SocketMiddleware.server.dispatchActionToClients("[FORM][LIST] FORM_SCHEMA_UPDATE", Result);
			res.send({ Result });
		})
		.catch(err => {
			debugger;
		});
});
router.delete("/:id", function(req, res) {
	Model.findByIdAndRemove(req.params.id);
});
export { router };
