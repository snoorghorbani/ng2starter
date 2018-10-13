import { Action } from "@ngrx/store";
import { PageModel } from "../../../models/page.model";
export declare const enum DELETE_PAGE_ACTION_TYPES {
    START = "[PAGE][API][DELETE] start",
    SUCCEED = "[PAGE][API][DELETE] succeed",
    FAILED = "[PAGE][API][DELETE] failed"
}
export declare class DeletePageStartAction implements Action {
    payload: string;
    readonly type: DELETE_PAGE_ACTION_TYPES;
    constructor(payload: string);
}
export declare class DeletePageSucceedAction implements Action {
    payload: PageModel;
    readonly type: DELETE_PAGE_ACTION_TYPES;
    constructor(payload: PageModel);
}
export declare class DeletePageFailedAction implements Action {
    payload: any;
    readonly type: DELETE_PAGE_ACTION_TYPES;
    constructor(payload: any);
}
export declare type DeletePageActions = DeletePageStartAction | DeletePageSucceedAction | DeletePageFailedAction;
