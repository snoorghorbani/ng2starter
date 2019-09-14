/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var SearchActionTypes = {
    SEARCH: "[USER][SEARCH] SEARCH",
    SEARCH_START: "[USER][SEARCH] SEARCH_START",
    SEARCH_SUCCEED: "[USER][SEARCH] SEARCH_SUCCEED",
    SEARCH_FAILED: "[USER][SEARCH] SEARCH_FAILED",
    CLEAR_SEARCHED_USER: "[USER][SEARCH] CLEAR_SEARCHED_USER",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsUUFBUyx1QkFBdUI7SUFDaEMsY0FBZSw2QkFBNkI7SUFDNUMsZ0JBQWlCLCtCQUErQjtJQUNoRCxlQUFnQiw4QkFBOEI7SUFDOUMscUJBQXNCLG9DQUFvQzs7O0FBRzNEO0lBRUMsZ0JBQW1CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBRDNDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDYyxDQUFDO0lBQ3pELGFBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHNCQUF5Qzs7SUFDN0IseUJBQXdDOztBQUVyRDtJQUVDLDJCQUFtQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUQzQyxTQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0lBQ1EsQ0FBQztJQUN6RCx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsaUNBQStDOztJQUNuQyxvQ0FBd0M7O0FBRXJEO0lBRUMsdUJBQW1CLE9BQWtDO1FBQWxDLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBRDVDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDTyxDQUFDO0lBQzFELG9CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSw2QkFBaUQ7O0lBQ3JDLGdDQUF5Qzs7QUFFdEQ7SUFBQTtRQUNVLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSw0QkFBZ0Q7O0FBRWpEO0lBQUE7UUFDVSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxpQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoQWN0aW9uVHlwZXMge1xyXG5cdFNFQVJDSCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIXCIsXHJcblx0U0VBUkNIX1NUQVJUID0gXCJbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1RBUlRcIixcclxuXHRTRUFSQ0hfU1VDQ0VFRCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NVQ0NFRURcIixcclxuXHRTRUFSQ0hfRkFJTEVEID0gXCJbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfRkFJTEVEXCIsXHJcblx0Q0xFQVJfU0VBUkNIRURfVVNFUiA9IFwiW1VTRVJdW1NFQVJDSF0gQ0xFQVJfU0VBUkNIRURfVVNFUlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2ggaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0g7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDbGVhclNlYXJjaGVkVXNlciBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLkNMRUFSX1NFQVJDSEVEX1VTRVI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNlYXJjaEFjdGlvbiA9IFNlYXJjaCB8IFNlYXJjaFN0YXJ0QWN0aW9uIHwgU2VhcmNoU3VjY2VlZCB8IFNlYXJjaEZhaWxlZCB8IENsZWFyU2VhcmNoZWRVc2VyO1xyXG4iXX0=