import { WidgetModel } from "../../../models/widget.model";

export namespace GetWidgetsApiModel {
	export class Request {
		constructor(initValue = {}) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
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
