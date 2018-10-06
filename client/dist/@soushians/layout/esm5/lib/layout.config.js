/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function LayoutModuleConfigModel() { }
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.showMainSidenav;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.showSecondSideNav;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.secondSideNavMode;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.mainSideNavMode;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.menuItems;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.showLeftNavBar;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.stickyLeftNavBar;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.layoutMode;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.title;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.signoutAction;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.menu_item_authorization_operator;
/** @type {?|undefined} */
LayoutModuleConfigModel.prototype.theme;
/** @type {?} */
var menu_item_authorization_operator = function (_a) {
    var _b = tslib_1.__read(_a, 2), routes = _b[0], user = _b[1];
    if (!user.Roles)
        return [];
    if (user.Roles.length == 0) {
        return [];
    }
    else {
        return routes.filter(function (route) { return user.Roles.some(function (userRole) { return route.roles.indexOf(userRole) > -1; }); });
    }
};
var ɵ0 = menu_item_authorization_operator;
/** @type {?} */
export var MODULE_DEFAULT_CONFIG = {
    theme: "theme_B",
    showMainSidenav: false,
    showSecondSideNav: true,
    secondSideNavMode: "over",
    // | "push" | "side",
    mainSideNavMode: "over",
    // | "push" | "side",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "with-margin",
    // | "without-margin" | "default",
    title: "",
    menuItems: [
        {
            route: "/",
            icon: "multiline_chart",
            roles: ["Admin", "User"],
            title: "صفحه اصلی"
        },
        {
            route: "/configs",
            icon: "settings",
            roles: ["Admin"],
            title: "تنظیمات"
        },
        {
            route: "/source",
            icon: "device_hub",
            roles: ["Admin"],
            title: "آدرس سرویس ها"
        }
    ],
    signoutAction: /** @type {?} */ ({}),
    menu_item_authorization_operator: menu_item_authorization_operator
};
/** @type {?} */
export var MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfigModel");
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Qi9DLElBQU0sZ0NBQWdDLEdBQUcsVUFBVSxFQUFjO1FBQWQsMEJBQWMsRUFBYixjQUFNLEVBQUUsWUFBSTtJQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUMzQixPQUFPLEVBQUUsQ0FBQztLQUNWO1NBQU07UUFDTixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLEVBQS9ELENBQStELENBQUMsQ0FBQztLQUMvRjtDQUNELENBQUM7OztBQUNGLFdBQWEscUJBQXFCLEdBQTRCO0lBQzdELEtBQUssRUFBRSxTQUFTO0lBQ2hCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTs7SUFDekIsZUFBZSxFQUFFLE1BQU07O0lBQ3ZCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsVUFBVSxFQUFFLGFBQWE7O0lBQ3pCLEtBQUssRUFBRSxFQUFFO0lBQ1QsU0FBUyxFQUFFO1FBQ1Y7WUFDQyxLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztZQUN4QixLQUFLLEVBQUUsV0FBVztTQUNsQjtRQUNEO1lBQ0MsS0FBSyxFQUFFLFVBQVU7WUFDakIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1NBQ2hCO1FBQ0Q7WUFDQyxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDaEIsS0FBSyxFQUFFLGVBQWU7U0FDdEI7S0FDRDtJQUNELGFBQWEsb0JBQUUsRUFBWSxDQUFBO0lBQzNCLGdDQUFnQyxrQ0FBQTtDQUNoQyxDQUFDOztBQUVGLFdBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQTBCLHlCQUF5QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwge1xyXG5cdHNob3dNYWluU2lkZW5hdj86IGJvb2xlYW47XHJcblx0c2hvd1NlY29uZFNpZGVOYXY/OiBib29sZWFuO1xyXG5cdHNlY29uZFNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1haW5TaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtZW51SXRlbXM/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0cm9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0c2hvd0xlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdHN0aWNreUxlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdGxheW91dE1vZGU/OiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIjtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRzaWdub3V0QWN0aW9uPzogQWN0aW9uO1xyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yPzogKFtyb3V0ZXMsIHVzZXJdOiBbYW55LCBhbnldKSA9PiBhbnlbXTtcclxuXHR0aGVtZT86IHN0cmluZzsgLy8gXCJ0aGVtZV9BXCIgfCBcInRoZW1lX0JcIjtcclxufVxyXG5cclxuY29uc3QgbWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IgPSBmdW5jdGlvbiAoW3JvdXRlcywgdXNlcl0pIHtcclxuXHRpZiAoIXVzZXIuUm9sZXMpIHJldHVybiBbXTtcclxuXHRpZiAodXNlci5Sb2xlcy5sZW5ndGggPT0gMCkge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiB1c2VyLlJvbGVzLnNvbWUodXNlclJvbGUgPT4gcm91dGUucm9sZXMuaW5kZXhPZih1c2VyUm9sZSkgPiAtMSkpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgPSB7XHJcblx0dGhlbWU6IFwidGhlbWVfQlwiLFxyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWUsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvLyB8IFwicHVzaFwiIHwgXCJzaWRlXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy8gfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcIndpdGgtbWFyZ2luXCIsIC8vIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9cIixcclxuXHRcdFx0aWNvbjogXCJtdWx0aWxpbmVfY2hhcnRcIixcclxuXHRcdFx0cm9sZXM6IFtcIkFkbWluXCIsIFwiVXNlclwiXSxcclxuXHRcdFx0dGl0bGU6IFwi2LXZgdit2Ycg2KfYtdmE24xcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL2NvbmZpZ3NcIixcclxuXHRcdFx0aWNvbjogXCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRyb2xlczogW1wiQWRtaW5cIl0sXHJcblx0XHRcdHRpdGxlOiBcItiq2YbYuNuM2YXYp9iqXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9zb3VyY2VcIixcclxuXHRcdFx0aWNvbjogXCJkZXZpY2VfaHViXCIsXHJcblx0XHRcdHJvbGVzOiBbXCJBZG1pblwiXSxcclxuXHRcdFx0dGl0bGU6IFwi2KLYr9ix2LMg2LPYsdmI24zYsyDZh9inXCJcclxuXHRcdH1cclxuXHRdLFxyXG5cdHNpZ25vdXRBY3Rpb246IHt9IGFzIEFjdGlvbixcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KFwiTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWxcIik7XHJcbiJdfQ==