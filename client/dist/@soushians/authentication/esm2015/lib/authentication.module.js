/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
import { AuthenticationReducers } from "./reducers/index";
import { SigninEffects } from "./effects/signin.effects";
import { AuthenticationEffects } from "./effects/authentication.effects";
import { SigninService } from "./services/signin.service";
import { SignupContainerComponent } from "./smart-components/signup-container/signup-container.component";
import { SignupComponent } from "./dump-components/signup/signup.component";
import { SigninGuard } from "./routing-guards/signin.guard";
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
                declarations: [
                    SigninContainerComponent,
                    SigninComponent,
                    AuthenticationContainerComponent,
                    SignupContainerComponent,
                    SignupComponent
                ],
                entryComponents: [SigninContainerComponent],
                providers: [SigninGuard],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQTJELE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUNOLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE9BQU8sRUFBOEIsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFFbEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBeUM1RCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLDJCQUFpRSxFQUFFLENBQUE7UUFDakYsT0FBTztZQUNOLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xEO29CQUNDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNYO2dCQUNEO29CQUNDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLEtBQUssRUFBRSxJQUFJO2lCQUNYO2dCQUNELGFBQWE7YUFDYjtTQUNELENBQUM7S0FDRjs7O1lBMURELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsYUFBYTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2Isd0JBQXdCO29CQUN4QixlQUFlO29CQUNmLGdDQUFnQztvQkFDaEMsd0JBQXdCO29CQUN4QixlQUFlO2lCQUNmO2dCQUNELGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O0FBK0JELE1BQU0sT0FBTywyQkFBMkI7OztZQVJ2QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ2hFLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztvQkFDaEUsMkJBQTJCO29CQUMzQix1QkFBdUI7aUJBQ3ZCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3JcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc2lnbmluLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaWdudXBDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ251cC1jb250YWluZXIvc2lnbnVwLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtcC1jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkd1YXJkIH0gZnJvbSBcIi4vcm91dGluZy1ndWFyZHMvc2lnbmluLmd1YXJkXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRcdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0XHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0TmdzRm9ybU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRTaWduaW5Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRTaWduaW5Db21wb25lbnQsXHJcblx0XHRBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFNpZ251cENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFNpZ251cENvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbU2lnbmluQ29udGFpbmVyQ29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFtTaWduaW5HdWFyZF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gPEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPnt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvcixcclxuXHRcdFx0XHRcdG11bHRpOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFNpZ25pblNlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImF1dGhlbnRpY2F0aW9uXCIsIEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtTaWduaW5FZmZlY3RzLCBBdXRoZW50aWNhdGlvbkVmZmVjdHNdKSxcclxuXHRcdEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSxcclxuXHRcdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIHsgfVxyXG4iXX0=