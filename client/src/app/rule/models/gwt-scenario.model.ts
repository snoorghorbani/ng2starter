import { GwtStep } from "./gwt-step.model";

export class GwtScenarioModel {
	_id?: string;
	anchorId: string;
	featureId?: string;
	steps: GwtStep[];
	constructor({ _id, anchorId, steps }: { _id?: string; anchorId?: string; steps?: GwtStep[] } = {}) {
		this._id = _id || "";
		this.anchorId = anchorId || "";
		this.steps = steps || [];
	}
	getRequsetBody?() {
		return {
			_id: this._id,
			anchorId: this.anchorId,
			steps: this.steps.map(step => ({
				id: step.id,
				params: step.params
			}))
		};
	}
}
