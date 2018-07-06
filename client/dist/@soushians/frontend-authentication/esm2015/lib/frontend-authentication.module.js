/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatBottomSheetModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgsFormModule } from "@soushians/form";
import { MODULE_CONFIG_TOKEN } from "./frontend-authentication.config";
import { FrontendAuthenticationRoutingModule } from "./frontend-authentication-routing.module";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
import { SigninComponent } from "./dump-components/signin/signin.component";
import { FrontendAuthenticationContainerComponent } from "./smart-components/frontend-authentication-container/frontend-authentication-container.component";
import { WithCredentialInterceptor } from "./interceptors/with-credential.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";
import { FrontendAuthenticationReducers } from "./reducers/index";
import { SigninEffects } from "./effects/signin.effects";
import { FrontendAuthenticationEffects } from "./effects/frontend-authentication.effects";
import { FrontendSigninService } from "./services/signin.service";
export class NgsFrontendAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = /** @type {?} */ ({})) {
        return {
            ngModule: RootNgsFrontendAuthenticationModule,
            providers: [
                { provide: MODULE_CONFIG_TOKEN, useValue: config },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: UnauthorizedInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: WithCredentialInterceptor,
                    multi: true
                },
                FrontendSigninService
            ]
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
                    EffectsModule.forFeature([SigninEffects, FrontendAuthenticationEffects]),
                    FrontendAuthenticationRoutingModule,
                    NgsFrontendAuthenticationModule
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQTJELE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUNOLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE9BQU8sRUFBc0MsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0dBQWtHLENBQUM7QUFFNUosT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBbUNsRSxNQUFNOzs7OztJQUNMLE1BQU0sQ0FBQyxPQUFPLENBQ2IsMkJBQWlGLEVBQUUsQ0FBQTtRQUVuRixNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNsRDtvQkFDQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxLQUFLLEVBQUUsSUFBSTtpQkFDWDtnQkFDRCxxQkFBcUI7YUFDckI7U0FDRCxDQUFDO0tBQ0Y7OztZQXRERCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLGFBQWE7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUUsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLHdDQUF3QyxDQUFFO2dCQUNyRyxlQUFlLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDN0MsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEVBQUU7YUFDWDs7QUFpQ0QsTUFBTTs7O1lBUkwsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixXQUFXLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLDhCQUE4QixDQUFDO29CQUNqRixhQUFhLENBQUMsVUFBVSxDQUFDLENBQUUsYUFBYSxFQUFFLDZCQUE2QixDQUFFLENBQUM7b0JBQzFFLG1DQUFtQztvQkFDbkMsK0JBQStCO2lCQUMvQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZnJvbnRlbmQtYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyL3NpZ25pbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL2R1bXAtY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgV2l0aENyZWRlbnRpYWxJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy93aXRoLWNyZWRlbnRpYWwuaW50ZXJjZXB0b3JcIjtcclxuaW1wb3J0IHsgVW5hdXRob3JpemVkSW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9pbnRlcmNlcHRvcnMvdW5hdXRob3JpemVkLmludGVyY2VwdG9yXCI7XHJcblxyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc2lnbmluLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50LCBTaWduaW5Db21wb25lbnQsIEZyb250ZW5kQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IF0sXHJcblx0cHJvdmlkZXJzOiBbXSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc6IEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSA8RnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZz57fVxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvcixcclxuXHRcdFx0XHRcdG11bHRpOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdEZyb250ZW5kU2lnbmluU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIiwgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIFNpZ25pbkVmZmVjdHMsIEZyb250ZW5kQXV0aGVudGljYXRpb25FZmZlY3RzIF0pLFxyXG5cdFx0RnJvbnRlbmRBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUsXHJcblx0XHROZ3NGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGUge31cclxuIl19