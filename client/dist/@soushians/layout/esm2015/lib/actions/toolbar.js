/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvdG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyxhQUFjLCtCQUErQjtJQUM3QyxTQUFVLDJCQUEyQjtJQUNyQyxTQUFVLDJCQUEyQjtJQUNyQyx5QkFBMEIsMkNBQTJDO0lBQ3JFLDBCQUEyQiw0Q0FBNEM7SUFDdkUsU0FBVSwyQkFBMkI7SUFDckMsV0FBWSw2QkFBNkI7OztBQUcxQyxNQUFNOztvQkFDVyxrQkFBa0IsQ0FBQyxXQUFXOztDQUM5Qzs7Ozs7QUFDRCxNQUFNOztvQkFDVyxrQkFBa0IsQ0FBQyxPQUFPOztDQUMxQzs7Ozs7QUFDRCxNQUFNOztvQkFDVyxrQkFBa0IsQ0FBQyxPQUFPOztDQUMxQzs7Ozs7QUFDRCxNQUFNOztvQkFDVyxrQkFBa0IsQ0FBQyx1QkFBdUI7O0NBQzFEOzs7OztBQUNELE1BQU07O29CQUNXLGtCQUFrQixDQUFDLHdCQUF3Qjs7Q0FDM0Q7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csa0JBQWtCLENBQUMsT0FBTzs7Q0FDMUM7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csa0JBQWtCLENBQUMsU0FBUzs7Q0FDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFRvb2xiYXJBY3Rpb25UeXBlcyB7XHJcblx0Q09NUE9SVEFCTEUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIENPTVBPUlRBQkxFXCIsXHJcblx0Q09NUEFDVCA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUEFDVFwiLFxyXG5cdFNVTU1BUlkgPSBcIltMYXlvdXRdW1RPT0xCQVJdIFNVTU1BUllcIixcclxuXHRFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRU5BQkxFX0NPTUZPUlRBQkxFX01PREVcIixcclxuXHRESVNCQUxFX0NPTUZPUlRBQkxFX01PREUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdFZJU0lCTEUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIFZJU0lCTEVcIixcclxuXHRJTlZJU0lCTEUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIElOVklTSUJMRVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkNPTVBBQ1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5FTkFCTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5ESVNCQUxFX0NPTUZPUlRBQkxFX01PREU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFZpc2libGVUb29sYmFyQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEludmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFO1xyXG59XHJcbmV4cG9ydCB0eXBlIFRvb2xiYXJBY3Rpb25zID1cclxuXHR8IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb25cclxuXHR8IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcblx0fCBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IFZpc2libGVUb29sYmFyQWN0aW9uXHJcblx0fCBJbnZpc2libGVUb29sYmFyQWN0aW9uO1xyXG4iXX0=