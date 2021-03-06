/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
* Public API Surface of authentication
*/
export { UserModel } from "./lib/models/user.model";
export { SignInActionTypes, DoSignoutAction, SigninRequiredAction } from "./lib/actions/signin.actions";
// export * from "./lib/reducers";
export { SigninService } from "./lib/services/signin.service";
export { SigninContainerComponent } from "./lib/smart-components/signin-container/signin-container.component";
export { NgsAuthenticationModule } from "./lib/authentication.module";
export { getUser } from "./lib/reducers/index";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJzcmMvcHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXBELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHeEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogUHVibGljIEFQSSBTdXJmYWNlIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiovXHJcblxyXG5leHBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyB9IGZyb20gXCIuL2xpYi9hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuZXhwb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbGliL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcywgRG9TaWdub3V0QWN0aW9uLCBTaWduaW5SZXF1aXJlZEFjdGlvbiB9IGZyb20gXCIuL2xpYi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmV4cG9ydCB7IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9saWIvYWN0aW9ucy9hdXRoZW50aWNhdGlvbi5hY3Rpb25zXCI7XHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2xpYi9yZWR1Y2Vyc1wiO1xyXG5leHBvcnQgeyBTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4vbGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmV4cG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2xpYi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuZXhwb3J0IHsgTmdzQXV0aGVudGljYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi9saWIvYXV0aGVudGljYXRpb24ubW9kdWxlXCI7XHJcbmV4cG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi9saWIvcmVkdWNlcnMvaW5kZXhcIjtcclxuIl19