import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

const formSchema = new mongoose.Schema(
	{
		name: { type: String },
		form: {},
		events: {
			accept: {
				show: { type: Boolean, default: true },
				text: { type: String, default: "ثبت" }
			},
			cancel: {
				show: { type: Boolean, default: true },
				text: { type: String, default: "انصراف" }
			}
		}
	},
	{ timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export { Form };
