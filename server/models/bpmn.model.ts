import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

const bpmnSchema = new mongoose.Schema(
	{
		Name: String,
		States: {},
		Events: {},
		Gateways: {},
		XML: String
	},
	{ timestamps: true }
);

const Bpmn = mongoose.model("Bpmn", bpmnSchema);

export { Bpmn };
