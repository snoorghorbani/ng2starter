import { Action } from "@ngrx/store";
import { GridModel } from "../../../models/grid.model";
export declare const enum GET_GRIDS_ACTION_TYPES {
    START = "[GET_GRIDS][API][GetGrids] start",
    SUCCEED = "[GET_GRIDS][API][GetGrids] succeed",
    FAILED = "[GET_GRIDS][API][GetGrids] failed"
}
export declare class GetGridsStartAction implements Action {
    readonly type: GET_GRIDS_ACTION_TYPES;
}
export declare class GetGridsSucceedAction implements Action {
    payload: GridModel[];
    readonly type: GET_GRIDS_ACTION_TYPES;
    constructor(payload: GridModel[]);
}
export declare class GetGridsFailedAction implements Action {
    payload: any;
    readonly type: GET_GRIDS_ACTION_TYPES;
    constructor(payload: any);
}
export declare type GetGridsActions = GetGridsStartAction | GetGridsSucceedAction | GetGridsFailedAction;
