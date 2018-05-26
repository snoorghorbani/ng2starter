import { Action } from "@ngrx/store";

import { FormSchemaModel } from "../models";

export enum AddFormActionTypes {
	ADD_FORM = "[FORM][ADD] ADD_FORM_PROFILE",
	ADD_FORM_START = "[FORM][ADD] ADD_FORM_START",
	ADD_FORM_SUCCEED = "[FORM][ADD] ADD_FORM_SUCCEED",
	ADD_FORM_FAILED = "[FORM][ADD] ADD_FORM_FAILED"
}

export class AddFormAction implements Action {
	readonly type = AddFormActionTypes.ADD_FORM;
	constructor(public payload: FormSchemaModel) {}
}
export class AddFormStartAction implements Action {
	readonly type = AddFormActionTypes.ADD_FORM_START;
	constructor(public payload: FormSchemaModel) {}
}
export class AddFormSucceedAction implements Action {
	readonly type = AddFormActionTypes.ADD_FORM_SUCCEED;
}
export class AddFormFailedAction implements Action {
	readonly type = AddFormActionTypes.ADD_FORM_FAILED;
}

export type AddFormActions = AddFormAction | AddFormStartAction | AddFormSucceedAction | AddFormFailedAction;
