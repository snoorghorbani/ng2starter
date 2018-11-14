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
var ChangeToolbatToComfortableModeAction = /** @class */ (function () {
    function ChangeToolbatToComfortableModeAction() {
        this.type = ToolbarActionTypes.COMPORTABLE;
    }
    return ChangeToolbatToComfortableModeAction;
}());
export { ChangeToolbatToComfortableModeAction };
if (false) {
    /** @type {?} */
    ChangeToolbatToComfortableModeAction.prototype.type;
}
var ChangeToolbatToCompactModeAction = /** @class */ (function () {
    function ChangeToolbatToCompactModeAction() {
        this.type = ToolbarActionTypes.COMPACT;
    }
    return ChangeToolbatToCompactModeAction;
}());
export { ChangeToolbatToCompactModeAction };
if (false) {
    /** @type {?} */
    ChangeToolbatToCompactModeAction.prototype.type;
}
var ChangeToolbatToSummaryModeAction = /** @class */ (function () {
    function ChangeToolbatToSummaryModeAction() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
    return ChangeToolbatToSummaryModeAction;
}());
export { ChangeToolbatToSummaryModeAction };
if (false) {
    /** @type {?} */
    ChangeToolbatToSummaryModeAction.prototype.type;
}
var EnableComfortableModeAction = /** @class */ (function () {
    function EnableComfortableModeAction() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
    return EnableComfortableModeAction;
}());
export { EnableComfortableModeAction };
if (false) {
    /** @type {?} */
    EnableComfortableModeAction.prototype.type;
}
var DisableComfortableModeAction = /** @class */ (function () {
    function DisableComfortableModeAction() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
    return DisableComfortableModeAction;
}());
export { DisableComfortableModeAction };
if (false) {
    /** @type {?} */
    DisableComfortableModeAction.prototype.type;
}
var VisibleToolbarAction = /** @class */ (function () {
    function VisibleToolbarAction() {
        this.type = ToolbarActionTypes.VISIBLE;
    }
    return VisibleToolbarAction;
}());
export { VisibleToolbarAction };
if (false) {
    /** @type {?} */
    VisibleToolbarAction.prototype.type;
}
var InvisibleToolbarAction = /** @class */ (function () {
    function InvisibleToolbarAction() {
        this.type = ToolbarActionTypes.INVISIBLE;
    }
    return InvisibleToolbarAction;
}());
export { InvisibleToolbarAction };
if (false) {
    /** @type {?} */
    InvisibleToolbarAction.prototype.type;
}
/** @typedef {?} */
var ToolbarActions;
export { ToolbarActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvdG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyxhQUFjLCtCQUErQjtJQUM3QyxTQUFVLDJCQUEyQjtJQUNyQyxTQUFVLDJCQUEyQjtJQUNyQyx5QkFBMEIsMkNBQTJDO0lBQ3JFLDBCQUEyQiw0Q0FBNEM7SUFDdkUsU0FBVSwyQkFBMkI7SUFDckMsV0FBWSw2QkFBNkI7OztBQUcxQyxJQUFBOztvQkFDaUIsa0JBQWtCLENBQUMsV0FBVzs7K0NBYi9DO0lBY0MsQ0FBQTtBQUZELGdEQUVDOzs7OztBQUNELElBQUE7O29CQUNpQixrQkFBa0IsQ0FBQyxPQUFPOzsyQ0FoQjNDO0lBaUJDLENBQUE7QUFGRCw0Q0FFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsa0JBQWtCLENBQUMsT0FBTzs7MkNBbkIzQztJQW9CQyxDQUFBO0FBRkQsNENBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLGtCQUFrQixDQUFDLHVCQUF1Qjs7c0NBdEIzRDtJQXVCQyxDQUFBO0FBRkQsdUNBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLGtCQUFrQixDQUFDLHdCQUF3Qjs7dUNBekI1RDtJQTBCQyxDQUFBO0FBRkQsd0NBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLGtCQUFrQixDQUFDLE9BQU87OytCQTVCM0M7SUE2QkMsQ0FBQTtBQUZELGdDQUVDOzs7OztBQUNELElBQUE7O29CQUNpQixrQkFBa0IsQ0FBQyxTQUFTOztpQ0EvQjdDO0lBZ0NDLENBQUE7QUFGRCxrQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IHR5cGUgVG9vbGJhckFjdGlvbnMgPVxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxuXHR8IEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgVmlzaWJsZVRvb2xiYXJBY3Rpb25cclxuXHR8IEludmlzaWJsZVRvb2xiYXJBY3Rpb247XHJcbiJdfQ==