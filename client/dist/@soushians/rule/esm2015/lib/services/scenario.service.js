/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { filter, map, startWith, share } from "rxjs/operators";
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
        this.config$ = this.configService.config$;
        this.config$.subscribe(config => (this.config = config));
    }
    /**
     * @param {?} scenario
     * @return {?}
     */
    upsert(scenario) {
        const /** @type {?} */ model = new GwtScenarioModel(scenario);
        return this.http
            .post(`${this.config.env.frontend_server}${this.config.endpoints.upsert}`, model.getRequsetBody())
            .pipe(map(response => /** @type {?} */ (response)), share());
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    getAnchorScenarios(anchorId) {
        return this.http
            .get(`${this.config.env.frontend_server}${stringTemplate(this.config.endpoints.get, { anchorId })}`)
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
    { type: Injectable },
];
/** @nocollapse */
ScenarioService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: RuleConfigurationService }
];
function ScenarioService_tsickle_Closure_declarations() {
    /** @type {?} */
    ScenarioService.prototype.config$;
    /** @type {?} */
    ScenarioService.prototype.config;
    /** @type {?} */
    ScenarioService.prototype.http;
    /** @type {?} */
    ScenarioService.prototype.store;
    /** @type {?} */
    ScenarioService.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUloRSxNQUFNOzs7Ozs7SUFHTCxZQUNTLE1BQ0EsT0FDQTtRQUZBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxrQkFBYSxHQUFiLGFBQWE7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7OztJQUVELE1BQU0sQ0FBQyxRQUEwQjtRQUNoQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2pHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQUMsUUFBNEIsQ0FBQSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUMvRDs7Ozs7SUFDRCxrQkFBa0IsQ0FBQyxRQUFnQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUN4RyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQUMsUUFBUSxDQUFDLE1BQTRCLENBQUEsQ0FBQyxDQUFDO0tBQ3pEOzs7OztJQUNELGtCQUFrQixDQUFDLEdBQVc7UUFDN0IsdUJBQU0sT0FBTyxHQUFHLElBQUksZUFBZSxDQUFtQixTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSzthQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUMxQyxJQUFJLENBQ0osTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUN0QyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7U0FDdkQsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FDekM7YUFDQSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzlCOzs7OztJQUNELHFCQUFxQixDQUFDLFFBQWdCO1FBQ3JDLHVCQUFNLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBcUIsU0FBUyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUs7YUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDMUMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzlCOzs7WUF2REQsVUFBVTs7OztZQVpGLFVBQVU7WUFFVixLQUFLO1lBS0wsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc2hhcmUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb1NlcnZpY2Uge1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8UnVsZU1vZHVsZUNvbmZpZz47XHJcblx0Y29uZmlnOiBSdWxlTW9kdWxlQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEd3dFNjZW5hcmlvTW9kZWwoc2NlbmFyaW8pO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfSR7dGhpcy5jb25maWcuZW5kcG9pbnRzLnVwc2VydH1gLCBtb2RlbC5nZXRSZXF1c2V0Qm9keSgpKVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UgYXMgR3d0U2NlbmFyaW9Nb2RlbCksIHNoYXJlKCkpO1xyXG5cdH1cclxuXHRnZXRBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8YW55PihgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfSR7c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW5kcG9pbnRzLmdldCwgeyBhbmNob3JJZCB9KX1gKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLlJlc3VsdCBhcyBHd3RTY2VuYXJpb01vZGVsW10pO1xyXG5cdH1cclxuXHRzZWxlY3RTY2VuYXJpb0J5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvcyA9PiBzY2VuYXJpb3MgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2NlbmFyaW9zLmZpbmQoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IF9pZCk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvICE9IHVuZGVmaW5lZClcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0c3RhcnRXaXRoKFtdKSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvLl9pZCA9PSBhbmNob3JJZCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0c3ViamVjdC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==