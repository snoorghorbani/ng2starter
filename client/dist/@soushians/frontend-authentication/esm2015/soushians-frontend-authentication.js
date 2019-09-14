/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, getFrontendAuthenticationState, getFrontendUser, NgsFrontendAuthenticationModule } from './public_api';
export { SigninComponent as ɵm } from './lib/dump-components/signin/signin.component';
export { SigninEffects as ɵq } from './lib/effects/signin.effects';
export { FrontendAuthenticationRoutingModule as ɵr } from './lib/frontend-authentication-routing.module';
export { MODULE_CONFIG_TOKEN as ɵj } from './lib/frontend-authentication.config';
export { FrontendAuthenticationModuleEffects as ɵo } from './lib/frontend-authentication.effect';
export { RootNgsFrontendAuthenticationModule as ɵd } from './lib/frontend-authentication.module';
export { FrontendAuthenticationReducers as ɵa, selectAuthState as ɵc, selectFrontendAuthenticationState as ɵb } from './lib/reducers/index';
export { UserReducer as ɵe, getLoggedIn as ɵf, getUser as ɵg } from './lib/reducers/user.reducer';
export { FrontendAuthenticationConfigurationService as ɵi } from './lib/services/frontend-authentication-configuration.service';
export { FrontendSigninService as ɵp } from './lib/services/signin.service';
export { FrontendAuthenticationContainerComponent as ɵn } from './lib/smart-components/frontend-authentication-container/frontend-authentication-container.component';
export { SigninContainerComponent as ɵh } from './lib/smart-components/signin-container/signin-container.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbInNvdXNoaWFucy1mcm9udGVuZC1hdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsc0tBQWMsY0FBYyxDQUFDO0FBRTdCLE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUNBQW1DLElBQUksRUFBRSxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDdkcsT0FBTyxFQUFDLG1CQUFtQixJQUFJLEVBQUUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxtQ0FBbUMsSUFBSSxFQUFFLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRixPQUFPLEVBQUMsbUNBQW1DLElBQUksRUFBRSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFFL0YsT0FBTyxFQUFDLDhCQUE4QixJQUFJLEVBQUUsRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLGlDQUFpQyxJQUFJLEVBQUUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3hJLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUMsT0FBTyxJQUFJLEVBQUUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlGLE9BQU8sRUFBQywwQ0FBMEMsSUFBSSxFQUFFLEVBQUMsTUFBTSw4REFBOEQsQ0FBQztBQUM5SCxPQUFPLEVBQUMscUJBQXFCLElBQUksRUFBRSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFDLHdDQUF3QyxJQUFJLEVBQUUsRUFBQyxNQUFNLHNHQUFzRyxDQUFDO0FBQ3BLLE9BQU8sRUFBQyx3QkFBd0IsSUFBSSxFQUFFLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcblxuZXhwb3J0IHtTaWduaW5Db21wb25lbnQgYXMgybVtfSBmcm9tICcuL2xpYi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuZXhwb3J0IHtTaWduaW5FZmZlY3RzIGFzIMm1cX0gZnJvbSAnLi9saWIvZWZmZWN0cy9zaWduaW4uZWZmZWN0cyc7XG5leHBvcnQge0Zyb250ZW5kQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIGFzIMm1cn0gZnJvbSAnLi9saWIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUnO1xuZXhwb3J0IHtNT0RVTEVfQ09ORklHX1RPS0VOIGFzIMm1an0gZnJvbSAnLi9saWIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnJztcbmV4cG9ydCB7RnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUVmZmVjdHMgYXMgybVvfSBmcm9tICcuL2xpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5lZmZlY3QnO1xuZXhwb3J0IHtSb290TmdzRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZSBhcyDJtWR9IGZyb20gJy4vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLm1vZHVsZSc7XG5leHBvcnQge0ZlYXR1cmVTdGF0ZSBhcyDJtWwsRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIGFzIMm1a30gZnJvbSAnLi9saWIvcmVkdWNlcnMnO1xuZXhwb3J0IHtGcm9udGVuZEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgYXMgybVhLHNlbGVjdEF1dGhTdGF0ZSBhcyDJtWMsc2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIGFzIMm1Yn0gZnJvbSAnLi9saWIvcmVkdWNlcnMvaW5kZXgnO1xuZXhwb3J0IHtVc2VyUmVkdWNlciBhcyDJtWUsZ2V0TG9nZ2VkSW4gYXMgybVmLGdldFVzZXIgYXMgybVnfSBmcm9tICcuL2xpYi9yZWR1Y2Vycy91c2VyLnJlZHVjZXInO1xuZXhwb3J0IHtGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgYXMgybVpfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0IHtGcm9udGVuZFNpZ25pblNlcnZpY2UgYXMgybVwfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZSc7XG5leHBvcnQge0Zyb250ZW5kQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgYXMgybVufSBmcm9tICcuL2xpYi9zbWFydC1jb21wb25lbnRzL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmV4cG9ydCB7U2lnbmluQ29udGFpbmVyQ29tcG9uZW50IGFzIMm1aH0gZnJvbSAnLi9saWIvc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyL3NpZ25pbi1jb250YWluZXIuY29tcG9uZW50JzsiXX0=