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
const /** @type {?} */ initialState = {
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
export function Reducer(state = initialState, action) {
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
export const /** @type {?} */ getShowSidenav = (state) => state.showMainSidenav;
export const /** @type {?} */ getTitle = (state) => state.title;
export const /** @type {?} */ getShowMainSidenav = (state) => state.showMainSidenav;
export const /** @type {?} */ getMainSideNavMode = (state) => state.mainSideNavMode;
export const /** @type {?} */ getLayoutMode = (state) => state.layoutMode;
export const /** @type {?} */ getShowSecondSidebarStatus = (state) => state.showSecondSideNav;
export const /** @type {?} */ getSecondSidebarMode = (state) => state.secondSideNavMode;
export const /** @type {?} */ getFullscreenMode = (state) => state.fullscreen;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9sYXlvdXQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQjVDLHVCQUFNLFlBQVksR0FBVTtJQUMzQixlQUFlLEVBQUUsS0FBSztJQUN0QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLGlCQUFpQixFQUFFLE1BQU07SUFDekIsZUFBZSxFQUFFLE1BQU07SUFDdkIsY0FBYyxFQUFFLEtBQUs7SUFDckIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixVQUFVLEVBQUUsU0FBUztJQUNyQixLQUFLLEVBQUUsRUFBRTtJQUNULFNBQVMsRUFBRSxFQUFFO0lBQ2IsYUFBYSxvQkFBRSxFQUFZLENBQUE7SUFDM0IsVUFBVSxFQUFFLEtBQUs7Q0FDakIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxrQkFBa0IsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFzQjtJQUNuRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQixLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0I7WUFDakQsTUFBTSxtQkFDRixLQUFLLEVBQ0wsTUFBTSxDQUFDLE9BQU8sRUFDaEI7UUFDSCxLQUFLLE1BQU0sQ0FBQyxhQUFhO1lBQ3hCLE1BQU0sbUJBQ0YsS0FBSyxJQUNSLGVBQWUsRUFBRSxLQUFLLElBQ3JCO1FBRUgsS0FBSyxNQUFNLENBQUMsWUFBWTtZQUN2QixNQUFNLG1CQUNGLEtBQUssSUFDUixlQUFlLEVBQUUsSUFBSSxJQUNwQjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWE7WUFDMUMsTUFBTSxtQkFDRixLQUFLLElBQ1IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQ2xCO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYTtZQUMxQyxNQUFNLG1CQUNGLEtBQUssSUFDUixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksSUFDdEI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUI7WUFDdEQsTUFBTSxtQkFDRixLQUFLLElBQ1IsZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQzNCO1FBRUgsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CO1lBQ2pELE1BQU0sbUJBQ0YsS0FBSyxJQUNSLGlCQUFpQixFQUFFLEtBQUssSUFDdkI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUI7WUFDaEQsTUFBTSxtQkFDRixLQUFLLElBQ1IsaUJBQWlCLEVBQUUsSUFBSSxJQUN0QjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQjtZQUN2RCxNQUFNLG1CQUNGLEtBQUssSUFDUixpQkFBaUIsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUM3QjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVU7WUFDdkMsTUFBTSxtQkFDRixLQUFLLElBQ1IsVUFBVSxFQUFFLElBQUksSUFDZjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWU7WUFDNUMsTUFBTSxtQkFDRixLQUFLLElBQ1IsVUFBVSxFQUFFLEtBQUssSUFDaEI7Ozs7OztRQU1IO1lBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0NBQ0Q7QUFFRCxNQUFNLENBQUMsdUJBQU0sY0FBYyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO0FBQ3RFLE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDdEQsTUFBTSxDQUFDLHVCQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO0FBQzFFLE1BQU0sQ0FBQyx1QkFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztBQUMxRSxNQUFNLENBQUMsdUJBQU0sYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ2hFLE1BQU0sQ0FBQyx1QkFBTSwwQkFBMEIsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0FBQ3BGLE1BQU0sQ0FBQyx1QkFBTSxvQkFBb0IsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0FBQzlFLE1BQU0sQ0FBQyx1QkFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbjogQWN0aW9uO1xyXG5cdGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2UsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW10sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdGZ1bGxzY3JlZW46IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXlvdXQuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5hY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuQ0xPU0VfU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuT1BFTl9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGl0bGU6IGFjdGlvbi50aXRsZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsYXlvdXRNb2RlOiBhY3Rpb24ubmFtZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlY29uZFNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdC8vIGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdGZ1bGxzY3JlZW46IHN0YXRlLmZ1bGxzY3JlZW4gPT09IHRydWUgPyBmYWxzZSA6IHRydWVcclxuXHRcdC8vIFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUudGl0bGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93TWFpblNpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tYWluU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd1NlY29uZFNpZGVOYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNlY29uZFNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5mdWxsc2NyZWVuO1xyXG4iXX0=