import { GwtStep } from "./gwt-step.model";

export class GwtScenarioModel {
	_id?: string;
	ruleId: string;
	steps: GwtStep[];
	constructor({ _id, ruleId, steps }: { _id?: string; ruleId?: string; steps?: GwtStep[] } = {}) {
		this._id = _id || "";
		this.ruleId = ruleId || "";
		this.steps = steps || [];
	}
	getRequsetBody?() {
		return {
			_id: this._id,
			anchorId: this.ruleId,
			steps: this.steps.map(step => ({
				id: step.Id,
				params: step.params
			}))
		};
	}
}
