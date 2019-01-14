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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFPLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWxGO0lBV0MsNkJBQ1MsZUFBZ0MsRUFDaEMsYUFBdUMsRUFDdkMsS0FBc0IsRUFDdEIsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLFdBQTJCO1FBTnBDLGlCQVlDO1FBWFEsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2QyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFicEMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBZWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQXpCLENBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQzFELENBQUM7Ozs7SUFHRCwwQ0FBWTs7O0lBRFo7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUdELDBDQUFZOzs7SUFEWjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLHdDQUFVOzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUNPLHdDQUFVOzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0MsZUFBZTtRQUNmLGdEQUFnRDtRQUZqRCxpQkFzQkM7UUFsQkEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlO2FBQzFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyw4Q0FBOEM7YUFDaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxLQUFLLFNBQVMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzVCLElBQUksTUFBTSxFQUFFO2dCQUFFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQUU7aUJBQU07Z0JBQUUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFBRTtRQUM3RSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ3hDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUN6QixRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsWUFBWTs7d0JBQ3pDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQzs7d0JBQzNELEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDakMsS0FBSyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO29CQUNuQyxPQUFPLEtBQUssQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztnQkFFSCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBQ0QseUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDRCw4Q0FBZ0I7OztJQUFoQjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ0QsZ0RBQWtCOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUNELHVEQUF5Qjs7O0lBQXpCO1FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ0QsMERBQTRCOzs7SUFBNUI7UUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFDRCw0Q0FBYzs7O0lBQWQ7UUFBQSxpQkFvQkM7UUFuQkEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDdEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdkMsSUFBSSxFQUFFO29CQUNMLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUTtpQkFDdkI7Z0JBQ0QsVUFBVSxFQUFFLGVBQWU7YUFDM0IsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7O1lBQ0csT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN2RCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7WUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUNELDRDQUFjOzs7SUFBZDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFDRCwwQ0FBWTs7OztJQUFaLFVBQWEsU0FBMkI7UUFBeEMsaUJBd0JDO1FBdkJBLFFBQVEsQ0FBQzs7WUFDSCxRQUFRLEdBQUcsU0FBUzs7WUFDcEIscUJBQXFCLEdBQUcsUUFBUSxDQUFDLEtBQUs7YUFDMUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsS0FBSyxFQUFoQyxDQUFnQyxDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUE5QixDQUE4QixDQUFDO1FBQzdDLFFBQVEsQ0FBQztRQUNULGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRyxDQUFDLFVBQUMsTUFBaUIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssSUFBSSxFQUFkLENBQWMsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLEVBQ2pFLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDcEIsUUFBUSxDQUFDO1lBQ1QsSUFBSSxXQUFXLEVBQUU7O29CQUNWLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxLQUFLO3FCQUN6QyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQS9CLENBQStCLENBQUM7cUJBQy9DLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLEVBQXZDLENBQXVDLENBQUM7Z0JBQ3RELE9BQU8sYUFBYTtxQkFDbEIsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztxQkFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQWlCLElBQUssT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxLQUFLLElBQUksRUFBZCxDQUFjLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDLENBQUM7YUFDMUU7aUJBQU07Z0JBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBRTtRQUM3QixDQUFDLENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQXRJRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7aUJBQ3hCOzs7O2dCQVBRLGVBQWU7Z0JBR2Ysd0JBQXdCO2dCQVh4QixLQUFLO2dCQURvQixVQUFVO2dCQUFFLFNBQVM7Z0JBSTlDLGNBQWM7OzsyQkFlckIsS0FBSyxTQUFDLFlBQVk7K0JBb0JsQixZQUFZLFNBQUMsWUFBWTsrQkFNekIsWUFBWSxTQUFDLFlBQVk7O0lBd0czQiwwQkFBQztDQUFBLEFBdklELElBdUlDO1NBcElZLG1CQUFtQjs7O0lBQy9CLDBDQUFrQzs7SUFDbEMsdUNBQThCOztJQUM5QixvQ0FBaUI7O0lBQ2pCLHNDQUE2Qjs7SUFDN0IscUNBQWdCOztJQUNoQixxQ0FBMEI7O0lBQzFCLCtDQUFpRDs7Ozs7SUFFaEQsOENBQXdDOzs7OztJQUN4Qyw0Q0FBK0M7Ozs7O0lBQy9DLG9DQUE4Qjs7Ozs7SUFDOUIsaUNBQXNCOzs7OztJQUN0Qix1Q0FBMkI7Ozs7O0lBQzNCLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB6aXAsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEd3dFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltydWxlQW5jaG9yXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlQW5jaG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRASW5wdXQoXCJydWxlQW5jaG9yXCIpIGFuY2hvcklkO1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0YWN0aXZlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcblx0YnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHRhbmNob3JTY2VuYXJpb3MkOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMuYWN0aXZlJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gcy5ydWxlLnJ1bGVBbmNob3JzLmFjdGl2ZSkucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpO1xyXG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4gKHRoaXMuYWN0aXZlID0gYWN0aXZlKSk7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvclwiKTtcclxuXHRcdHRoaXMuc3RlcHMgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnN0ZXBzO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIilcclxuXHRvbk1vdXNlRW50ZXIoKSB7XHJcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5zaG93QW5jaG9yKCk7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxyXG5cdG9uTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmICghdGhpcy5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLmhpZGVBbmNob3IoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd0FuY2hvcigpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hvdy1hbmNob3JcIik7XHJcblx0fVxyXG5cdHByaXZhdGUgaGlkZUFuY2hvcigpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1hbmNob3JcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIFRPRE86IHJlbW92ZVxyXG5cdFx0Ly8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2hvd0FuY2hvcnNBY3Rpb24oKSk7XHJcblxyXG5cdFx0dGhpcy5hbmNob3JTY2VuYXJpb3MkID0gdGhpcy5zY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmFuY2hvcklkKSAvLyBUT0RPOiByZXBsYWNlIHNlcnZpY2UgY2FsbCB3aXRoIG5ncnggYWN0aW9uXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSwgZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvICE9PSB1bmRlZmluZWQpKTtcclxuXHRcdHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+IHtcclxuXHRcdFx0aWYgKGFjdGl2ZSkgeyB0aGlzLl9hY3RpdmF0ZV9hbmNob3IoKTsgfSBlbHNlIHsgdGhpcy5fZGVhY3RpdmF0ZV9hbmNob3IoKTsgfVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdHNjZW5hcmlvcy5mb3JFYWNoKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHRzY2VuYXJpby5zdGVwcyA9IHNjZW5hcmlvLnN0ZXBzLm1hcChzY2VuYXJpb1N0ZXAgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuaWQgPT09IHNjZW5hcmlvU3RlcC5pZCk7XHJcblx0XHRcdFx0XHRjb25zdCBfc3RlcCA9IE9iamVjdC5jcmVhdGUoc3RlcCk7XHJcblx0XHRcdFx0XHRfc3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xyXG5cdFx0XHRcdFx0cmV0dXJuIF9zdGVwO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9kb19zY2VuYXJpbyhzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdF9hY3RpdmF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLl9jcmVhdGVfYW5jaG9yKCk7XHJcblx0XHR0aGlzLl9zZXRfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcclxuXHR9XHJcblx0X2RlYWN0aXZhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5fcmVtb3ZlX2FuY2hvcigpO1xyXG5cdFx0dGhpcy5fcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XHJcblx0fVxyXG5cdF9zZXRfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuY2hvci1hY3RpdmVcIik7XHJcblx0fVxyXG5cdF9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFuY2hvci1hY3RpdmVcIik7XHJcblx0fVxyXG5cdF9jcmVhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5idXR0b24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHR0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yLWJ1dHRvblwiLCBcIm1hdC1pY29uLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZShcIm1hdC1pY29uLWJ1dHRvblwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oR3d0Vmlld0NvbXBvbmVudCwge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFuY2hvcklkOiB0aGlzLmFuY2hvcklkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwYW5lbENsYXNzOiBcIm1hZ2VudGEtdGhlbWVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbWF0aWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcIm1hdC1pY29uXCIpO1xyXG5cdFx0bWF0aWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0LWljb25cIiwgXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuXHRcdGNvbnN0IGljb24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoXCJzZXR0aW5nc1wiKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobWF0aWNvbiwgaWNvbik7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uLCBtYXRpY29uKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvbik7XHJcblx0fVxyXG5cdF9yZW1vdmVfYW5jaG9yKCkge1xyXG5cdFx0aWYgKCF0aGlzLmJ1dHRvbikgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idXR0b24pO1xyXG5cdH1cclxuXHRfZG9fc2NlbmFyaW8oX3NjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gX3NjZW5hcmlvO1xyXG5cdFx0Y29uc3QgZ2l2ZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcclxuXHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PT0gR3d0U3RlcFR5cGVzLkdpdmVuKVxyXG5cdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMpKTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29tYmluZUxhdGVzdChnaXZlblN0ZXBJbnRlcnByZXRvcnMpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcclxuXHRcdFx0XHRtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoZ2l2ZW5SZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRpZiAoZ2l2ZW5SZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGhlblN0ZXBJbnRlcnByZXRvcnMgPSBzY2VuYXJpby5zdGVwc1xyXG5cdFx0XHRcdFx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT09IEd3dFN0ZXBUeXBlcy5UaGVuKVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoc3RlcCA9PiBzdGVwLmludGVycGVyYXRvcihzdGVwLnBhcmFtcywgdGhpcy5lbCkpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluZUxhdGVzdFxyXG5cdFx0XHRcdFx0XHRcdC5hcHBseShudWxsLCB0aGVuU3RlcEludGVycHJldG9ycylcclxuXHRcdFx0XHRcdFx0XHQucGlwZShtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgeyByZXR1cm4gb2YoZmFsc2UpOyB9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHsgfSk7XHJcblx0fVxyXG59XHJcbiJdfQ==