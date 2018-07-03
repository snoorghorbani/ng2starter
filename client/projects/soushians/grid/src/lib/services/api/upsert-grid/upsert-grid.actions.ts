import { Action } from "@ngrx/store";

import { UpsertGridApiModel } from "./upsert-grid.model";
import { GridModel } from "../../../models/grid.model";

export const enum UPSERT_GRID_ACTION_TYPES {
	START = "[UPSERT_GRID][API][UpsertGrid] start",
	SUCCEED = "[UPSERT_GRID][API][UpsertGrid] succeed",
	FAILED = "[UPSERT_GRID][API][UpsertGrid] failed"
}

export class UpsertGridStartAction implements Action {
	readonly type = UPSERT_GRID_ACTION_TYPES.START;
	constructor(public payload: GridModel) {}
}
export class UpsertGridSucceedAction implements Action {
	readonly type = UPSERT_GRID_ACTION_TYPES.SUCCEED;
	constructor(public payload: GridModel) {}
}
export class UpsertGridFailedAction implements Action {
	readonly type = UPSERT_GRID_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type UpsertGridActions = UpsertGridStartAction | UpsertGridSucceedAction | UpsertGridFailedAction;
