import { WidgetModel } from "../../../models";

export namespace GetWidgetApiModel {
	export class Request {
		_id: string;
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: WidgetModel<any>;
		constructor() {}
	}
}
