import { Action } from "@ngrx/store";

import { GetPagesApiModel } from "./get-pages.model";
import { PageModel } from "../../../models/page.model";

export const enum GET_PAGES_ACTION_TYPES {
	START = "[GET_PAGES][API][GetPages] start",
	SUCCEED = "[GET_PAGES][API][GetPages] succeed",
	FAILED = "[GET_PAGES][API][GetPages] failed"
}

export class GetPagesStartAction implements Action {
	readonly type = GET_PAGES_ACTION_TYPES.START;
}
export class GetPagesSucceedAction implements Action {
	readonly type = GET_PAGES_ACTION_TYPES.SUCCEED;
	constructor(public payload: PageModel<any>[]) {}
}
export class GetPagesFailedAction implements Action {
	readonly type = GET_PAGES_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetPagesActions = GetPagesStartAction | GetPagesSucceedAction | GetPagesFailedAction;
