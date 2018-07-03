import { Action } from "@ngrx/store";

import { UpsertWidgetApiModel } from "./upsert-widget.model";
import { WidgetModel } from "../../../models/widget.model";

export const enum UPSERT_WIDGET_ACTION_TYPES {
	START = "[UPSERT_WIDGET][API][UpsertWidget] start",
	SUCCEED = "[UPSERT_WIDGET][API][UpsertWidget] succeed",
	FAILED = "[UPSERT_WIDGET][API][UpsertWidget] failed"
}

export class UpsertWidgetStartAction implements Action {
	readonly type = UPSERT_WIDGET_ACTION_TYPES.START;
	constructor(public payload: WidgetModel<any>) {}
}
export class UpsertWidgetSucceedAction implements Action {
	readonly type = UPSERT_WIDGET_ACTION_TYPES.SUCCEED;
	constructor(public payload: WidgetModel<any>) {}
}
export class UpsertWidgetFailedAction implements Action {
	readonly type = UPSERT_WIDGET_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type UpsertWidgetActions = UpsertWidgetStartAction | UpsertWidgetSucceedAction | UpsertWidgetFailedAction;
