/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";
export class ServerConnectingTimeDiagramComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.time = 0;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
        setInterval(() => {
            this.time = this.time + 1;
        }, 1000);
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
    ngOnInit() { }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
        //         .subscribe(data => {
        //                 this.chart.load({
        //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //                 });
        //         })
    }
}
ServerConnectingTimeDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-server-connecting-time",
                template: `<div *ngIf="dataLoaded | async">
  <div fxLayoutAlign="center center" class="numeric title">{{data.Description}}</div>
  <!-- <div fxLayoutAlign="center center" class="numeric">{{time | timeCounter}}</div> -->
  <div [id]="'diagram_' + data._id"></div>
</div>`,
                styles: [`.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}`]
            },] },
];
/** @nocollapse */
ServerConnectingTimeDiagramComponent.ctorParameters = () => [
    { type: Injector }
];
ServerConnectingTimeDiagramComponent.propDecorators = {
    time: [{ type: Input }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ServerConnectingTimeDiagramComponent.prototype.time;
    /** @type {?} */
    ServerConnectingTimeDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    ServerConnectingTimeDiagramComponent.prototype._data;
    /** @type {?} */
    ServerConnectingTimeDiagramComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVd2QyxNQUFNOzs7O0lBWUwsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFYZCxDQUFDOzBCQUNaLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQztRQVd0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUMxQixFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Q7Ozs7O0lBYkQsSUFDSSxJQUFJLENBQUMsSUFBSTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNCOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ2xCOzs7O0lBUUQsUUFBUSxNQUFLOzs7OztJQUNiLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7OztLQVFYOzs7WUFyQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRTs7OztPQUlKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLDRHQUE0RyxDQUFDO2FBQ3RIOzs7O1lBWndELFFBQVE7OzttQkFjL0QsS0FBSzttQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1zZXJ2ZXItY29ubmVjdGluZy10aW1lXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCI+XHJcbiAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpYyB0aXRsZVwiPnt7ZGF0YS5EZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgPCEtLSA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljXCI+e3t0aW1lIHwgdGltZUNvdW50ZXJ9fTwvZGl2PiAtLT5cclxuICA8ZGl2IFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgLm51bWVyaWN7Zm9udC1zaXplOjIuNGVtO2xpbmUtaGVpZ2h0OjEuOH0ubnVtZXJpYy50aXRsZXtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWE7Zm9udC1zaXplOjEuMWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHRpbWU6IG51bWJlciA9IDA7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHRcdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0dGhpcy50aW1lID0gdGhpcy50aW1lICsgMTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdHRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSwgdGhpcy5kYXRhLlNvdXJjZS5TeW5jKVxyXG5cdFx0Ly8gICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pO1xyXG5cdFx0Ly8gICAgICAgICB9KVxyXG5cdH1cclxufVxyXG4iXX0=