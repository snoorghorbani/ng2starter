/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatMenuModule, MatCheckboxModule, MatTableModule } from "@angular/material";
import { EffectsModule } from "@ngrx/effects";
import { FlexLayoutModule } from "@angular/flex-layout";
import { WidgetConfigurationService } from "./services/widget-configuration.service";
import { WidgetService } from "./services/widget.service";
import { MODULE_CONFIG_TOKEN } from "./widget.config";
import { WidgetRoutingModule } from "./widget-routing.module";
import { RootComponent } from "./root/root.component";
import { GetWidgetApiEffects } from "./services/api/get-widget/get-widget.effects";
import { UpsertWidgetApiEffects } from "./services/api/upsert-widget/upsert-widget.effects";
import { GetWidgetsApiEffects } from "./services/api/get-widgets/get-widgets.effects";
import { DeleteWidgetApiEffects } from "./services/api/delete-widget/delete-widget.effects";
import { WidgetReducer } from "./widget.reducer";
import { WidgetDbEffects } from "./root/widgets.effects";
import { WidgetsManagementComponent } from "./mangement/widget-management.component";
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
                    MatTableModule,
                    MatMenuModule
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
                    EffectsModule.forFeature([WidgetDbEffects, GetWidgetApiEffects, GetWidgetsApiEffects, UpsertWidgetApiEffects, DeleteWidgetApiEffects])
                ],
                exports: [NgsWidgetModule]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQXFDbEYsTUFBTTs7Ozs7SUFDTCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQTJCO1FBQ3pDLE9BQU87WUFDTixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxhQUFhLENBQUM7U0FDMUcsQ0FBQztLQUNGOzs7WUF6Q0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGFBQWE7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGFBQWE7b0JBQ2IsMEJBQTBCO29CQUMxQixlQUFlO29CQUNmLDRCQUE0QjtvQkFDNUIsMEJBQTBCO29CQUMxQix1QkFBdUI7b0JBQ3ZCLDBCQUEwQjtpQkFDMUI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ3RFLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixDQUFDO2FBQzFGOztBQW1CRCxNQUFNOzs7WUFUTCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7b0JBQ2hELGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztpQkFDdEk7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0UmVkdWNlciB9IGZyb20gXCIuL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3dpZGdldC5jb25maWdcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL3dpZGdldC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBEZWxldGVXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3dpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSB9IGZyb20gXCIuL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50LFxyXG5cdFx0VXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0RHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlLFxyXG5cdFx0V2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsXHJcblx0XHREeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50XSxcclxuXHRleHBvcnRzOiBbRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUsIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LCBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogV2lkZ2V0TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzV2lkZ2V0Um9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBXaWRnZXRTZXJ2aWNlXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzV2lkZ2V0TW9kdWxlLFxyXG5cdFx0V2lkZ2V0Um91dGluZ01vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJ3aWRnZXRzXCIsIFdpZGdldFJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtXaWRnZXREYkVmZmVjdHMsIEdldFdpZGdldEFwaUVmZmVjdHMsIEdldFdpZGdldHNBcGlFZmZlY3RzLCBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzLCBEZWxldGVXaWRnZXRBcGlFZmZlY3RzXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtOZ3NXaWRnZXRNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRSb290TW9kdWxlIHsgfVxyXG4iXX0=