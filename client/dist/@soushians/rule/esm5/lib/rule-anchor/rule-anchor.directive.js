/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        if (!this.active) {
            return;
        }
        this.hideAnchor();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.showAnchor = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.add("show-anchor");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.hideAnchor = /**
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
        var _this = this;
        // TODO: remove
        // this.store.dispatch(new ShowAnchorsAction());
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
                },] },
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
    /** @type {?} */
    RuleAnchorDirective.prototype.scenarioService;
    /** @type {?} */
    RuleAnchorDirective.prototype.configService;
    /** @type {?} */
    RuleAnchorDirective.prototype.store;
    /** @type {?} */
    RuleAnchorDirective.prototype.el;
    /** @type {?} */
    RuleAnchorDirective.prototype.renderer;
    /** @type {?} */
    RuleAnchorDirective.prototype.bottomSheet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFPLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztJQWFqRiw2QkFDUyxpQkFDQSxlQUNBLE9BQ0EsSUFDQSxVQUNBO1FBTlQsaUJBWUM7UUFYUSxvQkFBZSxHQUFmLGVBQWU7UUFDZixrQkFBYSxHQUFiLGFBQWE7UUFDYixVQUFLLEdBQUwsS0FBSztRQUNMLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFDUixnQkFBVyxHQUFYLFdBQVc7MkJBYk4sSUFBSSxPQUFPLEVBQVE7UUFlaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7S0FDekQ7Ozs7SUFHRCwwQ0FBWTs7O0lBRFo7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbEI7Ozs7SUFHRCwwQ0FBWTs7O0lBRFo7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbEI7Ozs7SUFFTyx3Q0FBVTs7OztRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7OztJQUU1Qyx3Q0FBVTs7OztRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7OztJQUd2RCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFzQkM7OztRQWxCQSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWU7YUFDMUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEtBQUssU0FBUyxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDNUIsSUFBSSxNQUFNLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFBRTtpQkFBTTtnQkFBRSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUFFO1NBQzVFLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ3hDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUN6QixRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsWUFBWTs7b0JBQy9DLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxZQUFZLENBQUMsRUFBRSxFQUEzQixDQUEyQixDQUFDLENBQUM7O29CQUNsRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxLQUFLLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7b0JBQ25DLE9BQU8sS0FBSyxDQUFDO2lCQUNiLENBQUMsQ0FBQztnQkFFSCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNIOzs7O0lBQ0QseUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzVCOzs7O0lBQ0QsOENBQWdCOzs7SUFBaEI7UUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7S0FDakM7Ozs7SUFDRCxnREFBa0I7OztJQUFsQjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztLQUNwQzs7OztJQUNELHVEQUF5Qjs7O0lBQXpCO1FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNyRDs7OztJQUNELDBEQUE0Qjs7O0lBQTVCO1FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN4RDs7OztJQUNELDRDQUFjOzs7SUFBZDtRQUFBLGlCQW9CQztRQW5CQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQztZQUN0QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO2lCQUN2QjtnQkFDRCxVQUFVLEVBQUUsZUFBZTthQUMzQixDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7O1FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1FBQ3BELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5RDs7OztJQUNELDRDQUFjOzs7SUFBZDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBQ0QsMENBQVk7Ozs7SUFBWixVQUFhLFNBQTJCO1FBQXhDLGlCQXdCQztRQXZCQSxRQUFRLENBQUM7O1FBQ1QsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDOztRQUMzQixJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxLQUFLO2FBQzFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLEtBQUssRUFBaEMsQ0FBZ0MsQ0FBQzthQUNoRCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQzlDLFFBQVEsQ0FBQztRQUNULGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRyxDQUFDLFVBQUMsTUFBaUIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssSUFBSSxFQUFkLENBQWMsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLEVBQ2pFLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDcEIsUUFBUSxDQUFDO1lBQ1QsSUFBSSxXQUFXLEVBQUU7O2dCQUNoQixJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxLQUFLO3FCQUN6QyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQS9CLENBQStCLENBQUM7cUJBQy9DLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxhQUFhO3FCQUNsQixLQUFLLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDO3FCQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBaUIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssSUFBSSxFQUFkLENBQWMsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUMsQ0FBQzthQUMxRTtpQkFBTTtnQkFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFO1NBQzVCLENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxlQUFTLENBQUMsQ0FBQztLQUN2Qjs7Z0JBdElELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsY0FBYztpQkFDeEI7Ozs7Z0JBUFEsZUFBZTtnQkFHZix3QkFBd0I7Z0JBWHhCLEtBQUs7Z0JBRG9CLFVBQVU7Z0JBQUUsU0FBUztnQkFJOUMsY0FBYzs7OzJCQWVyQixLQUFLLFNBQUMsWUFBWTsrQkFvQmxCLFlBQVksU0FBQyxZQUFZOytCQU16QixZQUFZLFNBQUMsWUFBWTs7OEJBN0MzQjs7U0FpQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHppcCwgU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgR3d0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuLi9nd3Qtdmlldy9nd3Qtdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC10eXBlcy5lbnVtXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW3J1bGVBbmNob3JdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVBbmNob3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdEBJbnB1dChcInJ1bGVBbmNob3JcIikgYW5jaG9ySWQ7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRhY3RpdmUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cdGFuY2hvclNjZW5hcmlvcyQ6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5hY3RpdmUkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiBzLnJ1bGUucnVsZUFuY2hvcnMuYWN0aXZlKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XHJcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiAodGhpcy5hY3RpdmUgPSBhY3RpdmUpKTtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yXCIpO1xyXG5cdFx0dGhpcy5zdGVwcyA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuc3RlcHM7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxyXG5cdG9uTW91c2VFbnRlcigpIHtcclxuXHRcdGlmICghdGhpcy5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLnNob3dBbmNob3IoKTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXHJcblx0b25Nb3VzZUxlYXZlKCkge1xyXG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuaGlkZUFuY2hvcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93QW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBoaWRlQW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gVE9ETzogcmVtb3ZlXHJcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcclxuXHJcblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQgPSB0aGlzLnNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuYW5jaG9ySWQpIC8vIFRPRE86IHJlcGxhY2Ugc2VydmljZSBjYWxsIHdpdGggbmdyeCBhY3Rpb25cclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLCBmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT09IHVuZGVmaW5lZCkpO1xyXG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4ge1xyXG5cdFx0XHRpZiAoYWN0aXZlKSB7IHRoaXMuX2FjdGl2YXRlX2FuY2hvcigpOyB9IGVsc2UgeyB0aGlzLl9kZWFjdGl2YXRlX2FuY2hvcigpOyB9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PT0gc2NlbmFyaW9TdGVwLmlkKTtcclxuXHRcdFx0XHRcdGNvbnN0IF9zdGVwID0gT2JqZWN0LmNyZWF0ZShzdGVwKTtcclxuXHRcdFx0XHRcdF9zdGVwLnBhcmFtcyA9IHNjZW5hcmlvU3RlcC5wYXJhbXM7XHJcblx0XHRcdFx0XHRyZXR1cm4gX3N0ZXA7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2RvX3NjZW5hcmlvKHNjZW5hcmlvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0X2FjdGl2YXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9hbmNob3IoKTtcclxuXHRcdHRoaXMuX3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpO1xyXG5cdH1cclxuXHRfZGVhY3RpdmF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLl9yZW1vdmVfYW5jaG9yKCk7XHJcblx0XHR0aGlzLl9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcclxuXHR9XHJcblx0X3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X2NyZWF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3ItYnV0dG9uXCIsIFwibWF0LWljb24tYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwibWF0LWljb24tYnV0dG9uXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHd3RWaWV3Q29tcG9uZW50LCB7XHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwibWFnZW50YS10aGVtZVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBtYXRpY29uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwibWF0LWljb25cIik7XHJcblx0XHRtYXRpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXQtaWNvblwiLCBcIm1hdGVyaWFsLWljb25zXCIpO1xyXG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChcInNldHRpbmdzXCIpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChtYXRpY29uLCBpY29uKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24sIG1hdGljb24pO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hbmNob3IoKSB7XHJcblx0XHRpZiAoIXRoaXMuYnV0dG9uKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5idXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbik7XHJcblx0fVxyXG5cdF9kb19zY2VuYXJpbyhfc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSBfc2NlbmFyaW87XHJcblx0XHRjb25zdCBnaXZlblN0ZXBJbnRlcnByZXRvcnMgPSBzY2VuYXJpby5zdGVwc1xyXG5cdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09PSBHd3RTdGVwVHlwZXMuR2l2ZW4pXHJcblx0XHRcdC5tYXAoc3RlcCA9PiBzdGVwLmludGVycGVyYXRvcihzdGVwLnBhcmFtcykpO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb21iaW5lTGF0ZXN0KGdpdmVuU3RlcEludGVycHJldG9ycylcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxyXG5cdFx0XHRcdG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpLFxyXG5cdFx0XHRcdHN3aXRjaE1hcChnaXZlblJlc3VsdCA9PiB7XHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdGlmIChnaXZlblJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aGVuU3RlcEludGVycHJldG9ycyA9IHNjZW5hcmlvLnN0ZXBzXHJcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PT0gR3d0U3RlcFR5cGVzLlRoZW4pXHJcblx0XHRcdFx0XHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zLCB0aGlzLmVsKSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5lTGF0ZXN0XHJcblx0XHRcdFx0XHRcdFx0LmFwcGx5KG51bGwsIHRoZW5TdGVwSW50ZXJwcmV0b3JzKVxyXG5cdFx0XHRcdFx0XHRcdC5waXBlKG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7IHJldHVybiBvZihmYWxzZSk7IH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4geyB9KTtcclxuXHR9XHJcbn1cclxuIl19