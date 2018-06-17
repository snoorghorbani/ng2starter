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
import { MODULE_CONFIG_TOKEN } from "./authentication.config";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
import { SigninComponent } from "./dump-components/signin/signin.component";
import { AuthenticationContainerComponent } from "./smart-components/authentication-container/authentication-container.component";
import { WithCredentialInterceptor } from "./interceptors/with-credential.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";
import { AuthenticationReducers } from "./reducers";
import { SigninEffects } from "./effects/signin.effects";
import { AuthenticationEffects } from "./effects/authentication.effects";
import { SigninService } from "./services/signin.service";
export class NgsAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = /** @type {?} */ ({})) {
        return {
            ngModule: RootNgsAuthenticationModule,
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
                SigninService
            ]
        };
    }
}
NgsAuthenticationModule.decorators = [
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
                declarations: [SigninContainerComponent, SigninComponent, AuthenticationContainerComponent],
                entryComponents: [SigninContainerComponent],
                providers: [],
                exports: []
            },] },
];
export class RootNgsAuthenticationModule {
}
RootNgsAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature("authentication", AuthenticationReducers),
                    EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
                    AuthenticationRoutingModule,
                    NgsAuthenticationModule
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQTJELE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUNOLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE9BQU8sRUFBOEIsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFFbEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFtQzFELE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQywyQkFBaUUsRUFBRSxDQUFBO1FBQ2pGLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xEO29CQUNDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNYO2dCQUNEO29CQUNDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLEtBQUssRUFBRSxJQUFJO2lCQUNYO2dCQUNELGFBQWE7YUFDYjtTQUNELENBQUM7S0FDRjs7O1lBcERELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsYUFBYTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBRSx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsZ0NBQWdDLENBQUU7Z0JBQzdGLGVBQWUsRUFBRSxDQUFFLHdCQUF3QixDQUFFO2dCQUM3QyxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsRUFBRTthQUNYOztBQStCRCxNQUFNOzs7WUFSTCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ2hFLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxhQUFhLEVBQUUscUJBQXFCLENBQUUsQ0FBQztvQkFDbEUsMkJBQTJCO29CQUMzQix1QkFBdUI7aUJBQ3ZCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3JcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc2lnbmluLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBTaWduaW5Db250YWluZXJDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IF0sXHJcblx0cHJvdmlkZXJzOiBbXSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzQXV0aGVudGljYXRpb25Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSA8QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+e30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFVuYXV0aG9yaXplZEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IsXHJcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0U2lnbmluU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiYXV0aGVudGljYXRpb25cIiwgQXV0aGVudGljYXRpb25SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBTaWduaW5FZmZlY3RzLCBBdXRoZW50aWNhdGlvbkVmZmVjdHMgXSksXHJcblx0XHRBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUsXHJcblx0XHROZ3NBdXRoZW50aWNhdGlvbk1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NBdXRoZW50aWNhdGlvbk1vZHVsZSB7fVxyXG4iXX0=