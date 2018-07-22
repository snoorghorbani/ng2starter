import { Action } from "@ngrx/store";

import { UpsertPageApiModel } from "./upsert-page.model";
import { PageModel } from "../../../models/page.model";

export const enum UPSERT_PAGE_ACTION_TYPES {
	START = "[UPSERT_PAGE][API][UpsertPage] start",
	SUCCEED = "[UPSERT_PAGE][API][UpsertPage] succeed",
	FAILED = "[UPSERT_PAGE][API][UpsertPage] failed"
}

export class UpsertPageStartAction implements Action {
	readonly type = UPSERT_PAGE_ACTION_TYPES.START;
	constructor(public payload: PageModel<any>) {}
}
export class UpsertPageSucceedAction implements Action {
	readonly type = UPSERT_PAGE_ACTION_TYPES.SUCCEED;
	constructor(public payload: PageModel<any>) {}
}
export class UpsertPageFailedAction implements Action {
	readonly type = UPSERT_PAGE_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type UpsertPageActions = UpsertPageStartAction | UpsertPageSucceedAction | UpsertPageFailedAction;
