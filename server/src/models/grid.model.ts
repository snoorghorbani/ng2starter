import * as mongoose from "mongoose";

const gridSchema = new mongoose.Schema(
	{
		type: { type: String },
		name: { type: String },
		oid: { type: String },
		owner: { type: String },
		config: { type: Object, default: {} },
		items: [ { type: mongoose.Schema.Types.ObjectId, ref: "GridItem" } ]
	},
	{ timestamps: true }
);

/**
 * pre save grid middleware.
 */
gridSchema.pre("save", function save(next) {
	const grid = this;
	next();
});

mongoose.model("Grid", gridSchema);
