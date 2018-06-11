/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ToolbarActionTypes = {
    COMPORTABLE: "[Layout][TOOLBAR] COMPORTABLE",
    COMPACT: "[Layout][TOOLBAR] COMPACT",
    SUMMARY: "[Layout][TOOLBAR] SUMMARY",
    ENABLE_COMFORTABLE_MODE: "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE",
    DISBALE_COMFORTABLE_MODE: "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE",
    VISIBLE: "[Layout][TOOLBAR] VISIBLE",
    INVISIBLE: "[Layout][TOOLBAR] INVISIBLE",
};
export { ToolbarActionTypes };
export class ChangeToolbatToComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.COMPORTABLE;
    }
}
function ChangeToolbatToComfortableModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeToolbatToComfortableModeAction.prototype.type;
}
export class ChangeToolbatToCompactModeAction {
    constructor() {
        this.type = ToolbarActionTypes.COMPACT;
    }
}
function ChangeToolbatToCompactModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeToolbatToCompactModeAction.prototype.type;
}
export class ChangeToolbatToSummaryModeAction {
    constructor() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
}
function ChangeToolbatToSummaryModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeToolbatToSummaryModeAction.prototype.type;
}
export class EnableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
}
function EnableComfortableModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EnableComfortableModeAction.prototype.type;
}
export class DisableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
}
function DisableComfortableModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DisableComfortableModeAction.prototype.type;
}
export class VisibleToolbarAction {
    constructor() {
        this.type = ToolbarActionTypes.VISIBLE;
    }
}
function VisibleToolbarAction_tsickle_Closure_declarations() {
    /** @type {?} */
    VisibleToolbarAction.prototype.type;
}
export class InvisibleToolbarModeAction {
    constructor() {
        this.type = ToolbarActionTypes.INVISIBLE;
    }
}
function InvisibleToolbarModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    InvisibleToolbarModeAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvdG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7aUJBR2UsK0JBQStCO2FBQ25DLDJCQUEyQjthQUMzQiwyQkFBMkI7NkJBQ1gsMkNBQTJDOzhCQUMxQyw0Q0FBNEM7YUFDN0QsMkJBQTJCO2VBQ3pCLDZCQUE2Qjs7O0FBRzFDLE1BQU07O29CQUNXLGtCQUFrQixDQUFDLFdBQVc7O0NBQzlDOzs7OztBQUNELE1BQU07O29CQUNXLGtCQUFrQixDQUFDLE9BQU87O0NBQzFDOzs7OztBQUNELE1BQU07O29CQUNXLGtCQUFrQixDQUFDLE9BQU87O0NBQzFDOzs7OztBQUNELE1BQU07O29CQUNXLGtCQUFrQixDQUFDLHVCQUF1Qjs7Q0FDMUQ7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csa0JBQWtCLENBQUMsd0JBQXdCOztDQUMzRDs7Ozs7QUFDRCxNQUFNOztvQkFDVyxrQkFBa0IsQ0FBQyxPQUFPOztDQUMxQzs7Ozs7QUFDRCxNQUFNOztvQkFDVyxrQkFBa0IsQ0FBQyxTQUFTOztDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhck1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFO1xyXG59XHJcbmV4cG9ydCB0eXBlIFRvb2xiYXJBY3Rpb25zID1cclxuXHR8IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb25cclxuXHR8IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcblx0fCBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IFZpc2libGVUb29sYmFyQWN0aW9uXHJcblx0fCBJbnZpc2libGVUb29sYmFyTW9kZUFjdGlvbjtcclxuIl19