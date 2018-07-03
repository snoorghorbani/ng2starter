/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from "@angular/material";
import { EffectsModule } from "@ngrx/effects";
import { FlexLayoutModule } from "@angular/flex-layout";
import { WidgetService, WidgetConfigurationService } from "./services";
import { MODULE_CONFIG_TOKEN } from "./widget.config";
import { WidgetRoutingModule } from "./widget-routing.module";
import { RootComponent } from "./root";
import { GetWidgetApiEffects } from "./services/api/get-widget/get-widget.effects";
import { UpsertWidgetApiEffects } from "./services/api/upsert-widget/upsert-widget.effects";
import { GetWidgetsApiEffects } from "./services/api/get-widgets/get-widgets.effects";
import { WidgetReducer } from "./widget.reducer";
import { WidgetDbEffects } from "./root/widgets.effects";
import { WidgetsManagementComponent } from "./mangement";
import { UpsertComponent } from "./upsert/upsert.component";
import { DynamicWidgetConfigDirective } from "./upsert/dynamic-widget-config.directive";
import { DynamicWidgetViewDirective } from "./view/dynamic-widget-view.directive";
import { WidgetSelectorComponent } from "./widget-selector/widget-selector.component";
import { DynamicWidgetViewComponent } from "./view/dynamic-widget-view.component";
export class NgsWidgetModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsWidgetRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, WidgetConfigurationService, WidgetService]
        };
    }
}
NgsWidgetModule.decorators = [
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
                    MatRadioModule,
                    FlexLayoutModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatSlideToggleModule,
                    MatDividerModule,
                    MatCheckboxModule,
                    MatTableModule
                ],
                declarations: [
                    RootComponent,
                    WidgetsManagementComponent,
                    UpsertComponent,
                    DynamicWidgetConfigDirective,
                    DynamicWidgetViewDirective,
                    WidgetSelectorComponent,
                    DynamicWidgetViewComponent
                ],
                entryComponents: [WidgetSelectorComponent, DynamicWidgetViewComponent],
                exports: [DynamicWidgetViewDirective, WidgetSelectorComponent, DynamicWidgetViewComponent]
            },] },
];
export class NgsWidgetRootModule {
}
NgsWidgetRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsWidgetModule,
                    WidgetRoutingModule,
                    StoreModule.forFeature("widgets", WidgetReducer),
                    EffectsModule.forFeature([WidgetDbEffects, GetWidgetApiEffects, GetWidgetsApiEffects, UpsertWidgetApiEffects])
                ],
                exports: [NgsWidgetModule]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBRWhCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdkUsT0FBTyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBb0NsRixNQUFNOzs7OztJQUNMLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBMkI7UUFDekMsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxDQUFFO1NBQzVHLENBQUM7S0FDRjs7O1lBeENELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsY0FBYztpQkFDZDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsYUFBYTtvQkFDYiwwQkFBMEI7b0JBQzFCLGVBQWU7b0JBQ2YsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLHVCQUF1QjtvQkFDdkIsMEJBQTBCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsQ0FBRSx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBRTtnQkFDeEUsT0FBTyxFQUFFLENBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUU7YUFDNUY7O0FBbUJELE1BQU07OztZQVRMLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQztvQkFDaEQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBRSxDQUFDO2lCQUNoSDtnQkFDRCxPQUFPLEVBQUUsQ0FBRSxlQUFlLENBQUU7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3gsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UsIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0UmVkdWNlciB9IGZyb20gXCIuL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3dpZGdldC5jb25maWdcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL3dpZGdldC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdFwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRSZWR1Y2VyIH0gZnJvbSBcIi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0RGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC93aWRnZXRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSB9IGZyb20gXCIuL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRSb290Q29tcG9uZW50LFxyXG5cdFx0V2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQsXHJcblx0XHRVcHNlcnRDb21wb25lbnQsXHJcblx0XHREeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlLFxyXG5cdFx0RHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUsXHJcblx0XHRXaWRnZXRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSwgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogV2lkZ2V0TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzV2lkZ2V0Um9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSwgV2lkZ2V0U2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NXaWRnZXRNb2R1bGUsXHJcblx0XHRXaWRnZXRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcIndpZGdldHNcIiwgV2lkZ2V0UmVkdWNlciksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBXaWRnZXREYkVmZmVjdHMsIEdldFdpZGdldEFwaUVmZmVjdHMsIEdldFdpZGdldHNBcGlFZmZlY3RzLCBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc1dpZGdldE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRSb290TW9kdWxlIHt9XHJcbiJdfQ==