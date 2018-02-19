import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

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

export { Config };