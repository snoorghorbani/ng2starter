import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

const formSchema = new mongoose.Schema(
	{
		name: { type: String },
		form: {}
	},
	{ timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export { Form };
