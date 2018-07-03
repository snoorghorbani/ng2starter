import { Action } from "@ngrx/store";
import { GridModel } from "../../../models/grid.model";
export declare const enum UPSERT_GRID_ACTION_TYPES {
    START = "[UPSERT_GRID][API][UpsertGrid] start",
    SUCCEED = "[UPSERT_GRID][API][UpsertGrid] succeed",
    FAILED = "[UPSERT_GRID][API][UpsertGrid] failed",
}
export declare class UpsertGridStartAction implements Action {
    payload: GridModel;
    readonly type: UPSERT_GRID_ACTION_TYPES;
    constructor(payload: GridModel);
}
export declare class UpsertGridSucceedAction implements Action {
    payload: GridModel;
    readonly type: UPSERT_GRID_ACTION_TYPES;
    constructor(payload: GridModel);
}
export declare class UpsertGridFailedAction implements Action {
    payload: any;
    readonly type: UPSERT_GRID_ACTION_TYPES;
    constructor(payload: any);
}
export declare type UpsertGridActions = UpsertGridStartAction | UpsertGridSucceedAction | UpsertGridFailedAction;
