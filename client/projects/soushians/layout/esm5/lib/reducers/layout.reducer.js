/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as layout from "../actions/layout";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
}
var /** @type {?} */ initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: "",
    menuItems: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case layout.LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
            return Object.assign({}, state, action.payload);
        case layout.CLOSE_SIDENAV:
            return Object.assign({}, state, { showMainSidenav: false });
        case layout.OPEN_SIDENAV:
            return Object.assign({}, state, { showMainSidenav: true });
        case layout.LayoutActionTypes.TITLE_CHANGED:
            return Object.assign({}, state, { title: action.title });
        case layout.LayoutActionTypes.CHANGE_LAYOUT:
            return Object.assign({}, state, { layoutMode: action.name });
        case layout.LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
            return Object.assign({}, state, { mainSideNavMode: action.mode });
        case layout.LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
            return Object.assign({}, state, { showSecondSideNav: false });
        case layout.LayoutActionTypes.OPEN_SECOND_SIDEBAR:
            return Object.assign({}, state, { showSecondSideNav: true });
        case layout.LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
            return Object.assign({}, state, { secondSideNavMode: action.mode });
        default:
            return state;
    }
}
export var /** @type {?} */ getShowSidenav = function (state) { return state.showMainSidenav; };
export var /** @type {?} */ getTitle = function (state) { return state.title; };
export var /** @type {?} */ getShowMainSidenav = function (state) { return state.showMainSidenav; };
export var /** @type {?} */ getMainSideNavMode = function (state) { return state.mainSideNavMode; };
export var /** @type {?} */ getLayoutMode = function (state) { return state.layoutMode; };
export var /** @type {?} */ getShowSecondSidebarStatus = function (state) { return state.showSecondSideNav; };
export var /** @type {?} */ getSecondSidebarMode = function (state) { return state.secondSideNavMode; };
//# sourceMappingURL=layout.reducer.js.map
