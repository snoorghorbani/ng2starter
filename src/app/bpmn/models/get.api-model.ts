import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProcessModel } from "./flow.model";

export namespace GetApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		_id: string;
		name: string;
		constructor(initValue = {} as GetApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				name: this.name
			};
		}
		static get formGroup() {
			return new FormGroup({
				_id: new FormControl("", [ Validators.required ]),
				name: new FormControl("", [ Validators.required ])
			});
		}
	}

	export class Response {
		Result: ProcessModel;
		constructor() {}
	}
}
