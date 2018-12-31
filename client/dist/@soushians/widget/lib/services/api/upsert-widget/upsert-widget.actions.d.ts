import { Action } from "@ngrx/store";
import { WidgetModel } from "../../../models/widget.model";
export declare const enum UPSERT_WIDGET_ACTION_TYPES {
    START = "[UPSERT_WIDGET][API][UpsertWidget] start",
    SUCCEED = "[UPSERT_WIDGET][API][UpsertWidget] succeed",
    FAILED = "[UPSERT_WIDGET][API][UpsertWidget] failed"
}
export declare class UpsertWidgetStartAction implements Action {
    payload: WidgetModel<any>;
    readonly type = UPSERT_WIDGET_ACTION_TYPES.START;
    constructor(payload: WidgetModel<any>);
}
export declare class UpsertWidgetSucceedAction implements Action {
    payload: WidgetModel<any>;
    readonly type = UPSERT_WIDGET_ACTION_TYPES.SUCCEED;
    constructor(payload: WidgetModel<any>);
}
export declare class UpsertWidgetFailedAction implements Action {
    payload: any;
    readonly type = UPSERT_WIDGET_ACTION_TYPES.FAILED;
    constructor(payload: any);
}
export declare type UpsertWidgetActions = UpsertWidgetStartAction | UpsertWidgetSucceedAction | UpsertWidgetFailedAction;
