/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { UserModel, SignInActionTypes, DoSignoutAction, SigninService, NgsAuthenticationModule } from './public_api';
export { AuthenticationRoutingModule as ɵl } from './lib/authentication-routing.module';
export { MODULE_CONFIG_TOKEN as ɵd } from './lib/authentication.config';
export { RootNgsAuthenticationModule as ɵa } from './lib/authentication.module';
export { SigninComponent as ɵg } from './lib/dump-components/signin/signin.component';
export { AuthenticationEffects as ɵk } from './lib/effects/authentication.effects';
export { SigninEffects as ɵj } from './lib/effects/signin.effects';
export { UnauthorizedInterceptor as ɵn } from './lib/interceptors/unauthorized.interceptor';
export { WithCredentialInterceptor as ɵo } from './lib/interceptors/with-credential.interceptor';
export { AuthenticationReducers as ɵi } from './lib/reducers';
export { SigninGuard as ɵm } from './lib/routing-guards';
export { AuthenticationConfigurationService as ɵc } from './lib/services/authentication-configuration.service';
export { AuthenticationContainerComponent as ɵh } from './lib/smart-components/authentication-container/authentication-container.component';
export { SigninContainerComponent as ɵf } from './lib/smart-components/signin-container/signin-container.component';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbInNvdXNoaWFucy1hdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsc0dBQWMsY0FBYyxDQUFDO0FBRTdCLE9BQU8sRUFBQywyQkFBMkIsSUFBSSxFQUFFLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RixPQUFPLEVBQUMsbUJBQW1CLElBQUksRUFBRSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFDLDJCQUEyQixJQUFJLEVBQUUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlFLE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHFCQUFxQixJQUFJLEVBQUUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLElBQUksRUFBRSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLHVCQUF1QixJQUFJLEVBQUUsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFGLE9BQU8sRUFBQyx5QkFBeUIsSUFBSSxFQUFFLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRixPQUFPLEVBQUMsc0JBQXNCLElBQUksRUFBRSxFQUE4QyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pHLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtDQUFrQyxJQUFJLEVBQUUsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzdHLE9BQU8sRUFBQyxnQ0FBZ0MsSUFBSSxFQUFFLEVBQUMsTUFBTSxvRkFBb0YsQ0FBQztBQUMxSSxPQUFPLEVBQUMsd0JBQXdCLElBQUksRUFBRSxFQUFDLE1BQU0sb0VBQW9FLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcHVibGljX2FwaSc7XG5cbmV4cG9ydCB7QXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIGFzIMm1bH0gZnJvbSAnLi9saWIvYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUnO1xuZXhwb3J0IHtNT0RVTEVfQ09ORklHX1RPS0VOIGFzIMm1ZH0gZnJvbSAnLi9saWIvYXV0aGVudGljYXRpb24uY29uZmlnJztcbmV4cG9ydCB7Um9vdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIGFzIMm1YX0gZnJvbSAnLi9saWIvYXV0aGVudGljYXRpb24ubW9kdWxlJztcbmV4cG9ydCB7U2lnbmluQ29tcG9uZW50IGFzIMm1Z30gZnJvbSAnLi9saWIvZHVtcC1jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50JztcbmV4cG9ydCB7QXV0aGVudGljYXRpb25FZmZlY3RzIGFzIMm1a30gZnJvbSAnLi9saWIvZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzJztcbmV4cG9ydCB7U2lnbmluRWZmZWN0cyBhcyDJtWp9IGZyb20gJy4vbGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMnO1xuZXhwb3J0IHtVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciBhcyDJtW59IGZyb20gJy4vbGliL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3InO1xuZXhwb3J0IHtXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIGFzIMm1b30gZnJvbSAnLi9saWIvaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvcic7XG5leHBvcnQge0F1dGhlbnRpY2F0aW9uUmVkdWNlcnMgYXMgybVpLEF1dGhlbnRpY2F0aW9uU3RhdGUgYXMgybVlLEZlYXR1cmVTdGF0ZSBhcyDJtWJ9IGZyb20gJy4vbGliL3JlZHVjZXJzJztcbmV4cG9ydCB7U2lnbmluR3VhcmQgYXMgybVtfSBmcm9tICcuL2xpYi9yb3V0aW5nLWd1YXJkcyc7XG5leHBvcnQge0F1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgYXMgybVjfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0IHtBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBhcyDJtWh9IGZyb20gJy4vbGliL3NtYXJ0LWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tY29udGFpbmVyL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuZXhwb3J0IHtTaWduaW5Db250YWluZXJDb21wb25lbnQgYXMgybVmfSBmcm9tICcuL2xpYi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnQnOyJdfQ==