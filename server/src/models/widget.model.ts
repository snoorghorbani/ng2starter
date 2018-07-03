import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

const widgetSchema = new mongoose.Schema(
	{
		type: { type: String },
		name: { type: String },
		Config: { type: Object, default: {} }
	},
	{ timestamps: true }
);

/**
 * pre save widget middleware.
 */
widgetSchema.pre("save", function save(next) {
	const widget = this;
	// if (!widget.isModified("password")) { return next(); }
	next();
});

mongoose.model("UIWidget", widgetSchema);
