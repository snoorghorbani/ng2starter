/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { DiagramService } from "../../services/diagram.service";
import { takeUntil, filter } from "rxjs/operators";
import { Subject } from "rxjs";
var NumericEditDiagramComponent = /** @class */ (function () {
    function NumericEditDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.unsubscribe = new Subject();
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
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
    NumericEditDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(filter(function (data) { return data != undefined; }), takeUntil(this.unsubscribe)).subscribe(function (data) {
            debugger;
        });
    };
    /**
     * @return {?}
     */
    NumericEditDiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
        debugger;
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    NumericEditDiagramComponent.decorators = [
        { type: Component, args: [{
                    selector: "numeric-edit-diagram",
                    template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <mat-card-header>\n    <mat-card-title fxLayoutAlign=\"space-between center\">\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n  </mat-card-content>\n</mat-card>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                },] },
    ];
    /** @nocollapse */
    NumericEditDiagramComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: DiagramService }
    ]; };
    NumericEditDiagramComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return NumericEditDiagramComponent;
}());
export { NumericEditDiagramComponent };
if (false) {
    /** @type {?} */
    NumericEditDiagramComponent.prototype.unsubscribe;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericEditDiagramComponent.prototype._data;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.injector;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy1lZGl0LWRpYWdyYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLWVkaXQtZGlhZ3JhbS9udW1lcmljLWVkaXQtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMEI5QixxQ0FBb0IsUUFBa0IsRUFBVSxjQUE4QjtRQUExRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCOzJCQVhoRSxJQUFJLE9BQU8sRUFBUTswQkFDcEIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO1FBV3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEM7SUFWRCxzQkFDSSw2Q0FBSTs7OztRQUlSO1lBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCOzs7OztRQVBELFVBQ1MsSUFBSTtZQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCOzs7T0FBQTs7OztJQVFELDhDQUFROzs7SUFBUjs7UUFFQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLElBQUksU0FBUyxFQUFqQixDQUFpQixDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNmLFFBQVEsQ0FBQztTQUNULENBQUMsQ0FBQztLQUNIOzs7O0lBQ0QsaURBQVc7OztJQUFYOztRQUVDLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM1Qjs7Z0JBMUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsd1BBT0M7b0JBQ1gsTUFBTSxFQUFFLENBQUMsb0pBQW9KLENBQUM7aUJBQzlKOzs7O2dCQW5Cd0QsUUFBUTtnQkFJeEQsY0FBYzs7O3VCQW9CckIsS0FBSzs7c0NBeEJQOztTQW9CYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJudW1lcmljLWVkaXQtZGlhZ3JhbVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljRWRpdERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCB0aGlzLnVuc3Vic2NyaWJlKS5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=