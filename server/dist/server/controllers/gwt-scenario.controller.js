"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const socket_controller_1 = require("./socket.controller");
const Model = mongoose_1.model("GwtScenario");
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    Model.find().then(Result => res.json({ Result }));
});
router.get("/:id", function (req, res) {
    Model.findById(req.params.id).then(Result => res.json({ Result }));
});
router.post("/", function (req, res) {
    debugger;
    delete req.body._id;
    const model = new Model(req.body);
    model
        .save()
        .then(Result => {
        socket_controller_1.SocketMiddleware.server.dispatchActionToClients("[GWT][SCENARIO][DB] UPDATE_DB", [Result]);
        res.json({ Result });
    })
        .catch(err => {
        debugger;
    });
});
router.put("/", function (req, res) {
    debugger;
    Model.findByIdAndUpdate(req.body._id, req.body, { upsert: true, new: true })
        .then(Result => {
        socket_controller_1.SocketMiddleware.server.dispatchActionToClients("[GWT][SCENARIO][DB] UPDATE_DB", [Result]);
        res.send({ Result });
    })
        .catch(err => {
        debugger;
    });
});
router.delete("/:id", function (req, res) {
    Model.findByIdAndRemove(req.params.id);
});
//# sourceMappingURL=gwt-scenario.controller.js.map