import { Action } from '@ngrx/store';

import { ProfileViewModel } from '../models';

export enum SearchActionTypes {
    SEARCH = '[USER][SEARCH] SEARCH',
    SEARCH_START = '[USER][SEARCH] SEARCH_START',
    SEARCH_SUCCEED = '[USER][SEARCH] SEARCH_SUCCEED',
    SEARCH_FAILED = '[USER][SEARCH] SEARCH_FAILED',
    CLEAR_SEARCHED_USER = '[USER][SEARCH] CLEAR_SEARCHED_USER'
}

export class Search implements Action {
    readonly type = SearchActionTypes.SEARCH;
    constructor(public payload: ProfileViewModel.Request) { }
}
export class SearchStartAction implements Action {
    readonly type = SearchActionTypes.SEARCH_START;
    constructor(public payload: ProfileViewModel.Request) { }
}
export class SearchSucceed implements Action {
    readonly type = SearchActionTypes.SEARCH_SUCCEED;
    constructor(public payload: ProfileViewModel.Response) { }
}
export class SearchFailed implements Action {
    readonly type = SearchActionTypes.SEARCH_FAILED;
}
export class ClearSearchedUser implements Action {
    readonly type = SearchActionTypes.CLEAR_SEARCHED_USER;
}


export type SearchAction =
    Search
    | SearchStartAction
    | SearchSucceed
    | SearchFailed
    | ClearSearchedUser;