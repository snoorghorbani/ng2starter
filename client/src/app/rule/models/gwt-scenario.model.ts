import { GwtStep } from "./gwt-step.model";

export class GwtScenarioModel {
	_id: string;
	ruleId: string;
	steps: GwtStep[];
	constructor() {
		this.steps = [];
	}
}
