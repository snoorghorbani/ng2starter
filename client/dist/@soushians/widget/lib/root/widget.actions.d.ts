import { Action } from "@ngrx/store";
import { WidgetModel } from "../models/widget.model";
export declare enum WidgetsActionTypes {
    UPSERT = "[WIDGET][DB] UPSERT",
    DELETE = "[WIDGET][DB] DELETE",
}
export declare class UpsertWidgetAction implements Action {
    payload: WidgetModel<any>[];
    readonly type: WidgetsActionTypes;
    constructor(payload: WidgetModel<any>[]);
}
export declare class DeleteWidgetAction implements Action {
    payload: WidgetModel<any>;
    readonly type: WidgetsActionTypes;
    constructor(payload: WidgetModel<any>);
}
export declare type WidgetsActions = UpsertWidgetAction | DeleteWidgetAction;
