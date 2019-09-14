import { Action } from "@ngrx/store";
import { ProfileViewModel } from "../models/profile-view.model";
export declare enum SearchActionTypes {
    SEARCH = "[USER][SEARCH] SEARCH",
    SEARCH_START = "[USER][SEARCH] SEARCH_START",
    SEARCH_SUCCEED = "[USER][SEARCH] SEARCH_SUCCEED",
    SEARCH_FAILED = "[USER][SEARCH] SEARCH_FAILED",
    CLEAR_SEARCHED_USER = "[USER][SEARCH] CLEAR_SEARCHED_USER"
}
export declare class Search implements Action {
    payload: ProfileViewModel.Request;
    readonly type = SearchActionTypes.SEARCH;
    constructor(payload: ProfileViewModel.Request);
}
export declare class SearchStartAction implements Action {
    payload: ProfileViewModel.Request;
    readonly type = SearchActionTypes.SEARCH_START;
    constructor(payload: ProfileViewModel.Request);
}
export declare class SearchSucceed implements Action {
    payload: ProfileViewModel.Response;
    readonly type = SearchActionTypes.SEARCH_SUCCEED;
    constructor(payload: ProfileViewModel.Response);
}
export declare class SearchFailed implements Action {
    readonly type = SearchActionTypes.SEARCH_FAILED;
}
export declare class ClearSearchedUser implements Action {
    readonly type = SearchActionTypes.CLEAR_SEARCHED_USER;
}
export declare type SearchAction = Search | SearchStartAction | SearchSucceed | SearchFailed | ClearSearchedUser;
