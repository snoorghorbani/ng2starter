/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
var DiagramPartialConfigEditComponent = /** @class */ (function () {
    function DiagramPartialConfigEditComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(DiagramPartialConfigEditComponent.prototype, "data", {
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
    DiagramPartialConfigEditComponent.prototype.ngOnInit = /**
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
    DiagramPartialConfigEditComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () { };
    DiagramPartialConfigEditComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram-partial-config-edit",
                    template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\r\n  </div>\r\n</form>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                }] }
    ];
    /** @nocollapse */
    DiagramPartialConfigEditComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    DiagramPartialConfigEditComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return DiagramPartialConfigEditComponent;
}());
export { DiagramPartialConfigEditComponent };
if (false) {
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.dataSubscribtion;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.dataLoaded;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype._data;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.diagramService;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.formGroup;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXlCdEQsMkNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFadEMsa0JBQWEsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFhdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDMUQ7SUFiRCxzQkFDSSxtREFBSTs7OztRQUlSO1lBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCOzs7OztRQVBELFVBQ1MsSUFBSTtZQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCOzs7T0FBQTs7OztJQVVELG9EQUFROzs7SUFBUjs7Ozs7S0FLQzs7OztJQUNELHVEQUFXOzs7SUFBWDs7S0FFQzs7OztJQUNELHlEQUFhOzs7SUFBYixlQUFrQjs7Z0JBaENsQixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsNitCQUEyRDs7aUJBRTNEOzs7O2dCQWJ3RCxRQUFROzs7dUJBa0IvRCxLQUFLOzs0Q0FsQlA7O1NBY2EsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHt9XHJcbn1cclxuIl19