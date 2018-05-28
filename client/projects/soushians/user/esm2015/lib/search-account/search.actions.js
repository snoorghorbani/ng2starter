/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const SearchActionTypes = {
    SEARCH: '[USER][SEARCH] SEARCH',
    SEARCH_START: '[USER][SEARCH] SEARCH_START',
    SEARCH_SUCCEED: '[USER][SEARCH] SEARCH_SUCCEED',
    SEARCH_FAILED: '[USER][SEARCH] SEARCH_FAILED',
    CLEAR_SEARCHED_USER: '[USER][SEARCH] CLEAR_SEARCHED_USER',
};
export { SearchActionTypes };
export class Search {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH;
    }
}
function Search_tsickle_Closure_declarations() {
    /** @type {?} */
    Search.prototype.type;
    /** @type {?} */
    Search.prototype.payload;
}
export class SearchStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_START;
    }
}
function SearchStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchStartAction.prototype.type;
    /** @type {?} */
    SearchStartAction.prototype.payload;
}
export class SearchSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_SUCCEED;
    }
}
function SearchSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchSucceed.prototype.type;
    /** @type {?} */
    SearchSucceed.prototype.payload;
}
export class SearchFailed {
    constructor() {
        this.type = SearchActionTypes.SEARCH_FAILED;
    }
}
function SearchFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchFailed.prototype.type;
}
export class ClearSearchedUser {
    constructor() {
        this.type = SearchActionTypes.CLEAR_SEARCHED_USER;
    }
}
function ClearSearchedUser_tsickle_Closure_declarations() {
    /** @type {?} */
    ClearSearchedUser.prototype.type;
}
//# sourceMappingURL=search.actions.js.map
