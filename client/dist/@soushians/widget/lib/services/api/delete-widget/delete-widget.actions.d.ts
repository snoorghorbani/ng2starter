import { Action } from "@ngrx/store";
import { WidgetModel } from "../../../models/widget.model";
export declare const enum DELETE_WIDGET_ACTION_TYPES {
    START = "[DELETE_WIDGET][API][DeleteWidget] start",
    SUCCEED = "[DELETE_WIDGET][API][DeleteWidget] succeed",
    FAILED = "[DELETE_WIDGET][API][DeleteWidget] failed"
}
export declare class DeleteWidgetStartAction implements Action {
    payload: WidgetModel<any>;
    readonly type: DELETE_WIDGET_ACTION_TYPES;
    constructor(payload: WidgetModel<any>);
}
export declare class DeleteWidgetSucceedAction implements Action {
    payload: WidgetModel<any>;
    readonly type: DELETE_WIDGET_ACTION_TYPES;
    constructor(payload: WidgetModel<any>);
}
export declare class DeleteWidgetFailedAction implements Action {
    payload: WidgetModel<any>;
    readonly type: DELETE_WIDGET_ACTION_TYPES;
    constructor(payload: WidgetModel<any>);
}
export declare type DeleteWidgetActions = DeleteWidgetStartAction | DeleteWidgetSucceedAction | DeleteWidgetFailedAction;
