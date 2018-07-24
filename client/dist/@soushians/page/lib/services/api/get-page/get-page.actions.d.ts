import { Action } from "@ngrx/store";
import { PageModel } from "../../../models/page.model";
export declare const enum GET_PAGE_ACTION_TYPES {
    START = "[PAGE][API][GetPage] start",
    SUCCEED = "[PAGE][API][GetPage] succeed",
    FAILED = "[PAGE][API][GetPage] failed",
}
export declare class GetPageStartAction implements Action {
    payload: string;
    readonly type: GET_PAGE_ACTION_TYPES;
    constructor(payload: string);
}
export declare class GetPageSucceedAction implements Action {
    payload: PageModel;
    readonly type: GET_PAGE_ACTION_TYPES;
    constructor(payload: PageModel);
}
export declare class GetPageFailedAction implements Action {
    payload: any;
    readonly type: GET_PAGE_ACTION_TYPES;
    constructor(payload: any);
}
export declare type GetPageActions = GetPageStartAction | GetPageSucceedAction | GetPageFailedAction;
