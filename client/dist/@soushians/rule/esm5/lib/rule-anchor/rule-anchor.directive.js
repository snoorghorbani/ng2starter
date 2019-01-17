/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ElementRef, Renderer2, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { of, Subject, combineLatest } from "rxjs";
import { filter, map, switchMap, takeUntil } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { GwtViewComponent } from "../gwt-view/gwt-view.component";
import { ScenarioService } from "../services/scenario.service";
import { GwtStepTypes } from "../models/gwt-step-types.enum";
import { RuleConfigurationService } from "../services/rule-configuration.service";
var RuleAnchorDirective = /** @class */ (function () {
    function RuleAnchorDirective(scenarioService, configService, store, el, renderer, bottomSheet) {
        var _this = this;
        this.scenarioService = scenarioService;
        this.configService = configService;
        this.store = store;
        this.el = el;
        this.renderer = renderer;
        this.bottomSheet = bottomSheet;
        this.unsubscribe = new Subject();
        this.active$ = this.store.select(function (s) { return s.rule.ruleAnchors.active; }).pipe(takeUntil(this.unsubscribe));
        this.active$.subscribe(function (active) { return (_this.active = active); });
        this.el.nativeElement.classList.add("ngs-rule-anchor");
        this.steps = this.configService.config$.getValue().steps;
    }
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        debugger;
        this.el;
        if (!this.active) {
            return;
        }
        this.showAnchor();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.active) {
            return;
        }
        setTimeout(function () {
            _this.hideAnchor();
        }, 999);
    };
    /**
     * @private
     * @return {?}
     */
    RuleAnchorDirective.prototype.showAnchor = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.add("show-anchor");
    };
    /**
     * @private
     * @return {?}
     */
    RuleAnchorDirective.prototype.hideAnchor = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.remove("show-anchor");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // TODO: remove
        // this.store.dispatch(new ShowAnchorsAction());
        var _this = this;
        this.anchorScenarios$ = this.scenarioService
            .getAnchorScenarios(this.anchorId) // TODO: replace service call with ngrx action
            .pipe(takeUntil(this.unsubscribe), filter(function (scenario) { return scenario !== undefined; }));
        this.active$.subscribe(function (active) {
            if (active) {
                _this._activate_anchor();
            }
            else {
                _this._deactivate_anchor();
            }
        });
        this.anchorScenarios$.subscribe(function (scenarios) {
            scenarios.forEach(function (scenario) {
                scenario.steps = scenario.steps.map(function (scenarioStep) {
                    /** @type {?} */
                    var step = _this.steps.find(function (step) { return step.id === scenarioStep.id; });
                    /** @type {?} */
                    var _step = Object.create(step);
                    _step.params = scenarioStep.params;
                    return _step;
                });
                _this._do_scenario(scenario);
            });
        });
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._activate_anchor = /**
     * @return {?}
     */
    function () {
        this._create_anchor();
        this._set_active_class_to_host();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._deactivate_anchor = /**
     * @return {?}
     */
    function () {
        this._remove_anchor();
        this._remove_active_class_to_host();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._set_active_class_to_host = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.add("anchor-active");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._remove_active_class_to_host = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.remove("anchor-active");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._create_anchor = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.button = this.renderer.createElement("button");
        this.button.classList.add("ngs-rule-anchor-button", "mat-icon-button");
        this.button.setAttribute("mat-icon-button", "");
        this.button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.bottomSheet.open(GwtViewComponent, {
                data: {
                    anchorId: _this.anchorId
                },
                panelClass: "magenta-theme"
            });
        });
        /** @type {?} */
        var maticon = this.renderer.createElement("mat-icon");
        maticon.classList.add("mat-icon", "material-icons");
        /** @type {?} */
        var icon = this.renderer.createText("settings");
        this.renderer.appendChild(maticon, icon);
        this.renderer.appendChild(this.button, maticon);
        this.renderer.appendChild(this.el.nativeElement, this.button);
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._remove_anchor = /**
     * @return {?}
     */
    function () {
        if (!this.button) {
            return;
        }
        this.button.parentNode.removeChild(this.button);
    };
    /**
     * @param {?} _scenario
     * @return {?}
     */
    RuleAnchorDirective.prototype._do_scenario = /**
     * @param {?} _scenario
     * @return {?}
     */
    function (_scenario) {
        var _this = this;
        debugger;
        /** @type {?} */
        var scenario = _scenario;
        /** @type {?} */
        var givenStepInterpretors = scenario.steps
            .filter(function (step) { return step.type === GwtStepTypes.Given; })
            .map(function (step) { return step.interperator(step.params); });
        debugger;
        combineLatest(givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map(function (values) { return values.every(function (value) { return value === true; }); }), switchMap(function (givenResult) {
            debugger;
            if (givenResult) {
                /** @type {?} */
                var thenStepInterpretors = scenario.steps
                    .filter(function (step) { return step.type === GwtStepTypes.Then; })
                    .map(function (step) { return step.interperator(step.params, _this.el); });
                return combineLatest
                    .apply(null, thenStepInterpretors)
                    .pipe(map(function (values) { return values.every(function (value) { return value === true; }); }));
            }
            else {
                return of(false);
            }
        }))
            .subscribe(function () { });
    };
    RuleAnchorDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ruleAnchor]"
                },] }
    ];
    /** @nocollapse */
    RuleAnchorDirective.ctorParameters = function () { return [
        { type: ScenarioService },
        { type: RuleConfigurationService },
        { type: Store },
        { type: ElementRef },
        { type: Renderer2 },
        { type: MatBottomSheet }
    ]; };
    RuleAnchorDirective.propDecorators = {
        anchorId: [{ type: Input, args: ["ruleAnchor",] }],
        onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
        onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
    };
    return RuleAnchorDirective;
}());
export { RuleAnchorDirective };
if (false) {
    /** @type {?} */
    RuleAnchorDirective.prototype.unsubscribe;
    /** @type {?} */
    RuleAnchorDirective.prototype.anchorId;
    /** @type {?} */
    RuleAnchorDirective.prototype.steps;
    /** @type {?} */
    RuleAnchorDirective.prototype.active$;
    /** @type {?} */
    RuleAnchorDirective.prototype.active;
    /** @type {?} */
    RuleAnchorDirective.prototype.button;
    /** @type {?} */
    RuleAnchorDirective.prototype.anchorScenarios$;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.scenarioService;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.store;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.bottomSheet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFPLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWxGO0lBV0MsNkJBQ1MsZUFBZ0MsRUFDaEMsYUFBdUMsRUFDdkMsS0FBc0IsRUFDdEIsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLFdBQTJCO1FBTnBDLGlCQVlDO1FBWFEsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2QyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFicEMs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QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxJQUFJLEVBQWQsQ0FBYyxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQyxDQUFDO2FBQzFFO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCO1FBQ0YsQ0FBQyxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDOztnQkF0SkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO2lCQUN4Qjs7OztnQkFQUSxlQUFlO2dCQUdmLHdCQUF3QjtnQkFYeEIsS0FBSztnQkFEb0IsVUFBVTtnQkFBRSxTQUFTO2dCQUk5QyxjQUFjOzs7MkJBZXJCLEtBQUssU0FBQyxZQUFZOytCQW9CbEIsWUFBWSxTQUFDLFlBQVk7K0JBVXpCLFlBQVksU0FBQyxZQUFZOztJQW9IM0IsMEJBQUM7Q0FBQSxBQXZKRCxJQXVKQztTQXBKWSxtQkFBbUI7OztJQUMvQiwwQ0FBa0M7O0lBQ2xDLHVDQUE4Qjs7SUFDOUIsb0NBQWlCOztJQUNqQixzQ0FBNkI7O0lBQzdCLHFDQUFnQjs7SUFDaEIscUNBQTBCOztJQUMxQiwrQ0FBaUQ7Ozs7O0lBRWhELDhDQUF3Qzs7Ozs7SUFDeEMsNENBQStDOzs7OztJQUMvQyxvQ0FBOEI7Ozs7O0lBQzlCLGlDQUFzQjs7Ozs7SUFDdEIsdUNBQTJCOzs7OztJQUMzQiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgemlwLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLXR5cGVzLmVudW1cIjtcclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbcnVsZUFuY2hvcl1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVsZUFuY2hvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0QElucHV0KFwicnVsZUFuY2hvclwiKSBhbmNob3JJZDtcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG5cdGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblx0YW5jaG9yU2NlbmFyaW9zJDogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7XHJcblx0XHR0aGlzLmFjdGl2ZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IHMucnVsZS5ydWxlQW5jaG9ycy5hY3RpdmUpLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcclxuXHRcdHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+ICh0aGlzLmFjdGl2ZSA9IGFjdGl2ZSkpO1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3JcIik7XHJcblx0XHR0aGlzLnN0ZXBzID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5zdGVwcztcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXHJcblx0b25Nb3VzZUVudGVyKCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmVsO1xyXG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnNob3dBbmNob3IoKTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXHJcblx0b25Nb3VzZUxlYXZlKCkge1xyXG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5oaWRlQW5jaG9yKCk7XHJcblx0XHR9LCA5OTkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93QW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBoaWRlQW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gVE9ETzogcmVtb3ZlXHJcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcclxuXHJcblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQgPSB0aGlzLnNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuYW5jaG9ySWQpIC8vIFRPRE86IHJlcGxhY2Ugc2VydmljZSBjYWxsIHdpdGggbmdyeCBhY3Rpb25cclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLCBmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT09IHVuZGVmaW5lZCkpO1xyXG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4ge1xyXG5cdFx0XHRpZiAoYWN0aXZlKSB7XHJcblx0XHRcdFx0dGhpcy5fYWN0aXZhdGVfYW5jaG9yKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fZGVhY3RpdmF0ZV9hbmNob3IoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdHNjZW5hcmlvcy5mb3JFYWNoKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHRzY2VuYXJpby5zdGVwcyA9IHNjZW5hcmlvLnN0ZXBzLm1hcChzY2VuYXJpb1N0ZXAgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuaWQgPT09IHNjZW5hcmlvU3RlcC5pZCk7XHJcblx0XHRcdFx0XHRjb25zdCBfc3RlcCA9IE9iamVjdC5jcmVhdGUoc3RlcCk7XHJcblx0XHRcdFx0XHRfc3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xyXG5cdFx0XHRcdFx0cmV0dXJuIF9zdGVwO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9kb19zY2VuYXJpbyhzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdF9hY3RpdmF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLl9jcmVhdGVfYW5jaG9yKCk7XHJcblx0XHR0aGlzLl9zZXRfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcclxuXHR9XHJcblx0X2RlYWN0aXZhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5fcmVtb3ZlX2FuY2hvcigpO1xyXG5cdFx0dGhpcy5fcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XHJcblx0fVxyXG5cdF9zZXRfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuY2hvci1hY3RpdmVcIik7XHJcblx0fVxyXG5cdF9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFuY2hvci1hY3RpdmVcIik7XHJcblx0fVxyXG5cdF9jcmVhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5idXR0b24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHR0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yLWJ1dHRvblwiLCBcIm1hdC1pY29uLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZShcIm1hdC1pY29uLWJ1dHRvblwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oR3d0Vmlld0NvbXBvbmVudCwge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFuY2hvcklkOiB0aGlzLmFuY2hvcklkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwYW5lbENsYXNzOiBcIm1hZ2VudGEtdGhlbWVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbWF0aWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcIm1hdC1pY29uXCIpO1xyXG5cdFx0bWF0aWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0LWljb25cIiwgXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuXHRcdGNvbnN0IGljb24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoXCJzZXR0aW5nc1wiKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobWF0aWNvbiwgaWNvbik7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uLCBtYXRpY29uKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvbik7XHJcblx0fVxyXG5cdF9yZW1vdmVfYW5jaG9yKCkge1xyXG5cdFx0aWYgKCF0aGlzLmJ1dHRvbikge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uKTtcclxuXHR9XHJcblx0X2RvX3NjZW5hcmlvKF9zY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IF9zY2VuYXJpbztcclxuXHRcdGNvbnN0IGdpdmVuU3RlcEludGVycHJldG9ycyA9IHNjZW5hcmlvLnN0ZXBzXHJcblx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT09IEd3dFN0ZXBUeXBlcy5HaXZlbilcclxuXHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zKSk7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbWJpbmVMYXRlc3QoZ2l2ZW5TdGVwSW50ZXJwcmV0b3JzKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXHJcblx0XHRcdFx0bWFwKCh2YWx1ZXM6IGJvb2xlYW5bXSkgPT4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSB0cnVlKSksXHJcblx0XHRcdFx0c3dpdGNoTWFwKGdpdmVuUmVzdWx0ID0+IHtcclxuXHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0aWYgKGdpdmVuUmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRoZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcclxuXHRcdFx0XHRcdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09PSBHd3RTdGVwVHlwZXMuVGhlbilcclxuXHRcdFx0XHRcdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMsIHRoaXMuZWwpKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmVMYXRlc3RcclxuXHRcdFx0XHRcdFx0XHQuYXBwbHkobnVsbCwgdGhlblN0ZXBJbnRlcnByZXRvcnMpXHJcblx0XHRcdFx0XHRcdFx0LnBpcGUobWFwKCh2YWx1ZXM6IGJvb2xlYW5bXSkgPT4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSB0cnVlKSkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge30pO1xyXG5cdH1cclxufVxyXG4iXX0=