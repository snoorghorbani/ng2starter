/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { SourceModuleContainerComponent } from "./smart-components/source-module-container/source-module-container.component";
import { SourceListComponent } from "./smart-components/source-list/source-list.component";
import { SourceUpsertComponent } from "./smart-components/source-upsert/source-upsert.component";
/** @type {?} */
var routes = [
    {
        path: "source",
        component: SourceModuleContainerComponent,
        children: [
            {
                path: "",
                component: SourceListComponent
            },
            {
                path: "edit/:id",
                component: SourceUpsertComponent
            },
            {
                path: "add",
                component: SourceUpsertComponent
            }
        ]
    }
];
/** @type {?} */
export var RoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnJvdXRpbmctbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zb3VyY2UvIiwic291cmNlcyI6WyJsaWIvc291cmNlLnJvdXRpbmctbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDOUgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7O0lBRTNGLE1BQU0sR0FBVztJQUN0QjtRQUNDLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLDhCQUE4QjtRQUN6QyxRQUFRLEVBQUU7WUFDVDtnQkFDQyxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsbUJBQW1CO2FBQzlCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxxQkFBcUI7YUFDaEM7WUFDRDtnQkFDQyxJQUFJLEVBQUUsS0FBSztnQkFDWCxTQUFTLEVBQUUscUJBQXFCO2FBQ2hDO1NBQ0Q7S0FDRDtDQUNEOztBQUVELE1BQU0sS0FBTyxhQUFhLEdBQXdCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU291cmNlVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zb3VyY2UtdXBzZXJ0L3NvdXJjZS11cHNlcnQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcInNvdXJjZVwiLFxyXG5cdFx0Y29tcG9uZW50OiBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNvdXJjZUxpc3RDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86aWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNvdXJjZVVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhZGRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNvdXJjZVVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIl19