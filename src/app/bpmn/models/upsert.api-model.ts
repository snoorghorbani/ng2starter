import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FlowModel, StateModel, EventModel, GatewayModel } from "./flow.model";

export namespace UpsertApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		_id: string;
		Name: string;
		States: StateModel[];
		Events: EventModel[];
		Gateways: GatewayModel[];
		XML: string;

		getRequestBody() {
			return this;
		}
		constructor(initValue = {} as UpsertApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}
		static get formGroup() {
			return;
		}
	}

	export class Response {
		Result: FlowModel;
		constructor() {}
	}
}
