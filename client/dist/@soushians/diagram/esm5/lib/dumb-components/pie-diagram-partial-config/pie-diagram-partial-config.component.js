/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
var PieDiagramPartialConfigComponent = /** @class */ (function () {
    function PieDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.ConfigChanged = new EventEmitter();
        this.dataLoaded = new BehaviorSubject(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(PieDiagramPartialConfigComponent.prototype, "formGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataLoaded;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.ngOnInit = /**
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
    PieDiagramPartialConfigComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () {
        this.ConfigChanged.emit();
    };
    PieDiagramPartialConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "pie-diagram-partial-config",
                    template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"formGroup\" fxLayout='column'>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n  </form>\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                },] },
    ];
    /** @nocollapse */
    PieDiagramPartialConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    PieDiagramPartialConfigComponent.propDecorators = {
        ConfigChanged: [{ type: Output }],
        formGroup: [{ type: Input }]
    };
    return PieDiagramPartialConfigComponent;
}());
export { PieDiagramPartialConfigComponent };
if (false) {
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.ConfigChanged;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.donutFormGroup;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBOEMxQywwQ0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs2QkFmWixJQUFJLFlBQVksRUFBRTswQkFFL0IsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO1FBY3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLHFCQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxTQUFtQixDQUFBLENBQUM7S0FDakU7SUFmRCxzQkFDSSx1REFBUzs7OztRQUtiO1lBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3hCOzs7OztRQVJELFVBQ2MsSUFBZTtZQUM1QixJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCOzs7T0FBQTs7OztJQVdELG1EQUFROzs7SUFBUjs7Ozs7S0FLQzs7OztJQUNELHNEQUFXOzs7SUFBWDs7S0FFQzs7OztJQUNELHdEQUFhOzs7SUFBYjtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDMUI7O2dCQXpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLG1oQ0FvQko7b0JBQ04sTUFBTSxFQUFFLENBQUMsb0pBQW9KLENBQUM7aUJBQzlKOzs7O2dCQWhDd0QsUUFBUTs7O2dDQWtDL0QsTUFBTTs0QkFJTixLQUFLOzsyQ0F0Q1A7O1NBaUNhLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInBpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7ZhtmF2KfbjNi0INiq2YjYttuM2K3Yp9iqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+2YjYtti524zYqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7ZhtmF2KfbjNi0INiq2YjYttuM2K3Yp9iqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+2YjYtti524zYqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZG9udXRGb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2LnZhtmI2KfZhlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0QE91dHB1dCgpIENvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YUxvYWRlZDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBmb3JtR3JvdXAoZGF0YTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuX2RhdGFMb2FkZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YUxvYWRlZDtcclxuXHR9XHJcblx0ZG9udXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHRcdHRoaXMuZG9udXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5kb251dCBhcyBGb3JtR3JvdXA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHR9XHJcbn1cclxuIl19