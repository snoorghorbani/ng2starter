/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { ConfigsComponent, ConfigEditComponent, ConfigModuleContainerComponent } from "./smart-components";
const /** @type {?} */ routes = [
    {
        path: "configs",
        component: ConfigModuleContainerComponent,
        children: [
            {
                path: "",
                component: ConfigsComponent
            },
            {
                path: "edit/:name",
                component: ConfigEditComponent
            }
        ]
    }
];
export const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnJvdXRpbmctbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnJvdXRpbmctbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0csdUJBQU0sTUFBTSxHQUFXO0lBQ3RCO1FBQ0MsSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLFFBQVEsRUFBRTtZQUNUO2dCQUNDLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxnQkFBZ0I7YUFDM0I7WUFDRDtnQkFDQyxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLG1CQUFtQjthQUM5QjtTQUNEO0tBQ0Q7Q0FDRCxDQUFDO0FBRUYsTUFBTSxDQUFDLHVCQUFNLGFBQWEsR0FBd0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ3NDb21wb25lbnQsIENvbmZpZ0VkaXRDb21wb25lbnQsIENvbmZpZ01vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiY29uZmlnc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENvbmZpZ3NDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86bmFtZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQ29uZmlnRWRpdENvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIl19