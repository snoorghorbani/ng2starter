/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @type {?}
     * @private
     */
    DiagramPartialConfigEditComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTXZEO0lBbUJDLDJDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWnRDLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQWF2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBYkQsc0JBQ0ksbURBQUk7Ozs7UUFJUjtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDOzs7OztRQVBELFVBQ1MsSUFBSTtZQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7O0lBVUQsb0RBQVE7OztJQUFSO1FBQ0MsOEVBQThFO1FBQzlFLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsUUFBUTtJQUNULENBQUM7Ozs7SUFDRCx1REFBVzs7O0lBQVg7UUFDQyx1Q0FBdUM7SUFDeEMsQ0FBQzs7OztJQUNELHlEQUFhOzs7SUFBYixjQUFpQixDQUFDOztnQkFoQ2xCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyw2K0JBQTJEOztpQkFFM0Q7Ozs7Z0JBYndELFFBQVE7Ozt1QkFrQi9ELEtBQUs7O0lBd0JQLHdDQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E1QlksaUNBQWlDOzs7SUFDN0MsNkRBQStCOztJQUMvQix1REFBd0M7O0lBQ3hDLGtEQUFNOztJQVNOLDJEQUErQjs7SUFDL0Isc0RBQXFCOzs7OztJQUNULHFEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0LmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7fVxyXG59XHJcbiJdfQ==