import { Action } from "@ngrx/store";
import { GridModel } from "../../../models/grid.model";
export declare const enum GET_GRID_ACTION_TYPES {
    START = "[GRID][API][GetGrid] start",
    SUCCEED = "[GRID][API][GetGrid] succeed",
    FAILED = "[GRID][API][GetGrid] failed"
}
export declare class GetGridStartAction implements Action {
    payload: string;
    readonly type = GET_GRID_ACTION_TYPES.START;
    constructor(payload: string);
}
export declare class GetGridSucceedAction implements Action {
    payload: GridModel;
    readonly type = GET_GRID_ACTION_TYPES.SUCCEED;
    constructor(payload: GridModel);
}
export declare class GetGridFailedAction implements Action {
    payload: any;
    readonly type = GET_GRID_ACTION_TYPES.FAILED;
    constructor(payload: any);
}
export declare type GetGridActions = GetGridStartAction | GetGridSucceedAction | GetGridFailedAction;
