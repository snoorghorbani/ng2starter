/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, map, startWith, share } from "rxjs/operators";
import { BehaviorSubject } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { stringTemplate } from "@soushians/shared";
import { RuleConfigurationService } from "./rule-configuration.service";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
var ScenarioService = /** @class */ (function () {
    function ScenarioService(http, store, configService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configService = configService;
        this.scenarios = {};
        this.config$ = this.configService.config$;
        this.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return (_this.config = config); }));
    }
    /**
     * @param {?} scenario
     * @return {?}
     */
    ScenarioService.prototype.upsert = /**
     * @param {?} scenario
     * @return {?}
     */
    function (scenario) {
        /** @type {?} */
        var model = new GwtScenarioModel(scenario);
        return this.http
            .post(this.config.env.frontend_server + this.config.endpoints.upsert, model.getRequsetBody())
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return (/** @type {?} */ (response)); })), share());
    };
    /**
     * @param {?} anchorId
     * @return {?}
     */
    ScenarioService.prototype.getAnchorScenarios = /**
     * @param {?} anchorId
     * @return {?}
     */
    function (anchorId) {
        var _this = this;
        if (!this.scenarios[anchorId]) {
            this.scenarios[anchorId] = new BehaviorSubject([]);
            this.http
                .get(this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId: anchorId }))
                .pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return (/** @type {?} */ (response.Result)); })))
                .subscribe((/**
             * @param {?} scenarios
             * @return {?}
             */
            function (scenarios) { return _this.scenarios[anchorId].next(scenarios); }));
        }
        return this.scenarios[anchorId];
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    ScenarioService.prototype.selectScenarioById = /**
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        /** @type {?} */
        var subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.rule.scenarios.data; }))
            .pipe(filter((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) { return scenarios != null; })), map((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            return scenarios.find((/**
             * @param {?} scenario
             * @return {?}
             */
            function (scenario) { return scenario._id == _id; }));
        })), filter((/**
         * @param {?} scenario
         * @return {?}
         */
        function (scenario) { return scenario != undefined; })))
            .subscribe((/**
         * @param {?} scenario
         * @return {?}
         */
        function (scenario) {
            subject.next(scenario);
        }));
        return subject.asObservable();
    };
    /**
     * @param {?} anchorId
     * @return {?}
     */
    ScenarioService.prototype.selectAnchorScenarios = /**
     * @param {?} anchorId
     * @return {?}
     */
    function (anchorId) {
        /** @type {?} */
        var subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.rule.scenarios.data; }))
            .pipe(startWith([]), filter((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) { return scenarios != null; })), map((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            return scenarios.filter((/**
             * @param {?} scenario
             * @return {?}
             */
            function (scenario) { return scenario._id == anchorId; }));
        })))
            .subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            subject.next(scenarios);
        }));
        return subject.asObservable();
    };
    ScenarioService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ScenarioService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: RuleConfigurationService }
    ]; };
    return ScenarioService;
}());
export { ScenarioService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUtoRTtJQUtDLHlCQUNTLElBQWdCLEVBQ2hCLEtBQXNCLEVBQ3RCLGFBQXVDO1FBSGhELGlCQU9DO1FBTlEsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFKaEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU1kLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELGdDQUFNOzs7O0lBQU4sVUFBTyxR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QUFJLEVBQWpCLENBQWlCLEVBQUMsRUFDdEMsR0FBRzs7OztRQUFDLFVBQUEsU0FBUztZQUNaLE9BQU8sU0FBUyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLElBQUksUUFBUSxFQUF4QixDQUF3QixFQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFDLENBQ0Y7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxTQUFTO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7UUFDSixPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQixDQUFDOztnQkFsRUQsVUFBVTs7OztnQkFaRixVQUFVO2dCQUVWLEtBQUs7Z0JBSUwsd0JBQXdCOztJQXlFakMsc0JBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQWxFWSxlQUFlOzs7SUFDM0Isa0NBQXNDOztJQUN0QyxpQ0FBeUI7O0lBQ3pCLG9DQUFlOzs7OztJQUVkLCtCQUF3Qjs7Ozs7SUFDeEIsZ0NBQThCOzs7OztJQUM5Qix3Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzaGFyZSwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb1NlcnZpY2Uge1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8UnVsZU1vZHVsZUNvbmZpZz47XHJcblx0Y29uZmlnOiBSdWxlTW9kdWxlQ29uZmlnO1xyXG5cdHNjZW5hcmlvcyA9IHt9O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEd3dFNjZW5hcmlvTW9kZWwoc2NlbmFyaW8pO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdXNldEJvZHkoKSlcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlIGFzIEd3dFNjZW5hcmlvTW9kZWwpLCBzaGFyZSgpKTtcclxuXHR9XHJcblxyXG5cdGdldEFuY2hvclNjZW5hcmlvcyhhbmNob3JJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+IHtcclxuXHRcdGlmICghdGhpcy5zY2VuYXJpb3NbYW5jaG9ySWRdKSB7XHJcblx0XHRcdHRoaXMuc2NlbmFyaW9zW2FuY2hvcklkXSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbFtdPihbXSk7XHJcblxyXG5cdFx0XHR0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0PGFueT4odGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgYW5jaG9ySWQgfSkpXHJcblx0XHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLlJlc3VsdCBhcyBHd3RTY2VuYXJpb01vZGVsW10pKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHRoaXMuc2NlbmFyaW9zW2FuY2hvcklkXS5uZXh0KHNjZW5hcmlvcykpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLnNjZW5hcmlvc1thbmNob3JJZF07XHJcblx0fVxyXG5cclxuXHRzZWxlY3RTY2VuYXJpb0J5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvcyA9PiBzY2VuYXJpb3MgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2NlbmFyaW9zLmZpbmQoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IF9pZCk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvICE9IHVuZGVmaW5lZClcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0QW5jaG9yU2NlbmFyaW9zKGFuY2hvcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbFtdPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnJ1bGUuc2NlbmFyaW9zLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHN0YXJ0V2l0aChbXSksXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvcyA9PiBzY2VuYXJpb3MgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2NlbmFyaW9zLmZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gYW5jaG9ySWQpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpb3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=