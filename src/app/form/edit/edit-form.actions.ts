import { Action } from "@ngrx/store";

import { FormModel } from "app/models/form";

export enum EditFormActionTypes {
	EDIT_FORM = "[FORM][EDIT] EDIT_FORM_PROFILE",
	EDIT_FORM_START = "[FORM][EDIT] EDIT_FORM_START",
	EDIT_FORM_SUCCEED = "[FORM][EDIT] EDIT_FORM_SUCCEED",
	EDIT_FORM_FAILED = "[FORM][EDIT] EDIT_FORM_FAILED"
}

export class EditFormAction implements Action {
	readonly type = EditFormActionTypes.EDIT_FORM;
	constructor(public payload: FormModel) {}
}
export class EditFormStartAction implements Action {
	readonly type = EditFormActionTypes.EDIT_FORM_START;
	constructor(public payload: FormModel) {}
}
export class EditFormSucceedAction implements Action {
	readonly type = EditFormActionTypes.EDIT_FORM_SUCCEED;
}
export class EditFormFailedAction implements Action {
	readonly type = EditFormActionTypes.EDIT_FORM_FAILED;
}

export type EditFormActions = EditFormAction | EditFormStartAction | EditFormSucceedAction | EditFormFailedAction;
