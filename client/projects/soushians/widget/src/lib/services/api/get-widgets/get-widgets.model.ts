import { WidgetModel } from "../../../models";

export namespace GetWidgetsApiModel {
	export class Request {
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: WidgetModel<any>[];
		constructor() {}
	}
}
