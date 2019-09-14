/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
// import { WidgetReducer } from "./widget.reducer";
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
var NgsWidgetModule = /** @class */ (function () {
    function NgsWidgetModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsWidgetModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgsWidgetRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, WidgetConfigurationService, WidgetService]
        };
    };
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
                },] }
    ];
    return NgsWidgetModule;
}());
export { NgsWidgetModule };
var NgsWidgetRootModule = /** @class */ (function () {
    function NgsWidgetRootModule() {
    }
    NgsWidgetRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsWidgetModule,
                        WidgetRoutingModule,
                        StoreModule.forFeature("widgets", WidgetReducer),
                        EffectsModule.forFeature([
                            WidgetDbEffects,
                            GetWidgetApiEffects,
                            GetWidgetsApiEffects,
                            UpsertWidgetApiEffects,
                            DeleteWidgetApiEffects
                        ])
                    ],
                    exports: [NgsWidgetModule]
                },] }
    ];
    return NgsWidgetRootModule;
}());
export { NgsWidgetRootModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRTFELE9BQU8sRUFBc0IsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbEY7SUFBQTtJQTBDQSxDQUFDOzs7OztJQU5PLHVCQUFPOzs7O0lBQWQsVUFBZSxNQUEyQjtRQUN6QyxPQUFPO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxDQUFFO1NBQzVHLENBQUM7SUFDSCxDQUFDOztnQkF6Q0QsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGFBQWE7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGFBQWE7d0JBQ2IsMEJBQTBCO3dCQUMxQixlQUFlO3dCQUNmLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3dCQUMxQix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjtxQkFDMUI7b0JBQ0QsZUFBZSxFQUFFLENBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUU7b0JBQ3hFLE9BQU8sRUFBRSxDQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixDQUFFO2lCQUM1Rjs7SUFRRCxzQkFBQztDQUFBLEFBMUNELElBMENDO1NBUFksZUFBZTtBQVM1QjtJQUFBO0lBZWtDLENBQUM7O2dCQWZsQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7d0JBQ2hELGFBQWEsQ0FBQyxVQUFVLENBQUM7NEJBQ3hCLGVBQWU7NEJBQ2YsbUJBQW1COzRCQUNuQixvQkFBb0I7NEJBQ3BCLHNCQUFzQjs0QkFDdEIsc0JBQXNCO3lCQUN0QixDQUFDO3FCQUNGO29CQUNELE9BQU8sRUFBRSxDQUFFLGVBQWUsQ0FBRTtpQkFDNUI7O0lBQ2lDLDBCQUFDO0NBQUEsQUFmbkMsSUFlbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi93aWRnZXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFdpZGdldFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi93aWRnZXQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRGVsZXRlV2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0L2RlbGV0ZS13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRSZWR1Y2VyIH0gZnJvbSBcIi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0RGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC93aWRnZXRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvd2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3Vwc2VydC91cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUgfSBmcm9tIFwiLi91cHNlcnQvZHluYW1pYy13aWRnZXQtY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi93aWRnZXQtc2VsZWN0b3Ivd2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFJvb3RDb21wb25lbnQsXHJcblx0XHRXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCxcclxuXHRcdFVwc2VydENvbXBvbmVudCxcclxuXHRcdER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUsXHJcblx0XHREeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSxcclxuXHRcdFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY1dpZGdldFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCwgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlLCBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCwgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0TW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBXaWRnZXRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3NXaWRnZXRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBXaWRnZXRTZXJ2aWNlIF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1dpZGdldE1vZHVsZSxcclxuXHRcdFdpZGdldFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwid2lkZ2V0c1wiLCBXaWRnZXRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXHJcblx0XHRcdFdpZGdldERiRWZmZWN0cyxcclxuXHRcdFx0R2V0V2lkZ2V0QXBpRWZmZWN0cyxcclxuXHRcdFx0R2V0V2lkZ2V0c0FwaUVmZmVjdHMsXHJcblx0XHRcdFVwc2VydFdpZGdldEFwaUVmZmVjdHMsXHJcblx0XHRcdERlbGV0ZVdpZGdldEFwaUVmZmVjdHNcclxuXHRcdF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc1dpZGdldE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRSb290TW9kdWxlIHt9XHJcbiJdfQ==