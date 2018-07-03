import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { WidgetModel } from "../models";
import { FormGroup, FormControl, Validators } from "@angular/forms";

export namespace AddWidgetApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		x: number;
		y: number;
		text: string;
		width: number;
		height: number;
		typeId: string;
		componentId: number;
		constructor(initValue = {} as AddWidgetApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		static get formGroup() {
			return new FormGroup({
				x: new FormControl("", [ Validators.required ]),
				y: new FormControl("", [ Validators.required ]),
				text: new FormControl("", [ Validators.required ]),
				width: new FormControl("", [ Validators.required ]),
				height: new FormControl("", [ Validators.required ]),
				typeId: new FormControl("", [ Validators.required ]),
				componentId: new FormControl("", [ Validators.required ])
			});
		}
		getRequestBody() {
			return {
				x: this.x,
				y: this.y,
				text: this.text,
				width: this.width,
				height: this.height,
				typeId: this.typeId,
				componentId: this.componentId
			};
		}
	}

	export class Response {
		Result: WidgetModel;
		constructor() {}
	}
}
