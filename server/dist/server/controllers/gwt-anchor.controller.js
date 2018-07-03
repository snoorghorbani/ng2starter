"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const Model = mongoose_1.model("GwtScenario");
const router = express.Router();
exports.router = router;
router.get("/:id/scenarios", function (req, res) {
    Model.find({ anchorId: req.params.id }).then(Result => res.json({ Result }));
});
//# sourceMappingURL=gwt-anchor.controller.js.map