import { Action } from "@ngrx/store";

import { FormSchemaModel } from "../models";

export enum FormsListActionTypes {
	FORMS_LIST = "[FORM][LIST] FORMS_LIST",
	FORMS_LIST_START = "[FORM][LIST] FORMS_LIST_START",
	FORMS_LIST_SUCCEED = "[FORM][LIST] FORMS_LIST_SUCCEED",
	FORMS_LIST_FAILED = "[FORM][LIST] FORMS_LIST_FAILED",
	ADD_FORM_SCHEMA = "[FORM][LIST] ADD_FORM_SCHEMA",
	FORM_SCHEMA_UPDATE = "[FORM][LIST] FORM_SCHEMA_UPDATE",
	GET_FORM_SCHEMA = "[FORM][LIST] GET_FORM_SCHEMA",
	FORM_SCHEMA_FETCHED = "[FORM][LIST] FORM_SCHEMA_FETCHED"
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
export class UpdateFormSchemaAction implements Action {
	readonly type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
	constructor(public payload: FormSchemaModel) {}
}
export class AddFormSchemaAction implements Action {
	readonly type = FormsListActionTypes.ADD_FORM_SCHEMA;
	constructor(public payload: FormSchemaModel) {}
}
export class GetFormSchemaAction implements Action {
	readonly type = FormsListActionTypes.GET_FORM_SCHEMA;
	constructor(public payload: string) {}
}
export class FormSchemaFechedAction implements Action {
	readonly type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
	constructor(public payload: FormSchemaModel) {}
}

export type FormsListActions =
	| FormsListAction
	| FormsListStartAction
	| FormsListSucceedAction
	| FormsListFailedAction
	| UpdateFormSchemaAction
	| AddFormSchemaAction
	| GetFormSchemaAction
	| FormSchemaFechedAction;
