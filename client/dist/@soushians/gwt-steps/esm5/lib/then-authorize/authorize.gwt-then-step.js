/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { GwtStepTypes } from "@soushians/rule";
import { GwtThenAuthorizeStepComponent } from "./step-component/gwt-then-authorize-step.component";
/**
 * @record
 */
export function ThenShowBlockGwtStepParams() { }
if (false) {
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
        /** @type {?} */
        var display = (params.verb === "visible") ? "initial" : "none";
        elementRef.nativeElement.style.display = display;
        return of(true);
    };
    return GwtThenAuthorizeStep;
}());
export { GwtThenAuthorizeStep };
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
    /**
     * @type {?}
     * @private
     */
    GwtThenAuthorizeStep.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmd3dC10aGVuLXN0ZXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy8iLCJzb3VyY2VzIjpbImxpYi90aGVuLWF1dGhvcml6ZS9hdXRob3JpemUuZ3d0LXRoZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7OztBQUVuRyxnREFFQzs7O0lBREEsMENBQTJCOztBQUc1QjtJQVNDLDhCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRnRDLGtCQUFhLEdBQUcsNkJBQTZCLENBQUM7UUFHN0MsSUFBSSxDQUFDLEVBQUUsR0FBRywwQkFBMEIsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsOEJBQThCLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBQ0QsMkNBQVk7Ozs7O0lBQVosVUFBYSxNQUFrQyxFQUFFLFVBQXNCO1FBQ3RFLFFBQVEsQ0FBQzs7WUFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDaEUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNqRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0YsMkJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7O0lBckJBLGtDQUFXOztJQUNYLG9DQUFhOztJQUNiLHdDQUFrQjs7SUFDbEIsMkNBQW9COztJQUNwQixvQ0FBbUI7O0lBQ25CLHNDQUFtQzs7SUFDbkMsNkNBQThDOztJQUM5QyxxQ0FBa0I7Ozs7O0lBQ04sd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwLCBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudCB9IGZyb20gXCIuL3N0ZXAtY29tcG9uZW50L2d3dC10aGVuLWF1dGhvcml6ZS1zdGVwLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyB7XHJcblx0dmVyYjogXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3d0VGhlbkF1dGhvcml6ZVN0ZXAgaW1wbGVtZW50cyBHd3RTdGVwPFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zPiB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b3Bwb3NpdGU6IGJvb2xlYW47XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHR0eXBlOiBHd3RTdGVwVHlwZXM7XHJcblx0cGFyYW1zOiBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcztcclxuXHRzdGVwQ29tcG9uZW50ID0gR3d0VGhlbkF1dGhvcml6ZVN0ZXBDb21wb25lbnQ7XHJcblx0c3RvcmU6IFN0b3JlPGFueT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuaWQgPSBcImF1dGhvcml6ZV9hbmRfc2hvd19ibG9ja1wiO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJhdXRob3JpemUgYW5kIHNob3cgYmxvY2tcIjtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBcItii2Ybar9in2Ycg2KfbjNmGINio2K7YtCDZgtin2KjZhCDZhtmF2KfbjNi0INin2LPYqlwiO1xyXG5cdFx0dGhpcy50eXBlID0gR3d0U3RlcFR5cGVzLlRoZW47XHJcblx0XHR0aGlzLnN0b3JlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RvcmUpO1xyXG5cdH1cclxuXHRpbnRlcnBlcmF0b3IocGFyYW1zOiBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcywgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBkaXNwbGF5ID0gKHBhcmFtcy52ZXJiID09PSBcInZpc2libGVcIikgPyBcImluaXRpYWxcIiA6IFwibm9uZVwiO1xyXG5cdFx0ZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG5cdFx0cmV0dXJuIG9mKHRydWUpO1xyXG5cdH1cclxufVxyXG4iXX0=