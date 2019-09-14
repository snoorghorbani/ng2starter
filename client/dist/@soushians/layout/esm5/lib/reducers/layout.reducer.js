/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as layout from "../actions/layout";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?|undefined} */
    State.prototype.showMainSidenav;
    /** @type {?|undefined} */
    State.prototype.showSecondSideNav;
    /** @type {?|undefined} */
    State.prototype.secondSideNavMode;
    /** @type {?|undefined} */
    State.prototype.mainSideNavMode;
    /** @type {?|undefined} */
    State.prototype.menuItems;
    /** @type {?|undefined} */
    State.prototype.showLeftNavBar;
    /** @type {?|undefined} */
    State.prototype.stickyLeftNavBar;
    /** @type {?|undefined} */
    State.prototype.layoutMode;
    /** @type {?|undefined} */
    State.prototype.title;
    /** @type {?} */
    State.prototype.signoutAction;
    /** @type {?} */
    State.prototype.fullscreen;
}
/** @type {?} */
var initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: "",
    menuItems: [],
    signoutAction: (/** @type {?} */ ({})),
    fullscreen: false
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
            /** @type {?} */
            var _state_1 = {};
            Object.keys(action.payload).forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                if (k in state)
                    _state_1[k] = action.payload[k];
            }));
            return tslib_1.__assign({}, state, _state_1);
        case layout.CLOSE_SIDENAV:
            return tslib_1.__assign({}, state, { showMainSidenav: false });
        case layout.OPEN_SIDENAV:
            return tslib_1.__assign({}, state, { showMainSidenav: true });
        case layout.LayoutActionTypes.TITLE_CHANGED:
            return tslib_1.__assign({}, state, { title: action.title });
        case layout.LayoutActionTypes.CHANGE_LAYOUT:
            return tslib_1.__assign({}, state, { layoutMode: action.name });
        case layout.LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
            return tslib_1.__assign({}, state, { mainSideNavMode: action.mode });
        case layout.LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
            return tslib_1.__assign({}, state, { showSecondSideNav: false });
        case layout.LayoutActionTypes.OPEN_SECOND_SIDEBAR:
            return tslib_1.__assign({}, state, { showSecondSideNav: true });
        case layout.LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
            return tslib_1.__assign({}, state, { secondSideNavMode: action.mode });
        case layout.LayoutActionTypes.FULLSCREEN:
            return tslib_1.__assign({}, state, { fullscreen: true });
        case layout.LayoutActionTypes.EXIT_FULLSCREEN:
            return tslib_1.__assign({}, state, { fullscreen: false });
        // case layout.LayoutActionTypes.TOGGLE_FULLSCREEN:
        // 	return {
        // 		...state,
        // 		fullscreen: state.fullscreen === true ? false : true
        // 	};
        default:
            return state;
    }
}
/** @type {?} */
export var getShowSidenav = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.showMainSidenav; });
/** @type {?} */
export var getTitle = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.title; });
/** @type {?} */
export var getShowMainSidenav = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.showMainSidenav; });
/** @type {?} */
export var getMainSideNavMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.mainSideNavMode; });
/** @type {?} */
export var getLayoutMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.layoutMode; });
/** @type {?} */
export var getShowSecondSidebarStatus = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.showSecondSideNav; });
/** @type {?} */
export var getSecondSidebarMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.secondSideNavMode; });
/** @type {?} */
export var getFullscreenMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.fullscreen; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9sYXlvdXQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFHNUMsMkJBaUJDOzs7SUFoQkEsZ0NBQTBCOztJQUMxQixrQ0FBNEI7O0lBQzVCLGtDQUE2Qzs7SUFDN0MsZ0NBQTJDOztJQUMzQywwQkFLSTs7SUFDSiwrQkFBeUI7O0lBQ3pCLGlDQUEyQjs7SUFDM0IsMkJBQTBEOztJQUMxRCxzQkFBZTs7SUFDZiw4QkFBc0I7O0lBQ3RCLDJCQUFvQjs7O0lBR2YsWUFBWSxHQUFVO0lBQzNCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixlQUFlLEVBQUUsTUFBTTtJQUN2QixjQUFjLEVBQUUsS0FBSztJQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLEtBQUssRUFBRSxFQUFFO0lBQ1QsU0FBUyxFQUFFLEVBQUU7SUFDYixhQUFhLEVBQUUsbUJBQUEsRUFBRSxFQUFVO0lBQzNCLFVBQVUsRUFBRSxLQUFLO0NBQ2pCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBc0I7SUFBNUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQjs7Z0JBQzNDLFFBQU0sR0FBRyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLEtBQUs7b0JBQUUsUUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxFQUFDLENBQUM7WUFDSCw0QkFDSSxLQUFLLEVBQ0wsUUFBTSxFQUNSO1FBQ0gsS0FBSyxNQUFNLENBQUMsYUFBYTtZQUN4Qiw0QkFDSSxLQUFLLElBQ1IsZUFBZSxFQUFFLEtBQUssSUFDckI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxZQUFZO1lBQ3ZCLDRCQUNJLEtBQUssSUFDUixlQUFlLEVBQUUsSUFBSSxJQUNwQjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWE7WUFDMUMsNEJBQ0ksS0FBSyxJQUNSLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUNsQjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWE7WUFDMUMsNEJBQ0ksS0FBSyxJQUNSLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUN0QjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QjtZQUN0RCw0QkFDSSxLQUFLLElBQ1IsZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQzNCO1FBRUgsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CO1lBQ2pELDRCQUNJLEtBQUssSUFDUixpQkFBaUIsRUFBRSxLQUFLLElBQ3ZCO1FBRUgsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CO1lBQ2hELDRCQUNJLEtBQUssSUFDUixpQkFBaUIsRUFBRSxJQUFJLElBQ3RCO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCO1lBQ3ZELDRCQUNJLEtBQUssSUFDUixpQkFBaUIsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUM3QjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVU7WUFDdkMsNEJBQ0ksS0FBSyxJQUNSLFVBQVUsRUFBRSxJQUFJLElBQ2Y7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlO1lBQzVDLDRCQUNJLEtBQUssSUFDUixVQUFVLEVBQUUsS0FBSyxJQUNoQjtRQUNILG1EQUFtRDtRQUNuRCxZQUFZO1FBQ1osY0FBYztRQUNkLHlEQUF5RDtRQUN6RCxNQUFNO1FBQ047WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sY0FBYzs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUIsQ0FBQTs7QUFDckUsTUFBTSxLQUFPLFFBQVE7Ozs7QUFBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFBOztBQUNyRCxNQUFNLEtBQU8sa0JBQWtCOzs7O0FBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFyQixDQUFxQixDQUFBOztBQUN6RSxNQUFNLEtBQU8sa0JBQWtCOzs7O0FBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFyQixDQUFxQixDQUFBOztBQUN6RSxNQUFNLEtBQU8sYUFBYTs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLFVBQVUsRUFBaEIsQ0FBZ0IsQ0FBQTs7QUFDL0QsTUFBTSxLQUFPLDBCQUEwQjs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLGlCQUFpQixFQUF2QixDQUF1QixDQUFBOztBQUNuRixNQUFNLEtBQU8sb0JBQW9COzs7O0FBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsaUJBQWlCLEVBQXZCLENBQXVCLENBQUE7O0FBQzdFLE1BQU0sS0FBTyxpQkFBaUI7Ozs7QUFBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4uL2FjdGlvbnMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c2hvd01haW5TaWRlbmF2PzogYm9vbGVhbjtcclxuXHRzaG93U2Vjb25kU2lkZU5hdj86IGJvb2xlYW47XHJcblx0c2Vjb25kU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWFpblNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1lbnVJdGVtcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHRyb2xlczogc3RyaW5nW107XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRzaG93TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0c3RpY2t5TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0bGF5b3V0TW9kZT86IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiO1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cdHNpZ25vdXRBY3Rpb246IEFjdGlvbjtcclxuXHRmdWxsc2NyZWVuOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRtYWluU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcImRlZmF1bHRcIixcclxuXHR0aXRsZTogXCJcIixcclxuXHRtZW51SXRlbXM6IFtdLFxyXG5cdHNpZ25vdXRBY3Rpb246IHt9IGFzIEFjdGlvbixcclxuXHRmdWxsc2NyZWVuOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogbGF5b3V0LkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc6XHJcblx0XHRcdGNvbnN0IF9zdGF0ZSA9IHt9O1xyXG5cdFx0XHRPYmplY3Qua2V5cyhhY3Rpb24ucGF5bG9hZCkuZm9yRWFjaChrID0+IHtcclxuXHRcdFx0XHRpZiAoayBpbiBzdGF0ZSkgX3N0YXRlW2tdID0gYWN0aW9uLnBheWxvYWRba107XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLl9zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuQ0xPU0VfU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuT1BFTl9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGl0bGU6IGFjdGlvbi50aXRsZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsYXlvdXRNb2RlOiBhY3Rpb24ubmFtZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlY29uZFNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdC8vIGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdGZ1bGxzY3JlZW46IHN0YXRlLmZ1bGxzY3JlZW4gPT09IHRydWUgPyBmYWxzZSA6IHRydWVcclxuXHRcdC8vIFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUudGl0bGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93TWFpblNpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tYWluU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd1NlY29uZFNpZGVOYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNlY29uZFNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5mdWxsc2NyZWVuO1xyXG4iXX0=