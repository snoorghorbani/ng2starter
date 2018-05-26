import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormSchemaModel } from "../models";

export namespace EditFormApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		_id: string;
		name: string;
		form: any[];
		events: any[];
		constructor(initValue = {} as EditFormApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				_id: this._id,
				name: this.name,
				form: this.form,
				events: this.events
			};
		}
		static get formGroup() {
			return new FormGroup({
				_id: new FormControl("", [ Validators.required ]),
				name: new FormControl("", [ Validators.required ]),
				form: new FormControl({}),
				events: new FormGroup({
					accept: new FormGroup({
						show: new FormControl(false),
						text: new FormControl("ثبت")
					}),
					cancel: new FormGroup({
						show: new FormControl(false),
						text: new FormControl("انصراف")
					})
				})
			});
		}
	}

	export class Response {
		Result: FormSchemaModel;
		constructor() {}
	}
}
