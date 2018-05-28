/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export const /** @type {?} */ OPEN_SIDENAV = "[Layout] Open Sidenav";
export const /** @type {?} */ CLOSE_SIDENAV = "[Layout] Close Sidenav";
/** @enum {string} */
const LayoutActionTypes = {
    UPDATE_LAYOUT_CONFIG: "[Layout] UPDATE_LAYOUT_CONFIG",
    SIGNOUT: "[Layout] signout",
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
export class SignoutAction {
    constructor() {
        this.type = LayoutActionTypes.SIGNOUT;
    }
}
function SignoutAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SignoutAction.prototype.type;
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
//# sourceMappingURL=layout.js.map
