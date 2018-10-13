/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const SearchActionTypes = {
    SEARCH: "[USER][SEARCH] SEARCH",
    SEARCH_START: "[USER][SEARCH] SEARCH_START",
    SEARCH_SUCCEED: "[USER][SEARCH] SEARCH_SUCCEED",
    SEARCH_FAILED: "[USER][SEARCH] SEARCH_FAILED",
    CLEAR_SEARCHED_USER: "[USER][SEARCH] CLEAR_SEARCHED_USER",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O1lBS1UsdUJBQXVCO2tCQUNqQiw2QkFBNkI7b0JBQzNCLCtCQUErQjttQkFDaEMsOEJBQThCO3lCQUN4QixvQ0FBb0M7OztBQUczRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7b0JBRHBDLGlCQUFpQixDQUFDLE1BQU07S0FDZ0I7Q0FDeEQ7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7b0JBRHBDLGlCQUFpQixDQUFDLFlBQVk7S0FDVTtDQUN4RDs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFrQztRQUFsQyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtvQkFEckMsaUJBQWlCLENBQUMsY0FBYztLQUNTO0NBQ3pEOzs7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsYUFBYTs7Q0FDL0M7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsbUJBQW1COztDQUNyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBTZWFyY2hBY3Rpb25UeXBlcyB7XHJcblx0U0VBUkNIID0gXCJbVVNFUl1bU0VBUkNIXSBTRUFSQ0hcIixcclxuXHRTRUFSQ0hfU1RBUlQgPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVEFSVFwiLFxyXG5cdFNFQVJDSF9TVUNDRUVEID0gXCJbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1VDQ0VFRFwiLFxyXG5cdFNFQVJDSF9GQUlMRUQgPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSF9GQUlMRURcIixcclxuXHRDTEVBUl9TRUFSQ0hFRF9VU0VSID0gXCJbVVNFUl1bU0VBUkNIXSBDTEVBUl9TRUFSQ0hFRF9VU0VSXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyU2VhcmNoZWRVc2VyIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2VhcmNoQWN0aW9uID0gU2VhcmNoIHwgU2VhcmNoU3RhcnRBY3Rpb24gfCBTZWFyY2hTdWNjZWVkIHwgU2VhcmNoRmFpbGVkIHwgQ2xlYXJTZWFyY2hlZFVzZXI7XHJcbiJdfQ==