import { Action } from "@ngrx/store";
import { PageModel } from "../../../models/page.model";
export declare const enum UPSERT_PAGE_ACTION_TYPES {
    START = "[UPSERT_PAGE][API][UpsertPage] start",
    SUCCEED = "[UPSERT_PAGE][API][UpsertPage] succeed",
    FAILED = "[UPSERT_PAGE][API][UpsertPage] failed",
}
export declare class UpsertPageStartAction implements Action {
    payload: PageModel;
    readonly type: UPSERT_PAGE_ACTION_TYPES;
    constructor(payload: PageModel);
}
export declare class UpsertPageSucceedAction implements Action {
    payload: PageModel;
    readonly type: UPSERT_PAGE_ACTION_TYPES;
    constructor(payload: PageModel);
}
export declare class UpsertPageFailedAction implements Action {
    payload: any;
    readonly type: UPSERT_PAGE_ACTION_TYPES;
    constructor(payload: any);
}
export declare type UpsertPageActions = UpsertPageStartAction | UpsertPageSucceedAction | UpsertPageFailedAction;
