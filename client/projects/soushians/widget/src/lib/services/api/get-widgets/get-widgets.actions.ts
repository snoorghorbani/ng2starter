import { Action } from "@ngrx/store";

import { GetWidgetsApiModel } from "./get-widgets.model";
import { WidgetModel } from "../../../models/widget.model";

export const enum GET_WIDGETS_ACTION_TYPES {
	START = "[GET_WIDGETS][API][GetWidgets] start",
	SUCCEED = "[GET_WIDGETS][API][GetWidgets] succeed",
	FAILED = "[GET_WIDGETS][API][GetWidgets] failed"
}

export class GetWidgetsStartAction implements Action {
	readonly type = GET_WIDGETS_ACTION_TYPES.START;
}
export class GetWidgetsSucceedAction implements Action {
	readonly type = GET_WIDGETS_ACTION_TYPES.SUCCEED;
	constructor(public payload: WidgetModel<any>[]) {}
}
export class GetWidgetsFailedAction implements Action {
	readonly type = GET_WIDGETS_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetWidgetsActions = GetWidgetsStartAction | GetWidgetsSucceedAction | GetWidgetsFailedAction;
