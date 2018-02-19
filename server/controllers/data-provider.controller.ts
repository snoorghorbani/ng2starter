"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";

import * as fromDataModel from "../models/data.model";
import * as fromSourceModel from "../models/source.model";
import { httpGet } from "../utility";
// import { DiagramModel } from "../../interfaces/diagram.interface";

const router = express.Router();
const http = require("http");
const maxDistance = 1;

router.get("/", function(req, res) {
	const { sourceId, time } = req.query;

	if (time == "null") {
		fromDataModel.Data
			.findOne({
				Source: sourceId
			})
			.then((Result) => res.send({ Result }))
			.catch((data) => {
				debugger;
			});
		return;
	}

	fromDataModel.Data
		.findOne({
			Source: sourceId,
			TimeId: {
				$lte: +time + maxDistance,
				$gte: +time - maxDistance
			}
		})
		.then((Result) => res.send({ Result }))
		.catch((data) => {
			debugger;
		});

	// fromSourceModel.Source
	//   .findById(sourceId)
	//   .then(source => {
	//   })
});
router.get("/all", function(req, res) {
	const { route } = req.query;
	fromDataModel.Data
		.find({
			Route: route
		})
		.populate("Source")
		.then((Result) => res.send({ Result }))
		.catch((data) => {
			debugger;
		});
});
router.get("/all/times", function(req, res) {
	const { route } = req.query;
	fromDataModel.Data
		.find({
			Route: route
		})
		.limit(100)
		.select("Time")
		.then((Result) => res.send({ Result }))
		.catch((data) => {
			debugger;
		});
});

export { router };
