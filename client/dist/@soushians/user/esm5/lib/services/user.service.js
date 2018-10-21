/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.configurationService.config$.subscribe(function (config) { return (_this.config = config); });
        setTimeout(function () {
            _this.store.dispatch(new GetProfile());
        }, 999);
    }
    /**
     * @return {?}
     */
    UserService.prototype.getAccountInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.profileInformation != ""; }), take(1), combineLatest(this.store.select(function (s) {
            debugger;
            return getUser(s);
        })), filter(function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], user = _b[1];
            return user != undefined;
        }), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), config = _b[0], user = _b[1];
            debugger;
            return _this.http
                .get(stringTemplate(config.env[config.server] + config.endpoints.profileInformation, {
                user: user || {}
            }))
                .let(config.responseToUserInfo)
                .pipe(map(function (response) {
                var /** @type {?} */ _user = Object.assign({}, response);
                if (_user.Role) {
                    _user.Roles = [_user.Role];
                }
                return _user;
            }), catchError(function (err) { return of(false); }));
        }));
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
        var /** @type {?} */ model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model), model.getRequestBody())
            .pipe(map(function (response) { return new EditProfile_ApiModel.Response(response).extractData(); }));
    };
    // TODO: remove
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.getInfo = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
            .pipe(map(function (response) { return response; }));
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
            .pipe(filter(function (user) { return user && user.Roles != undefined; }), take(1), map(function (user) { return user.Roles.indexOf(role) > -1; }));
    };
    UserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserConfigurationService)); }, token: UserService, providedIn: "root" });
    return UserService;
}());
export { UserService };
function UserService_tsickle_Closure_declarations() {
    /** @type {?} */
    UserService.prototype.config;
    /** @type {?} */
    UserService.prototype.http;
    /** @type {?} */
    UserService.prototype.store;
    /** @type {?} */
    UserService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztJQU96QixxQkFDUyxNQUNBLE9BQ0E7UUFIVCxpQkFTQztRQVJRLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBRTVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFB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Q0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUNILGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FDakc7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQyxDQUFDLENBQUM7S0FDbEM7Ozs7O0lBRUQsNkJBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ2YsTUFBTSxDQUFDLGNBQWMsQ0FBQzthQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxFQUEvQixDQUErQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUMsQ0FBQztLQUM3Rzs7Z0JBdkVELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBbkJRLFVBQVU7Z0JBR1YsS0FBSztnQkFLTCx3QkFBd0I7OztzQkFUakM7O1NBcUJhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRha2UsIHN3aXRjaE1hcCwgY29tYmluZUxhdGVzdCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9kYXNoYm9hcmQvYWNjb3VudC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cdGNvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFByb2ZpbGUoKSk7XHJcblx0XHR9LCA5OTkpO1xyXG5cdH1cclxuXHJcblx0Z2V0QWNjb3VudEluZm8oKTogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5wcm9maWxlSW5mb3JtYXRpb24gIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy5zdG9yZS5zZWxlY3QocyA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0cmV0dXJuIGdldFVzZXIocyk7XHJcblx0XHRcdH0pKSxcclxuXHRcdFx0ZmlsdGVyKChbY29uZmlnLCB1c2VyXTogW1VzZXJNb2R1bGVDb25maWcsIGFueV0pID0+IHVzZXIgIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbY29uZmlnLCB1c2VyXTogW1VzZXJNb2R1bGVDb25maWcsIGFueV0pID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0PGFueT4oXHJcblx0XHRcdFx0XHRcdHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiwge1xyXG5cdFx0XHRcdFx0XHRcdHVzZXI6IHVzZXIgfHwge31cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5sZXQoY29uZmlnLnJlc3BvbnNlVG9Vc2VySW5mbylcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBVc2VyTW9kZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBfdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChfdXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfdXNlci5Sb2xlcyA9IFtfdXNlci5Sb2xlXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF91c2VyO1xyXG5cdFx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4gb2YoZmFsc2UpKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dDxFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW52W3RoaXMuY29uZmlnLnNlcnZlcl0gKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMuZWRpdFByb2ZpbGUsIG1vZGVsKSxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IG5ldyBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZShyZXNwb25zZSkuZXh0cmFjdERhdGEoKSkpO1xyXG5cdH1cclxuXHQvLyBUT0RPOiByZW1vdmVcclxuXHRnZXRJbmZvKGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVudlt0aGlzLmNvbmZpZy5zZXJ2ZXJdICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLmdldEFjY291bnRJbmZvLCBtb2RlbClcclxuXHRcdFx0KVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcclxuXHR9XHJcblxyXG5cdGlzX3JvbGUocm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFjY291bnRJbmZvKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIodXNlciA9PiB1c2VyICYmIHVzZXIuUm9sZXMgIT0gdW5kZWZpbmVkKSwgdGFrZSgxKSwgbWFwKHVzZXIgPT4gdXNlci5Sb2xlcy5pbmRleE9mKHJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn1cclxuIl19