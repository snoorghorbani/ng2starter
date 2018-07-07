import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

export const gridItemSchema = new mongoose.Schema(
	{
		x: { type: Number },
		y: { type: Number },
		cols: { type: Number },
		rows: { type: Number },
		owner: { type: String },
		type: { type: String },
		valid: { type: Boolean },
		config: Object
	},
	{ timestamps: true }
);

/**
 * pre save gridItem middleware.
 */
gridItemSchema.pre("save", function save(next) {
	const gridItem = this;
	next();
});

mongoose.model("GridItem", gridItemSchema);
