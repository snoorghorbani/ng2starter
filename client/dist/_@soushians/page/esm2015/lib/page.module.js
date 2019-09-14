/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            },] }
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFvQnRGLE1BQU0sT0FBTyxhQUFhOzs7OztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBQ3ZDLE9BQU87WUFDTixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSx3QkFBd0IsRUFBRSxXQUFXLENBQUM7U0FDdEcsQ0FBQztJQUNILENBQUM7OztZQXhCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7Z0JBQzNGLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O0FBeUJELE1BQU0sT0FBTyxpQkFBaUI7OztZQWY3QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7b0JBQzVDLGFBQWEsQ0FBQyxVQUFVLENBQUM7d0JBQ3hCLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3FCQUNwQixDQUFDO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzR3JpZE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9wYWdlLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9wYWdlLXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC9wYWdlLW1hbmFnZW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3Vwc2VydC91cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9wYWdlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlRGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC9wYWdlcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFBhZ2VSZWR1Y2VyIH0gZnJvbSBcIi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFBhZ2VBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1wYWdlL2dldC1wYWdlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRQYWdlQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtcGFnZS91cHNlcnQtcGFnZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IERlbGV0ZVBhZ2VBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLmVmZmVjdHNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TmdzR3JpZE1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbUGFnZVZpZXdDb21wb25lbnQsIFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCwgUm9vdENvbXBvbmVudCwgVXBzZXJ0Q29tcG9uZW50XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzUGFnZU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogUGFnZU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc1BhZ2VSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBQYWdlU2VydmljZV1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1BhZ2VNb2R1bGUsXHJcblx0XHRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcInBhZ2VzXCIsIFBhZ2VSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXHJcblx0XHRcdFBhZ2VEYkVmZmVjdHMsXHJcblx0XHRcdEdldFBhZ2VBcGlFZmZlY3RzLFxyXG5cdFx0XHRHZXRQYWdlc0FwaUVmZmVjdHMsXHJcblx0XHRcdFVwc2VydFBhZ2VBcGlFZmZlY3RzLFxyXG5cdFx0XHREZWxldGVQYWdlQXBpRWZmZWN0c1xyXG5cdFx0XSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtOZ3NQYWdlTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzUGFnZVJvb3RNb2R1bGUgeyB9XHJcbiJdfQ==