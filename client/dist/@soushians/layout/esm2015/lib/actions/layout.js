/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export const /** @type {?} */ OPEN_SIDENAV = "[Layout] Open Sidenav";
export const /** @type {?} */ CLOSE_SIDENAV = "[Layout] Close Sidenav";
/** @enum {string} */
const LayoutActionTypes = {
    UPDATE_LAYOUT_CONFIG: "[Layout] UPDATE_LAYOUT_CONFIG",
    DO_SIGNOUT: "[Layout] do signout",
    TITLE_CHANGED: "[LAYOUT] TITLE_CHANGED",
    CHANGE_LAYOUT: "[Layout] Change Layout",
    CHANGE_MAIN_SIDENAVE_MODE: "[Layout] Change main sidenav mode",
    OPEN_SECOND_SIDEBAR: "[Layout] Open Second Sidebar",
    CLOSE_SECOND_SIDEBAR: "[Layout] Close Second Sidebar",
    CHANGE_SECOND_SIDENAV_MODE: "[Layout] Change second sidenav mode",
    FULLSCREEN: "[Layout] FULLSCREEN",
    EXIT_FULLSCREEN: "[Layout] EXIT_FULLSCREEN",
    TOGGLE_FULLSCREEN: "[Layout] TOGGLE_FULLSCREEN",
};
export { LayoutActionTypes };
export class UpdateLayoutConfigAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
    }
}
function UpdateLayoutConfigAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpdateLayoutConfigAction.prototype.type;
    /** @type {?} */
    UpdateLayoutConfigAction.prototype.payload;
}
export class OpenSidenavAction {
    constructor() {
        this.type = OPEN_SIDENAV;
    }
}
function OpenSidenavAction_tsickle_Closure_declarations() {
    /** @type {?} */
    OpenSidenavAction.prototype.type;
}
export class CloseSidenavAction {
    constructor() {
        this.type = CLOSE_SIDENAV;
    }
}
function CloseSidenavAction_tsickle_Closure_declarations() {
    /** @type {?} */
    CloseSidenavAction.prototype.type;
}
export class ChangeLayout {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
        this.type = LayoutActionTypes.CHANGE_LAYOUT;
    }
}
function ChangeLayout_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeLayout.prototype.type;
    /** @type {?} */
    ChangeLayout.prototype.name;
}
export class ChangeSideNavMode {
    /**
     * @param {?} mode
     */
    constructor(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    }
}
function ChangeSideNavMode_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeSideNavMode.prototype.type;
    /** @type {?} */
    ChangeSideNavMode.prototype.mode;
}
export class ChangeSecondSidenavMode {
    /**
     * @param {?} mode
     */
    constructor(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    }
}
function ChangeSecondSidenavMode_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeSecondSidenavMode.prototype.type;
    /** @type {?} */
    ChangeSecondSidenavMode.prototype.mode;
}
export class DoSignoutAction {
    constructor() {
        this.type = LayoutActionTypes.DO_SIGNOUT;
    }
}
function DoSignoutAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DoSignoutAction.prototype.type;
}
export class TitleChangedAction {
    /**
     * @param {?} title
     */
    constructor(title) {
        this.title = title;
        this.type = LayoutActionTypes.TITLE_CHANGED;
    }
}
function TitleChangedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    TitleChangedAction.prototype.type;
    /** @type {?} */
    TitleChangedAction.prototype.title;
}
export class OpenSecondSidenavAction {
    constructor() {
        this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
    }
}
function OpenSecondSidenavAction_tsickle_Closure_declarations() {
    /** @type {?} */
    OpenSecondSidenavAction.prototype.type;
}
export class CloseSecondSidenavAction {
    constructor() {
        this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
    }
}
function CloseSecondSidenavAction_tsickle_Closure_declarations() {
    /** @type {?} */
    CloseSecondSidenavAction.prototype.type;
}
export class FullscreenAction {
    constructor() {
        this.type = LayoutActionTypes.FULLSCREEN;
    }
}
function FullscreenAction_tsickle_Closure_declarations() {
    /** @type {?} */
    FullscreenAction.prototype.type;
}
export class ExitFullscreenAction {
    constructor() {
        this.type = LayoutActionTypes.EXIT_FULLSCREEN;
    }
}
function ExitFullscreenAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ExitFullscreenAction.prototype.type;
}
export class ToggleFullscreenAction {
    constructor() {
        this.type = LayoutActionTypes.TOGGLE_FULLSCREEN;
    }
}
function ToggleFullscreenAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ToggleFullscreenAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQUcsdUJBQXVCLENBQUM7QUFDcEQsTUFBTSxDQUFDLHVCQUFNLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQzs7OzBCQUc5QiwrQkFBK0I7Z0JBQ3pDLHFCQUFxQjttQkFDbEIsd0JBQXdCO21CQUN4Qix3QkFBd0I7K0JBQ1osbUNBQW1DO3lCQUN6Qyw4QkFBOEI7MEJBQzdCLCtCQUErQjtnQ0FDekIscUNBQXFDO2dCQUNyRCxxQkFBcUI7cUJBQ2hCLDBCQUEwQjt1QkFDeEIsNEJBQTRCOzs7QUFHakQsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXlDO1FBQXpDLFlBQU8sR0FBUCxPQUFPLENBQWtDO29CQUQ1QyxpQkFBaUIsQ0FBQyxvQkFBb0I7S0FDVTtDQUNoRTs7Ozs7OztBQUNELE1BQU07O29CQUNXLFlBQVk7O0NBQzVCOzs7OztBQUVELE1BQU07O29CQUNXLGFBQWE7O0NBQzdCOzs7OztBQUVELE1BQU07Ozs7SUFFTCxZQUFtQixJQUFrRDtRQUFsRCxTQUFJLEdBQUosSUFBSSxDQUE4QztvQkFEckQsaUJBQWlCLENBQUMsYUFBYTtLQUMwQjtDQUN6RTs7Ozs7OztBQUVELE1BQU07Ozs7SUFFTCxZQUFtQixJQUE4QjtRQUE5QixTQUFJLEdBQUosSUFBSSxDQUEwQjtvQkFEakMsaUJBQWlCLENBQUMseUJBQXlCO0tBQ047Q0FDckQ7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsSUFBOEI7UUFBOUIsU0FBSSxHQUFKLElBQUksQ0FBMEI7b0JBRGpDLGlCQUFpQixDQUFDLDBCQUEwQjtLQUNQO0NBQ3JEOzs7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsVUFBVTs7Q0FDNUM7Ozs7O0FBRUQsTUFBTTs7OztJQUVMLFlBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQURoQixpQkFBaUIsQ0FBQyxhQUFhO0tBQ1g7Q0FDcEM7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDVyxpQkFBaUIsQ0FBQyxtQkFBbUI7O0NBQ3JEOzs7OztBQUVELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLG9CQUFvQjs7Q0FDdEQ7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsVUFBVTs7Q0FDNUM7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsZUFBZTs7Q0FDakQ7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsaUJBQWlCOztDQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT1BFTl9TSURFTkFWID0gXCJbTGF5b3V0XSBPcGVuIFNpZGVuYXZcIjtcclxuZXhwb3J0IGNvbnN0IENMT1NFX1NJREVOQVYgPSBcIltMYXlvdXRdIENsb3NlIFNpZGVuYXZcIjtcclxuXHJcbmV4cG9ydCBlbnVtIExheW91dEFjdGlvblR5cGVzIHtcclxuXHRVUERBVEVfTEFZT1VUX0NPTkZJRyA9IFwiW0xheW91dF0gVVBEQVRFX0xBWU9VVF9DT05GSUdcIixcclxuXHRET19TSUdOT1VUID0gXCJbTGF5b3V0XSBkbyBzaWdub3V0XCIsXHJcblx0VElUTEVfQ0hBTkdFRCA9IFwiW0xBWU9VVF0gVElUTEVfQ0hBTkdFRFwiLFxyXG5cdENIQU5HRV9MQVlPVVQgPSBcIltMYXlvdXRdIENoYW5nZSBMYXlvdXRcIixcclxuXHRDSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFID0gXCJbTGF5b3V0XSBDaGFuZ2UgbWFpbiBzaWRlbmF2IG1vZGVcIixcclxuXHRPUEVOX1NFQ09ORF9TSURFQkFSID0gXCJbTGF5b3V0XSBPcGVuIFNlY29uZCBTaWRlYmFyXCIsXHJcblx0Q0xPU0VfU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIENsb3NlIFNlY29uZCBTaWRlYmFyXCIsXHJcblx0Q0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBzZWNvbmQgc2lkZW5hdiBtb2RlXCIsXHJcblx0RlVMTFNDUkVFTiA9IFwiW0xheW91dF0gRlVMTFNDUkVFTlwiLFxyXG5cdEVYSVRfRlVMTFNDUkVFTiA9IFwiW0xheW91dF0gRVhJVF9GVUxMU0NSRUVOXCIsXHJcblx0VE9HR0xFX0ZVTExTQ1JFRU4gPSBcIltMYXlvdXRdIFRPR0dMRV9GVUxMU0NSRUVOXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlVQREFURV9MQVlPVVRfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXJ0aWFsPExheW91dE1vZHVsZUNvbmZpZ01vZGVsPikge31cclxufVxyXG5leHBvcnQgY2xhc3MgT3BlblNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBPUEVOX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDTE9TRV9TSURFTkFWO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlTGF5b3V0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTaWRlTmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG1vZGU6IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIikge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGl0bGVDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5PUEVOX1NFQ09ORF9TSURFQkFSO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFeGl0RnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTjtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlRnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPVxyXG5cdHwgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uXHJcblx0fCBPcGVuU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTaWRlbmF2QWN0aW9uXHJcblx0fCBDaGFuZ2VTaWRlTmF2TW9kZVxyXG5cdHwgQ2hhbmdlTGF5b3V0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFRpdGxlQ2hhbmdlZEFjdGlvblxyXG5cdHwgT3BlblNlY29uZFNpZGVuYXZBY3Rpb25cclxuXHR8IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgRnVsbHNjcmVlbkFjdGlvblxyXG5cdHwgRXhpdEZ1bGxzY3JlZW5BY3Rpb25cclxuXHR8IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlXHJcblx0fCBUb2dnbGVGdWxsc2NyZWVuQWN0aW9uO1xyXG4iXX0=