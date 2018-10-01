import { Action } from "@ngrx/store";

import { WidgetModel } from "../../../models/widget.model";

export const enum DELETE_WIDGET_ACTION_TYPES {
	START = "[DELETE_WIDGET][API][DeleteWidget] start",
	SUCCEED = "[DELETE_WIDGET][API][DeleteWidget] succeed",
	FAILED = "[DELETE_WIDGET][API][DeleteWidget] failed"
}

export class DeleteWidgetStartAction implements Action {
	readonly type = DELETE_WIDGET_ACTION_TYPES.START;
	constructor(public payload: WidgetModel<any>) { }
}
export class DeleteWidgetSucceedAction implements Action {
	readonly type = DELETE_WIDGET_ACTION_TYPES.SUCCEED;
	constructor(public payload: WidgetModel<any>) { }
}
export class DeleteWidgetFailedAction implements Action {
	readonly type = DELETE_WIDGET_ACTION_TYPES.FAILED;
	constructor(public payload: WidgetModel<any>) { }
}

export type DeleteWidgetActions = DeleteWidgetStartAction | DeleteWidgetSucceedAction | DeleteWidgetFailedAction;
