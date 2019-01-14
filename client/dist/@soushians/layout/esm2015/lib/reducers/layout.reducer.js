/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const initialState = {
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
export function Reducer(state = initialState, action) {
    switch (action.type) {
        case layout.LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
            /** @type {?} */
            const _state = {};
            Object.keys(action.payload).forEach(k => {
                if (k in state)
                    _state[k] = action.payload[k];
            });
            return Object.assign({}, state, _state);
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
        case layout.LayoutActionTypes.FULLSCREEN:
            return Object.assign({}, state, { fullscreen: true });
        case layout.LayoutActionTypes.EXIT_FULLSCREEN:
            return Object.assign({}, state, { fullscreen: false });
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
export const getShowSidenav = (state) => state.showMainSidenav;
/** @type {?} */
export const getTitle = (state) => state.title;
/** @type {?} */
export const getShowMainSidenav = (state) => state.showMainSidenav;
/** @type {?} */
export const getMainSideNavMode = (state) => state.mainSideNavMode;
/** @type {?} */
export const getLayoutMode = (state) => state.layoutMode;
/** @type {?} */
export const getShowSecondSidebarStatus = (state) => state.showSecondSideNav;
/** @type {?} */
export const getSecondSidebarMode = (state) => state.secondSideNavMode;
/** @type {?} */
export const getFullscreenMode = (state) => state.fullscreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9sYXlvdXQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUc1QywyQkFpQkM7OztJQWhCQSxnQ0FBMEI7O0lBQzFCLGtDQUE0Qjs7SUFDNUIsa0NBQTZDOztJQUM3QyxnQ0FBMkM7O0lBQzNDLDBCQUtJOztJQUNKLCtCQUF5Qjs7SUFDekIsaUNBQTJCOztJQUMzQiwyQkFBMEQ7O0lBQzFELHNCQUFlOztJQUNmLDhCQUFzQjs7SUFDdEIsMkJBQW9COzs7TUFHZixZQUFZLEdBQVU7SUFDM0IsZUFBZSxFQUFFLEtBQUs7SUFDdEIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsVUFBVSxFQUFFLFNBQVM7SUFDckIsS0FBSyxFQUFFLEVBQUU7SUFDVCxTQUFTLEVBQUUsRUFBRTtJQUNiLGFBQWEsRUFBRSxtQkFBQSxFQUFFLEVBQVU7SUFDM0IsVUFBVSxFQUFFLEtBQUs7Q0FDakI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFzQjtJQUNuRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsb0JBQW9COztrQkFDM0MsTUFBTSxHQUFHLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxLQUFLO29CQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gseUJBQ0ksS0FBSyxFQUNMLE1BQU0sRUFDUjtRQUNILEtBQUssTUFBTSxDQUFDLGFBQWE7WUFDeEIseUJBQ0ksS0FBSyxJQUNSLGVBQWUsRUFBRSxLQUFLLElBQ3JCO1FBRUgsS0FBSyxNQUFNLENBQUMsWUFBWTtZQUN2Qix5QkFDSSxLQUFLLElBQ1IsZUFBZSxFQUFFLElBQUksSUFDcEI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQzFDLHlCQUNJLEtBQUssSUFDUixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFDbEI7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQzFDLHlCQUNJLEtBQUssSUFDUixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksSUFDdEI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUI7WUFDdEQseUJBQ0ksS0FBSyxJQUNSLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUMzQjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQjtZQUNqRCx5QkFDSSxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsS0FBSyxJQUN2QjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQjtZQUNoRCx5QkFDSSxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsSUFBSSxJQUN0QjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQjtZQUN2RCx5QkFDSSxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksSUFDN0I7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3ZDLHlCQUNJLEtBQUssSUFDUixVQUFVLEVBQUUsSUFBSSxJQUNmO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZUFBZTtZQUM1Qyx5QkFDSSxLQUFLLElBQ1IsVUFBVSxFQUFFLEtBQUssSUFDaEI7UUFDSCxtREFBbUQ7UUFDbkQsWUFBWTtRQUNaLGNBQWM7UUFDZCx5REFBeUQ7UUFDekQsTUFBTTtRQUNOO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNGLENBQUM7O0FBRUQsTUFBTSxPQUFPLGNBQWMsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWU7O0FBQ3JFLE1BQU0sT0FBTyxRQUFRLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLOztBQUNyRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlOztBQUN6RSxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlOztBQUN6RSxNQUFNLE9BQU8sYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTs7QUFDL0QsTUFBTSxPQUFPLDBCQUEwQixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCOztBQUNuRixNQUFNLE9BQU8sb0JBQW9CLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUI7O0FBQzdFLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4uL2FjdGlvbnMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c2hvd01haW5TaWRlbmF2PzogYm9vbGVhbjtcclxuXHRzaG93U2Vjb25kU2lkZU5hdj86IGJvb2xlYW47XHJcblx0c2Vjb25kU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWFpblNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1lbnVJdGVtcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHRyb2xlczogc3RyaW5nW107XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRzaG93TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0c3RpY2t5TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0bGF5b3V0TW9kZT86IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiO1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cdHNpZ25vdXRBY3Rpb246IEFjdGlvbjtcclxuXHRmdWxsc2NyZWVuOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRtYWluU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcImRlZmF1bHRcIixcclxuXHR0aXRsZTogXCJcIixcclxuXHRtZW51SXRlbXM6IFtdLFxyXG5cdHNpZ25vdXRBY3Rpb246IHt9IGFzIEFjdGlvbixcclxuXHRmdWxsc2NyZWVuOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogbGF5b3V0LkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc6XHJcblx0XHRcdGNvbnN0IF9zdGF0ZSA9IHt9O1xyXG5cdFx0XHRPYmplY3Qua2V5cyhhY3Rpb24ucGF5bG9hZCkuZm9yRWFjaChrID0+IHtcclxuXHRcdFx0XHRpZiAoayBpbiBzdGF0ZSkgX3N0YXRlW2tdID0gYWN0aW9uLnBheWxvYWRba107XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLl9zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuQ0xPU0VfU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuT1BFTl9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGl0bGU6IGFjdGlvbi50aXRsZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsYXlvdXRNb2RlOiBhY3Rpb24ubmFtZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlY29uZFNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdC8vIGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdGZ1bGxzY3JlZW46IHN0YXRlLmZ1bGxzY3JlZW4gPT09IHRydWUgPyBmYWxzZSA6IHRydWVcclxuXHRcdC8vIFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUudGl0bGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93TWFpblNpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tYWluU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd1NlY29uZFNpZGVOYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNlY29uZFNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5mdWxsc2NyZWVuO1xyXG4iXX0=