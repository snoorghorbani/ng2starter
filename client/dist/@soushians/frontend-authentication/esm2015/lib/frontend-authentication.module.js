/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatBottomSheetModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgsFormModule } from "@soushians/form";
import { FrontendAuthenticationContainerComponent } from "./smart-components/frontend-authentication-container/frontend-authentication-container.component";
import { MODULE_CONFIG_TOKEN } from "./frontend-authentication.config";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
import { FrontendAuthenticationRoutingModule } from "./frontend-authentication-routing.module";
import { SigninComponent } from "./dump-components/signin/signin.component";
import { FrontendAuthenticationReducers } from "./reducers/index";
import { FrontendSigninService } from "./services/signin.service";
import { SigninEffects } from "./effects/signin.effects";
import { FrontendAuthenticationModuleEffects } from "./frontend-authentication.effect";
export class NgsFrontendAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = /** @type {?} */ ({})) {
        return {
            ngModule: RootNgsFrontendAuthenticationModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FrontendSigninService]
        };
    }
}
NgsFrontendAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    HttpClientModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatBottomSheetModule,
                    MatFormFieldModule,
                    MatListModule,
                    MatMenuModule,
                    MatRadioModule,
                    MatInputModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    FormsModule,
                    NgsFormModule
                ],
                declarations: [SigninContainerComponent, SigninComponent, FrontendAuthenticationContainerComponent],
                entryComponents: [SigninContainerComponent],
                providers: [],
                exports: []
            },] },
];
export class RootNgsFrontendAuthenticationModule {
}
RootNgsFrontendAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature("frontend-authentication", FrontendAuthenticationReducers),
                    EffectsModule.forFeature([FrontendAuthenticationModuleEffects, SigninEffects]),
                    FrontendAuthenticationRoutingModule,
                    NgsFrontendAuthenticationModule
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQTJELE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFDTixhQUFhLEVBQ2IsZUFBZSxFQUNmLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQ04sd0NBQXdDLEVBQ3hDLE1BQU0sa0dBQWtHLENBQUM7QUFDMUcsT0FBTyxFQUFzQyxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFtQ3ZGLE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FDYiwyQkFBaUYsRUFBRSxDQUFBO1FBRW5GLE9BQU87WUFDTixRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQztTQUN0RixDQUFDO0tBQ0Y7OztZQXpDRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLGFBQWE7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLHdDQUF3QyxDQUFDO2dCQUNuRyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDM0MsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEVBQUU7YUFDWDs7QUFvQkQsTUFBTTs7O1lBUkwsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixXQUFXLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLDhCQUE4QixDQUFDO29CQUNqRixhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsbUNBQW1DLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQzlFLG1DQUFtQztvQkFDbkMsK0JBQStCO2lCQUMvQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZyb250ZW5kQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnRcclxufSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyL3NpZ25pbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZnJvbnRlbmQtYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtcC1jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2lnbmluRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc2lnbmluLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUVmZmVjdHMgfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5lZmZlY3RcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtTaWduaW5Db250YWluZXJDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbU2lnbmluQ29udGFpbmVyQ29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFtdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZzogRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IDxGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPnt9XHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBGcm9udGVuZFNpZ25pblNlcnZpY2VdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIiwgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUVmZmVjdHMsIFNpZ25pbkVmZmVjdHNdKSxcclxuXHRcdEZyb250ZW5kQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlLFxyXG5cdFx0TmdzRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlIHsgfVxyXG4iXX0=