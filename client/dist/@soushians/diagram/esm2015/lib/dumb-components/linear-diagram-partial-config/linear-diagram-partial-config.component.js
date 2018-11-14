/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export class LinearDiagramPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.ConfigChanged = new EventEmitter();
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
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
    /**
     * @return {?}
     */
    configChanged() {
        this.ConfigChanged.emit();
    }
}
LinearDiagramPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "linear-diagram-partial-config",
                template: `<form [formGroup]="formGroup" fxLayout='column'>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Legend" fxFlexFill>نمایش توضیحات</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Zoom" fxFlexFill>بزرگنمایی</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Subchart" fxFlexFill>نمایش بزرگنمایی در زیر نمودار</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Tooltip" fxFlexFill>نمایش توضیحات به صورت گروهی</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Flow" fxFlexFill>Flow</mat-checkbox>
  </div>
</form>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
LinearDiagramPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
LinearDiagramPartialConfigComponent.propDecorators = {
    data: [{ type: Input }],
    ConfigChanged: [{ type: Output }]
};
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQTJCdkQsTUFBTTs7OztJQWVMLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7MEJBYnpCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQzs2QkFVYixJQUFJLFlBQVksRUFBRTtRQUkzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUMxRDs7Ozs7SUFkRCxJQUNJLElBQUksQ0FBQyxJQUFJO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7Ozs7SUFDRCxJQUFJLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbEI7Ozs7SUFRRCxRQUFROzs7OztLQUtQOzs7O0lBQ0QsV0FBVzs7S0FFVjs7OztJQUNELGFBQWE7UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzFCOzs7WUFuREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztRQWdCSDtnQkFDUCxNQUFNLEVBQUUsQ0FBQyxvSkFBb0osQ0FBQzthQUM5Sjs7OztZQTVCd0QsUUFBUTs7O21CQWlDL0QsS0FBSzs0QkFRTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPtmG2YXYp9uM2LQg2KrZiNi224zYrdin2Ko8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlpvb21cIiBmeEZsZXhGaWxsPtio2LLYsdqv2YbZhdin24zbjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3ViY2hhcnRcIiBmeEZsZXhGaWxsPtmG2YXYp9uM2LQg2KjYstix2q/ZhtmF2KfbjNuMINiv2LEg2LLbjNixINmG2YXZiNiv2KfYsTwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVG9vbHRpcFwiIGZ4RmxleEZpbGw+2YbZhdin24zYtCDYqtmI2LbbjNit2KfYqiDYqNmHINi12YjYsdiqINqv2LHZiNmH24w8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkZsb3dcIiBmeEZsZXhGaWxsPkZsb3c8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuPC9mb3JtPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdH1cclxufVxyXG4iXX0=