/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { SigninGuard } from "./routing-guards";
import { AuthenticationContainerComponent } from "./smart-components/authentication-container/authentication-container.component";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
const /** @type {?} */ routes = [
    {
        path: "auth",
        component: AuthenticationContainerComponent,
        children: [
            {
                path: "signin",
                canActivate: [SigninGuard],
                component: SigninContainerComponent
            }
        ]
    }
];
export const /** @type {?} */ AuthenticationRoutingModule = RouterModule.forChild(routes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRTFHLHVCQUFNLE1BQU0sR0FBVztJQUN0QjtRQUNDLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLGdDQUFnQztRQUMzQyxRQUFRLEVBQUU7WUFDVDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsQ0FBRSxXQUFXLENBQUU7Z0JBQzVCLFNBQVMsRUFBRSx3QkFBd0I7YUFDbkM7U0FDRDtLQUNEO0NBQ0QsQ0FBQztBQUVGLE1BQU0sQ0FBQyx1QkFBTSwyQkFBMkIsR0FBd0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbkd1YXJkIH0gZnJvbSBcIi4vcm91dGluZy1ndWFyZHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJhdXRoXCIsXHJcblx0XHRjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwic2lnbmluXCIsXHJcblx0XHRcdFx0Y2FuQWN0aXZhdGU6IFsgU2lnbmluR3VhcmQgXSxcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iXX0=