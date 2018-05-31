import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ListConfigModel } from "app/dashboard/models/component-configs/list-config.model";

export namespace EditListConfigApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		a: string;
		b: string;
		c: string;
		constructor(initValue = {} as EditListConfigApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		static get FormGroup() {
			return new FormGroup({
				a: new FormControl("", [ Validators.required ]),
				b: new FormControl("", [ Validators.required ]),
				c: new FormControl("", [ Validators.required ])
			});
		}
		getRequestBody() {
			return {
				a: this.a,
				b: this.b,
				c: this.c
			};
		}
	}
	export class Response {
		Result: ListConfigModel;
		constructor() {}
	}
}
