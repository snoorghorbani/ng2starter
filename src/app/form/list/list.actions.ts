import { Action } from "@ngrx/store";

import { FormSchemaModel } from "../models";

export enum FormsListActionTypes {
	FORMS_LIST = "[FORM][LIST] FORMS_LIST",
	FORMS_LIST_START = "[FORM][LIST] FORMS_LIST_START",
	FORMS_LIST_SUCCEED = "[FORM][LIST] FORMS_LIST_SUCCEED",
	FORMS_LIST_FAILED = "[FORM][LIST] FORMS_LIST_FAILED"
}

export class FormsListAction implements Action {
	readonly type = FormsListActionTypes.FORMS_LIST;
}
export class FormsListStartAction implements Action {
	readonly type = FormsListActionTypes.FORMS_LIST_START;
}
export class FormsListSucceedAction implements Action {
	readonly type = FormsListActionTypes.FORMS_LIST_SUCCEED;
	constructor(public payload: FormSchemaModel[]) {}
}
export class FormsListFailedAction implements Action {
	readonly type = FormsListActionTypes.FORMS_LIST_FAILED;
}

export type FormsListActions = FormsListAction | FormsListStartAction | FormsListSucceedAction | FormsListFailedAction;
