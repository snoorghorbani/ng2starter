/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { DiagramModuleContainerComponent } from "./smart-components/diagram-module-container/diagram-module-container.component";
import { DiagramsComponent } from "./smart-components/diagrams/diagrams.component";
import { AddDiagramComponent } from "./smart-components/add-diagram/add-diagram.component";
import { NumericDiagramComponent } from "./dumb-components/numeric-diagram/numeric-diagram.component";
import { ServerConnectingTimeDiagramComponent } from "./dumb-components/server-connecting-time-diagram/server-connecting-time-diagram.component";
import { ServerStatusDiagramComponent } from "./dumb-components/server-status-diagram/server-status-diagram.component";
/** @type {?} */
const routes = [
    {
        path: "diagrams",
        component: DiagramModuleContainerComponent,
        children: [
            {
                path: "",
                component: DiagramsComponent
            },
            {
                path: "add",
                component: AddDiagramComponent
            },
            {
                path: "edit/:id",
                component: AddDiagramComponent
            },
            {
                path: "numero",
                component: NumericDiagramComponent
            },
            {
                path: "tempo",
                component: ServerConnectingTimeDiagramComponent
            },
            {
                path: "booleano",
                component: ServerStatusDiagramComponent
            }
        ]
    }
];
/** @type {?} */
export const RoutingModule = RouterModule.forChild(routes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kaWFncmFtLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDakksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDakosT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUVBQXlFLENBQUM7O0FBRXZILE1BQU0sTUFBTSxHQUFXO0lBQ3RCO1FBQ0MsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLCtCQUErQjtRQUMxQyxRQUFRLEVBQUU7WUFDVDtnQkFDQyxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsaUJBQWlCO2FBQzVCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLG1CQUFtQjthQUM5QjtZQUNEO2dCQUNDLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsbUJBQW1CO2FBQzlCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLHVCQUF1QjthQUNsQztZQUNEO2dCQUNDLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxvQ0FBb0M7YUFDL0M7WUFDRDtnQkFDQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDRCQUE0QjthQUN2QztTQUNEO0tBQ0Q7Q0FDRCxDQUFDOztBQUVGLGFBQWEsYUFBYSxHQUF3QixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZGlhZ3JhbXNcIixcclxuXHRcdGNvbXBvbmVudDogRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIlwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRGlhZ3JhbXNDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYWRkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGREaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOmlkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGREaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm51bWVyb1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogTnVtZXJpY0RpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwidGVtcG9cIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJib29sZWFub1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIl19