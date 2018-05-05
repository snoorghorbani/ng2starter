"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bpmnSchema = new mongoose.Schema({
    Name: String,
    Tasks: {
        Id: String,
        Name: String,
        Participants: {
            type: [{}],
            default: []
        },
        Properties: {
            type: {
                Type: String,
                fields: [{}]
            },
            default: {}
        }
    },
    Events: {},
    Gateways: {},
    XML: String
}, { timestamps: true });
const Bpmn = mongoose.model("Bpmn", bpmnSchema);
exports.Bpmn = Bpmn;
//# sourceMappingURL=bpmn.model.js.map