"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";
import { model as moongooseModel } from "mongoose";

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
	model.save().then(Result => res.json({ Result })).catch(err => {
		debugger;
	});
});
router.put("/", function(req, res) {
	Model.findByIdAndUpdate(req.body._id, req.body, { upsert: true, new: true })
		.then(config => res.send(config))
		.catch(err => {
			debugger;
		});
});
export { router };
