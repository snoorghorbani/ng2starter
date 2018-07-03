"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const bson_1 = require("bson");
const Model = mongoose_1.model("UIWidget");
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    Model.find().then((Result) => res.json({ Result }));
});
router.get("/:id", function (req, res) {
    Model.findById(req.params.id).then((Result) => res.json({ Result }));
});
router.post("/", function (req, res) {
    if (!req.body._id)
        req.body._id = new bson_1.ObjectId();
    Model.findOneAndUpdate({ _id: req.body._id }, req.body, { upsert: true, new: true })
        .then((Result) => {
        // TODO:
        // SocketMiddleware.server.dispatchActionToClients("[FORM][LIST] FORM_SCHEMA_UPDATE", Result);
        res.send({ Result });
    })
        .catch((err) => {
        debugger;
    });
});
router.delete("/:id", function (req, res) {
    Model.findByIdAndRemove(req.params.id);
});
//# sourceMappingURL=widget.controller.js.map