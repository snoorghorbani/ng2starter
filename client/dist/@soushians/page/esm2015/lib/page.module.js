/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { NgsGridModule } from "@soushians/grid";
import { RoutingModule } from "./page-routing.module";
import { PageViewComponent } from "./view/page-view.component";
import { PagesManagementComponent } from "./mangement/page-management.component";
import { RootComponent } from "./root/root.component";
import { UpsertComponent } from "./upsert/upsert.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MODULE_CONFIG_TOKEN } from "./page.config";
import { PageConfigurationService } from "./services/page-configuration.service";
import { PageService } from "./services/page.service";
import { PageDbEffects } from "./root/pages.effects";
import { PageReducer } from "./page.reducer";
import { GetPageApiEffects } from "./services/api/get-page/get-page.effects";
import { GetPagesApiEffects } from "./services/api/get-pages/get-pages.effects";
import { UpsertPageApiEffects } from "./services/api/upsert-page/upsert-page.effects";
import { DeletePageApiEffects } from "./services/api/delete-page/delete-page.effects";
export class NgsPageModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsPageRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, PageConfigurationService, PageService]
        };
    }
}
NgsPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatCardModule,
                    MatButtonModule,
                    MatIconModule,
                    MatDividerModule,
                    FlexLayoutModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgsGridModule
                ],
                declarations: [PageViewComponent, PagesManagementComponent, RootComponent, UpsertComponent],
                exports: []
            },] },
];
export class NgsPageRootModule {
}
NgsPageRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsPageModule,
                    RoutingModule,
                    StoreModule.forFeature("pages", PageReducer),
                    EffectsModule.forFeature([
                        PageDbEffects,
                        GetPageApiEffects,
                        GetPagesApiEffects,
                        UpsertPageApiEffects,
                        DeletePageApiEffects
                    ])
                ],
                exports: [NgsPageModule]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFvQnRGLE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUN2QyxPQUFPO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxDQUFDO1NBQ3RHLENBQUM7S0FDRjs7O1lBeEJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztnQkFDM0YsT0FBTyxFQUFFLEVBQUU7YUFDWDs7QUF5QkQsTUFBTTs7O1lBZkwsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO29CQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN4QixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjtxQkFDcEIsQ0FBQztpQkFDRjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgTmdzR3JpZE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcblxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3BhZ2Utcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFBhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9wYWdlLXZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3Vwc2VydC91cHNlcnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUGFnZU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3BhZ2UuY29uZmlnXCI7XG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2VEYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3BhZ2VzLmVmZmVjdHNcIjtcbmltcG9ydCB7IFBhZ2VSZWR1Y2VyIH0gZnJvbSBcIi4vcGFnZS5yZWR1Y2VyXCI7XG5pbXBvcnQgeyBHZXRQYWdlQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtcGFnZS9nZXQtcGFnZS5lZmZlY3RzXCI7XG5pbXBvcnQgeyBHZXRQYWdlc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5lZmZlY3RzXCI7XG5pbXBvcnQgeyBVcHNlcnRQYWdlQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtcGFnZS91cHNlcnQtcGFnZS5lZmZlY3RzXCI7XG5pbXBvcnQgeyBEZWxldGVQYWdlQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9kZWxldGUtcGFnZS9kZWxldGUtcGFnZS5lZmZlY3RzXCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLFxuXHRcdE1hdElucHV0TW9kdWxlLFxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcblx0XHRNYXRDYXJkTW9kdWxlLFxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcblx0XHRNYXRJY29uTW9kdWxlLFxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXG5cdFx0RmxleExheW91dE1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdE5nc0dyaWRNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbUGFnZVZpZXdDb21wb25lbnQsIFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCwgUm9vdENvbXBvbmVudCwgVXBzZXJ0Q29tcG9uZW50XSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdzUGFnZU1vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFBhZ2VNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IE5nc1BhZ2VSb290TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSwgUGFnZVNlcnZpY2VdXG5cdFx0fTtcblx0fVxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmdzUGFnZU1vZHVsZSxcblx0XHRSb3V0aW5nTW9kdWxlLFxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJwYWdlc1wiLCBQYWdlUmVkdWNlciksXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcblx0XHRcdFBhZ2VEYkVmZmVjdHMsXG5cdFx0XHRHZXRQYWdlQXBpRWZmZWN0cyxcblx0XHRcdEdldFBhZ2VzQXBpRWZmZWN0cyxcblx0XHRcdFVwc2VydFBhZ2VBcGlFZmZlY3RzLFxuXHRcdFx0RGVsZXRlUGFnZUFwaUVmZmVjdHNcblx0XHRdKVxuXHRdLFxuXHRleHBvcnRzOiBbTmdzUGFnZU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdzUGFnZVJvb3RNb2R1bGUgeyB9XG4iXX0=