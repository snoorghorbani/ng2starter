/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs";
import { DiagramService } from "../../services/diagram.service";
import { takeUntil } from "rxjs/operators";
var NumericDiagramComponent = /** @class */ (function () {
    function NumericDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.unsubscribe = new Subject();
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
        this.counter = 0;
    }
    Object.defineProperty(NumericDiagramComponent.prototype, "data", {
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
    NumericDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataSubscribtion = this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(takeUntil(this.unsubscribe)).subscribe(function (data) {
            /** @type {?} */
            var counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
            _this.counter = counter[0][1];
        });
    };
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dataSubscribtion.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    NumericDiagramComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram-numeric",
                    template: "<div *ngIf=\"dataLoaded | async\">\r\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->\r\n  <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>\r\n  <div [id]=\"'diagram_' + data._id\"></div>\r\n</div>",
                    styles: [":host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}"]
                }] }
    ];
    /** @nocollapse */
    NumericDiagramComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: DiagramService }
    ]; };
    NumericDiagramComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return NumericDiagramComponent;
}());
export { NumericDiagramComponent };
if (false) {
    /** @type {?} */
    NumericDiagramComponent.prototype.unsubscribe;
    /** @type {?} */
    NumericDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericDiagramComponent.prototype._data;
    /** @type {?} */
    NumericDiagramComponent.prototype.counter;
    /** @type {?} */
    NumericDiagramComponent.prototype.dataSubscribtion;
    /** @type {?} */
    NumericDiagramComponent.prototype.injector;
    /** @type {?} */
    NumericDiagramComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBcUIxQyxpQ0FBb0IsUUFBa0IsRUFBVSxjQUE4QjtRQUExRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYjlFLG1CQUFjLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbEMsa0JBQWEsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFhdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztLQUNqQjtJQVpELHNCQUNJLHlDQUFJOzs7O1FBSVI7WUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbEI7Ozs7O1FBUEQsVUFDUyxJQUFJO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7OztPQUFBOzs7O0lBVUQsMENBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDM0YsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJOztZQUNmLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN6RyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSDs7OztJQUNELDZDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDNUI7O2dCQXBDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsNlJBQStDOztpQkFFL0M7Ozs7Z0JBWndELFFBQVE7Z0JBS3hELGNBQWM7Ozt1QkFhckIsS0FBSzs7a0NBbEJQOztTQWFhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tbnVtZXJpY1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRjb3VudGVyOiBudW1iZXI7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0XHR0aGlzLmNvdW50ZXIgPSAwO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgdGhpcy51bnN1YnNjcmliZSkucGlwZShcclxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXHJcblx0XHQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0Y29uc3QgY291bnRlciA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncyk7XHJcblx0XHRcdHRoaXMuY291bnRlciA9IGNvdW50ZXJbMF1bMV07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=