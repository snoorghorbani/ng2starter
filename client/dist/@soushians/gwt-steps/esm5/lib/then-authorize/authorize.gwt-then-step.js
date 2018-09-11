/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { GwtStepTypes } from "@soushians/rule";
import { GwtThenAuthorizeStepComponent } from "./step-component/gwt-then-authorize-step.component";
/**
 * @record
 */
export function ThenShowBlockGwtStepParams() { }
function ThenShowBlockGwtStepParams_tsickle_Closure_declarations() {
    /** @type {?} */
    ThenShowBlockGwtStepParams.prototype.verb;
}
var GwtThenAuthorizeStep = /** @class */ (function () {
    function GwtThenAuthorizeStep(injector) {
        this.injector = injector;
        this.stepComponent = GwtThenAuthorizeStepComponent;
        this.id = "authorize_and_show_block";
        this.name = "authorize and show block";
        this.description = "آنگاه این بخش قابل نمایش است";
        this.type = GwtStepTypes.Then;
        this.store = this.injector.get(Store);
    }
    /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    GwtThenAuthorizeStep.prototype.interperator = /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    function (params, elementRef) {
        debugger;
        var /** @type {?} */ display = (params.verb === "visible") ? "initial" : "none";
        elementRef.nativeElement.style.display = display;
        return of(true);
    };
    return GwtThenAuthorizeStep;
}());
export { GwtThenAuthorizeStep };
function GwtThenAuthorizeStep_tsickle_Closure_declarations() {
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.id;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.name;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.opposite;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.description;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.type;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.params;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.stepComponent;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.store;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmd3dC10aGVuLXN0ZXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy8iLCJzb3VyY2VzIjpbImxpYi90aGVuLWF1dGhvcml6ZS9hdXRob3JpemUuZ3d0LXRoZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7O0FBTW5HLElBQUE7SUFTQyw4QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs2QkFGdEIsNkJBQTZCO1FBRzVDLElBQUksQ0FBQyxFQUFFLEdBQUcsMEJBQTBCLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLDhCQUE4QixDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RDOzs7Ozs7SUFDRCwyQ0FBWTs7Ozs7SUFBWixVQUFhLE1BQWtDLEVBQUUsVUFBc0I7UUFDdEUsUUFBUSxDQUFDO1FBQ1QscUJBQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNqRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hCOytCQWpDRjtJQWtDQyxDQUFBO0FBdEJELGdDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3d0U3RlcCwgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0VGhlbkF1dGhvcml6ZVN0ZXBDb21wb25lbnQgfSBmcm9tIFwiLi9zdGVwLWNvbXBvbmVudC9nd3QtdGhlbi1hdXRob3JpemUtc3RlcC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMge1xyXG5cdHZlcmI6IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEd3dFRoZW5BdXRob3JpemVTdGVwIGltcGxlbWVudHMgR3d0U3RlcDxUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcz4ge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG9wcG9zaXRlOiBib29sZWFuO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0dHlwZTogR3d0U3RlcFR5cGVzO1xyXG5cdHBhcmFtczogVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXM7XHJcblx0c3RlcENvbXBvbmVudCA9IEd3dFRoZW5BdXRob3JpemVTdGVwQ29tcG9uZW50O1xyXG5cdHN0b3JlOiBTdG9yZTxhbnk+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmlkID0gXCJhdXRob3JpemVfYW5kX3Nob3dfYmxvY2tcIjtcclxuXHRcdHRoaXMubmFtZSA9IFwiYXV0aG9yaXplIGFuZCBzaG93IGJsb2NrXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gXCLYotmG2q/Yp9mHINin24zZhiDYqNiu2LQg2YLYp9io2YQg2YbZhdin24zYtCDYp9iz2KpcIjtcclxuXHRcdHRoaXMudHlwZSA9IEd3dFN0ZXBUeXBlcy5UaGVuO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuXHR9XHJcblx0aW50ZXJwZXJhdG9yKHBhcmFtczogVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgZGlzcGxheSA9IChwYXJhbXMudmVyYiA9PT0gXCJ2aXNpYmxlXCIpID8gXCJpbml0aWFsXCIgOiBcIm5vbmVcIjtcclxuXHRcdGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHRcdHJldHVybiBvZih0cnVlKTtcclxuXHR9XHJcbn1cclxuIl19