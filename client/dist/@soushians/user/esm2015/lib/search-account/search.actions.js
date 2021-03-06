/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    SearchFailed.prototype.type;
}
export class ClearSearchedUser {
    constructor() {
        this.type = SearchActionTypes.CLEAR_SEARCHED_USER;
    }
}
if (false) {
    /** @type {?} */
    ClearSearchedUser.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsUUFBUyx1QkFBdUI7SUFDaEMsY0FBZSw2QkFBNkI7SUFDNUMsZ0JBQWlCLCtCQUErQjtJQUNoRCxlQUFnQiw4QkFBOEI7SUFDOUMscUJBQXNCLG9DQUFvQzs7O0FBRzNELE1BQU0sT0FBTyxNQUFNOzs7O0lBRWxCLFlBQW1CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBRDNDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDYyxDQUFDO0NBQ3hEOzs7SUFGQSxzQkFBeUM7O0lBQzdCLHlCQUF3Qzs7QUFFckQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU3QixZQUFtQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUQzQyxTQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0lBQ1EsQ0FBQztDQUN4RDs7O0lBRkEsaUNBQStDOztJQUNuQyxvQ0FBd0M7O0FBRXJELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXpCLFlBQW1CLE9BQWtDO1FBQWxDLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBRDVDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDTyxDQUFDO0NBQ3pEOzs7SUFGQSw2QkFBaUQ7O0lBQ3JDLGdDQUF5Qzs7QUFFdEQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDVSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7Q0FBQTs7O0lBREEsNEJBQWdEOztBQUVqRCxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBQ1UsU0FBSSxHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELENBQUM7Q0FBQTs7O0lBREEsaUNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNlYXJjaEFjdGlvblR5cGVzIHtcclxuXHRTRUFSQ0ggPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSFwiLFxyXG5cdFNFQVJDSF9TVEFSVCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NUQVJUXCIsXHJcblx0U0VBUkNIX1NVQ0NFRUQgPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVUNDRUVEXCIsXHJcblx0U0VBUkNIX0ZBSUxFRCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIX0ZBSUxFRFwiLFxyXG5cdENMRUFSX1NFQVJDSEVEX1VTRVIgPSBcIltVU0VSXVtTRUFSQ0hdIENMRUFSX1NFQVJDSEVEX1VTRVJcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJTZWFyY2hlZFVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWFyY2hBY3Rpb24gPSBTZWFyY2ggfCBTZWFyY2hTdGFydEFjdGlvbiB8IFNlYXJjaFN1Y2NlZWQgfCBTZWFyY2hGYWlsZWQgfCBDbGVhclNlYXJjaGVkVXNlcjtcclxuIl19