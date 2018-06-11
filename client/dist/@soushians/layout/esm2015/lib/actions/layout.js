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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQUcsdUJBQXVCLENBQUM7QUFDcEQsTUFBTSxDQUFDLHVCQUFNLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQzs7OzBCQUc5QiwrQkFBK0I7Z0JBQ3pDLHFCQUFxQjttQkFDbEIsd0JBQXdCO21CQUN4Qix3QkFBd0I7K0JBQ1osbUNBQW1DO3lCQUN6Qyw4QkFBOEI7MEJBQzdCLCtCQUErQjtnQ0FDekIscUNBQXFDOzs7QUFHbkUsTUFBTTs7OztJQUVMLFlBQW1CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO29CQUQ3QixpQkFBaUIsQ0FBQyxvQkFBb0I7S0FDTDtDQUNqRDs7Ozs7OztBQUNELE1BQU07O29CQUNXLFlBQVk7O0NBQzVCOzs7OztBQUVELE1BQU07O29CQUNXLGFBQWE7O0NBQzdCOzs7OztBQUVELE1BQU07Ozs7SUFFTCxZQUFtQixJQUFrRDtRQUFsRCxTQUFJLEdBQUosSUFBSSxDQUE4QztvQkFEckQsaUJBQWlCLENBQUMsYUFBYTtLQUMwQjtDQUN6RTs7Ozs7OztBQUVELE1BQU07Ozs7SUFFTCxZQUFtQixJQUE4QjtRQUE5QixTQUFJLEdBQUosSUFBSSxDQUEwQjtvQkFEakMsaUJBQWlCLENBQUMseUJBQXlCO0tBQ047Q0FDckQ7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsSUFBOEI7UUFBOUIsU0FBSSxHQUFKLElBQUksQ0FBMEI7b0JBRGpDLGlCQUFpQixDQUFDLDBCQUEwQjtLQUNQO0NBQ3JEOzs7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsVUFBVTs7Q0FDNUM7Ozs7O0FBRUQsTUFBTTs7OztJQUVMLFlBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQURoQixpQkFBaUIsQ0FBQyxhQUFhO0tBQ1g7Q0FDcEM7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDVyxpQkFBaUIsQ0FBQyxtQkFBbUI7O0NBQ3JEOzs7OztBQUVELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLG9CQUFvQjs7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPUEVOX1NJREVOQVYgPSBcIltMYXlvdXRdIE9wZW4gU2lkZW5hdlwiO1xyXG5leHBvcnQgY29uc3QgQ0xPU0VfU0lERU5BViA9IFwiW0xheW91dF0gQ2xvc2UgU2lkZW5hdlwiO1xyXG5cclxuZXhwb3J0IGVudW0gTGF5b3V0QWN0aW9uVHlwZXMge1xyXG5cdFVQREFURV9MQVlPVVRfQ09ORklHID0gXCJbTGF5b3V0XSBVUERBVEVfTEFZT1VUX0NPTkZJR1wiLFxyXG5cdERPX1NJR05PVVQgPSBcIltMYXlvdXRdIGRvIHNpZ25vdXRcIixcclxuXHRUSVRMRV9DSEFOR0VEID0gXCJbTEFZT1VUXSBUSVRMRV9DSEFOR0VEXCIsXHJcblx0Q0hBTkdFX0xBWU9VVCA9IFwiW0xheW91dF0gQ2hhbmdlIExheW91dFwiLFxyXG5cdENIQU5HRV9NQUlOX1NJREVOQVZFX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBtYWluIHNpZGVuYXYgbW9kZVwiLFxyXG5cdE9QRU5fU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIE9wZW4gU2Vjb25kIFNpZGViYXJcIixcclxuXHRDTE9TRV9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gQ2xvc2UgU2Vjb25kIFNpZGViYXJcIixcclxuXHRDSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIHNlY29uZCBzaWRlbmF2IG1vZGVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExheW91dENvbmZpZ01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IE9QRU5fU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENMT1NFX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VMYXlvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNpZGVOYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID1cclxuXHR8IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvblxyXG5cdHwgT3BlblNpZGVuYXZBY3Rpb25cclxuXHR8IENsb3NlU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2hhbmdlU2lkZU5hdk1vZGVcclxuXHR8IENoYW5nZUxheW91dFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBUaXRsZUNoYW5nZWRBY3Rpb25cclxuXHR8IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb25cclxuXHR8IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlO1xyXG4iXX0=