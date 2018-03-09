import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FlowModel } from "./flow.model";

export namespace EditApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		_id: string;
		name: string;
		constructor(initValue = {} as EditApiModel.Request) {
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
		Result: FlowModel;
		constructor() {}
	}
}
