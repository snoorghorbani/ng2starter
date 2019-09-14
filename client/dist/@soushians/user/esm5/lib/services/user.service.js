/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, filter, take, switchMap, combineLatest, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { stringTemplate } from "@soushians/shared";
import { getUser } from "@soushians/authentication";
import { UserConfigurationService } from "./user-configuration.service";
import { GetProfile } from "../profile-view/profile-view.actions";
import { getAccountInfo } from "../dashboard/account.reducer";
import { ProfileViewModel } from "../models/profile-view.model";
import { EditProfile_ApiModel } from "../models/profile-edit.model";
import { of } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./user-configuration.service";
var UserService = /** @class */ (function () {
    function UserService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configurationService.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return (_this.config = config); }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.store.dispatch(new GetProfile());
        }), 999);
    }
    /**
     * @return {?}
     */
    UserService.prototype.getAccountInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.endpoints.profileInformation != ""; })), take(1), combineLatest(this.store.select(getUser)), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], user = _b[1];
            return user != undefined;
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], user = _b[1];
            return _this.http
                .get(stringTemplate(config.env[config.server] + config.endpoints.profileInformation, {
                user: user || {}
            }))
                .let(config.responseToUserInfo)
                .pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var _user = Object.assign({}, response);
                if (_user.Role) {
                    _user.Roles = [_user.Role];
                }
                return _user;
            })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return of(false); })));
        })));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.editProfile = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model), model.getRequestBody())
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return new EditProfile_ApiModel.Response(response).extractData(); })));
    };
    // TODO: remove
    // TODO: remove
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.getInfo = 
    // TODO: remove
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
    };
    /**
     * @param {?} role
     * @return {?}
     */
    UserService.prototype.is_role = /**
     * @param {?} role
     * @return {?}
     */
    function (role) {
        return this.store
            .select(getAccountInfo)
            .pipe(filter((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user && user.Roles != undefined; })), take(1), map((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user.Roles.indexOf(role) > -1; })));
    };
    UserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.UserConfigurationService)); }, token: UserService, providedIn: "root" });
    return UserService;
}());
export { UserService };
if (false) {
    /** @type {?} */
    UserService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.configurationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBRTFCO0lBS0MscUJBQ1MsSUFBZ0IsRUFDaEIsS0FBaUIsRUFDakIsb0JBQThDO1FBSHZELGlCQVNDO1FBUlEsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMEI7UUFFdEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFT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QUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FDakc7YUFDQSxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCw2QkFBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2YsTUFBTSxDQUFDLGNBQWMsQ0FBQzthQUN0QixJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxFQUEvQixDQUErQixFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDOztnQkFuRUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFuQlEsVUFBVTtnQkFHVixLQUFLO2dCQUtMLHdCQUF3Qjs7O3NCQVRqQztDQXNGQyxBQXBFRCxJQW9FQztTQWpFWSxXQUFXOzs7SUFDdkIsNkJBQXlCOzs7OztJQUV4QiwyQkFBd0I7Ozs7O0lBQ3hCLDRCQUF5Qjs7Ozs7SUFDekIsMkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YWtlLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHRjb25maWc6IFVzZXJNb2R1bGVDb25maWc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQcm9maWxlKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldEFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXIpKSxcclxuXHRcdFx0ZmlsdGVyKChbY29uZmlnLCB1c2VyXTogW1VzZXJNb2R1bGVDb25maWcsIGFueV0pID0+IHVzZXIgIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbY29uZmlnLCB1c2VyXTogW1VzZXJNb2R1bGVDb25maWcsIGFueV0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0PGFueT4oXHJcblx0XHRcdFx0XHRcdHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiwge1xyXG5cdFx0XHRcdFx0XHRcdHVzZXI6IHVzZXIgfHwge31cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5sZXQoY29uZmlnLnJlc3BvbnNlVG9Vc2VySW5mbylcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBVc2VyTW9kZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBfdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChfdXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfdXNlci5Sb2xlcyA9IFtfdXNlci5Sb2xlXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF91c2VyO1xyXG5cdFx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4gb2YoZmFsc2UpKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dDxFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW52W3RoaXMuY29uZmlnLnNlcnZlcl0gKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMuZWRpdFByb2ZpbGUsIG1vZGVsKSxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IG5ldyBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZShyZXNwb25zZSkuZXh0cmFjdERhdGEoKSkpO1xyXG5cdH1cclxuXHQvLyBUT0RPOiByZW1vdmVcclxuXHRnZXRJbmZvKGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVudlt0aGlzLmNvbmZpZy5zZXJ2ZXJdICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLmdldEFjY291bnRJbmZvLCBtb2RlbClcclxuXHRcdFx0KVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcclxuXHR9XHJcblxyXG5cdGlzX3JvbGUocm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFjY291bnRJbmZvKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIodXNlciA9PiB1c2VyICYmIHVzZXIuUm9sZXMgIT0gdW5kZWZpbmVkKSwgdGFrZSgxKSwgbWFwKHVzZXIgPT4gdXNlci5Sb2xlcy5pbmRleE9mKHJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn1cclxuIl19