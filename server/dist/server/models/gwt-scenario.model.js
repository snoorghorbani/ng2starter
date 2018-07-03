"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const gwtScenarioSchema = new mongoose.Schema({
    featureId: String,
    anchorId: String,
    name: String,
    steps: [
        {
            id: String,
            params: {}
        }
    ]
}, { timestamps: true });
const GwtScenario = mongoose.model("GwtScenario", gwtScenarioSchema);
//# sourceMappingURL=gwt-scenario.model.js.map