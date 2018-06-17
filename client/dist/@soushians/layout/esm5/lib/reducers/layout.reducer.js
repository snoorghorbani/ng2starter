/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as layout from "../actions/layout";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
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
var /** @type {?} */ initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: "",
    menuItems: [],
    signoutAction: /** @type {?} */ ({}),
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
            return tslib_1.__assign({}, state, action.payload);
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
export var /** @type {?} */ getShowSidenav = function (state) { return state.showMainSidenav; };
export var /** @type {?} */ getTitle = function (state) { return state.title; };
export var /** @type {?} */ getShowMainSidenav = function (state) { return state.showMainSidenav; };
export var /** @type {?} */ getMainSideNavMode = function (state) { return state.mainSideNavMode; };
export var /** @type {?} */ getLayoutMode = function (state) { return state.layoutMode; };
export var /** @type {?} */ getShowSecondSidebarStatus = function (state) { return state.showSecondSideNav; };
export var /** @type {?} */ getSecondSidebarMode = function (state) { return state.secondSideNavMode; };
export var /** @type {?} */ getFullscreenMode = function (state) { return state.fullscreen; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9sYXlvdXQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0I1QyxxQkFBTSxZQUFZLEdBQVU7SUFDM0IsZUFBZSxFQUFFLEtBQUs7SUFDdEIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsVUFBVSxFQUFFLFNBQVM7SUFDckIsS0FBSyxFQUFFLEVBQUU7SUFDVCxTQUFTLEVBQUUsRUFBRTtJQUNiLGFBQWEsb0JBQUUsRUFBWSxDQUFBO0lBQzNCLFVBQVUsRUFBRSxLQUFLO0NBQ2pCLENBQUM7Ozs7OztBQUVGLE1BQU0sa0JBQWtCLEtBQW9CLEVBQUUsTUFBc0I7SUFBNUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CO1lBQ2pELE1BQU0sc0JBQ0YsS0FBSyxFQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQ2hCO1FBQ0gsS0FBSyxNQUFNLENBQUMsYUFBYTtZQUN4QixNQUFNLHNCQUNGLEtBQUssSUFDUixlQUFlLEVBQUUsS0FBSyxJQUNyQjtRQUVILEtBQUssTUFBTSxDQUFDLFlBQVk7WUFDdkIsTUFBTSxzQkFDRixLQUFLLElBQ1IsZUFBZSxFQUFFLElBQUksSUFDcEI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQzFDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUNsQjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWE7WUFDMUMsTUFBTSxzQkFDRixLQUFLLElBQ1IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQ3RCO1FBRUgsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMseUJBQXlCO1lBQ3RELE1BQU0sc0JBQ0YsS0FBSyxJQUNSLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUMzQjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQjtZQUNqRCxNQUFNLHNCQUNGLEtBQUssSUFDUixpQkFBaUIsRUFBRSxLQUFLLElBQ3ZCO1FBRUgsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CO1lBQ2hELE1BQU0sc0JBQ0YsS0FBSyxJQUNSLGlCQUFpQixFQUFFLElBQUksSUFDdEI7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEI7WUFDdkQsTUFBTSxzQkFDRixLQUFLLElBQ1IsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksSUFDN0I7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3ZDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLFVBQVUsRUFBRSxJQUFJLElBQ2Y7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlO1lBQzVDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLFVBQVUsRUFBRSxLQUFLLElBQ2hCOzs7Ozs7UUFNSDtZQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtDQUNEO0FBRUQsTUFBTSxDQUFDLHFCQUFNLGNBQWMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLENBQUM7QUFDdEUsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDO0FBQ3RELE1BQU0sQ0FBQyxxQkFBTSxrQkFBa0IsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLENBQUM7QUFDMUUsTUFBTSxDQUFDLHFCQUFNLGtCQUFrQixHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUIsQ0FBQztBQUMxRSxNQUFNLENBQUMscUJBQU0sYUFBYSxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLFVBQVUsRUFBaEIsQ0FBZ0IsQ0FBQztBQUNoRSxNQUFNLENBQUMscUJBQU0sMEJBQTBCLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsaUJBQWlCLEVBQXZCLENBQXVCLENBQUM7QUFDcEYsTUFBTSxDQUFDLHFCQUFNLG9CQUFvQixHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLGlCQUFpQixFQUF2QixDQUF1QixDQUFDO0FBQzlFLE1BQU0sQ0FBQyxxQkFBTSxpQkFBaUIsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4uL2FjdGlvbnMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c2hvd01haW5TaWRlbmF2PzogYm9vbGVhbjtcclxuXHRzaG93U2Vjb25kU2lkZU5hdj86IGJvb2xlYW47XHJcblx0c2Vjb25kU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWFpblNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1lbnVJdGVtcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHRyb2xlczogc3RyaW5nW107XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRzaG93TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0c3RpY2t5TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0bGF5b3V0TW9kZT86IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiO1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cdHNpZ25vdXRBY3Rpb246IEFjdGlvbjtcclxuXHRmdWxsc2NyZWVuOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRtYWluU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcImRlZmF1bHRcIixcclxuXHR0aXRsZTogXCJcIixcclxuXHRtZW51SXRlbXM6IFtdLFxyXG5cdHNpZ25vdXRBY3Rpb246IHt9IGFzIEFjdGlvbixcclxuXHRmdWxsc2NyZWVuOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogbGF5b3V0LkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4uYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkNMT1NFX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0Lk9QRU5fU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRpdGxlOiBhY3Rpb24udGl0bGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9MQVlPVVQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bGF5b3V0TW9kZTogYWN0aW9uLm5hbWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5TaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5PUEVOX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWNvbmRTaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHQvLyBjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTjpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHRmdWxsc2NyZWVuOiBzdGF0ZS5mdWxsc2NyZWVuID09PSB0cnVlID8gZmFsc2UgOiB0cnVlXHJcblx0XHQvLyBcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnRpdGxlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubWFpblNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dTZWNvbmRTaWRlTmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kU2lkZWJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zZWNvbmRTaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZnVsbHNjcmVlbjtcclxuIl19