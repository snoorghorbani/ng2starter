/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { GwtStepTypes } from "@soushians/rule";
import { GwtThenAuthorizeStepComponent } from "./step-component/gwt-then-authorize-step.component";
/**
 * @record
 */
export function ThenShowBlockGwtStepParams() { }
/** @type {?} */
ThenShowBlockGwtStepParams.prototype.verb;
export class GwtThenAuthorizeStep {
    /**
     * @param {?} injector
     */
    constructor(injector) {
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
    interperator(params, elementRef) {
        debugger;
        /** @type {?} */
        const display = (params.verb === "visible") ? "initial" : "none";
        elementRef.nativeElement.style.display = display;
        return of(true);
    }
}
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmd3dC10aGVuLXN0ZXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy8iLCJzb3VyY2VzIjpbImxpYi90aGVuLWF1dGhvcml6ZS9hdXRob3JpemUuZ3d0LXRoZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7OztBQU1uRyxNQUFNOzs7O0lBU0wsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs2QkFGdEIsNkJBQTZCO1FBRzVDLElBQUksQ0FBQyxFQUFFLEdBQUcsMEJBQTBCLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLDhCQUE4QixDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RDOzs7Ozs7SUFDRCxZQUFZLENBQUMsTUFBa0MsRUFBRSxVQUFzQjtRQUN0RSxRQUFRLENBQUM7O1FBQ1QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2pELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hCO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEd3dFN0ZXAsIEd3dFN0ZXBUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuXHJcbmltcG9ydCB7IEd3dFRoZW5BdXRob3JpemVTdGVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RlcC1jb21wb25lbnQvZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zIHtcclxuXHR2ZXJiOiBcInZpc2libGVcIiB8IFwiaGlkZGVuXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHd3RUaGVuQXV0aG9yaXplU3RlcCBpbXBsZW1lbnRzIEd3dFN0ZXA8VGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXM+IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRvcHBvc2l0ZTogYm9vbGVhbjtcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdHR5cGU6IEd3dFN0ZXBUeXBlcztcclxuXHRwYXJhbXM6IFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zO1xyXG5cdHN0ZXBDb21wb25lbnQgPSBHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudDtcclxuXHRzdG9yZTogU3RvcmU8YW55PjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5pZCA9IFwiYXV0aG9yaXplX2FuZF9zaG93X2Jsb2NrXCI7XHJcblx0XHR0aGlzLm5hbWUgPSBcImF1dGhvcml6ZSBhbmQgc2hvdyBibG9ja1wiO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IFwi2KLZhtqv2KfZhyDYp9uM2YYg2KjYrti0INmC2KfYqNmEINmG2YXYp9uM2LQg2KfYs9iqXCI7XHJcblx0XHR0aGlzLnR5cGUgPSBHd3RTdGVwVHlwZXMuVGhlbjtcclxuXHRcdHRoaXMuc3RvcmUgPSB0aGlzLmluamVjdG9yLmdldChTdG9yZSk7XHJcblx0fVxyXG5cdGludGVycGVyYXRvcihwYXJhbXM6IFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IGRpc3BsYXkgPSAocGFyYW1zLnZlcmIgPT09IFwidmlzaWJsZVwiKSA/IFwiaW5pdGlhbFwiIDogXCJub25lXCI7XHJcblx0XHRlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblx0XHRyZXR1cm4gb2YodHJ1ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==