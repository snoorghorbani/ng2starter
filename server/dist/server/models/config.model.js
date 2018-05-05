"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const configSchema = new mongoose.Schema({
    Name: { type: String, unique: true },
    Config: Object,
}, { timestamps: true });
/**
 * pre save config middleware.
 */
configSchema.pre("save", function save(next) {
    const config = this;
    // if (!config.isModified("password")) { return next(); }
    next();
});
const Config = mongoose.model("Config", configSchema);
exports.Config = Config;
//# sourceMappingURL=config.model.js.map