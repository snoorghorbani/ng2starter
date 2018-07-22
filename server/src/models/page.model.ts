import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

const pageSchema = new mongoose.Schema(
	{
		name: { type: String }
	},
	{ timestamps: true }
);

/**
 * pre save page middleware.
 */
pageSchema.pre("save", function save(next) {
	const page = this;
	// if (!page.isModified("password")) { return next(); }
	next();
});

mongoose.model("Page", pageSchema);
