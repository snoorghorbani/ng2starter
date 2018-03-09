// import { Injectable } from "@angular/core";
// import { HttpRequestBaseModel } from "@soushians/shared";
// import { BpmnGroup, BpmnControl, Validators } from "@angular/forms";
// import { BpmnSchemaModel } from "../models";

// export namespace BpmnListApiModel {
// 	export class Request implements HttpRequestBaseModel<Request> {
// 		Name: string;
// 		Controls: object[];
// 		constructor(initValue = {} as BpmnListApiModel.Request) {
// 			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
// 		}

// 		getRequestBody() {
// 			return {
// 				Name: this.Name,
// 				Controls: this.Controls
// 			};
// 		}
// 		static get bpmnGroup() {
// 			return new BpmnGroup({
// 				Name: new BpmnControl("", [ Validators.required ]),
// 				Controls: new BpmnGroup({})
// 			});
// 		}
// 	}

// 	export class Response {
// 		Result: BpmnSchemaModel[];
// 		constructor() {}
// 	}
// }
