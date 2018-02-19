import { Action } from "@ngrx/store";

import { EditConfigApiModel } from "@soushians/config";

export enum EditConfigActionTypes {
	EDIT_CONFIG = "[Config][EDIT] EDIT_CONFIG",
	EDIT_CONFIG_START = "[Config][EDIT] EDIT_CONFIG_START",
	EDIT_CONFIG_SUCCEED = "[Config][EDIT] EDIT_CONFIG_SUCCEED",
	EDIT_CONFIG_FAILED = "[Config][EDIT] EDIT_CONFIG_FAILED"
}

export class EditConfigAction implements Action {
	readonly type = EditConfigActionTypes.EDIT_CONFIG;
	constructor(public payload: EditConfigApiModel.Response) {}
}
export class EditConfigActionStart implements Action {
	readonly type = EditConfigActionTypes.EDIT_CONFIG_START;
	constructor(public payload: EditConfigApiModel.Response) {}
}
export class EditConfigActionSucceed implements Action {
	readonly type = EditConfigActionTypes.EDIT_CONFIG_SUCCEED;
	constructor(public payload: EditConfigApiModel.Response) {}
}
export class EditConfigActionFailed implements Action {
	readonly type = EditConfigActionTypes.EDIT_CONFIG_FAILED;
}

export type EditConfigActions =
	| EditConfigAction
	| EditConfigActionStart
	| EditConfigActionSucceed
	| EditConfigActionFailed;
