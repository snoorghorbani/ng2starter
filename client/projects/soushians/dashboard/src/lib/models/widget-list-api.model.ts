import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { WidgetModel } from "../models";

export namespace WidgetListApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		body: WidgetModel[];

		constructor(initValue = {} as WidgetListApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return this.body;
		}
	}

	export class Response {
		Result: WidgetModel[];
		constructor() {}
	}
}
