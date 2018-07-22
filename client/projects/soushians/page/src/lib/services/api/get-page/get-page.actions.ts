import { Action } from "@ngrx/store";

import { GetPageApiModel } from "./get-page.model";
import { PageModel } from "../../../models/page.model";

export const enum GET_PAGE_ACTION_TYPES {
	START = "[PAGE][API][GetPage] start",
	SUCCEED = "[PAGE][API][GetPage] succeed",
	FAILED = "[PAGE][API][GetPage] failed"
}

export class GetPageStartAction implements Action {
	readonly type = GET_PAGE_ACTION_TYPES.START;
	constructor(public payload: string) {}
}
export class GetPageSucceedAction implements Action {
	readonly type = GET_PAGE_ACTION_TYPES.SUCCEED;
	constructor(public payload: PageModel<any>) {}
}
export class GetPageFailedAction implements Action {
	readonly type = GET_PAGE_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetPageActions = GetPageStartAction | GetPageSucceedAction | GetPageFailedAction;
