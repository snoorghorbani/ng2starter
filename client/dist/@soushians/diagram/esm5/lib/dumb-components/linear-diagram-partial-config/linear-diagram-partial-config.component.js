/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
var LinearDiagramPartialConfigComponent = /** @class */ (function () {
    function LinearDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.ConfigChanged = new EventEmitter();
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(LinearDiagramPartialConfigComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () {
        this.ConfigChanged.emit();
    };
    LinearDiagramPartialConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "linear-diagram-partial-config",
                    template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Flow\" fxFlexFill>Flow</mat-checkbox>\n  </div>\n</form>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                },] },
    ];
    /** @nocollapse */
    LinearDiagramPartialConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    LinearDiagramPartialConfigComponent.propDecorators = {
        data: [{ type: Input }],
        ConfigChanged: [{ type: Output }]
    };
    return LinearDiagramPartialConfigComponent;
}());
export { LinearDiagramPartialConfigComponent };
function LinearDiagramPartialConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype._data;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.ConfigChanged;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.formGroup;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUEyQ3RELDZDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzBCQWJ6QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUM7NkJBVWIsSUFBSSxZQUFZLEVBQUU7UUFJM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDMUQ7SUFkRCxzQkFDSSxxREFBSTs7OztRQUlSO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbEI7Ozs7O1FBUEQsVUFDUyxJQUFJO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7OztPQUFBOzs7O0lBV0Qsc0RBQVE7OztJQUFSOzs7OztLQUtDOzs7O0lBQ0QseURBQVc7OztJQUFYOztLQUVDOzs7O0lBQ0QsMkRBQWE7OztJQUFiO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7Z0JBbkRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUUsb2tDQWdCSDtvQkFDUCxNQUFNLEVBQUUsQ0FBQyxvSkFBb0osQ0FBQztpQkFDOUo7Ozs7Z0JBN0J3RCxRQUFROzs7dUJBa0MvRCxLQUFLO2dDQVFMLE1BQU07OzhDQTFDUjs7U0E4QmEsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsaW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkxlZ2VuZFwiIGZ4RmxleEZpbGw+2YbZhdin24zYtCDYqtmI2LbbjNit2KfYqjwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiWm9vbVwiIGZ4RmxleEZpbGw+2KjYstix2q/ZhtmF2KfbjNuMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJTdWJjaGFydFwiIGZ4RmxleEZpbGw+2YbZhdin24zYtCDYqNiy2LHar9mG2YXYp9uM24wg2K/YsSDYstuM2LEg2YbZhdmI2K/Yp9ixPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUb29sdGlwXCIgZnhGbGV4RmlsbD7ZhtmF2KfbjNi0INiq2YjYttuM2K3Yp9iqINio2Ycg2LXZiNix2Kog2q/YsdmI2YfbjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiRmxvd1wiIGZ4RmxleEZpbGw+RmxvdzwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBDb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuQ29uZmlnQ2hhbmdlZC5lbWl0KCk7XHJcblx0fVxyXG59XHJcbiJdfQ==