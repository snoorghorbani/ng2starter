/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { EditProfile_ApiModel, ProfileViewModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
import { Store } from "@ngrx/store";
import { stringTemplate } from "@soushians/shared";
import { GetProfile } from "../profile-view/profile-view.actions";
import { getUser } from "../dashboard/user.reducer";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./user-configuration.service";
export class UserService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(() => {
            this.store.dispatch(new GetProfile());
        }, 999);
    }
    /**
     * @return {?}
     */
    getProfileInformation() {
        return this.configurationService.config$
            .filter(config => config.endpoints.profileInformation != "")
            .take(1)
            .switchMap(config => this.http.get(config.endpoints.profileInformation))
            .map((response) => response);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    editProfile(data) {
        var /** @type {?} */ model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
            .map((response) => new EditProfile_ApiModel.Response(response).extractData());
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getInfo(data) {
        const /** @type {?} */ model = new ProfileViewModel.Request(data);
        if (this.responseCache && this.responseCache.Email == model.Email)
            return Observable.of(this.responseCache);
        return this.http
            .get(stringTemplate(this.configurationService.config.endpoints.getUserInfo, model))
            .do((response) => (this.responseCache = response))
            .map(response => response);
    }
    /**
     * @param {?} role
     * @return {?}
     */
    is_role(role) {
        return this.store
            .select(getUser)
            .filter(user => user && user.Roles != undefined)
            .take(1)
            .map(user => user.Roles.indexOf(role) > -1);
    }
}
UserService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: UserConfigurationService }
];
/** @nocollapse */ UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserConfigurationService)); }, token: UserService, providedIn: "root" });
function UserService_tsickle_Closure_declarations() {
    /** @type {?} */
    UserService.prototype.responseCache;
    /** @type {?} */
    UserService.prototype.http;
    /** @type {?} */
    UserService.prototype.store;
    /** @type {?} */
    UserService.prototype.configurationService;
}
//# sourceMappingURL=user.service.js.map
