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
router.get("/", function(req, res) {
	const { sourceId, time } = req.query;

	fromDataModel.Data
		.find({
			Events: {
				$exists: true,
				$gt: []
			}
		})
		.populate("Source")
		.limit(50)
		.sort({ createAt: -1 })
		.then((Result) => res.send({ Result }))
		.catch((data) => {
			debugger;
		});
});

export { router };
