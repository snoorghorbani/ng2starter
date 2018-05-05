"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fromDataModel = require("../models/data.model");
// import { DiagramModel } from "../../interfaces/diagram.interface";
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
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
//# sourceMappingURL=event.controller.js.map