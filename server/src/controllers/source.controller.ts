"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import * as mongoose from "mongoose";
import { Response, Request, NextFunction } from "express";

import { httpGet, compare, getValue, compileString } from "../utility";
import * as fromDataModel from "../models/data.model";
import * as Model from "../models/source.model";

const router = express.Router();

router.get("/", function (req, res) {
	Model.Source
		.find()
		.then(data =>
			res.json({
				Result: data
			})
		)
		.catch(err => {
			debugger;
		});
});
router.get("/:id", function (req, res) {
	Model.Source.findById(req.params.id).then(Result => res.json({ Result }));
});
router.put("/", function (req, res) {
	req.body._id = req.body._id || new mongoose.Types.ObjectId();
	Model.Source
		.findByIdAndUpdate(req.body._id, req.body, { upsert: true, new: true })
		.then((source: any) => {
			source.IsActive && scheduleForGetData(source);
			res.send(source);
		})
		.catch(err => {
			debugger;
			res.send(err);
		});
});
router.delete("/:id", function (req, res) {
	Model.Source
		.findByIdAndRemove(req.params.id)
		.then(source => {
			res.sendStatus(200);
		})
		.catch(err => {
			debugger;
		});
});
const saveSourceData = (Result: any, timeOfReuquestSending: number, source: any) => {
	const model = <any>new fromDataModel.Data({ Data: Result, Endpoint: source.Endpoint });
	model.Time = timeOfReuquestSending;
	model.TimeId = Math.floor(timeOfReuquestSending / source.Interval);
	model.Source = source;
	model.Endpoint = source.Endpoint;

	source.Thresholds.forEach((threshold: any) => {
		try {
			const ComputedFormula = compileString(threshold.Formula, Result);
			const thresholdResult = eval(ComputedFormula);
			if (thresholdResult) {
				model.Events.addToSet({
					Type: "threshold",
					Info: {
						Name: threshold.Name,
						Message: threshold.Message,
						Type: threshold.Type,
						Formula: threshold.Formula,
						ComputedFormula: ComputedFormula
					}
				});
			} else {
				model.Events = [];
			}
		} catch (e) {
			debugger;
		}
	});

	model
		.save()
		.then((Result: any) => {
		})
		.catch((Result: any) => {
			debugger;
		});
};
const saveRequestFailure = (error: any, timeOfReuquestSending: number, source: any) => {
	const model = <any>new fromDataModel.Data({ Data: undefined, Endpoint: source.Endpoint });
	model.Time = timeOfReuquestSending;
	model.TimeId = Math.floor(timeOfReuquestSending / source.Interval);
	model.Source = source;

	model.Events.addToSet({
		Type: "error",
		Info: {
			attributeValue: error.message
		}
	});

	model.save().then((Result: any) => { }).catch((Result: any) => {
		debugger;
	});
};
const scheduleForGetData = (() => {
	const schedauledSources: { [endpoint: string]: number } = {};
	return (source: any) => {
		clearInterval(schedauledSources[source.Endpoint]);
		schedauledSources[source.Endpoint] = setInterval(() => {
			const now = Date.now();
			httpGet(source.Endpoint).subscribe(
				(response: any) => saveSourceData(response, now, source),
				(error: any) => saveRequestFailure(error, now, source)
			);
		}, source.Interval);
	};
})();
export const sourceJob = function () {
	Model.Source
		.find({ IsActive: true })
		.then((data: any) => {
			data.forEach((source: any) => scheduleForGetData(source));
		});
};

export { router };
