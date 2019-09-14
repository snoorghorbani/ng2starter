/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { ConfigModuleContainerComponent } from "./smart-components/config-module-container/config-module-container.component";
import { ConfigsComponent } from "./smart-components/configs/configs.component";
import { ConfigEditComponent } from "./smart-components/config-edit/config-edit.component";
/** @type {?} */
const routes = [
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
/** @type {?} */
export const RoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnJvdXRpbmctbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJjb25maWcvc3JjL2xpYi9jb25maWcucm91dGluZy1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7TUFFckYsTUFBTSxHQUFXO0lBQ3RCO1FBQ0MsSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLFFBQVEsRUFBRTtZQUNUO2dCQUNDLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxnQkFBZ0I7YUFDM0I7WUFDRDtnQkFDQyxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLG1CQUFtQjthQUM5QjtTQUNEO0tBQ0Q7Q0FDRDs7QUFFRCxNQUFNLE9BQU8sYUFBYSxHQUF3QixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLW1vZHVsZS1jb250YWluZXIvY29uZmlnLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImNvbmZpZ3NcIixcclxuXHRcdGNvbXBvbmVudDogQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBDb25maWdzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOm5hbWVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENvbmZpZ0VkaXRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiJdfQ==