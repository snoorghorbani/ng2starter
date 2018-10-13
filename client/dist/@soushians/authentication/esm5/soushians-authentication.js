/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, SigninService, SigninContainerComponent, NgsAuthenticationModule, getUser } from './public_api';
export { AuthenticationRoutingModule as ɵr } from './lib/authentication-routing.module';
export { MODULE_CONFIG_TOKEN as ɵg } from './lib/authentication.config';
export { RootNgsAuthenticationModule as ɵa } from './lib/authentication.module';
export { SigninComponent as ɵi } from './lib/dump-components/signin/signin.component';
export { SignupComponent as ɵl } from './lib/dump-components/signup/signup.component';
export { AuthenticationEffects as ɵq } from './lib/effects/authentication.effects';
export { SigninEffects as ɵp } from './lib/effects/signin.effects';
export { UnauthorizedInterceptor as ɵs } from './lib/interceptors/unauthorized.interceptor';
export { WithCredentialInterceptor as ɵt } from './lib/interceptors/with-credential.interceptor';
export { AuthenticationReducers as ɵb, selectAuthState as ɵd, selectAuthenticationState as ɵc } from './lib/reducers/index';
export { UserReducer as ɵn, getUser as ɵo } from './lib/reducers/user.reducer';
export { SigninGuard as ɵm } from './lib/routing-guards/signin.guard';
export { AuthenticationConfigurationService as ɵf } from './lib/services/authentication-configuration.service';
export { AuthenticationContainerComponent as ɵj } from './lib/smart-components/authentication-container/authentication-container.component';
export { SignupContainerComponent as ɵk } from './lib/smart-components/signup-container/signup-container.component';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbInNvdXNoaWFucy1hdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsK0pBQWMsY0FBYyxDQUFDO0FBRTdCLE9BQU8sRUFBQywyQkFBMkIsSUFBSSxFQUFFLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RixPQUFPLEVBQUMsbUJBQW1CLElBQUksRUFBRSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFDLDJCQUEyQixJQUFJLEVBQUUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlFLE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFDLGVBQWUsSUFBSSxFQUFFLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUMscUJBQXFCLElBQUksRUFBRSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsdUJBQXVCLElBQUksRUFBRSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFDLHlCQUF5QixJQUFJLEVBQUUsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRS9GLE9BQU8sRUFBQyxzQkFBc0IsSUFBSSxFQUFFLEVBQUMsZUFBZSxJQUFJLEVBQUUsRUFBQyx5QkFBeUIsSUFBSSxFQUFFLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN4SCxPQUFPLEVBQUMsV0FBVyxJQUFJLEVBQUUsRUFBQyxPQUFPLElBQUksRUFBRSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDNUUsT0FBTyxFQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsa0NBQWtDLElBQUksRUFBRSxFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0csT0FBTyxFQUFDLGdDQUFnQyxJQUFJLEVBQUUsRUFBQyxNQUFNLG9GQUFvRixDQUFDO0FBQzFJLE9BQU8sRUFBQyx3QkFBd0IsSUFBSSxFQUFFLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcblxuZXhwb3J0IHtBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgYXMgybVyfSBmcm9tICcuL2xpYi9hdXRoZW50aWNhdGlvbi1yb3V0aW5nLm1vZHVsZSc7XG5leHBvcnQge01PRFVMRV9DT05GSUdfVE9LRU4gYXMgybVnfSBmcm9tICcuL2xpYi9hdXRoZW50aWNhdGlvbi5jb25maWcnO1xuZXhwb3J0IHtSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUgYXMgybVhfSBmcm9tICcuL2xpYi9hdXRoZW50aWNhdGlvbi5tb2R1bGUnO1xuZXhwb3J0IHtTaWduaW5Db21wb25lbnQgYXMgybVpfSBmcm9tICcuL2xpYi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuZXhwb3J0IHtTaWdudXBDb21wb25lbnQgYXMgybVsfSBmcm9tICcuL2xpYi9kdW1wLWNvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuZXhwb3J0IHtBdXRoZW50aWNhdGlvbkVmZmVjdHMgYXMgybVxfSBmcm9tICcuL2xpYi9lZmZlY3RzL2F1dGhlbnRpY2F0aW9uLmVmZmVjdHMnO1xuZXhwb3J0IHtTaWduaW5FZmZlY3RzIGFzIMm1cH0gZnJvbSAnLi9saWIvZWZmZWN0cy9zaWduaW4uZWZmZWN0cyc7XG5leHBvcnQge1VuYXV0aG9yaXplZEludGVyY2VwdG9yIGFzIMm1c30gZnJvbSAnLi9saWIvaW50ZXJjZXB0b3JzL3VuYXV0aG9yaXplZC5pbnRlcmNlcHRvcic7XG5leHBvcnQge1dpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IgYXMgybV0fSBmcm9tICcuL2xpYi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFsLmludGVyY2VwdG9yJztcbmV4cG9ydCB7QXV0aGVudGljYXRpb25TdGF0ZSBhcyDJtWgsRmVhdHVyZVN0YXRlIGFzIMm1ZX0gZnJvbSAnLi9saWIvcmVkdWNlcnMnO1xuZXhwb3J0IHtBdXRoZW50aWNhdGlvblJlZHVjZXJzIGFzIMm1YixzZWxlY3RBdXRoU3RhdGUgYXMgybVkLHNlbGVjdEF1dGhlbnRpY2F0aW9uU3RhdGUgYXMgybVjfSBmcm9tICcuL2xpYi9yZWR1Y2Vycy9pbmRleCc7XG5leHBvcnQge1VzZXJSZWR1Y2VyIGFzIMm1bixnZXRVc2VyIGFzIMm1b30gZnJvbSAnLi9saWIvcmVkdWNlcnMvdXNlci5yZWR1Y2VyJztcbmV4cG9ydCB7U2lnbmluR3VhcmQgYXMgybVtfSBmcm9tICcuL2xpYi9yb3V0aW5nLWd1YXJkcy9zaWduaW4uZ3VhcmQnO1xuZXhwb3J0IHtBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIGFzIMm1Zn0gZnJvbSAnLi9saWIvc2VydmljZXMvYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCB7QXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgYXMgybVqfSBmcm9tICcuL2xpYi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmV4cG9ydCB7U2lnbnVwQ29udGFpbmVyQ29tcG9uZW50IGFzIMm1a30gZnJvbSAnLi9saWIvc21hcnQtY29tcG9uZW50cy9zaWdudXAtY29udGFpbmVyL3NpZ251cC1jb250YWluZXIuY29tcG9uZW50JzsiXX0=