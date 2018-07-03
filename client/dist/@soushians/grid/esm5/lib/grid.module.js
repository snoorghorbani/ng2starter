/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatBottomSheetModule } from "@angular/material";
import { EffectsModule } from "@ngrx/effects";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GridsterModule } from "angular-gridster2";
import { MODULE_CONFIG_TOKEN } from "./grid.config";
import { GridRoutingModule } from "./grid-routing.module";
import { GetGridApiEffects } from "./services/api/get-grid/get-grid.effects";
import { UpsertGridApiEffects } from "./services/api/upsert-grid/upsert-grid.effects";
import { GetGridsApiEffects } from "./services/api/get-grids/get-grids.effects";
import { GridReducer } from "./grid.reducer";
import { GridDbEffects } from "./root/grids.effects";
import { RootComponent } from "./root/root.component";
import { GridService } from "./services/grid.service";
import { GridConfigurationService } from "./services/grid-configuration.service";
import { GridComponent } from "./grid/grid.component";
import { GridConfigComponent } from "./grid-config/grid-config.component";
import { DynamicGridItremConfigDirective, DynamicGridItemConfigComponent } from "./grid-item/dynamic-grid-item-config.directive";
import { DynamicGridItemViewDirective } from "./grid-item/dynamic-grid-item-view.directive";
var NgsGridModule = /** @class */ (function () {
    function NgsGridModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsGridModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgsGridRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, GridConfigurationService, GridService]
        };
    };
    NgsGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        MatBottomSheetModule,
                        MatRadioModule,
                        FlexLayoutModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatSlideToggleModule,
                        MatDividerModule,
                        MatCheckboxModule,
                        MatTableModule,
                        GridsterModule
                    ],
                    declarations: [
                        RootComponent,
                        GridComponent,
                        GridConfigComponent,
                        DynamicGridItremConfigDirective,
                        DynamicGridItemConfigComponent,
                        DynamicGridItemViewDirective
                    ],
                    entryComponents: [GridConfigComponent, DynamicGridItemConfigComponent],
                    exports: [GridComponent]
                },] },
    ];
    return NgsGridModule;
}());
export { NgsGridModule };
var NgsGridRootModule = /** @class */ (function () {
    function NgsGridRootModule() {
    }
    NgsGridRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsGridModule,
                        GridRoutingModule,
                        StoreModule.forFeature("grids", GridReducer),
                        EffectsModule.forFeature([GridDbEffects, GetGridApiEffects, GetGridsApiEffects, UpsertGridApiEffects])
                    ],
                    exports: [NgsGridModule]
                },] },
    ];
    return NgsGridRootModule;
}());
export { NgsGridRootModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUFvQixtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFDTiwrQkFBK0IsRUFDL0IsOEJBQThCLEVBQzlCLE1BQU0sZ0RBQWdELENBQUM7QUFDeEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7O0lBc0NwRixxQkFBTzs7OztJQUFkLFVBQWUsTUFBeUI7UUFDdkMsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxDQUFFO1NBQ3hHLENBQUM7S0FDRjs7Z0JBekNELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGNBQWM7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLCtCQUErQjt3QkFDL0IsOEJBQThCO3dCQUM5Qiw0QkFBNEI7cUJBQzVCO29CQUNELGVBQWUsRUFBRSxDQUFFLG1CQUFtQixFQUFFLDhCQUE4QixDQUFFO29CQUN4RSxPQUFPLEVBQUUsQ0FBRSxhQUFhLENBQUU7aUJBQzFCOzt3QkEvRUQ7O1NBZ0ZhLGFBQWE7Ozs7O2dCQVN6QixRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7d0JBQzVDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUUsQ0FBQztxQkFDeEc7b0JBQ0QsT0FBTyxFQUFFLENBQUUsYUFBYSxDQUFFO2lCQUMxQjs7NEJBakdEOztTQWtHYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgR3JpZHN0ZXJNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9ncmlkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHcmlkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2dyaWQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgR2V0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR3JpZFJlZHVjZXIgfSBmcm9tIFwiLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZERiRWZmZWN0cyB9IGZyb20gXCIuL3Jvb3QvZ3JpZHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZC9ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7XHJcblx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHREeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnRcclxufSBmcm9tIFwiLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRHcmlkc3Rlck1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRSb290Q29tcG9uZW50LFxyXG5cdFx0R3JpZENvbXBvbmVudCxcclxuXHRcdEdyaWRDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlLFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZVxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEdyaWRDb25maWdDb21wb25lbnQsIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgR3JpZENvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBHcmlkTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzR3JpZFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBHcmlkU2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NHcmlkTW9kdWxlLFxyXG5cdFx0R3JpZFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZ3JpZHNcIiwgR3JpZFJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgR3JpZERiRWZmZWN0cywgR2V0R3JpZEFwaUVmZmVjdHMsIEdldEdyaWRzQXBpRWZmZWN0cywgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzR3JpZE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkUm9vdE1vZHVsZSB7fVxyXG4iXX0=