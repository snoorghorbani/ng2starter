import { Action } from "@ngrx/store";
import { GridModel } from "../models/grid.model";
export declare enum GridsActionTypes {
    UPSERT = "[GRID][DB] UPSERT",
    DELETE = "[GRID][DB] DELETE"
}
export declare class UpsertGridAction implements Action {
    payload: GridModel[];
    readonly type = GridsActionTypes.UPSERT;
    constructor(payload: GridModel[]);
}
export declare class DeleteGridAction implements Action {
    payload: GridModel;
    readonly type = GridsActionTypes.DELETE;
    constructor(payload: GridModel);
}
export declare type GridsActions = UpsertGridAction | DeleteGridAction;
