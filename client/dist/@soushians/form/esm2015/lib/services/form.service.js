/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { stringTemplate } from "@soushians/shared";
import { AddFormApiModel, EditFormApiModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { filter, map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./form-configuration.service";
export class FormService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        const /** @type {?} */ model = new AddFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(config => config.endpoints.addForm != "")
            .take(1)
            .switchMap(config => this.http.post(config.endpoints.addForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$
            .filter(config => config.endpoints.getForm != "")
            .take(1)
            .switchMap(config => this.http.get(stringTemplate(config.endpoints.getForm, { _id })))
            .map((response) => response.Result);
    }
    /**
     * @return {?}
     */
    getList() {
        return this.configurationService.config$
            .filter(config => config.endpoints.getList != "")
            .switchMap(config => this.http.get(config.endpoints.getList))
            .map((response) => response.Result);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        const /** @type {?} */ model = new EditFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(config => config.endpoints.editForm != "")
            .take(1)
            .switchMap(config => this.http.put(config.endpoints.editForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$
            .filter(config => config.endpoints.deleteForm != "")
            .switchMap(config => this.http.get(config.endpoints.deleteForm));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectFormById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select(state => state.form.list.data)
            .pipe(filter(forms => forms != null), map(forms => forms.find(form => form._id == _id)))
            .subscribe(FormSchemaModel => subject.next(FormSchemaModel));
        return subject.asObservable();
    }
}
FormService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
FormService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FormConfigurationService }
];
/** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.FormConfigurationService)); }, token: FormService, providedIn: "root" });
function FormService_tsickle_Closure_declarations() {
    /** @type {?} */
    FormService.prototype.responseCache;
    /** @type {?} */
    FormService.prototype.http;
    /** @type {?} */
    FormService.prototype.store;
    /** @type {?} */
    FormService.prototype.configurationService;
}
//# sourceMappingURL=form.service.js.map
