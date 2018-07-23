import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PageModel } from "./page.model";

export namespace UpsertPageApiModel {
	export class Request<T> {
		page: PageModel<T>;
		constructor(initValue: Partial<UpsertPageApiModel.Request<T>> = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return this.page;
		}
	}

	export class Response<T> {
		Result: PageModel<T>;
		constructor() {}
	}
}
