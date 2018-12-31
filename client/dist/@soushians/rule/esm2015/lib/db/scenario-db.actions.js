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
export class ScenariosListAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListAction.prototype.type;
}
export class ScenariosListStartAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListStartAction.prototype.type;
}
export class ScenariosListSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListSucceedAction.prototype.type;
    /** @type {?} */
    ScenariosListSucceedAction.prototype.payload;
}
export class ScenariosListFailedAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_FAILED;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListFailedAction.prototype.type;
}
export class UpsertScenarioAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertScenarioAction.prototype.type;
    /** @type {?} */
    UpsertScenarioAction.prototype.payload;
}
export class GetScenarioAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.GET_SCENARIO;
    }
}
if (false) {
    /** @type {?} */
    GetScenarioAction.prototype.type;
    /** @type {?} */
    GetScenarioAction.prototype.payload;
}
export class ScenarioFechedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIO_FETCHED;
    }
}
if (false) {
    /** @type {?} */
    ScenarioFechedAction.prototype.type;
    /** @type {?} */
    ScenarioFechedAction.prototype.payload;
}
export class UpdateDbAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPDATE_DB;
    }
}
if (false) {
    /** @type {?} */
    UpdateDbAction.prototype.type;
    /** @type {?} */
    UpdateDbAction.prototype.payload;
}
/** @typedef {?} */
var ScenariosListActions;
export { ScenariosListActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLGdCQUFpQiwwQ0FBMEM7SUFDM0Qsc0JBQXVCLHFDQUFxQztJQUM1RCx3QkFBeUIsdUNBQXVDO0lBQ2hFLHVCQUF3QixzQ0FBc0M7SUFDOUQsUUFBUyw2Q0FBNkM7SUFDdEQsY0FBZSw2QkFBNkI7SUFDNUMsa0JBQW1CLGlDQUFpQztJQUVwRCxXQUFZLCtCQUErQjs7O0FBRzVDLE1BQU0sT0FBTyxtQkFBbUI7O1FBQy9CLFlBQWdCLHdCQUF3QixDQUFDLGNBQWMsQ0FBQzs7Q0FDeEQ7Ozs7O0FBQ0QsTUFBTSxPQUFPLHdCQUF3Qjs7UUFDcEMsWUFBZ0Isd0JBQXdCLENBQUMsb0JBQW9CLENBQUM7O0NBQzlEOzs7OztBQUNELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFFdEMsWUFBbUIsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFEOUMsWUFBZ0Isd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7S0FDZDtDQUNsRDs7Ozs7OztBQUNELE1BQU0sT0FBTyx5QkFBeUI7O1FBQ3JDLFlBQWdCLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDOztDQUMvRDs7Ozs7QUFDRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRWhDLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRDVDLFlBQWdCLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztLQUNBO0NBQ2hEOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU3QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQURsQyxZQUFnQix3QkFBd0IsQ0FBQyxZQUFZLENBQUM7S0FDaEI7Q0FDdEM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRWhDLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRDVDLFlBQWdCLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDO0tBQ1Y7Q0FDaEQ7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sY0FBYzs7OztJQUUxQixZQUFtQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUQ5QyxZQUFnQix3QkFBd0IsQ0FBQyxTQUFTLENBQUM7S0FDRDtDQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFNDRU5BUklPU19MSVNUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW0xJU1RdIFNDRU5BUklPU19MSVNUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1RBUlQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NUQVJUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1VDQ0VFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX0ZBSUxFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfRkFJTEVEXCIsXHJcblx0VVBTRVJUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW1VQU0VSVF0gU0NFTkFSSU9fVVBTRVJUXCIsXHJcblx0R0VUX1NDRU5BUklPID0gXCJbU0NFTkFSSU9dW0RCXSBHRVRfU0NFTkFSSU9cIixcclxuXHRTQ0VOQVJJT19GRVRDSEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT19GRVRDSEVEXCIsXHJcblx0Ly8vIG5ldyB2aXNpb25cclxuXHRVUERBVEVfREIgPSBcIltHV1RdW1NDRU5BUklPXVtEQl0gVVBEQVRFX0RCXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9GZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRGJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNjZW5hcmlvc0xpc3RBY3Rpb25zID1cclxuXHR8IFNjZW5hcmlvc0xpc3RBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFNjZW5hcmlvQWN0aW9uXHJcblx0fCBHZXRTY2VuYXJpb0FjdGlvblxyXG5cdHwgU2NlbmFyaW9GZWNoZWRBY3Rpb25cclxuXHR8IFVwZGF0ZURiQWN0aW9uO1xyXG4iXX0=