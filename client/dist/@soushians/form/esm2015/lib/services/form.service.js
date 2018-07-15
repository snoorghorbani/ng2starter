/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { filter, map } from "rxjs/operators";
import { stringTemplate } from "@soushians/shared";
import { AddFormApiModel, EditFormApiModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";
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
            .filter((config) => config.endpoints.addForm != "")
            .take(1)
            .switchMap((config) => this.http.post(config.env.frontend_server + config.endpoints.addForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$
            .filter((config) => config.endpoints.getForm != "")
            .take(1)
            .switchMap((config) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.getForm, { _id })))
            .map((response) => response.Result);
    }
    /**
     * @return {?}
     */
    getList() {
        return this.configurationService.config$
            .filter((config) => config.endpoints.getList != "")
            .switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.getList))
            .map((response) => response.Result);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        const /** @type {?} */ model = new EditFormApiModel.Request(data);
        return this.configurationService.config$
            .filter((config) => config.endpoints.editForm != "")
            .take(1)
            .switchMap((config) => this.http.put(config.env.frontend_server + config.endpoints.editForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$
            .filter((config) => config.endpoints.deleteForm != "")
            .switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.deleteForm));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectFormById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select((state) => state.form.list.data)
            .pipe(filter((forms) => forms != null), map((forms) => forms.find((form) => form._id == _id)))
            .subscribe((formSchemaModel) => subject.next(formSchemaModel));
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
    FormService.prototype.http;
    /** @type {?} */
    FormService.prototype.store;
    /** @type {?} */
    FormService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUFtQixlQUFlLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0sV0FBVyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQU94RSxNQUFNOzs7Ozs7SUFDTCxZQUNTLE1BQ0EsT0FDQTtRQUZBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO0tBQ3pCOzs7OztJQUVKLEdBQUcsQ0FBQyxJQUE2QjtRQUNoQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTzthQUN0QyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQzthQUNsRCxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDckIsSUFB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aEUsSUFBSSxDQUFDLEtBQUs7YUFDUixNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0YsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM5Qjs7O1lBekRELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWZRLFVBQVU7WUFFVixLQUFLO1lBT0wsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgQWRkRm9ybUFwaU1vZGVsLCBFZGl0Rm9ybUFwaU1vZGVsLCBGb3JtTGlzdEFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGFkZChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmFkZEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5hZGRGb3JtLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBBZGRGb3JtQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRGb3JtICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXRGb3JtLCB7IF9pZCB9KSlcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0Z2V0TGlzdCgpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0ICE9IFwiXCIpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBGb3JtTGlzdEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHR1cGRhdGUoZGF0YTogRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmVkaXRGb3JtICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucHV0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5lZGl0Rm9ybSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0ZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdH1cclxuXHRzZWxlY3RGb3JtQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5mb3JtLmxpc3QuZGF0YSlcclxuXHRcdFx0LnBpcGUoZmlsdGVyKChmb3JtcykgPT4gZm9ybXMgIT0gbnVsbCksIG1hcCgoZm9ybXMpID0+IGZvcm1zLmZpbmQoKGZvcm0pID0+IGZvcm0uX2lkID09IF9pZCkpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChmb3JtU2NoZW1hTW9kZWwpID0+IHN1YmplY3QubmV4dChmb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=