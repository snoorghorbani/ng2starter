import { Action } from "@ngrx/store";

import { PageModel } from "../../../models/page.model";

export const enum DELETE_PAGE_ACTION_TYPES {
	START = "[PAGE][API][DELETE] start",
	SUCCEED = "[PAGE][API][DELETE] succeed",
	FAILED = "[PAGE][API][DELETE] failed"
}

export class DeletePageStartAction implements Action {
	readonly type = DELETE_PAGE_ACTION_TYPES.START;
	constructor(public payload: string) {}
}
export class DeletePageSucceedAction implements Action {
	readonly type = DELETE_PAGE_ACTION_TYPES.SUCCEED;
	constructor(public payload: PageModel) {}
}
export class DeletePageFailedAction implements Action {
	readonly type = DELETE_PAGE_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type DeletePageActions = DeletePageStartAction | DeletePageSucceedAction | DeletePageFailedAction;
