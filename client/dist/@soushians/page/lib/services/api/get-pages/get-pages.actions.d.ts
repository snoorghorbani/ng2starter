import { Action } from "@ngrx/store";
import { PageModel } from "../../../models/page.model";
export declare const enum GET_PAGES_ACTION_TYPES {
    START = "[GET_PAGES][API][GetPages] start",
    SUCCEED = "[GET_PAGES][API][GetPages] succeed",
    FAILED = "[GET_PAGES][API][GetPages] failed"
}
export declare class GetPagesStartAction implements Action {
    readonly type = GET_PAGES_ACTION_TYPES.START;
}
export declare class GetPagesSucceedAction implements Action {
    payload: PageModel[];
    readonly type = GET_PAGES_ACTION_TYPES.SUCCEED;
    constructor(payload: PageModel[]);
}
export declare class GetPagesFailedAction implements Action {
    payload: any;
    readonly type = GET_PAGES_ACTION_TYPES.FAILED;
    constructor(payload: any);
}
export declare type GetPagesActions = GetPagesStartAction | GetPagesSucceedAction | GetPagesFailedAction;
