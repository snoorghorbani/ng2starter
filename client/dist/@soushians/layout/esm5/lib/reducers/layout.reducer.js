/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as layout from "../actions/layout";
/**
 * @record
 */
export function State() { }
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
            /** @type {?} */
            var _state_1 = {};
            Object.keys(action.payload).forEach(function (k) {
                if (k in state)
                    _state_1[k] = action.payload[k];
            });
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
export var getShowSidenav = function (state) { return state.showMainSidenav; };
/** @type {?} */
export var getTitle = function (state) { return state.title; };
/** @type {?} */
export var getShowMainSidenav = function (state) { return state.showMainSidenav; };
/** @type {?} */
export var getMainSideNavMode = function (state) { return state.mainSideNavMode; };
/** @type {?} */
export var getLayoutMode = function (state) { return state.layoutMode; };
/** @type {?} */
export var getShowSecondSidebarStatus = function (state) { return state.showSecondSideNav; };
/** @type {?} */
export var getSecondSidebarMode = function (state) { return state.secondSideNavMode; };
/** @type {?} */
export var getFullscreenMode = function (state) { return state.fullscreen; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9sYXlvdXQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQjVDLElBQU0sWUFBWSxHQUFVO0lBQzNCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixlQUFlLEVBQUUsTUFBTTtJQUN2QixjQUFjLEVBQUUsS0FBSztJQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLEtBQUssRUFBRSxFQUFFO0lBQ1QsU0FBUyxFQUFFLEVBQUU7SUFDYixhQUFhLG9CQUFFLEVBQVksQ0FBQTtJQUMzQixVQUFVLEVBQUUsS0FBSztDQUNqQixDQUFDOzs7Ozs7QUFFRixNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBc0I7SUFBNUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQjs7WUFDakQsSUFBTSxRQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLEtBQUs7b0JBQUUsUUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUMsQ0FBQyxDQUFDO1lBQ0gsNEJBQ0ksS0FBSyxFQUNMLFFBQU0sRUFDUjtRQUNILEtBQUssTUFBTSxDQUFDLGFBQWE7WUFDeEIsNEJBQ0ksS0FBSyxJQUNSLGVBQWUsRUFBRSxLQUFLLElBQ3JCO1FBRUgsS0FBSyxNQUFNLENBQUMsWUFBWTtZQUN2Qiw0QkFDSSxLQUFLLElBQ1IsZUFBZSxFQUFFLElBQUksSUFDcEI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQzFDLDRCQUNJLEtBQUssSUFDUixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFDbEI7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQzFDLDRCQUNJLEtBQUssSUFDUixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksSUFDdEI7UUFFSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUI7WUFDdEQsNEJBQ0ksS0FBSyxJQUNSLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUMzQjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQjtZQUNqRCw0QkFDSSxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsS0FBSyxJQUN2QjtRQUVILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQjtZQUNoRCw0QkFDSSxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsSUFBSSxJQUN0QjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQjtZQUN2RCw0QkFDSSxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksSUFDN0I7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3ZDLDRCQUNJLEtBQUssSUFDUixVQUFVLEVBQUUsSUFBSSxJQUNmO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZUFBZTtZQUM1Qyw0QkFDSSxLQUFLLElBQ1IsVUFBVSxFQUFFLEtBQUssSUFDaEI7Ozs7OztRQU1IO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNEOztBQUVELFdBQWEsY0FBYyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUIsQ0FBQzs7QUFDdEUsV0FBYSxRQUFRLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQzs7QUFDdEQsV0FBYSxrQkFBa0IsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLENBQUM7O0FBQzFFLFdBQWEsa0JBQWtCLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFyQixDQUFxQixDQUFDOztBQUMxRSxXQUFhLGFBQWEsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCLENBQUM7O0FBQ2hFLFdBQWEsMEJBQTBCLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsaUJBQWlCLEVBQXZCLENBQXVCLENBQUM7O0FBQ3BGLFdBQWEsb0JBQW9CLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsaUJBQWlCLEVBQXZCLENBQXVCLENBQUM7O0FBQzlFLFdBQWEsaUJBQWlCLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFoQixDQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCIuLi9hY3Rpb25zL2xheW91dFwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHNob3dNYWluU2lkZW5hdj86IGJvb2xlYW47XHJcblx0c2hvd1NlY29uZFNpZGVOYXY/OiBib29sZWFuO1xyXG5cdHNlY29uZFNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1haW5TaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtZW51SXRlbXM/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0cm9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0c2hvd0xlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdHN0aWNreUxlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdGxheW91dE1vZGU/OiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIjtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRzaWdub3V0QWN0aW9uOiBBY3Rpb247XHJcblx0ZnVsbHNjcmVlbjogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZSxcclxuXHRzZWNvbmRTaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb24sXHJcblx0ZnVsbHNjcmVlbjogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGxheW91dC5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlVQREFURV9MQVlPVVRfQ09ORklHOlxyXG5cdFx0XHRjb25zdCBfc3RhdGUgPSB7fTtcclxuXHRcdFx0T2JqZWN0LmtleXMoYWN0aW9uLnBheWxvYWQpLmZvckVhY2goayA9PiB7XHJcblx0XHRcdFx0aWYgKGsgaW4gc3RhdGUpIF9zdGF0ZVtrXSA9IGFjdGlvbi5wYXlsb2FkW2tdO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5fc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkNMT1NFX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0Lk9QRU5fU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRpdGxlOiBhY3Rpb24udGl0bGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9MQVlPVVQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bGF5b3V0TW9kZTogYWN0aW9uLm5hbWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5TaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5PUEVOX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWNvbmRTaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHQvLyBjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTjpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHRmdWxsc2NyZWVuOiBzdGF0ZS5mdWxsc2NyZWVuID09PSB0cnVlID8gZmFsc2UgOiB0cnVlXHJcblx0XHQvLyBcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnRpdGxlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubWFpblNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dTZWNvbmRTaWRlTmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kU2lkZWJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zZWNvbmRTaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZnVsbHNjcmVlbjtcclxuIl19