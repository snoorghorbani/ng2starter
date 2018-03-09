import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FlowModel } from "./flow.model";

export namespace GetAllApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		constructor(initValue = {} as GetAllApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
		static get formGroup() {
			return new FormGroup({
				_id: new FormControl("", [ Validators.required ]),
				name: new FormControl("", [ Validators.required ])
			});
		}
	}

	export class Response {
		Result: FlowModel[];
		constructor() {}
	}
}
