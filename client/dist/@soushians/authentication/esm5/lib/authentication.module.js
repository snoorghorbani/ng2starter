/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { name, version } from "../../package.json";
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
var NgsAuthenticationModule = /** @class */ (function () {
    function NgsAuthenticationModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsAuthenticationModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = (/** @type {?} */ ({})); }
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
    };
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
                },] }
    ];
    return NgsAuthenticationModule;
}());
export { NgsAuthenticationModule };
var RootNgsAuthenticationModule = /** @class */ (function () {
    function RootNgsAuthenticationModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.authentication = "8.0.10";
    }
    RootNgsAuthenticationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature("authentication", AuthenticationReducers),
                        EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
                        AuthenticationRoutingModule,
                        NgsAuthenticationModule
                    ]
                },] }
    ];
    /** @nocollapse */
    RootNgsAuthenticationModule.ctorParameters = function () { return []; };
    return RootNgsAuthenticationModule;
}());
export { RootNgsAuthenticationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUEyRCxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFDTixhQUFhLEVBQ2IsZUFBZSxFQUNmLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQThCLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJC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QUFhLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7d0JBQ2hFLDJCQUEyQjt3QkFDM0IsdUJBQXVCO3FCQUN2QjtpQkFDRDs7OztJQU1ELGtDQUFDO0NBQUEsQUFiRCxJQWFDO1NBTFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRNYXRCb3R0b21TaGVldE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NGb3JtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyL3NpZ25pbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL2R1bXAtY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tY29udGFpbmVyL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFsLmludGVyY2VwdG9yXCI7XHJcbmltcG9ydCB7IFVuYXV0aG9yaXplZEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3VuYXV0aG9yaXplZC5pbnRlcmNlcHRvclwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9zaWduaW4uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2F1dGhlbnRpY2F0aW9uLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNpZ251cENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbnVwLWNvbnRhaW5lci9zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmluR3VhcmQgfSBmcm9tIFwiLi9yb3V0aW5nLWd1YXJkcy9zaWduaW4uZ3VhcmRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFNpZ25pbkNvbXBvbmVudCxcclxuXHRcdEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0U2lnbnVwQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0U2lnbnVwQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtTaWduaW5Db250YWluZXJDb21wb25lbnRdLFxyXG5cdHByb3ZpZGVyczogW1NpZ25pbkd1YXJkXSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzQXV0aGVudGljYXRpb25Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSA8QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+e30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFVuYXV0aG9yaXplZEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IsXHJcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0U2lnbmluU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiYXV0aGVudGljYXRpb25cIiwgQXV0aGVudGljYXRpb25SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1NpZ25pbkVmZmVjdHMsIEF1dGhlbnRpY2F0aW9uRWZmZWN0c10pLFxyXG5cdFx0QXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlLFxyXG5cdFx0TmdzQXV0aGVudGljYXRpb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0KDxhbnk+d2luZG93KS5fX19zdGFydGVyID0gKDxhbnk+d2luZG93KS5fX19zdGFydGVyIHx8IHt9O1xyXG5cdFx0KDxhbnk+d2luZG93KS5fX19zdGFydGVyLmF1dGhlbnRpY2F0aW9uID0gXCI4LjAuMTBcIjtcclxuXHR9XHJcbn1cclxuIl19