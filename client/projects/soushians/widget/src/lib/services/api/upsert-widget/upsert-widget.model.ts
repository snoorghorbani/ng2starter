import { WidgetModel } from "../../../models";

export namespace UpsertWidgetApiModel {
	export class Request {
		widget: WidgetModel<any>;
		constructor(widget = {}) {
			debugger;
			this.widget = new WidgetModel(widget);
		}

		getRequestBody() {
			return this.widget;
		}
	}

	export class Response {
		Result: WidgetModel<any>;
		constructor() {}
	}
}
