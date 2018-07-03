"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const widgetSchema = new mongoose.Schema({
    type: { type: String },
    name: { type: String },
    oid: { type: String },
    config: { type: Object, default: {} },
    items: { type: Object, default: [] }
}, { timestamps: true });
/**
 * pre save widget middleware.
 */
widgetSchema.pre("save", function save(next) {
    const widget = this;
    // if (!widget.isModified("password")) { return next(); }
    next();
});
mongoose.model("Grid", widgetSchema);
//# sourceMappingURL=grid.model.js.map