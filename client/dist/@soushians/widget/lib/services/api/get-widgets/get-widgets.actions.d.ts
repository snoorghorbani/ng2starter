import { Action } from "@ngrx/store";
import { WidgetModel } from "../../../models/widget.model";
export declare const enum GET_WIDGETS_ACTION_TYPES {
    START = "[GET_WIDGETS][API][GetWidgets] start",
    SUCCEED = "[GET_WIDGETS][API][GetWidgets] succeed",
    FAILED = "[GET_WIDGETS][API][GetWidgets] failed"
}
export declare class GetWidgetsStartAction implements Action {
    readonly type: GET_WIDGETS_ACTION_TYPES;
}
export declare class GetWidgetsSucceedAction implements Action {
    payload: WidgetModel<any>[];
    readonly type: GET_WIDGETS_ACTION_TYPES;
    constructor(payload: WidgetModel<any>[]);
}
export declare class GetWidgetsFailedAction implements Action {
    payload: any;
    readonly type: GET_WIDGETS_ACTION_TYPES;
    constructor(payload: any);
}
export declare type GetWidgetsActions = GetWidgetsStartAction | GetWidgetsSucceedAction | GetWidgetsFailedAction;
