import * as mongoose from "mongoose";

const gwtScenarioSchema = new mongoose.Schema(
	{
		featureId: String,
		anchorId: String,
		steps: [
			{
				id: String,
				params: {}
			}
		]
	},
	{ timestamps: true }
);

const GwtScenario = mongoose.model("GwtScenario", gwtScenarioSchema);
