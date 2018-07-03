/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function ScenariosListAction_tsickle_Closure_declarations() {
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
function ScenariosListStartAction_tsickle_Closure_declarations() {
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
function ScenariosListSucceedAction_tsickle_Closure_declarations() {
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
function ScenariosListFailedAction_tsickle_Closure_declarations() {
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
function UpsertScenarioAction_tsickle_Closure_declarations() {
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
function GetScenarioAction_tsickle_Closure_declarations() {
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
function ScenarioFechedAction_tsickle_Closure_declarations() {
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
function UpdateDbAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpdateDbAction.prototype.type;
    /** @type {?} */
    UpdateDbAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFLa0IsMENBQTBDOzBCQUNwQyxxQ0FBcUM7NEJBQ25DLHVDQUF1QzsyQkFDeEMsc0NBQXNDO1lBQ3JELDZDQUE2QztrQkFDdkMsNkJBQTZCO3NCQUN6QixpQ0FBaUM7ZUFFeEMsK0JBQStCOzs7QUFHNUMsSUFBQTs7b0JBQ2lCLHdCQUF3QixDQUFDLGNBQWM7OzhCQWpCeEQ7SUFrQkMsQ0FBQTtBQUZELCtCQUVDOzs7OztBQUNELElBQUE7O29CQUNpQix3QkFBd0IsQ0FBQyxvQkFBb0I7O21DQXBCOUQ7SUFxQkMsQ0FBQTtBQUZELG9DQUVDOzs7OztBQUNELElBQUE7SUFFQyxvQ0FBbUIsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7b0JBRDlCLHdCQUF3QixDQUFDLHNCQUFzQjtLQUNiO3FDQXhCbkQ7SUF5QkMsQ0FBQTtBQUhELHNDQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLHdCQUF3QixDQUFDLHFCQUFxQjs7b0NBM0IvRDtJQTRCQyxDQUFBO0FBRkQscUNBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLDhCQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtvQkFENUIsd0JBQXdCLENBQUMsTUFBTTtLQUNDOytCQS9CakQ7SUFnQ0MsQ0FBQTtBQUhELGdDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDJCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFEbEIsd0JBQXdCLENBQUMsWUFBWTtLQUNmOzRCQW5DdkM7SUFvQ0MsQ0FBQTtBQUhELDZCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDhCQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtvQkFENUIsd0JBQXdCLENBQUMsZ0JBQWdCO0tBQ1Q7K0JBdkNqRDtJQXdDQyxDQUFBO0FBSEQsZ0NBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsd0JBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO29CQUQ5Qix3QkFBd0IsQ0FBQyxTQUFTO0tBQ0E7eUJBM0NuRDtJQTRDQyxDQUFBO0FBSEQsMEJBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzIHtcclxuXHRTQ0VOQVJJT1NfTElTVCA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXVtMSVNUXSBTQ0VOQVJJT1NfTElTVFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX1NUQVJUID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9TVEFSVFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX1NVQ0NFRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NVQ0NFRURcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9GQUlMRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFVQU0VSVCA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXVtVUFNFUlRdIFNDRU5BUklPX1VQU0VSVFwiLFxyXG5cdEdFVF9TQ0VOQVJJTyA9IFwiW1NDRU5BUklPXVtEQl0gR0VUX1NDRU5BUklPXCIsXHJcblx0U0NFTkFSSU9fRkVUQ0hFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9fRkVUQ0hFRFwiLFxyXG5cdC8vLyBuZXcgdmlzaW9uXHJcblx0VVBEQVRFX0RCID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdIFVQREFURV9EQlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFNjZW5hcmlvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuR0VUX1NDRU5BUklPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZURiQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQREFURV9EQjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTY2VuYXJpb3NMaXN0QWN0aW9ucyA9XHJcblx0fCBTY2VuYXJpb3NMaXN0QWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcHNlcnRTY2VuYXJpb0FjdGlvblxyXG5cdHwgR2V0U2NlbmFyaW9BY3Rpb25cclxuXHR8IFNjZW5hcmlvRmVjaGVkQWN0aW9uXHJcblx0fCBVcGRhdGVEYkFjdGlvbjtcclxuIl19