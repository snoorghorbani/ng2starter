import { Action } from "@ngrx/store";

import { WidgetModel, WidgetListApiModel } from "../models";

export enum WidgetActionTypes {
	//FETCH
	WIDGET_LIST = "[WIDGET] WIDGET_LIST",
	WIDGET_LIST_START = "[WIDGET] WIDGET_START_LIST",
	WIDGET_LIST_FAILED = "[WIDGET] WIDGET_LIST_FAILED",
	WIDGET_LIST_FETCHED = "[WIDGET] WIDGET_LIST_FETCHED",
	GET_WIDGET_LIST = "[WIDGET] GET_WIDGET_LIST",
	GET_WIDGET_LIST_SUCCEED = "[WIDGET] GET_WIDGET_LIST_SUCCEED",

	//ADD
	ADD_WIDGET = "[WIDGET] ADD_WIDGET",
	ADD_WIDGET_START = "[WIDGET] ADD_WIDGET_START",
	ADD_WIDGET_SUCCEED = "[WIDGET] ADD_WIDGET_SUCCEED",
	ADD_WIDGET_FAILED = "[WIDGET] ADD_WIDGET_FAILED",

	//EDIT
	EDIT_WIDGET = "[WIDGET] EDIT_WIDGET",
	EDIT_WIDGET_FAILED = "[WIDGET] EDIT_WIDGET_FAILED",
	EDIT_WIDGET_SUCCEED = "[WIDGET] EDIT_WIDGET_SUCCEED",

	//BULK EDIT
	BULK_EDIT_WIDGETS = "[WIDGET] BULK_EDIT_WIDGETS",
	BULK_EDIT_WIDGETS_FAILED = "[WIDGET] BULK_EDIT_WIDGETS_FAILED",
	BULK_EDIT_WIDGETS_SUCCEED = "[WIDGET] BULK_EDIT_WIDGETS_SUCCEED",

	//DELETE
	DELETE_WIDGET = "[DELETE_WIDGET] DELETE_WIDGET",
	DELETE_WIDGET_START = "[DELETE_WIDGET] DELETE_WIDGET_START",
	DELETE_WIDGET_SUCCEED = "[DELETE_WIDGET] DELETE_WIDGET_SUCCEED",
	DELETE_WIDGET_FAILED = "[DELETE_WIDGET] DELETE_WIDGET_FAILED"
}

//FETCH
export class WidgetListAction implements Action {
	readonly type = WidgetActionTypes.WIDGET_LIST;
}
export class GetWidgetListAction implements Action {
	readonly type = WidgetActionTypes.GET_WIDGET_LIST;
}
export class WidgetListStartAction implements Action {
	readonly type = WidgetActionTypes.WIDGET_LIST_START;
}
export class GetWidgetListSucceedAction implements Action {
	readonly type = WidgetActionTypes.GET_WIDGET_LIST_SUCCEED;
	constructor(public payload: WidgetModel[]) {}
}
export class WidgetListFailedAction implements Action {
	readonly type = WidgetActionTypes.WIDGET_LIST_FAILED;
}

//ADD
export class AddWidgetAction implements Action {
	readonly type = WidgetActionTypes.ADD_WIDGET;
	constructor(public payload: WidgetModel) {}
}
export class AddWidgetStartAction implements Action {
	readonly type = WidgetActionTypes.ADD_WIDGET_START;
}
export class AddWidgetSucceed implements Action {
	readonly type = WidgetActionTypes.ADD_WIDGET_SUCCEED;
	constructor(public payload: WidgetModel) {}
}
export class AddWidgetFailed implements Action {
	readonly type = WidgetActionTypes.ADD_WIDGET_FAILED;
}

//EDIT
export class EditWidgetAction implements Action {
	readonly type = WidgetActionTypes.EDIT_WIDGET;
	constructor(public payload: WidgetModel) {}
}
export class EditWidgetSucceedAction implements Action {
	readonly type = WidgetActionTypes.EDIT_WIDGET_SUCCEED;
	constructor(public payload: any) {}
}
export class EditWidgetFailedAction implements Action {
	readonly type = WidgetActionTypes.EDIT_WIDGET_FAILED;
}

//BULK EDIT
export class BulkEditWidgetsAction implements Action {
	readonly type = WidgetActionTypes.BULK_EDIT_WIDGETS;
	constructor(public payload: WidgetListApiModel.Request) {}
}
export class BulkEditWidgetsSucceedAction implements Action {
	readonly type = WidgetActionTypes.BULK_EDIT_WIDGETS_SUCCEED;
	constructor(public payload: WidgetModel[]) {}
}
export class BulkEditWidgetsFailedAction implements Action {
	readonly type = WidgetActionTypes.BULK_EDIT_WIDGETS_FAILED;
}

//DELETE
export class DeleteWidgetAction implements Action {
	readonly type = WidgetActionTypes.DELETE_WIDGET;
	constructor(public payload: string) {}
}
export class DeleteWidgetStartAction implements Action {
	payload: any;
	readonly type = WidgetActionTypes.DELETE_WIDGET_START;
}
export class DeleteWidgetSucceedAction implements Action {
	readonly type = WidgetActionTypes.DELETE_WIDGET_SUCCEED;
	constructor(public payload: WidgetModel) {}
}
export class DeleteWidgetFailedAction implements Action {
	readonly type = WidgetActionTypes.DELETE_WIDGET_FAILED;
}

export type WidgetActions =
	//ADD
	| AddWidgetAction
	| AddWidgetStartAction
	| AddWidgetSucceed
	| AddWidgetFailed
	//DELETE
	| DeleteWidgetAction
	| DeleteWidgetStartAction
	| DeleteWidgetSucceedAction
	| DeleteWidgetFailedAction
	//FETCH
	| WidgetListAction
	| WidgetListStartAction
	| WidgetListFailedAction
	| GetWidgetListAction
	| GetWidgetListSucceedAction
	//EDIT
	| EditWidgetAction
	| EditWidgetSucceedAction
	| EditWidgetFailedAction
	//BULK EDIT
	| BulkEditWidgetsAction
	| BulkEditWidgetsSucceedAction
	| BulkEditWidgetsFailedAction;
