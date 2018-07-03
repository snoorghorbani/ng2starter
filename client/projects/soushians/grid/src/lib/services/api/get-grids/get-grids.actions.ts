import { Action } from "@ngrx/store";

import { GetGridsApiModel } from "./get-grids.model";
import { GridModel } from "../../../models/grid.model";

export const enum GET_GRIDS_ACTION_TYPES {
	START = "[GET_GRIDS][API][GetGrids] start",
	SUCCEED = "[GET_GRIDS][API][GetGrids] succeed",
	FAILED = "[GET_GRIDS][API][GetGrids] failed"
}

export class GetGridsStartAction implements Action {
	readonly type = GET_GRIDS_ACTION_TYPES.START;
}
export class GetGridsSucceedAction implements Action {
	readonly type = GET_GRIDS_ACTION_TYPES.SUCCEED;
	constructor(public payload: GridModel[]) {}
}
export class GetGridsFailedAction implements Action {
	readonly type = GET_GRIDS_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetGridsActions = GetGridsStartAction | GetGridsSucceedAction | GetGridsFailedAction;
