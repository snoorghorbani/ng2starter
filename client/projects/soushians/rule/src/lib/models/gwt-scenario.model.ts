import { GwtStep } from "./gwt-step.model";

export class GwtScenarioModel {
	_id?: string;
	name: string;
	anchorId: string;
	featureId?: string;
	steps: GwtStep[];
	constructor(
		{
			_id,
			anchorId,
			steps,
			name,
			featureId
		}: { _id?: string; anchorId?: string; steps?: GwtStep[]; name?: string; featureId?: string } = {}
	) {
		this._id = _id || "";
		this.name = name || "";
		this.featureId = featureId || "";
		this._id = _id || "";
		this.anchorId = anchorId || "";
		this.steps = steps || [];
	}
	getRequsetBody?() {
		return {
			_id: this._id,
			anchorId: this.anchorId,
			name: this.name,
			featureId: this.featureId,
			steps: this.steps.map(step => ({
				id: step.id,
				opposite: step.opposite,
				params: step.params
			}))
		};
	}
}
