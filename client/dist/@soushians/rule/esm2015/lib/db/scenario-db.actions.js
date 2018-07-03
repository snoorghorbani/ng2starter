/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ScenariosListActionTypes = {
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
function ScenariosListAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ScenariosListAction.prototype.type;
}
export class ScenariosListStartAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
    }
}
function ScenariosListStartAction_tsickle_Closure_declarations() {
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
function ScenariosListSucceedAction_tsickle_Closure_declarations() {
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
function ScenariosListFailedAction_tsickle_Closure_declarations() {
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
function UpsertScenarioAction_tsickle_Closure_declarations() {
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
function GetScenarioAction_tsickle_Closure_declarations() {
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
function ScenarioFechedAction_tsickle_Closure_declarations() {
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
function UpdateDbAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpdateDbAction.prototype.type;
    /** @type {?} */
    UpdateDbAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFLa0IsMENBQTBDOzBCQUNwQyxxQ0FBcUM7NEJBQ25DLHVDQUF1QzsyQkFDeEMsc0NBQXNDO1lBQ3JELDZDQUE2QztrQkFDdkMsNkJBQTZCO3NCQUN6QixpQ0FBaUM7ZUFFeEMsK0JBQStCOzs7QUFHNUMsTUFBTTs7b0JBQ1csd0JBQXdCLENBQUMsY0FBYzs7Q0FDdkQ7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csd0JBQXdCLENBQUMsb0JBQW9COztDQUM3RDs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7b0JBRDlCLHdCQUF3QixDQUFDLHNCQUFzQjtLQUNiO0NBQ2xEOzs7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csd0JBQXdCLENBQUMscUJBQXFCOztDQUM5RDs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7b0JBRDVCLHdCQUF3QixDQUFDLE1BQU07S0FDQztDQUNoRDs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFEbEIsd0JBQXdCLENBQUMsWUFBWTtLQUNmO0NBQ3RDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO29CQUQ1Qix3QkFBd0IsQ0FBQyxnQkFBZ0I7S0FDVDtDQUNoRDs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtvQkFEOUIsd0JBQXdCLENBQUMsU0FBUztLQUNBO0NBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0U0NFTkFSSU9TX0xJU1QgPSBcIltHV1RdW1NDRU5BUklPXVtEQl1bTElTVF0gU0NFTkFSSU9TX0xJU1RcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9TVEFSVCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1RBUlRcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9TVUNDRUVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9TVUNDRUVEXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfRkFJTEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9GQUlMRURcIixcclxuXHRVUFNFUlQgPSBcIltHV1RdW1NDRU5BUklPXVtEQl1bVVBTRVJUXSBTQ0VOQVJJT19VUFNFUlRcIixcclxuXHRHRVRfU0NFTkFSSU8gPSBcIltTQ0VOQVJJT11bREJdIEdFVF9TQ0VOQVJJT1wiLFxyXG5cdFNDRU5BUklPX0ZFVENIRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPX0ZFVENIRURcIixcclxuXHQvLy8gbmV3IHZpc2lvblxyXG5cdFVQREFURV9EQiA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXSBVUERBVEVfREJcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFNjZW5hcmlvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLkdFVF9TQ0VOQVJJTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb0ZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT19GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVEYkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUERBVEVfREI7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWxbXSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2NlbmFyaW9zTGlzdEFjdGlvbnMgPVxyXG5cdHwgU2NlbmFyaW9zTGlzdEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0U2NlbmFyaW9BY3Rpb25cclxuXHR8IEdldFNjZW5hcmlvQWN0aW9uXHJcblx0fCBTY2VuYXJpb0ZlY2hlZEFjdGlvblxyXG5cdHwgVXBkYXRlRGJBY3Rpb247XHJcbiJdfQ==