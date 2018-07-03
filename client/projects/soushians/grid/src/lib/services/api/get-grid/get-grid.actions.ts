import { Action } from "@ngrx/store";

import { GetGridApiModel } from "./get-grid.model";
import { GridModel } from "../../../models/grid.model";

export const enum GET_GRID_ACTION_TYPES {
	START = "[GRID][API][GetGrid] start",
	SUCCEED = "[GRID][API][GetGrid] succeed",
	FAILED = "[GRID][API][GetGrid] failed"
}

export class GetGridStartAction implements Action {
	readonly type = GET_GRID_ACTION_TYPES.START;
	constructor(public payload: string) {}
}
export class GetGridSucceedAction implements Action {
	readonly type = GET_GRID_ACTION_TYPES.SUCCEED;
	constructor(public payload: GridModel) {}
}
export class GetGridFailedAction implements Action {
	readonly type = GET_GRID_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetGridActions = GetGridStartAction | GetGridSucceedAction | GetGridFailedAction;
