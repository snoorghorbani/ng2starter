/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ToolbarActionTypes = {
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
if (false) {
    /** @type {?} */
    ChangeToolbatToComfortableModeAction.prototype.type;
}
export class ChangeToolbatToCompactModeAction {
    constructor() {
        this.type = ToolbarActionTypes.COMPACT;
    }
}
if (false) {
    /** @type {?} */
    ChangeToolbatToCompactModeAction.prototype.type;
}
export class ChangeToolbatToSummaryModeAction {
    constructor() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
}
if (false) {
    /** @type {?} */
    ChangeToolbatToSummaryModeAction.prototype.type;
}
export class EnableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
}
if (false) {
    /** @type {?} */
    EnableComfortableModeAction.prototype.type;
}
export class DisableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
}
if (false) {
    /** @type {?} */
    DisableComfortableModeAction.prototype.type;
}
export class VisibleToolbarAction {
    constructor() {
        this.type = ToolbarActionTypes.VISIBLE;
    }
}
if (false) {
    /** @type {?} */
    VisibleToolbarAction.prototype.type;
}
export class InvisibleToolbarAction {
    constructor() {
        this.type = ToolbarActionTypes.INVISIBLE;
    }
}
if (false) {
    /** @type {?} */
    InvisibleToolbarAction.prototype.type;
}
/** @typedef {?} */
var ToolbarActions;
export { ToolbarActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvdG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyxhQUFjLCtCQUErQjtJQUM3QyxTQUFVLDJCQUEyQjtJQUNyQyxTQUFVLDJCQUEyQjtJQUNyQyx5QkFBMEIsMkNBQTJDO0lBQ3JFLDBCQUEyQiw0Q0FBNEM7SUFDdkUsU0FBVSwyQkFBMkI7SUFDckMsV0FBWSw2QkFBNkI7OztBQUcxQyxNQUFNLE9BQU8sb0NBQW9DOztRQUNoRCxZQUFnQixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7O0NBQy9DOzs7OztBQUNELE1BQU0sT0FBTyxnQ0FBZ0M7O1FBQzVDLFlBQWdCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzs7Q0FDM0M7Ozs7O0FBQ0QsTUFBTSxPQUFPLGdDQUFnQzs7UUFDNUMsWUFBZ0Isa0JBQWtCLENBQUMsT0FBTyxDQUFDOztDQUMzQzs7Ozs7QUFDRCxNQUFNLE9BQU8sMkJBQTJCOztRQUN2QyxZQUFnQixrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQzs7Q0FDM0Q7Ozs7O0FBQ0QsTUFBTSxPQUFPLDRCQUE0Qjs7UUFDeEMsWUFBZ0Isa0JBQWtCLENBQUMsd0JBQXdCLENBQUM7O0NBQzVEOzs7OztBQUNELE1BQU0sT0FBTyxvQkFBb0I7O1FBQ2hDLFlBQWdCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzs7Q0FDM0M7Ozs7O0FBQ0QsTUFBTSxPQUFPLHNCQUFzQjs7UUFDbEMsWUFBZ0Isa0JBQWtCLENBQUMsU0FBUyxDQUFDOztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IHR5cGUgVG9vbGJhckFjdGlvbnMgPVxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxuXHR8IEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgVmlzaWJsZVRvb2xiYXJBY3Rpb25cclxuXHR8IEludmlzaWJsZVRvb2xiYXJBY3Rpb247XHJcbiJdfQ==