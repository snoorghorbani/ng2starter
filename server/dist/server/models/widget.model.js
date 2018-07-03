"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const widgetSchema = new mongoose.Schema({
    type: { type: String },
    name: { type: String },
    Config: { type: Object, default: {} }
}, { timestamps: true });
/**
 * pre save widget middleware.
 */
widgetSchema.pre("save", function save(next) {
    const widget = this;
    // if (!widget.isModified("password")) { return next(); }
    next();
});
mongoose.model("UIWidget", widgetSchema);
//# sourceMappingURL=widget.model.js.map