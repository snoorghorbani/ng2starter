import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FlowModel, StateModel, EventModel, GatewayModel } from "./flow.model";

export namespace UpsertApiModel {
	export class Request extends HttpRequestBaseModel<Request> {
		_id: string;
		Name: string;
		States: StateModel[];
		Events: EventModel[];
		Gateways: GatewayModel[];
		XML: string;

		constructor(initValue = {} as UpsertApiModel.Request) {
			super(initValue);
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
