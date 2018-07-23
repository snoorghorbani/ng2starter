import * as mongoose from "mongoose";

const gridSchema = new mongoose.Schema(
	{
		type: { type: String },
		name: { type: String },
		oid: { type: String },
		owner: { type: String },
		config: {
			type: Object,
			default: {
				gridType: "fixed",
				compactType: "none",
				displayGrid: "onDrag&Resize",
				enableEmptyCellDrag: true,
				enableEmptyCellClick: false,
				enableEmptyCellContextMenu: false,
				scrollToNewItems: true,
				margin: 10,
				outerMargin: true,
				outerMarginTop: 10,
				outerMarginRight: 10,
				outerMarginBottom: 10,
				outerMarginLeft: 10,
				minCols: 3,
				maxCols: 3,
				draggable: {
					enabled: false,
					delayStart: 333
				},
				resizable: {
					enabled: false
				}
			}
		},
		items: [ { type: mongoose.Schema.Types.ObjectId, ref: "GridItem" } ]
	},
	{ timestamps: true, minimize: false }
);

/**
 * pre save grid middleware.
 */
gridSchema.pre("save", function save(next) {
	const grid = this;
	next();
});

gridSchema.post("init", function(grid: any) {});

mongoose.model("Grid", gridSchema);
