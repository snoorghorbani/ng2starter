/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, ElementRef, Renderer2, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { of, zip, Subject } from "rxjs";
import { filter, map, switchMap, takeUntil } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { GwtViewComponent } from "../gwt-view/gwt-view.component";
import { ScenarioService } from "../services/scenario.service";
import { GwtStepTypes } from "../models/gwt-step-types.enum";
import { RuleConfigurationService } from "../services";
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
        if (!this.active)
            return;
        this.showAnchor();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (!this.active)
            return;
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
            .getAnchorScenarios(this.anchorId) //TODO: replace service call with ngrx action
            .pipe(takeUntil(this.unsubscribe), filter(function (scenario) { return scenario != undefined; }));
        this.active$.subscribe(function (active) {
            if (active)
                _this._activate_anchor();
            else
                _this._deactivate_anchor();
        });
        this.anchorScenarios$.subscribe(function (scenarios) {
            scenarios.forEach(function (scenario) {
                scenario.steps = scenario.steps.map(function (scenarioStep) {
                    var /** @type {?} */ step = _this.steps.find(function (step) { return step.id == scenarioStep.id; });
                    step.params = scenarioStep.params;
                    return step;
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
        var /** @type {?} */ maticon = this.renderer.createElement("mat-icon");
        maticon.classList.add("mat-icon", "material-icons");
        var /** @type {?} */ icon = this.renderer.createText("settings");
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
        if (!this.button)
            return;
        this.button.parentNode.removeChild(this.button);
    };
    /**
     * @param {?} scenario
     * @return {?}
     */
    RuleAnchorDirective.prototype._do_scenario = /**
     * @param {?} scenario
     * @return {?}
     */
    function (scenario) {
        var _this = this;
        var /** @type {?} */ givenStepInterpretors = scenario.steps
            .filter(function (step) { return step.type == GwtStepTypes.Given; })
            .map(function (step) { return step.interperator(step.params); });
        zip
            .apply(null, givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map(function (values) { return values.every(function (value) { return value === true; }); }), switchMap(function (givenResult) {
            if (givenResult) {
                var /** @type {?} */ thenStepInterpretors = scenario.steps
                    .filter(function (step) { return step.type == GwtStepTypes.Then; })
                    .map(function (step) { return step.interperator(step.params, _this.el); });
                return zip
                    .apply(null, thenStepInterpretors)
                    .pipe(map(function (values) { return values.every(function (value) { return value === true; }); }));
            }
            else
                of(false);
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
function RuleAnchorDirective_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFhdEQsNkJBQ1MsaUJBQ0EsZUFDQSxPQUNBLElBQ0EsVUFDQTtRQU5ULGlCQVlDO1FBWFEsb0JBQWUsR0FBZixlQUFlO1FBQ2Ysa0JBQWEsR0FBYixhQUFhO1FBQ2IsVUFBSyxHQUFMLEtBQUs7UUFDTCxPQUFFLEdBQUYsRUFBRTtRQUNGLGFBQVEsR0FBUixRQUFRO1FBQ1IsZ0JBQVcsR0FBWCxXQUFXOzJCQWJOLElBQUksT0FBTyxFQUFRO1FBZWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElB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QVk7K0JBb0JsQixZQUFZLFNBQUMsWUFBWTsrQkFNekIsWUFBWSxTQUFDLFlBQVk7OzhCQTVDM0I7O1NBZ0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHppcCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xuaW1wb3J0IHsgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC10eXBlcy5lbnVtXCI7XG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbcnVsZUFuY2hvcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBSdWxlQW5jaG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cdEBJbnB1dChcInJ1bGVBbmNob3JcIikgYW5jaG9ySWQ7XG5cdHN0ZXBzOiBHd3RTdGVwW107XG5cdGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cdGFjdGl2ZTogYm9vbGVhbjtcblx0YnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcblx0YW5jaG9yU2NlbmFyaW9zJDogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcblx0XHRwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxuXHQpIHtcblx0XHR0aGlzLmFjdGl2ZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IHMucnVsZS5ydWxlQW5jaG9ycy5hY3RpdmUpLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiAodGhpcy5hY3RpdmUgPSBhY3RpdmUpKTtcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvclwiKTtcblx0XHR0aGlzLnN0ZXBzID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5zdGVwcztcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXG5cdG9uTW91c2VFbnRlcigpIHtcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSByZXR1cm47XG5cdFx0dGhpcy5zaG93QW5jaG9yKCk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuXHRvbk1vdXNlTGVhdmUoKSB7XG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkgcmV0dXJuO1xuXHRcdHRoaXMuaGlkZUFuY2hvcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBzaG93QW5jaG9yKCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hvdy1hbmNob3JcIik7XG5cdH1cblx0cHJpdmF0ZSBoaWRlQW5jaG9yKCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1hbmNob3JcIik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyBUT0RPOiByZW1vdmVcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcblxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJCA9IHRoaXMuc2NlbmFyaW9TZXJ2aWNlXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuYW5jaG9ySWQpIC8vVE9ETzogcmVwbGFjZSBzZXJ2aWNlIGNhbGwgd2l0aCBuZ3J4IGFjdGlvblxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLCBmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKSk7XG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4ge1xuXHRcdFx0aWYgKGFjdGl2ZSkgdGhpcy5fYWN0aXZhdGVfYW5jaG9yKCk7XG5cdFx0XHRlbHNlIHRoaXMuX2RlYWN0aXZhdGVfYW5jaG9yKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hbmNob3JTY2VuYXJpb3MkLnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xuXHRcdFx0XHRzY2VuYXJpby5zdGVwcyA9IHNjZW5hcmlvLnN0ZXBzLm1hcChzY2VuYXJpb1N0ZXAgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09IHNjZW5hcmlvU3RlcC5pZCk7XG5cdFx0XHRcdFx0c3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xuXHRcdFx0XHRcdHJldHVybiBzdGVwO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLl9kb19zY2VuYXJpbyhzY2VuYXJpbyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG5cdH1cblx0X2FjdGl2YXRlX2FuY2hvcigpIHtcblx0XHR0aGlzLl9jcmVhdGVfYW5jaG9yKCk7XG5cdFx0dGhpcy5fc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XG5cdH1cblx0X2RlYWN0aXZhdGVfYW5jaG9yKCkge1xuXHRcdHRoaXMuX3JlbW92ZV9hbmNob3IoKTtcblx0XHR0aGlzLl9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcblx0fVxuXHRfc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5jaG9yLWFjdGl2ZVwiKTtcblx0fVxuXHRfcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5jaG9yLWFjdGl2ZVwiKTtcblx0fVxuXHRfY3JlYXRlX2FuY2hvcigpIHtcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHR0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yLWJ1dHRvblwiLCBcIm1hdC1pY29uLWJ1dHRvblwiKTtcblx0XHR0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJtYXQtaWNvbi1idXR0b25cIiwgXCJcIik7XG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHd3RWaWV3Q29tcG9uZW50LCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwYW5lbENsYXNzOiBcIm1hZ2VudGEtdGhlbWVcIlxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgbWF0aWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcIm1hdC1pY29uXCIpO1xuXHRcdG1hdGljb24uY2xhc3NMaXN0LmFkZChcIm1hdC1pY29uXCIsIFwibWF0ZXJpYWwtaWNvbnNcIik7XG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChcInNldHRpbmdzXCIpO1xuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobWF0aWNvbiwgaWNvbik7XG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbiwgbWF0aWNvbik7XG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uKTtcblx0fVxuXHRfcmVtb3ZlX2FuY2hvcigpIHtcblx0XHRpZiAoIXRoaXMuYnV0dG9uKSByZXR1cm47XG5cdFx0dGhpcy5idXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbik7XG5cdH1cblx0X2RvX3NjZW5hcmlvKHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XG5cdFx0Y29uc3QgZ2l2ZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcblx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT0gR3d0U3RlcFR5cGVzLkdpdmVuKVxuXHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zKSk7XG5cblx0XHR6aXBcblx0XHRcdC5hcHBseShudWxsLCBnaXZlblN0ZXBJbnRlcnByZXRvcnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0XHRtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSxcblx0XHRcdFx0c3dpdGNoTWFwKGdpdmVuUmVzdWx0ID0+IHtcblx0XHRcdFx0XHRpZiAoZ2l2ZW5SZXN1bHQpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRoZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PSBHd3RTdGVwVHlwZXMuVGhlbilcblx0XHRcdFx0XHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zLCB0aGlzLmVsKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gemlwXG5cdFx0XHRcdFx0XHRcdC5hcHBseShudWxsLCB0aGVuU3RlcEludGVycHJldG9ycylcblx0XHRcdFx0XHRcdFx0LnBpcGUobWFwKCh2YWx1ZXM6IGJvb2xlYW5bXSkgPT4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSB0cnVlKSkpO1xuXHRcdFx0XHRcdH0gZWxzZSBvZihmYWxzZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHt9KTtcblx0fVxufVxuIl19