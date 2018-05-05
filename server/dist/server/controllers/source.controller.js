"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const utility_1 = require("../utility");
const fromDataModel = require("../models/data.model");
const Model = require("../models/source.model");
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    Model.Source
        .find()
        .then(data => res.json({
        Result: data
    }))
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
        .then((source) => {
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
const saveSourceData = (Result, timeOfReuquestSending, source) => {
    const model = new fromDataModel.Data({ Data: Result, Endpoint: source.Endpoint });
    model.Time = timeOfReuquestSending;
    model.TimeId = Math.floor(timeOfReuquestSending / source.Interval);
    model.Source = source;
    model.Endpoint = source.Endpoint;
    source.Thresholds.forEach((threshold) => {
        try {
            const ComputedFormula = utility_1.compileString(threshold.Formula, Result);
            const thresholdResult = eval(ComputedFormula);
            if (thresholdResult) {
                debugger;
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
            }
            else {
                model.Events = [];
            }
        }
        catch (e) {
            debugger;
        }
    });
    model
        .save()
        .then((Result) => {
        debugger;
    })
        .catch((Result) => {
        debugger;
    });
};
const saveRequestFailure = (error, timeOfReuquestSending, source) => {
    const model = new fromDataModel.Data({ Data: undefined, Endpoint: source.Endpoint });
    model.Time = timeOfReuquestSending;
    model.TimeId = Math.floor(timeOfReuquestSending / source.Interval);
    model.Source = source;
    model.Events.addToSet({
        Type: "error",
        Info: {
            attributeValue: error.message
        }
    });
    model.save().then((Result) => { }).catch((Result) => {
        debugger;
    });
};
const scheduleForGetData = (() => {
    const schedauledSources = {};
    return (source) => {
        clearInterval(schedauledSources[source.Endpoint]);
        schedauledSources[source.Endpoint] = setInterval(() => {
            const now = Date.now();
            utility_1.httpGet(source.Endpoint).subscribe((response) => saveSourceData(response, now, source), (error) => saveRequestFailure(error, now, source));
        }, source.Interval);
    };
})();
exports.sourceJob = function () {
    // Model.Source
    //   .find({ IsActive: true })
    //   .then((data: any) => {
    //     data.forEach((source: any) => scheduleForGetData(source));
    //   });
};
//# sourceMappingURL=source.controller.js.map