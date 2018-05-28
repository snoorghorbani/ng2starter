/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../feature/feature.reducers";
import { ResetPasswordModel, ResetPasswordRequestModel, ChangePasswordModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./user-configuration.service";
export class PasswordService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userConfigurationService
     */
    constructor(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        this.numberOfRequeseted$ = this.store.select(FeatureReducer.getNumberOfRequeseted);
    }
    /**
     * @return {?}
     */
    isValidResetPasswordRequest() {
        return this.numberOfRequeseted$
            .take(1)
            .switchMap(count => (count < 3 ? Observable.of(true) : Observable.of(false)));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    isValidResetPasswordReset(data) {
        var /** @type {?} */ model = new ResetPasswordModel.Request(data);
        let { Token } = model;
        return this.http
            .get(`http://wifi.shatel.ir/api/v1/reset/tokens/${Token}`, { withCredentials: true })
            .map(response => response);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    requestResetPasswordLink(data) {
        var /** @type {?} */ model = new ResetPasswordRequestModel.Request(data);
        // TODO:
        // return this.http.post(this.userConfigurationService.config.endpoints.resetPasswordRequest(model), model.getRequestBody(), { withCredentials: true })
        return this.http
            .post(this.userConfigurationService.config.endpoints.editProfile, model.getRequestBody(), {
            withCredentials: true
        })
            .map(response => response);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    changePassword(data) {
        var /** @type {?} */ model = new ChangePasswordModel.Request(data);
        return this.http
            .patch("this.userConfigurationService.config.endpoints.changePassword(model)", model.getRequestBody(), {
            withCredentials: true
        })
            .map(response => response);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    resetPassword(data) {
        var /** @type {?} */ model = new ResetPasswordModel.Request(data);
        let { Token } = model;
        return this.http
            .patch(`http://wifi.shatel.ir/api/v1/reset/tokens/${Token}`, model.getRequestBody(), {
            withCredentials: true
        })
            .map(response => response);
    }
}
PasswordService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
PasswordService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: UserConfigurationService }
];
/** @nocollapse */ PasswordService.ngInjectableDef = i0.defineInjectable({ factory: function PasswordService_Factory() { return new PasswordService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserConfigurationService)); }, token: PasswordService, providedIn: "root" });
function PasswordService_tsickle_Closure_declarations() {
    /** @type {?} */
    PasswordService.prototype.numberOfRequeseted$;
    /** @type {?} */
    PasswordService.prototype.http;
    /** @type {?} */
    PasswordService.prototype.store;
    /** @type {?} */
    PasswordService.prototype.userConfigurationService;
}
export var /** @type {?} */ PasswordServiceStub = {};
//# sourceMappingURL=password.service.js.map
