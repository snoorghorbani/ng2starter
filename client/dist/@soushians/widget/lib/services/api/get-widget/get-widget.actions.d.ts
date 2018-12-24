import { Action } from "@ngrx/store";
import { WidgetModel } from "../../../models/widget.model";
export declare const enum GET_WIDGET_ACTION_TYPES {
    START = "[WIDGET][API][GetWidget] start",
    SUCCEED = "[WIDGET][API][GetWidget] succeed",
    FAILED = "[WIDGET][API][GetWidget] failed"
}
export declare class GetWidgetStartAction implements Action {
    payload: string;
    readonly type = GET_WIDGET_ACTION_TYPES.START;
    constructor(payload: string);
}
export declare class GetWidgetSucceedAction implements Action {
    payload: WidgetModel<any>;
    readonly type = GET_WIDGET_ACTION_TYPES.SUCCEED;
    constructor(payload: WidgetModel<any>);
}
export declare class GetWidgetFailedAction implements Action {
    payload: any;
    readonly type = GET_WIDGET_ACTION_TYPES.FAILED;
    constructor(payload: any);
}
export declare type GetWidgetActions = GetWidgetStartAction | GetWidgetSucceedAction | GetWidgetFailedAction;
