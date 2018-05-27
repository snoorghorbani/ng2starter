/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { map, switchMap, take, filter } from "rxjs/operators";
import { Signin_ApiModel } from "../models";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./authentication-configuration.service";
import * as i3 from "@angular/material/snack-bar";
const /** @type {?} */ SIGNIN_RESPONSE = "[APP] SIGNIN_RESPONSE";
export class SigninService {
    /**
     * @param {?} http
     * @param {?} configurationService
     * @param {?} snackBar
     */
    constructor(http, configurationService, snackBar) {
        this.http = http;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signin(model) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.signIn != ""), take(1), switchMap(config => this.http.post(this.configurationService.config.endpoints.signIn, model)), map(response => {
            const /** @type {?} */ userModel = new Signin_ApiModel.Response(response).extractData();
            // this.SigninResponse.next(userModel);
            return userModel;
        }));
        // .catch(err => {
        // 	if (err.status == 400) {
        // 		this.snackBar.open("کد امنیتی اشتباه است", null, {
        // 			duration: 5000
        // 		});
        // 	} else if (err.status == 403) {
        // 		this.snackBar.open(" شماره موبایل و یا کلمه عبور اشتباه است", null, {
        // 			duration: 5000
        // 		});
        // 	}
        // 	return Observable.throw(err);
        // });
    }
    /**
     * @return {?}
     */
    signout() {
        localStorage.removeItem(SIGNIN_RESPONSE);
        return this.http
            .get(this.configurationService.config.endpoints.signOut, {
            withCredentials: true
        })
            .map(response => response);
    }
}
SigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ SigninService.ngInjectableDef = i0.defineInjectable({ factory: function SigninService_Factory() { return new SigninService(i0.inject(i1.HttpClient), i0.inject(i2.AuthenticationConfigurationService), i0.inject(i3.MatSnackBar)); }, token: SigninService, providedIn: "root" });
function SigninService_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninService.prototype.http;
    /** @type {?} */
    SigninService.prototype.configurationService;
    /** @type {?} */
    SigninService.prototype.snackBar;
}
export var /** @type {?} */ SigninServiceStub = {};
//# sourceMappingURL=signin.service.js.map
