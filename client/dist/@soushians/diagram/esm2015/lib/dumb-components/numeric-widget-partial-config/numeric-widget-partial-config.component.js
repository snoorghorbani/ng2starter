/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
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
                template: `<div *ngIf="dataLoaded | async" class="diagram-box">
  <form [formGroup]="donutFormGroup">
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="title">
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="title">
    </mat-form-field>
  </form>
</div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
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
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWtCM0MsTUFBTTs7OztJQWVMLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7MEJBYnpCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQztRQWN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsY0FBYyxxQkFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsU0FBbUIsQ0FBQSxDQUFDO0tBQ2pFOzs7OztJQWZELElBQ0ksU0FBUyxDQUFDLElBQWU7UUFDNUIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNCOzs7O0lBQ0QsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3hCOzs7O0lBUUQsUUFBUTs7Ozs7S0FLUDs7OztJQUNELFdBQVc7O0tBRVY7OztZQTFDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsUUFBUSxFQUFFOzs7Ozs7Ozs7T0FTSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxvSkFBb0osQ0FBQzthQUM5Sjs7OztZQXJCd0QsUUFBUTs7O3dCQTBCL0QsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZG9udXRGb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2LnZhtmI2KfZhlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYudmG2YjYp9mGXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhTG9hZGVkO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGZvcm1Hcm91cChkYXRhOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fZGF0YUxvYWRlZCA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhTG9hZGVkO1xyXG5cdH1cclxuXHRkb251dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5kb251dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRvbnV0IGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==