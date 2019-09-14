/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
export class NumericWidgetPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = (/** @type {?} */ (this.formGroup.controls.donut));
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
NumericWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-widget-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"donutFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
NumericWidgetPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
NumericWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.donutFormGroup;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    NumericWidgetPartialConfigComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVMzQyxNQUFNLE9BQU8sbUNBQW1DOzs7O0lBZS9DLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFidEMsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBY3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFhLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFmRCxJQUNJLFNBQVMsQ0FBQyxJQUFlO1FBQzVCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0QsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFRRCxRQUFRO1FBQ1AsOEVBQThFO1FBQzlFLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsUUFBUTtJQUNULENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1YsdUNBQXVDO0lBQ3hDLENBQUM7OztZQWpDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsOGFBQTZEOzthQUU3RDs7OztZQVp3RCxRQUFROzs7d0JBaUIvRCxLQUFLOzs7O0lBSE4sK0RBQStCOztJQUMvQix5REFBd0M7O0lBQ3hDLDBEQUFZOztJQVVaLDZEQUEwQjs7SUFDMUIsNkRBQStCOzs7OztJQUNuQix1REFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJudW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL251bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YUxvYWRlZDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBmb3JtR3JvdXAoZGF0YTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuX2RhdGFMb2FkZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YUxvYWRlZDtcclxuXHR9XHJcblx0ZG9udXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHRcdHRoaXMuZG9udXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5kb251dCBhcyBGb3JtR3JvdXA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=