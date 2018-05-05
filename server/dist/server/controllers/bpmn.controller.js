"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const Model = mongoose_1.model("Bpmn");
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    Model.find().then(Result => res.json({ Result }));
});
router.get("/:id", function (req, res) {
    Model.findById(req.params.id).then(Result => res.json({ Result }));
});
router.post("/", function (req, res) {
    if (req.body._id == undefined) {
        delete req.body._id;
        const model = new Model(req.body);
        model.save().then(Result => res.send({ Result })).catch(err => {
            debugger;
        });
    }
    else {
        Model.findByIdAndUpdate(req.body._id, req.body, { upsert: true, new: true })
            .then(Result => res.json({ Result }))
            .catch(err => {
            debugger;
        });
    }
});
router.put("/", function (req, res) { });
router.delete("/:id", function (req, res) {
    Model.findByIdAndRemove(req.params.id);
});
//# sourceMappingURL=bpmn.controller.js.map