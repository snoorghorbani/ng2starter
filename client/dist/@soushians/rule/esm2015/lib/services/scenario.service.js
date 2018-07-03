/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { filter, map, startWith, share } from "rxjs/operators";
import { RuleConfigurationService } from "./rule-configuration.service";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./rule-configuration.service";
export class ScenarioService {
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
     * @param {?} scenario
     * @return {?}
     */
    upsert(scenario) {
        const /** @type {?} */ model = new GwtScenarioModel(scenario);
        return this.http
            .post("http://localhost:3000/api/gwt/scenario", model.getRequsetBody())
            .pipe(map(response => /** @type {?} */ (response)), share());
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    getAnchorScenarios(anchorId) {
        return this.http
            .get(`http://localhost:3000/api/gwt/anchor/${anchorId}/scenarios`)
            .map(response => /** @type {?} */ (response.Result));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectScenarioById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
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
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
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
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
ScenarioService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: RuleConfigurationService }
];
/** @nocollapse */ ScenarioService.ngInjectableDef = i0.defineInjectable({ factory: function ScenarioService_Factory() { return new ScenarioService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.RuleConfigurationService)); }, token: ScenarioService, providedIn: "root" });
function ScenarioService_tsickle_Closure_declarations() {
    /** @type {?} */
    ScenarioService.prototype.http;
    /** @type {?} */
    ScenarioService.prototype.store;
    /** @type {?} */
    ScenarioService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUtoRSxNQUFNOzs7Ozs7SUFDTCxZQUNTLE1BQ0EsT0FDQTtRQUZBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO0tBQ3pCOzs7OztJQUVKLE1BQU0sQ0FBQyxRQUEwQjtRQUNoQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxJQUFJLENBQUMsd0NBQXdDLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQUMsUUFBNEIsQ0FBQSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUMvRDs7Ozs7SUFDRCxrQkFBa0IsQ0FBQyxRQUFnQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQU0sd0NBQXdDLFFBQVEsWUFBWSxDQUFDO2FBQ3RFLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxtQkFBQyxRQUFRLENBQUMsTUFBNEIsQ0FBQSxDQUFDLENBQUM7S0FDekQ7Ozs7O0lBQ0Qsa0JBQWtCLENBQUMsR0FBVztRQUM3Qix1QkFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQW1CLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLO2FBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzFDLElBQUksQ0FDSixNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUN2RCxDQUFDLEVBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUN6QzthQUNBLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBQ0QscUJBQXFCLENBQUMsUUFBZ0I7UUFDckMsdUJBQU0sT0FBTyxHQUFHLElBQUksZUFBZSxDQUFxQixTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSzthQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUMxQyxJQUFJLENBQ0osU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFDdEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDO1NBQzlELENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7OztZQXBERCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFaUSxVQUFVO1lBRVYsS0FBSztZQUdMLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHNoYXJlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0dXBzZXJ0KHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBHd3RTY2VuYXJpb01vZGVsKHNjZW5hcmlvKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2d3dC9zY2VuYXJpb1wiLCBtb2RlbC5nZXRSZXF1c2V0Qm9keSgpKVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UgYXMgR3d0U2NlbmFyaW9Nb2RlbCksIHNoYXJlKCkpO1xyXG5cdH1cclxuXHRnZXRBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8YW55PihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nd3QvYW5jaG9yLyR7YW5jaG9ySWR9L3NjZW5hcmlvc2ApXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuUmVzdWx0IGFzIEd3dFNjZW5hcmlvTW9kZWxbXSk7XHJcblx0fVxyXG5cdHNlbGVjdFNjZW5hcmlvQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmluZChzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gX2lkKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cdHNlbGVjdEFuY2hvclNjZW5hcmlvcyhhbmNob3JJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWxbXT4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRzdGFydFdpdGgoW10pLFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpb3MgPT4gc2NlbmFyaW9zICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNjZW5hcmlvcy5maWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IGFuY2hvcklkKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW9zKTtcclxuXHRcdFx0fSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIl19