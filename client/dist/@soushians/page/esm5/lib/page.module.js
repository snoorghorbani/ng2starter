/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var NgsPageModule = /** @class */ (function () {
    function NgsPageModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsPageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgsPageRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, PageConfigurationService, PageService]
        };
    };
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
    return NgsPageModule;
}());
export { NgsPageModule };
var NgsPageRootModule = /** @class */ (function () {
    function NgsPageRootModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.page = "8.0.10";
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
    /** @nocollapse */
    NgsPageRootModule.ctorParameters = function () { return []; };
    return NgsPageRootModule;
}());
export { NgsPageRootModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBQTtJQXlCQSxDQUFDOzs7OztJQU5PLHFCQUFPOzs7O0lBQWQsVUFBZSxNQUF5QjtRQUN2QyxPQUFPO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxDQUFDO1NBQ3RHLENBQUM7SUFDSCxDQUFDOztnQkF4QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO29CQUMzRixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFRRCxvQkFBQztDQUFBLEFBekJELElBeUJDO1NBUFksYUFBYTtBQVMxQjtJQWdCQztRQUNDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDMUQsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQzFDLENBQUM7O2dCQW5CRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7d0JBQzVDLGFBQWEsQ0FBQyxVQUFVLENBQUM7NEJBQ3hCLGFBQWE7NEJBQ2IsaUJBQWlCOzRCQUNqQixrQkFBa0I7NEJBQ2xCLG9CQUFvQjs0QkFDcEIsb0JBQW9CO3lCQUNwQixDQUFDO3FCQUNGO29CQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDeEI7Ozs7SUFNRCx3QkFBQztDQUFBLEFBcEJELElBb0JDO1NBTFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NHcmlkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3BhZ2Utcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUGFnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUGFnZU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3BhZ2UuY29uZmlnXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VEYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3BhZ2VzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUGFnZVJlZHVjZXIgfSBmcm9tIFwiLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydFBhZ2VBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRGVsZXRlUGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuZWZmZWN0c1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHROZ3NHcmlkTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtQYWdlVmlld0NvbXBvbmVudCwgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50LCBSb290Q29tcG9uZW50LCBVcHNlcnRDb21wb25lbnRdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NQYWdlTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBQYWdlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzUGFnZVJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsIFBhZ2VTZXJ2aWNlXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzUGFnZU1vZHVsZSxcclxuXHRcdFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwicGFnZXNcIiwgUGFnZVJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcclxuXHRcdFx0UGFnZURiRWZmZWN0cyxcclxuXHRcdFx0R2V0UGFnZUFwaUVmZmVjdHMsXHJcblx0XHRcdEdldFBhZ2VzQXBpRWZmZWN0cyxcclxuXHRcdFx0VXBzZXJ0UGFnZUFwaUVmZmVjdHMsXHJcblx0XHRcdERlbGV0ZVBhZ2VBcGlFZmZlY3RzXHJcblx0XHRdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW05nc1BhZ2VNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NQYWdlUm9vdE1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgPSAoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgfHwge307XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIucGFnZSA9IFwiOC4wLjEwXCI7XHJcblx0fVxyXG59XHJcblxyXG4iXX0=