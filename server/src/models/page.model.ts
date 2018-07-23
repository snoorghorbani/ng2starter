import * as mongoose from "mongoose";
import { model as moongooseModel } from "mongoose";

const pageSchema = new mongoose.Schema(
	{
		name: { type: String, unique: true },
		grid: { type: String },
		owner: { type: String }
	},
	{ timestamps: true }
);

/**
 * pre save page middleware.
 */
// pageSchema.pre("update", function save(next) {
// 	debugger;

// 	const page: any = this;
// });

mongoose.model("Page", pageSchema);
