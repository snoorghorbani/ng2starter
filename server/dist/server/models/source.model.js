"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const sourceSchema = new mongoose.Schema({
    Endpoint: { type: String, unique: true },
    Interval: { type: Number, default: 60 * 1000 },
    IsActive: { type: Boolean, default: false },
    Thresholds: [
        {
            Name: { type: String },
            Formula: { type: String },
            Message: { type: String },
            Type: { type: String, enum: ["goal", "critical"], default: "critical" },
            ComputedFormula: { type: String }
        }
    ]
}, { timestamps: true });
/**
 * pre save source middleware.
 */
sourceSchema.pre("save", function save(next) {
    const source = this;
    if (!source.Thresholds)
        source.Thresholds = [];
    next();
});
const Source = mongoose.model("Source", sourceSchema);
exports.Source = Source;
//# sourceMappingURL=source.model.js.map