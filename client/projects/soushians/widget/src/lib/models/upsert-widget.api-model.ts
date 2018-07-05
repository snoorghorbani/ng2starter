import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WidgetModel } from "./widget.model";

export namespace UpsertWidgetApiModel {
	export class Request<T> {
		widget: WidgetModel<T>;
		constructor(initValue: Partial<UpsertWidgetApiModel.Request<T>> = {}) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return this.widget;
		}
	}

	export class Response<T> {
		Result: WidgetModel<T>;
		constructor() {}
	}
}
