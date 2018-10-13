/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ScenariosListActionTypes = {
    SCENARIOS_LIST: "[GWT][SCENARIO][DB][LIST] SCENARIOS_LIST",
    SCENARIOS_LIST_START: "[SCENARIO][DB] SCENARIOS_LIST_START",
    SCENARIOS_LIST_SUCCEED: "[SCENARIO][DB] SCENARIOS_LIST_SUCCEED",
    SCENARIOS_LIST_FAILED: "[SCENARIO][DB] SCENARIOS_LIST_FAILED",
    UPSERT: "[GWT][SCENARIO][DB][UPSERT] SCENARIO_UPSERT",
    GET_SCENARIO: "[SCENARIO][DB] GET_SCENARIO",
    SCENARIO_FETCHED: "[SCENARIO][DB] SCENARIO_FETCHED",
    UPDATE_DB: "[GWT][SCENARIO][DB] UPDATE_DB",
};
export { ScenariosListActionTypes };
var ScenariosListAction = /** @class */ (function () {
    function ScenariosListAction() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST;
    }
    return ScenariosListAction;
}());
export { ScenariosListAction };
if (false) {
    /** @type {?} */
    ScenariosListAction.prototype.type;
}
var ScenariosListStartAction = /** @class */ (function () {
    function ScenariosListStartAction() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
    }
    return ScenariosListStartAction;
}());
export { ScenariosListStartAction };
if (false) {
    /** @type {?} */
    ScenariosListStartAction.prototype.type;
}
var ScenariosListSucceedAction = /** @class */ (function () {
    function ScenariosListSucceedAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED;
    }
    return ScenariosListSucceedAction;
}());
export { ScenariosListSucceedAction };
if (false) {
    /** @type {?} */
    ScenariosListSucceedAction.prototype.type;
    /** @type {?} */
    ScenariosListSucceedAction.prototype.payload;
}
var ScenariosListFailedAction = /** @class */ (function () {
    function ScenariosListFailedAction() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_FAILED;
    }
    return ScenariosListFailedAction;
}());
export { ScenariosListFailedAction };
if (false) {
    /** @type {?} */
    ScenariosListFailedAction.prototype.type;
}
var UpsertScenarioAction = /** @class */ (function () {
    function UpsertScenarioAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPSERT;
    }
    return UpsertScenarioAction;
}());
export { UpsertScenarioAction };
if (false) {
    /** @type {?} */
    UpsertScenarioAction.prototype.type;
    /** @type {?} */
    UpsertScenarioAction.prototype.payload;
}
var GetScenarioAction = /** @class */ (function () {
    function GetScenarioAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.GET_SCENARIO;
    }
    return GetScenarioAction;
}());
export { GetScenarioAction };
if (false) {
    /** @type {?} */
    GetScenarioAction.prototype.type;
    /** @type {?} */
    GetScenarioAction.prototype.payload;
}
var ScenarioFechedAction = /** @class */ (function () {
    function ScenarioFechedAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIO_FETCHED;
    }
    return ScenarioFechedAction;
}());
export { ScenarioFechedAction };
if (false) {
    /** @type {?} */
    ScenarioFechedAction.prototype.type;
    /** @type {?} */
    ScenarioFechedAction.prototype.payload;
}
var UpdateDbAction = /** @class */ (function () {
    function UpdateDbAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPDATE_DB;
    }
    return UpdateDbAction;
}());
export { UpdateDbAction };
if (false) {
    /** @type {?} */
    UpdateDbAction.prototype.type;
    /** @type {?} */
    UpdateDbAction.prototype.payload;
}
/** @typedef {?} */
var ScenariosListActions;
export { ScenariosListActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLGdCQUFpQiwwQ0FBMEM7SUFDM0Qsc0JBQXVCLHFDQUFxQztJQUM1RCx3QkFBeUIsdUNBQXVDO0lBQ2hFLHVCQUF3QixzQ0FBc0M7SUFDOUQsUUFBUyw2Q0FBNkM7SUFDdEQsY0FBZSw2QkFBNkI7SUFDNUMsa0JBQW1CLGlDQUFpQztJQUVwRCxXQUFZLCtCQUErQjs7O0FBRzVDLElBQUE7O29CQUNpQix3QkFBd0IsQ0FBQyxjQUFjOzs4QkFqQnhEO0lBa0JDLENBQUE7QUFGRCwrQkFFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsd0JBQXdCLENBQUMsb0JBQW9COzttQ0FwQjlEO0lBcUJDLENBQUE7QUFGRCxvQ0FFQzs7Ozs7QUFDRCxJQUFBO0lBRUMsb0NBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO29CQUQ5Qix3QkFBd0IsQ0FBQyxzQkFBc0I7S0FDYjtxQ0F4Qm5EO0lBeUJDLENBQUE7QUFIRCxzQ0FHQzs7Ozs7OztBQUNELElBQUE7O29CQUNpQix3QkFBd0IsQ0FBQyxxQkFBcUI7O29DQTNCL0Q7SUE0QkMsQ0FBQTtBQUZELHFDQUVDOzs7OztBQUNELElBQUE7SUFFQyw4QkFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7b0JBRDVCLHdCQUF3QixDQUFDLE1BQU07S0FDQzsrQkEvQmpEO0lBZ0NDLENBQUE7QUFIRCxnQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFQywyQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRGxCLHdCQUF3QixDQUFDLFlBQVk7S0FDZjs0QkFuQ3ZDO0lBb0NDLENBQUE7QUFIRCw2QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQyw4QkFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7b0JBRDVCLHdCQUF3QixDQUFDLGdCQUFnQjtLQUNUOytCQXZDakQ7SUF3Q0MsQ0FBQTtBQUhELGdDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLHdCQUFtQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtvQkFEOUIsd0JBQXdCLENBQUMsU0FBUztLQUNBO3lCQTNDbkQ7SUE0Q0MsQ0FBQTtBQUhELDBCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0U0NFTkFSSU9TX0xJU1QgPSBcIltHV1RdW1NDRU5BUklPXVtEQl1bTElTVF0gU0NFTkFSSU9TX0xJU1RcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9TVEFSVCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1RBUlRcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9TVUNDRUVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9TVUNDRUVEXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfRkFJTEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9GQUlMRURcIixcclxuXHRVUFNFUlQgPSBcIltHV1RdW1NDRU5BUklPXVtEQl1bVVBTRVJUXSBTQ0VOQVJJT19VUFNFUlRcIixcclxuXHRHRVRfU0NFTkFSSU8gPSBcIltTQ0VOQVJJT11bREJdIEdFVF9TQ0VOQVJJT1wiLFxyXG5cdFNDRU5BUklPX0ZFVENIRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPX0ZFVENIRURcIixcclxuXHQvLy8gbmV3IHZpc2lvblxyXG5cdFVQREFURV9EQiA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXSBVUERBVEVfREJcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFNjZW5hcmlvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLkdFVF9TQ0VOQVJJTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb0ZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT19GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVEYkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUERBVEVfREI7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWxbXSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2NlbmFyaW9zTGlzdEFjdGlvbnMgPVxyXG5cdHwgU2NlbmFyaW9zTGlzdEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0U2NlbmFyaW9BY3Rpb25cclxuXHR8IEdldFNjZW5hcmlvQWN0aW9uXHJcblx0fCBTY2VuYXJpb0ZlY2hlZEFjdGlvblxyXG5cdHwgVXBkYXRlRGJBY3Rpb247XHJcbiJdfQ==