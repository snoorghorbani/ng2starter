import { Action } from "@ngrx/store";

import { PageModel } from "../models/page.model";

export enum PagesActionTypes {
	UPSERT = "[PAGE][DB] UPSERT",
	DELETE = "[PAGE][DB] DELETE"
}

export class UpsertPageAction implements Action {
	readonly type = PagesActionTypes.UPSERT;
	constructor(public payload: PageModel[]) {}
}
export class DeletePageAction implements Action {
	readonly type = PagesActionTypes.DELETE;
	constructor(public payload: PageModel) {}
}

export type PagesActions = UpsertPageAction | DeletePageAction;
