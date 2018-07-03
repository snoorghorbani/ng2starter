import { Action } from "@ngrx/store";

import { GetWidgetApiModel } from "./get-widget.model";
import { WidgetModel } from "../../../models/widget.model";

export const enum GET_WIDGET_ACTION_TYPES {
	START = "[WIDGET][API][GetWidget] start",
	SUCCEED = "[WIDGET][API][GetWidget] succeed",
	FAILED = "[WIDGET][API][GetWidget] failed"
}

export class GetWidgetStartAction implements Action {
	readonly type = GET_WIDGET_ACTION_TYPES.START;
	constructor(public payload: string) {}
}
export class GetWidgetSucceedAction implements Action {
	readonly type = GET_WIDGET_ACTION_TYPES.SUCCEED;
	constructor(public payload: WidgetModel<any>) {}
}
export class GetWidgetFailedAction implements Action {
	readonly type = GET_WIDGET_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetWidgetActions = GetWidgetStartAction | GetWidgetSucceedAction | GetWidgetFailedAction;
