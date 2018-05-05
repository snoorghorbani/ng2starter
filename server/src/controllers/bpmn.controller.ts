"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";
import { model as moongooseModel } from "mongoose";

const Model = moongooseModel("Bpmn");

const router = express.Router();

router.get("/", function(req, res) {
	Model.find().then(Result => res.json({ Result }));
});
router.get("/:id", function(req, res) {
	Model.findById(req.params.id).then(Result => res.json({ Result }));
});
router.post("/", function(req, res) {
	if (req.body._id == undefined) {
		delete req.body._id;
		const model = new Model(req.body);
		model.save().then(Result => res.send({ Result })).catch(err => {
			debugger;
		});
	} else {
		Model.findByIdAndUpdate(req.body._id, req.body, { upsert: true, new: true })
			.then(Result => res.json({ Result }))
			.catch(err => {
				debugger;
			});
	}
});
router.put("/", function(req, res) {});
router.delete("/:id", function(req, res) {
	Model.findByIdAndRemove(req.params.id);
});
export { router };
