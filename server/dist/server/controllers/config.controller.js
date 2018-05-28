"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const socket_controller_1 = require("./socket.controller");
const ConfigModel = require("../models/config.model");
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    ConfigModel.Config.find().then(data => res.json({
        Result: data
    }));
});
router.get("/:name", function (req, res) {
    ConfigModel.Config.findOne({ Name: req.params.name }).then(Result => res.json({ Result }));
});
router.put("/:name", function (req, res) {
    ConfigModel.Config
        .findOneAndUpdate({ Name: req.params.name }, req.body, { upsert: true, new: true })
        .then(config => {
        debugger;
        socket_controller_1.SocketMiddleware.server.dispatchActionToClients("[CONFIG] update config", config);
        res.send(config);
    })
        .catch(err => {
        debugger;
    });
});
//# sourceMappingURL=config.controller.js.map