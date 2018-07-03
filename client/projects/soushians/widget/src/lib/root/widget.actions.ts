import { Action } from "@ngrx/store";

import { WidgetModel } from "../models";

export enum WidgetsActionTypes {
	UPSERT = "[WIDGET][DB] UPSERT",
	DELETE = "[WIDGET][DB] DELETE"
}

export class UpsertWidgetAction implements Action {
	readonly type = WidgetsActionTypes.UPSERT;
	constructor(public payload: WidgetModel<any>[]) {}
}
export class DeleteWidgetAction implements Action {
	readonly type = WidgetsActionTypes.DELETE;
	constructor(public payload: WidgetModel<any>) {}
}

export type WidgetsActions = UpsertWidgetAction | DeleteWidgetAction;
