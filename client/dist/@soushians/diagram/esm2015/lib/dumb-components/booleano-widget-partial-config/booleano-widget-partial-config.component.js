/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
export class BooleanoWidgetPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.booleanoFormGroup = /** @type {?} */ (this.formGroup.controls["booleano"]);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set formGroup(data) {
        if (!data)
            return;
        this._dataLoaded = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get formGroup() {
        return this._dataLoaded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
}
BooleanoWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "booleano-widget-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"booleanoFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"SuccessMessage\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"FailureMessage\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
BooleanoWidgetPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
BooleanoWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.booleanoFormGroup;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVMzQyxNQUFNLE9BQU8sb0NBQW9DOzs7O0lBZ0JoRCxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBZHRDLGtCQUFhLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBZXZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxpQkFBaUIscUJBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFlBQXNCLENBQUEsQ0FBQztLQUN2RTs7Ozs7SUFoQkQsSUFDSSxTQUFTLENBQUMsSUFBZTtRQUM1QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7Ozs7SUFDRCxJQUFJLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDeEI7Ozs7SUFTRCxRQUFROzs7OztLQUtQOzs7O0lBQ0QsV0FBVzs7S0FFVjs7O1lBbENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxtY0FBOEQ7O2FBRTlEOzs7O1lBWndELFFBQVE7Ozt3QkFpQi9ELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGJvb2xlYW5vRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5ib29sZWFub0Zvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmJvb2xlYW5vIGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==