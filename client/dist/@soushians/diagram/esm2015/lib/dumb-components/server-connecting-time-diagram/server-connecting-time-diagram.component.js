/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        setInterval((/**
         * @return {?}
         */
        () => {
            this.time = this.time + 1;
        }), 1000);
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
                template: "<div *ngIf=\"dataLoaded | async\">\r\n  <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>\r\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div> -->\r\n  <div [id]=\"'diagram_' + data._id\"></div>\r\n</div>",
                styles: [".numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            }] }
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
    /**
     * @type {?}
     * @private
     */
    ServerConnectingTimeDiagramComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU92QyxNQUFNLE9BQU8sb0NBQW9DOzs7O0lBWWhELFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFYN0IsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUMxQixlQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFXdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxXQUFXOzs7UUFBQyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDVixDQUFDOzs7OztJQWJELElBQ0ksSUFBSSxDQUFDLElBQUk7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFRRCxRQUFRLEtBQUksQ0FBQzs7Ozs7SUFDYixVQUFVLENBQUMsQ0FBQztRQUNYLHVDQUF1QztRQUN2QyxxR0FBcUc7UUFDckcsK0JBQStCO1FBQy9CLG9DQUFvQztRQUNwQyx1SEFBdUg7UUFDdkgsc0JBQXNCO1FBQ3RCLGFBQWE7SUFDZCxDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLHVTQUE4RDs7YUFFOUQ7Ozs7WUFSd0QsUUFBUTs7O21CQVUvRCxLQUFLO21CQUdMLEtBQUs7Ozs7SUFITixvREFBMEI7O0lBQzFCLDBEQUF3Qzs7SUFDeEMscURBQU07Ozs7O0lBU00sd0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1zZXJ2ZXItY29ubmVjdGluZy10aW1lXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgdGltZTogbnVtYmVyID0gMDtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRpbWUgPSB0aGlzLnRpbWUgKyAxO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlLCB0aGlzLmRhdGEuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgfSk7XHJcblx0XHQvLyAgICAgICAgIH0pXHJcblx0fVxyXG59XHJcbiJdfQ==