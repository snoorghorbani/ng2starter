/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var SearchActionTypes = {
    SEARCH: '[USER][SEARCH] SEARCH',
    SEARCH_START: '[USER][SEARCH] SEARCH_START',
    SEARCH_SUCCEED: '[USER][SEARCH] SEARCH_SUCCEED',
    SEARCH_FAILED: '[USER][SEARCH] SEARCH_FAILED',
    CLEAR_SEARCHED_USER: '[USER][SEARCH] CLEAR_SEARCHED_USER',
};
export { SearchActionTypes };
var Search = /** @class */ (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH;
    }
    return Search;
}());
export { Search };
if (false) {
    /** @type {?} */
    Search.prototype.type;
    /** @type {?} */
    Search.prototype.payload;
}
var SearchStartAction = /** @class */ (function () {
    function SearchStartAction(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_START;
    }
    return SearchStartAction;
}());
export { SearchStartAction };
if (false) {
    /** @type {?} */
    SearchStartAction.prototype.type;
    /** @type {?} */
    SearchStartAction.prototype.payload;
}
var SearchSucceed = /** @class */ (function () {
    function SearchSucceed(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_SUCCEED;
    }
    return SearchSucceed;
}());
export { SearchSucceed };
if (false) {
    /** @type {?} */
    SearchSucceed.prototype.type;
    /** @type {?} */
    SearchSucceed.prototype.payload;
}
var SearchFailed = /** @class */ (function () {
    function SearchFailed() {
        this.type = SearchActionTypes.SEARCH_FAILED;
    }
    return SearchFailed;
}());
export { SearchFailed };
if (false) {
    /** @type {?} */
    SearchFailed.prototype.type;
}
var ClearSearchedUser = /** @class */ (function () {
    function ClearSearchedUser() {
        this.type = SearchActionTypes.CLEAR_SEARCHED_USER;
    }
    return ClearSearchedUser;
}());
export { ClearSearchedUser };
if (false) {
    /** @type {?} */
    ClearSearchedUser.prototype.type;
}
/** @typedef {?} */
var SearchAction;
export { SearchAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0ksUUFBUyx1QkFBdUI7SUFDaEMsY0FBZSw2QkFBNkI7SUFDNUMsZ0JBQWlCLCtCQUErQjtJQUNoRCxlQUFnQiw4QkFBOEI7SUFDOUMscUJBQXNCLG9DQUFvQzs7O0FBRzlELElBQUE7SUFFSSxnQkFBbUIsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7b0JBRHBDLGlCQUFpQixDQUFDLE1BQU07S0FDaUI7aUJBZDdEO0lBZUMsQ0FBQTtBQUhELGtCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVJLDJCQUFtQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtvQkFEcEMsaUJBQWlCLENBQUMsWUFBWTtLQUNXOzRCQWxCN0Q7SUFtQkMsQ0FBQTtBQUhELDZCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVJLHVCQUFtQixPQUFrQztRQUFsQyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtvQkFEckMsaUJBQWlCLENBQUMsY0FBYztLQUNVO3dCQXRCOUQ7SUF1QkMsQ0FBQTtBQUhELHlCQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7b0JBQ29CLGlCQUFpQixDQUFDLGFBQWE7O3VCQXpCbkQ7SUEwQkMsQ0FBQTtBQUZELHdCQUVDOzs7OztBQUNELElBQUE7O29CQUNvQixpQkFBaUIsQ0FBQyxtQkFBbUI7OzRCQTVCekQ7SUE2QkMsQ0FBQTtBQUZELDZCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBTZWFyY2hBY3Rpb25UeXBlcyB7XHJcbiAgICBTRUFSQ0ggPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIJyxcclxuICAgIFNFQVJDSF9TVEFSVCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1RBUlQnLFxyXG4gICAgU0VBUkNIX1NVQ0NFRUQgPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NVQ0NFRUQnLFxyXG4gICAgU0VBUkNIX0ZBSUxFRCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfRkFJTEVEJyxcclxuICAgIENMRUFSX1NFQVJDSEVEX1VTRVIgPSAnW1VTRVJdW1NFQVJDSF0gQ0xFQVJfU0VBUkNIRURfVVNFUidcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJTZWFyY2hlZFVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLkNMRUFSX1NFQVJDSEVEX1VTRVI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBTZWFyY2hBY3Rpb24gPVxyXG4gICAgU2VhcmNoXHJcbiAgICB8IFNlYXJjaFN0YXJ0QWN0aW9uXHJcbiAgICB8IFNlYXJjaFN1Y2NlZWRcclxuICAgIHwgU2VhcmNoRmFpbGVkXHJcbiAgICB8IENsZWFyU2VhcmNoZWRVc2VyOyJdfQ==