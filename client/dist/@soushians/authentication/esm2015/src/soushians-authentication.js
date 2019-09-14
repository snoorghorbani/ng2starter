/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, SigninService, SigninContainerComponent, NgsAuthenticationModule, getUser } from './public_api';
export { AuthenticationRoutingModule as ɵr } from './lib/authentication-routing.module';
export { MODULE_CONFIG_TOKEN as ɵa } from './lib/authentication.config';
export { RootNgsAuthenticationModule as ɵb } from './lib/authentication.module';
export { SigninComponent as ɵi } from './lib/dump-components/signin/signin.component';
export { SignupComponent as ɵl } from './lib/dump-components/signup/signup.component';
export { AuthenticationEffects as ɵq } from './lib/effects/authentication.effects';
export { SigninEffects as ɵp } from './lib/effects/signin.effects';
export { UnauthorizedInterceptor as ɵs } from './lib/interceptors/unauthorized.interceptor';
export { WithCredentialInterceptor as ɵt } from './lib/interceptors/with-credential.interceptor';
export { AuthenticationReducers as ɵc, selectAuthState as ɵe, selectAuthenticationState as ɵd } from './lib/reducers/index';
export { UserReducer as ɵn, getUser as ɵo } from './lib/reducers/user.reducer';
export { SigninGuard as ɵm } from './lib/routing-guards/signin.guard';
export { AuthenticationConfigurationService as ɵh } from './lib/services/authentication-configuration.service';
export { AuthenticationContainerComponent as ɵj } from './lib/smart-components/authentication-container/authentication-container.component';
export { SignupContainerComponent as ɵk } from './lib/smart-components/signup-container/signup-container.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9zb3VzaGlhbnMtYXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLCtKQUFjLGNBQWMsQ0FBQztBQUU3QixPQUFPLEVBQUMsMkJBQTJCLElBQUksRUFBRSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEYsT0FBTyxFQUFDLG1CQUFtQixJQUFJLEVBQUUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBQywyQkFBMkIsSUFBSSxFQUFFLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsZUFBZSxJQUFJLEVBQUUsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHFCQUFxQixJQUFJLEVBQUUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLElBQUksRUFBRSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLHVCQUF1QixJQUFJLEVBQUUsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFGLE9BQU8sRUFBQyx5QkFBeUIsSUFBSSxFQUFFLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUUvRixPQUFPLEVBQUMsc0JBQXNCLElBQUksRUFBRSxFQUFDLGVBQWUsSUFBSSxFQUFFLEVBQUMseUJBQXlCLElBQUksRUFBRSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEgsT0FBTyxFQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUMsT0FBTyxJQUFJLEVBQUUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGtDQUFrQyxJQUFJLEVBQUUsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzdHLE9BQU8sRUFBQyxnQ0FBZ0MsSUFBSSxFQUFFLEVBQUMsTUFBTSxvRkFBb0YsQ0FBQztBQUMxSSxPQUFPLEVBQUMsd0JBQXdCLElBQUksRUFBRSxFQUFDLE1BQU0sb0VBQW9FLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcHVibGljX2FwaSc7XG5cbmV4cG9ydCB7QXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIGFzIMm1cn0gZnJvbSAnLi9saWIvYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUnO1xuZXhwb3J0IHtNT0RVTEVfQ09ORklHX1RPS0VOIGFzIMm1YX0gZnJvbSAnLi9saWIvYXV0aGVudGljYXRpb24uY29uZmlnJztcbmV4cG9ydCB7Um9vdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIGFzIMm1Yn0gZnJvbSAnLi9saWIvYXV0aGVudGljYXRpb24ubW9kdWxlJztcbmV4cG9ydCB7U2lnbmluQ29tcG9uZW50IGFzIMm1aX0gZnJvbSAnLi9saWIvZHVtcC1jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50JztcbmV4cG9ydCB7U2lnbnVwQ29tcG9uZW50IGFzIMm1bH0gZnJvbSAnLi9saWIvZHVtcC1jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmV4cG9ydCB7QXV0aGVudGljYXRpb25FZmZlY3RzIGFzIMm1cX0gZnJvbSAnLi9saWIvZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzJztcbmV4cG9ydCB7U2lnbmluRWZmZWN0cyBhcyDJtXB9IGZyb20gJy4vbGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMnO1xuZXhwb3J0IHtVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciBhcyDJtXN9IGZyb20gJy4vbGliL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3InO1xuZXhwb3J0IHtXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIGFzIMm1dH0gZnJvbSAnLi9saWIvaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvcic7XG5leHBvcnQge0F1dGhlbnRpY2F0aW9uU3RhdGUgYXMgybVmLEZlYXR1cmVTdGF0ZSBhcyDJtWd9IGZyb20gJy4vbGliL3JlZHVjZXJzJztcbmV4cG9ydCB7QXV0aGVudGljYXRpb25SZWR1Y2VycyBhcyDJtWMsc2VsZWN0QXV0aFN0YXRlIGFzIMm1ZSxzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlIGFzIMm1ZH0gZnJvbSAnLi9saWIvcmVkdWNlcnMvaW5kZXgnO1xuZXhwb3J0IHtVc2VyUmVkdWNlciBhcyDJtW4sZ2V0VXNlciBhcyDJtW99IGZyb20gJy4vbGliL3JlZHVjZXJzL3VzZXIucmVkdWNlcic7XG5leHBvcnQge1NpZ25pbkd1YXJkIGFzIMm1bX0gZnJvbSAnLi9saWIvcm91dGluZy1ndWFyZHMvc2lnbmluLmd1YXJkJztcbmV4cG9ydCB7QXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSBhcyDJtWh9IGZyb20gJy4vbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5leHBvcnQge0F1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IGFzIMm1an0gZnJvbSAnLi9saWIvc21hcnQtY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1jb250YWluZXIvYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5leHBvcnQge1NpZ251cENvbnRhaW5lckNvbXBvbmVudCBhcyDJtWt9IGZyb20gJy4vbGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbnVwLWNvbnRhaW5lci9zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudCc7Il19