import { Action } from "@ngrx/store";

import { GridModel } from "../models";

export enum GridsActionTypes {
	UPSERT = "[GRID][DB] UPSERT",
	DELETE = "[GRID][DB] DELETE"
}

export class UpsertGridAction implements Action {
	readonly type = GridsActionTypes.UPSERT;
	constructor(public payload: GridModel[]) {}
}
export class DeleteGridAction implements Action {
	readonly type = GridsActionTypes.DELETE;
	constructor(public payload: GridModel) {}
}

export type GridsActions = UpsertGridAction | DeleteGridAction;
