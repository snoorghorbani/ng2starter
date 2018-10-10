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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFvQnRGLE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUN2QyxPQUFPO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxDQUFDO1NBQ3RHLENBQUM7S0FDRjs7O1lBeEJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztnQkFDM0YsT0FBTyxFQUFFLEVBQUU7YUFDWDs7QUF5QkQsTUFBTTs7O1lBZkwsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO29CQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN4QixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjtxQkFDcEIsQ0FBQztpQkFDRjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0dyaWRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcGFnZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBQYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvcGFnZS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBQYWdlTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vcGFnZS5jb25maWdcIjtcclxuaW1wb3J0IHsgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZURiRWZmZWN0cyB9IGZyb20gXCIuL3Jvb3QvcGFnZXMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBQYWdlUmVkdWNlciB9IGZyb20gXCIuL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRQYWdlQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtcGFnZS9nZXQtcGFnZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdldFBhZ2VzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0UGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBEZWxldGVQYWdlQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9kZWxldGUtcGFnZS9kZWxldGUtcGFnZS5lZmZlY3RzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE5nc0dyaWRNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1BhZ2VWaWV3Q29tcG9uZW50LCBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQsIFJvb3RDb21wb25lbnQsIFVwc2VydENvbXBvbmVudF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1BhZ2VNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFBhZ2VNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3NQYWdlUm9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSwgUGFnZVNlcnZpY2VdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NQYWdlTW9kdWxlLFxyXG5cdFx0Um91dGluZ01vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJwYWdlc1wiLCBQYWdlUmVkdWNlciksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xyXG5cdFx0XHRQYWdlRGJFZmZlY3RzLFxyXG5cdFx0XHRHZXRQYWdlQXBpRWZmZWN0cyxcclxuXHRcdFx0R2V0UGFnZXNBcGlFZmZlY3RzLFxyXG5cdFx0XHRVcHNlcnRQYWdlQXBpRWZmZWN0cyxcclxuXHRcdFx0RGVsZXRlUGFnZUFwaUVmZmVjdHNcclxuXHRcdF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbTmdzUGFnZU1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1BhZ2VSb290TW9kdWxlIHsgfVxyXG4iXX0=