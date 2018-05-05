"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const diagramSchema = new mongoose.Schema({
    Name: String,
    IsActive: { type: Boolean, default: true },
    Description: String,
    Groups: [String],
    Box: {
        Cols: { type: Number, required: true, default: 1 },
        Rows: { type: Number, required: true, default: 1 },
        Order: { type: Number, required: true, default: 1 },
        TextColor: { type: String, required: true, default: "#333" },
        BackgroundColor: { type: String, required: true, default: "#fff" },
    },
    "Source": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Source"
    },
    Type: {
        type: String, required: true, default: "Pie", enum: {
            values: ["pie", "linear", "scatter", "bar", "line", "area", "area-spline", "numero", "booleano", "tempo"],
            message: "enum validator failed for path `{PATH}` with value `{VALUE}`"
        }
    },
    "Widget": {
        "booleano": {
            "SuccessMessage": String,
            "FailureMessage": String,
        }
    },
    Chart: {
        data: {
            type: {
                type: String, required: true, default: "Pie", enum: {
                    values: ["pie", "linear", "scatter", "bar", "line"],
                    message: "enum validator failed for path `{PATH}` with value `{VALUE}`"
                }
            },
            // TODO:
            types: {
                type: Object, default: {}
            },
            // TODO:
            names: {},
            // TODO:
            axis: {},
            // TODO:
            groups: {
                type: Array, default: []
            },
            columns: { type: Array },
            colors: { type: Object, default: {} }
        },
        // TODO:
        grid: {},
        Flow: Boolean,
        ColumnMappings: [{
                NamePath: { type: String },
                ValuePath: { type: String, required: true }
            }],
        legend: {
            show: { type: Boolean, default: true }
        },
        subchart: {
            show: { type: Boolean, default: false }
        },
        zoom: {
            enabled: { type: Boolean, default: false }
        },
        tooltip: {
            grouped: { type: Boolean, default: false }
        },
    }
}, { timestamps: true });
/**
 * pre save diagram middleware.
 */
diagramSchema.pre("save", function save(next) {
    const diagram = this;
    // if (!diagram.isModified("password")) { return next(); }
    next();
});
const Diagram = mongoose.model("Diagram", diagramSchema);
exports.Diagram = Diagram;
//# sourceMappingURL=diagram.model.js.map