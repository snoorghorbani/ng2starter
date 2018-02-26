"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";
import { model as moongooseModel } from "mongoose";

const Model = moongooseModel("Form");

const router = express.Router();

router.get("/", function(req, res) {
	Model.find().then((Result) => res.json({ Result }));
});
router.post("/", function(req, res) {
	const model = new Model(req.body);
	model.save().then((Result) => res.json({ Result })).catch((err) => {
		debugger;
	});
});

// router.get("/:name", function(req, res) {
// 	Model.Config.findOne({ Name: req.params.name }).then((Result) => res.json({ Result }));
// });

// router.put("/:name", function(req, res) {
// 	Model.Config
// 		.findOneAndUpdate({ Name: req.params.name }, req.body, { upsert: true, new: true })
// 		.then((config) => res.send(config))
// 		.catch((err) => {
// 			debugger;
// 		});
// });
export { router };
