/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, map, startWith, share } from "rxjs/operators";
import { BehaviorSubject } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { stringTemplate } from "@soushians/shared";
import { RuleConfigurationService } from "./rule-configuration.service";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
export class ScenarioService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configService
     */
    constructor(http, store, configService) {
        this.http = http;
        this.store = store;
        this.configService = configService;
        this.scenarios = {};
        this.config$ = this.configService.config$;
        this.config$.subscribe(config => (this.config = config));
    }
    /**
     * @param {?} scenario
     * @return {?}
     */
    upsert(scenario) {
        /** @type {?} */
        const model = new GwtScenarioModel(scenario);
        return this.http
            .post(this.config.env.frontend_server + this.config.endpoints.upsert, model.getRequsetBody())
            .pipe(map(response => (/** @type {?} */ (response))), share());
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    getAnchorScenarios(anchorId) {
        if (!this.scenarios[anchorId]) {
            this.scenarios[anchorId] = new BehaviorSubject([]);
            this.http
                .get(this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId }))
                .pipe(map(response => (/** @type {?} */ (response.Result))))
                .subscribe(scenarios => this.scenarios[anchorId].next(scenarios));
        }
        return this.scenarios[anchorId];
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectScenarioById(_id) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select(state => state.rule.scenarios.data)
            .pipe(filter(scenarios => scenarios != null), map(scenarios => {
            return scenarios.find(scenario => scenario._id == _id);
        }), filter(scenario => scenario != undefined))
            .subscribe(scenario => {
            subject.next(scenario);
        });
        return subject.asObservable();
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    selectAnchorScenarios(anchorId) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select(state => state.rule.scenarios.data)
            .pipe(startWith([]), filter(scenarios => scenarios != null), map(scenarios => {
            return scenarios.filter(scenario => scenario._id == anchorId);
        }))
            .subscribe(scenarios => {
            subject.next(scenarios);
        });
        return subject.asObservable();
    }
}
ScenarioService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScenarioService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: RuleConfigurationService }
];
if (false) {
    /** @type {?} */
    ScenarioService.prototype.config$;
    /** @type {?} */
    ScenarioService.prototype.config;
    /** @type {?} */
    ScenarioService.prototype.scenarios;
    /**
     * @type {?}
     * @private
     */
    ScenarioService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ScenarioService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ScenarioService.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU1oRSxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBSTNCLFlBQ1MsSUFBZ0IsRUFDaEIsS0FBc0IsRUFDdEIsYUFBdUM7UUFGdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFKaEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU1kLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUEwQjs7Y0FDMUIsS0FB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Q0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7O1lBbEVELFVBQVU7Ozs7WUFaRixVQUFVO1lBRVYsS0FBSztZQUlMLHdCQUF3Qjs7OztJQVFoQyxrQ0FBc0M7O0lBQ3RDLGlDQUF5Qjs7SUFDekIsb0NBQWU7Ozs7O0lBRWQsK0JBQXdCOzs7OztJQUN4QixnQ0FBOEI7Ozs7O0lBQzlCLHdDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHNoYXJlLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvU2VydmljZSB7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTxSdWxlTW9kdWxlQ29uZmlnPjtcclxuXHRjb25maWc6IFJ1bGVNb2R1bGVDb25maWc7XHJcblx0c2NlbmFyaW9zID0ge307XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQ7XHJcblx0XHR0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHR9XHJcblxyXG5cdHVwc2VydChzY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgR3d0U2NlbmFyaW9Nb2RlbChzY2VuYXJpbyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wb3N0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1c2V0Qm9keSgpKVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UgYXMgR3d0U2NlbmFyaW9Nb2RlbCksIHNoYXJlKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0QW5jaG9yU2NlbmFyaW9zKGFuY2hvcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT4ge1xyXG5cdFx0aWYgKCF0aGlzLnNjZW5hcmlvc1thbmNob3JJZF0pIHtcclxuXHRcdFx0dGhpcy5zY2VuYXJpb3NbYW5jaG9ySWRdID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KFtdKTtcclxuXHJcblx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQ8YW55Pih0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgc3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW5kcG9pbnRzLmdldCwgeyBhbmNob3JJZCB9KSlcclxuXHRcdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuUmVzdWx0IGFzIEd3dFNjZW5hcmlvTW9kZWxbXSkpXHJcblx0XHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4gdGhpcy5zY2VuYXJpb3NbYW5jaG9ySWRdLm5leHQoc2NlbmFyaW9zKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuc2NlbmFyaW9zW2FuY2hvcklkXTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdFNjZW5hcmlvQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmluZChzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gX2lkKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cclxuXHRzZWxlY3RBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0c3RhcnRXaXRoKFtdKSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvLl9pZCA9PSBhbmNob3JJZCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0c3ViamVjdC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==