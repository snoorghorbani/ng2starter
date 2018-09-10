/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function LayoutModuleConfigModel() { }
function LayoutModuleConfigModel_tsickle_Closure_declarations() {
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
    /** @type {?} */
    LayoutModuleConfigModel.prototype.theme;
}
const /** @type {?} */ menu_item_authorization_operator = function ([routes, user]) {
    if (!user.Roles)
        return [];
    if (user.Roles.length == 0) {
        return [];
    }
    else {
        return routes.filter(route => user.Roles.some(userRole => route.roles.indexOf(userRole) > -1));
    }
};
const ɵ0 = menu_item_authorization_operator;
export const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    theme: "theme_B",
    showMainSidenav: false,
    showSecondSideNav: true,
    secondSideNavMode: "over",
    //| "push" | "side",
    mainSideNavMode: "over",
    //| "push" | "side",
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
    menu_item_authorization_operator
};
export const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfigModel");
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Qi9DLHVCQUFNLGdDQUFnQyxHQUFHLFVBQVMsQ0FBRSxNQUFNLEVBQUUsSUFBSSxDQUFFO0lBQ2pFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsRUFBRSxDQUFDO0tBQ1Y7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0Y7Q0FDRCxDQUFDOztBQUNGLE1BQU0sQ0FBQyx1QkFBTSxxQkFBcUIsR0FBNEI7SUFDN0QsS0FBSyxFQUFFLFNBQVM7SUFDaEIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNOztJQUN6QixlQUFlLEVBQUUsTUFBTTs7SUFDdkIsY0FBYyxFQUFFLEtBQUs7SUFDckIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixVQUFVLEVBQUUsYUFBYTs7SUFDekIsS0FBSyxFQUFFLEVBQUU7SUFDVCxTQUFTLEVBQUU7UUFDVjtZQUNDLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixLQUFLLEVBQUUsQ0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFFO1lBQzFCLEtBQUssRUFBRSxXQUFXO1NBQ2xCO1FBQ0Q7WUFDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsQ0FBRSxPQUFPLENBQUU7WUFDbEIsS0FBSyxFQUFFLFNBQVM7U0FDaEI7UUFDRDtZQUNDLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxZQUFZO1lBQ2xCLEtBQUssRUFBRSxDQUFFLE9BQU8sQ0FBRTtZQUNsQixLQUFLLEVBQUUsZUFBZTtTQUN0QjtLQUNEO0lBQ0QsYUFBYSxvQkFBRSxFQUFZLENBQUE7SUFDM0IsZ0NBQWdDO0NBQ2hDLENBQUM7QUFFRixNQUFNLENBQUMsdUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQTBCLHlCQUF5QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwge1xyXG5cdHNob3dNYWluU2lkZW5hdj86IGJvb2xlYW47XHJcblx0c2hvd1NlY29uZFNpZGVOYXY/OiBib29sZWFuO1xyXG5cdHNlY29uZFNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1haW5TaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtZW51SXRlbXM/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0cm9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0c2hvd0xlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdHN0aWNreUxlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdGxheW91dE1vZGU/OiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIjtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRzaWdub3V0QWN0aW9uPzogQWN0aW9uO1xyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yPzogKFsgcm91dGVzLCB1c2VyIF06IFthbnksIGFueV0pID0+IGFueVtdO1xyXG5cdHRoZW1lIDogXCJ0aGVtZV9BXCIgfCBcInRoZW1lX0JcIlxyXG59XHJcblxyXG5jb25zdCBtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvciA9IGZ1bmN0aW9uKFsgcm91dGVzLCB1c2VyIF0pIHtcclxuXHRpZiAoIXVzZXIuUm9sZXMpIHJldHVybiBbXTtcclxuXHRpZiAodXNlci5Sb2xlcy5sZW5ndGggPT0gMCkge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiB1c2VyLlJvbGVzLnNvbWUodXNlclJvbGUgPT4gcm91dGUucm9sZXMuaW5kZXhPZih1c2VyUm9sZSkgPiAtMSkpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgPSB7XHJcblx0dGhlbWU6IFwidGhlbWVfQlwiLFxyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWUsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvL3wgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRtYWluU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvL3wgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJ3aXRoLW1hcmdpblwiLCAvLyB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvXCIsXHJcblx0XHRcdGljb246IFwibXVsdGlsaW5lX2NoYXJ0XCIsXHJcblx0XHRcdHJvbGVzOiBbIFwiQWRtaW5cIiwgXCJVc2VyXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwi2LXZgdit2Ycg2KfYtdmE24xcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL2NvbmZpZ3NcIixcclxuXHRcdFx0aWNvbjogXCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwi2KrZhti424zZhdin2KpcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL3NvdXJjZVwiLFxyXG5cdFx0XHRpY29uOiBcImRldmljZV9odWJcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiIF0sXHJcblx0XHRcdHRpdGxlOiBcItii2K/YsdizINiz2LHZiNuM2LMg2YfYp1wiXHJcblx0XHR9XHJcblx0XSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb24sXHJcblx0bWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3JcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPExheW91dE1vZHVsZUNvbmZpZ01vZGVsPihcIkxheW91dE1vZHVsZUNvbmZpZ01vZGVsXCIpO1xyXG4iXX0=