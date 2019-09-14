/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class RuleAnchorDirective {
    /**
     * @param {?} scenarioService
     * @param {?} configService
     * @param {?} store
     * @param {?} el
     * @param {?} renderer
     * @param {?} bottomSheet
     */
    constructor(scenarioService, configService, store, el, renderer, bottomSheet) {
        this.scenarioService = scenarioService;
        this.configService = configService;
        this.store = store;
        this.el = el;
        this.renderer = renderer;
        this.bottomSheet = bottomSheet;
        this.unsubscribe = new Subject();
        this.active$ = this.store.select((/**
         * @param {?} s
         * @return {?}
         */
        s => s.rule.ruleAnchors.active)).pipe(takeUntil(this.unsubscribe));
        this.active$.subscribe((/**
         * @param {?} active
         * @return {?}
         */
        active => (this.active = active)));
        this.el.nativeElement.classList.add("ngs-rule-anchor");
        this.steps = this.configService.config$.getValue().steps;
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        debugger;
        this.el;
        if (!this.active) {
            return;
        }
        this.showAnchor();
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (!this.active) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.hideAnchor();
        }), 999);
    }
    /**
     * @private
     * @return {?}
     */
    showAnchor() {
        this.el.nativeElement.classList.add("show-anchor");
    }
    /**
     * @private
     * @return {?}
     */
    hideAnchor() {
        this.el.nativeElement.classList.remove("show-anchor");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO: remove
        // this.store.dispatch(new ShowAnchorsAction());
        this.anchorScenarios$ = this.scenarioService
            .getAnchorScenarios(this.anchorId) // TODO: replace service call with ngrx action
            .pipe(takeUntil(this.unsubscribe), filter((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => scenario !== undefined)));
        this.active$.subscribe((/**
         * @param {?} active
         * @return {?}
         */
        active => {
            if (active) {
                this._activate_anchor();
            }
            else {
                this._deactivate_anchor();
            }
        }));
        this.anchorScenarios$.subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => {
            scenarios.forEach((/**
             * @param {?} scenario
             * @return {?}
             */
            scenario => {
                scenario.steps = scenario.steps.map((/**
                 * @param {?} scenarioStep
                 * @return {?}
                 */
                scenarioStep => {
                    /** @type {?} */
                    const step = this.steps.find((/**
                     * @param {?} step
                     * @return {?}
                     */
                    step => step.id === scenarioStep.id));
                    /** @type {?} */
                    const _step = Object.create(step);
                    _step.params = scenarioStep.params;
                    return _step;
                }));
                this._do_scenario(scenario);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * @return {?}
     */
    _activate_anchor() {
        this._create_anchor();
        this._set_active_class_to_host();
    }
    /**
     * @return {?}
     */
    _deactivate_anchor() {
        this._remove_anchor();
        this._remove_active_class_to_host();
    }
    /**
     * @return {?}
     */
    _set_active_class_to_host() {
        this.el.nativeElement.classList.add("anchor-active");
    }
    /**
     * @return {?}
     */
    _remove_active_class_to_host() {
        this.el.nativeElement.classList.remove("anchor-active");
    }
    /**
     * @return {?}
     */
    _create_anchor() {
        this.button = this.renderer.createElement("button");
        this.button.classList.add("ngs-rule-anchor-button", "mat-icon-button");
        this.button.setAttribute("mat-icon-button", "");
        this.button.addEventListener("click", (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            e.preventDefault();
            e.stopPropagation();
            this.bottomSheet.open(GwtViewComponent, {
                data: {
                    anchorId: this.anchorId
                },
                panelClass: "magenta-theme"
            });
        }));
        /** @type {?} */
        const maticon = this.renderer.createElement("mat-icon");
        maticon.classList.add("mat-icon", "material-icons");
        /** @type {?} */
        const icon = this.renderer.createText("settings");
        this.renderer.appendChild(maticon, icon);
        this.renderer.appendChild(this.button, maticon);
        this.renderer.appendChild(this.el.nativeElement, this.button);
    }
    /**
     * @return {?}
     */
    _remove_anchor() {
        if (!this.button) {
            return;
        }
        this.button.parentNode.removeChild(this.button);
    }
    /**
     * @param {?} _scenario
     * @return {?}
     */
    _do_scenario(_scenario) {
        debugger;
        /** @type {?} */
        const scenario = _scenario;
        /** @type {?} */
        const givenStepInterpretors = scenario.steps
            .filter((/**
         * @param {?} step
         * @return {?}
         */
        step => step.type === GwtStepTypes.Given))
            .map((/**
         * @param {?} step
         * @return {?}
         */
        step => step.interperator(step.params)));
        debugger;
        combineLatest(givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map((/**
         * @param {?} values
         * @return {?}
         */
        (values) => values.every((/**
         * @param {?} value
         * @return {?}
         */
        value => value === true)))), switchMap((/**
         * @param {?} givenResult
         * @return {?}
         */
        givenResult => {
            debugger;
            if (givenResult) {
                /** @type {?} */
                const thenStepInterpretors = scenario.steps
                    .filter((/**
                 * @param {?} step
                 * @return {?}
                 */
                step => step.type === GwtStepTypes.Then))
                    .map((/**
                 * @param {?} step
                 * @return {?}
                 */
                step => step.interperator(step.params, this.el)));
                return combineLatest
                    .apply(null, thenStepInterpretors)
                    .pipe(map((/**
                 * @param {?} values
                 * @return {?}
                 */
                (values) => values.every((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => value === true)))));
            }
            else {
                return of(false);
            }
        })))
            .subscribe((/**
         * @return {?}
         */
        () => { }));
    }
}
RuleAnchorDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ruleAnchor]"
            },] }
];
/** @nocollapse */
RuleAnchorDirective.ctorParameters = () => [
    { type: ScenarioService },
    { type: RuleConfigurationService },
    { type: Store },
    { type: ElementRef },
    { type: Renderer2 },
    { type: MatBottomSheet }
];
RuleAnchorDirective.propDecorators = {
    anchorId: [{ type: Input, args: ["ruleAnchor",] }],
    onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
    onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFPLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBS2xGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7OztJQVEvQixZQUNTLGVBQWdDLEVBQ2hDLGFBQXVDLEVBQ3ZDLEtBQXNCLEVBQ3RCLEVBQWMsRUFDZCxRQUFtQixFQUNuQixXQUEyQjtRQUwzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FB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QyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUF0SkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2FBQ3hCOzs7O1lBUFEsZUFBZTtZQUdmLHdCQUF3QjtZQVh4QixLQUFLO1lBRG9CLFVBQVU7WUFBRSxTQUFTO1lBSTlDLGNBQWM7Ozt1QkFlckIsS0FBSyxTQUFDLFlBQVk7MkJBb0JsQixZQUFZLFNBQUMsWUFBWTsyQkFVekIsWUFBWSxTQUFDLFlBQVk7Ozs7SUEvQjFCLDBDQUFrQzs7SUFDbEMsdUNBQThCOztJQUM5QixvQ0FBaUI7O0lBQ2pCLHNDQUE2Qjs7SUFDN0IscUNBQWdCOztJQUNoQixxQ0FBMEI7O0lBQzFCLCtDQUFpRDs7Ozs7SUFFaEQsOENBQXdDOzs7OztJQUN4Qyw0Q0FBK0M7Ozs7O0lBQy9DLG9DQUE4Qjs7Ozs7SUFDOUIsaUNBQXNCOzs7OztJQUN0Qix1Q0FBMkI7Ozs7O0lBQzNCLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB6aXAsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEd3dFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltydWxlQW5jaG9yXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlQW5jaG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRASW5wdXQoXCJydWxlQW5jaG9yXCIpIGFuY2hvcklkO1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0YWN0aXZlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcblx0YnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHRhbmNob3JTY2VuYXJpb3MkOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMuYWN0aXZlJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gcy5ydWxlLnJ1bGVBbmNob3JzLmFjdGl2ZSkucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpO1xyXG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4gKHRoaXMuYWN0aXZlID0gYWN0aXZlKSk7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvclwiKTtcclxuXHRcdHRoaXMuc3RlcHMgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnN0ZXBzO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIilcclxuXHRvbk1vdXNlRW50ZXIoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuZWw7XHJcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvd0FuY2hvcigpO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcclxuXHRvbk1vdXNlTGVhdmUoKSB7XHJcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmhpZGVBbmNob3IoKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dBbmNob3IoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3ctYW5jaG9yXCIpO1xyXG5cdH1cclxuXHRwcml2YXRlIGhpZGVBbmNob3IoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctYW5jaG9yXCIpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyBUT0RPOiByZW1vdmVcclxuXHRcdC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNob3dBbmNob3JzQWN0aW9uKCkpO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJCA9IHRoaXMuc2NlbmFyaW9TZXJ2aWNlXHJcblx0XHRcdC5nZXRBbmNob3JTY2VuYXJpb3ModGhpcy5hbmNob3JJZCkgLy8gVE9ETzogcmVwbGFjZSBzZXJ2aWNlIGNhbGwgd2l0aCBuZ3J4IGFjdGlvblxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksIGZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpbyAhPT0gdW5kZWZpbmVkKSk7XHJcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiB7XHJcblx0XHRcdGlmIChhY3RpdmUpIHtcclxuXHRcdFx0XHR0aGlzLl9hY3RpdmF0ZV9hbmNob3IoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9kZWFjdGl2YXRlX2FuY2hvcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PT0gc2NlbmFyaW9TdGVwLmlkKTtcclxuXHRcdFx0XHRcdGNvbnN0IF9zdGVwID0gT2JqZWN0LmNyZWF0ZShzdGVwKTtcclxuXHRcdFx0XHRcdF9zdGVwLnBhcmFtcyA9IHNjZW5hcmlvU3RlcC5wYXJhbXM7XHJcblx0XHRcdFx0XHRyZXR1cm4gX3N0ZXA7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2RvX3NjZW5hcmlvKHNjZW5hcmlvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0X2FjdGl2YXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9hbmNob3IoKTtcclxuXHRcdHRoaXMuX3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpO1xyXG5cdH1cclxuXHRfZGVhY3RpdmF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLl9yZW1vdmVfYW5jaG9yKCk7XHJcblx0XHR0aGlzLl9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcclxuXHR9XHJcblx0X3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X2NyZWF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3ItYnV0dG9uXCIsIFwibWF0LWljb24tYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwibWF0LWljb24tYnV0dG9uXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHd3RWaWV3Q29tcG9uZW50LCB7XHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwibWFnZW50YS10aGVtZVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBtYXRpY29uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwibWF0LWljb25cIik7XHJcblx0XHRtYXRpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXQtaWNvblwiLCBcIm1hdGVyaWFsLWljb25zXCIpO1xyXG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChcInNldHRpbmdzXCIpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChtYXRpY29uLCBpY29uKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24sIG1hdGljb24pO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hbmNob3IoKSB7XHJcblx0XHRpZiAoIXRoaXMuYnV0dG9uKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idXR0b24pO1xyXG5cdH1cclxuXHRfZG9fc2NlbmFyaW8oX3NjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gX3NjZW5hcmlvO1xyXG5cdFx0Y29uc3QgZ2l2ZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcclxuXHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PT0gR3d0U3RlcFR5cGVzLkdpdmVuKVxyXG5cdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMpKTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29tYmluZUxhdGVzdChnaXZlblN0ZXBJbnRlcnByZXRvcnMpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcclxuXHRcdFx0XHRtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoZ2l2ZW5SZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRpZiAoZ2l2ZW5SZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGhlblN0ZXBJbnRlcnByZXRvcnMgPSBzY2VuYXJpby5zdGVwc1xyXG5cdFx0XHRcdFx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT09IEd3dFN0ZXBUeXBlcy5UaGVuKVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoc3RlcCA9PiBzdGVwLmludGVycGVyYXRvcihzdGVwLnBhcmFtcywgdGhpcy5lbCkpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluZUxhdGVzdFxyXG5cdFx0XHRcdFx0XHRcdC5hcHBseShudWxsLCB0aGVuU3RlcEludGVycHJldG9ycylcclxuXHRcdFx0XHRcdFx0XHQucGlwZShtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==