/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { RootComponent } from "./root";
import { WidgetsManagementComponent } from "./mangement/widget-management.component";
import { UpsertComponent } from "./upsert/upsert.component";
var /** @type {?} */ routes = [
    {
        path: "widget",
        component: RootComponent,
        children: [
            {
                path: "management",
                component: WidgetsManagementComponent
            },
            {
                path: "upsert/:type",
                component: UpsertComponent
            },
            {
                path: "upsert/:type/:_id",
                component: UpsertComponent
            }
        ]
    }
];
export var /** @type {?} */ WidgetRoutingModule = RouterModule.forChild(routes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQscUJBQU0sTUFBTSxHQUFXO0lBQ3RCO1FBQ0MsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsYUFBYTtRQUN4QixRQUFRLEVBQUU7WUFDVDtnQkFDQyxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLDBCQUEwQjthQUNyQztZQUNEO2dCQUNDLElBQUksRUFBRSxjQUFjO2dCQUNwQixTQUFTLEVBQUUsZUFBZTthQUMxQjtZQUNEO2dCQUNDLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFNBQVMsRUFBRSxlQUFlO2FBQzFCO1NBQ0Q7S0FDRDtDQUNELENBQUM7QUFFRixNQUFNLENBQUMscUJBQU0sbUJBQW1CLEdBQXdCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwid2lkZ2V0XCIsXHJcblx0XHRjb21wb25lbnQ6IFJvb3RDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJtYW5hZ2VtZW50XCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ1cHNlcnQvOnR5cGVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ1cHNlcnQvOnR5cGUvOl9pZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgV2lkZ2V0Um91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iXX0=