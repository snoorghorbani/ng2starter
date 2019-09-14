/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";
export class ServerStatusDiagramComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
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
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source._id, this.data.Source.Interval)
        //   .subscribe(data => {
        //     debugger
        //     this.chart.load({
        //       columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //     });
        //   })
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ServerStatusDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-server-status",
                template: "<div *ngIf=\"dataLoaded | async\">\r\n  <!-- <mat-icon [ngClass]=\"dataStatus$ ? 'connected' : 'disconnected'\">\r\n    fiber_manual_record\r\n  </mat-icon> -->\r\n  <!-- <span *ngIf=\"dataStatus$\">{{data.Widget.booleano.SuccessMessage}}</span>\r\n  <span *ngIf=\"!dataStatus$\">{{data.Widget.booleano.FailureMessage}}</span> -->\r\n</div>",
                styles: [".disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            }] }
];
/** @nocollapse */
ServerStatusDiagramComponent.ctorParameters = () => [
    { type: Injector }
];
ServerStatusDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ServerStatusDiagramComponent.prototype.dataSubscribtion;
    /** @type {?} */
    ServerStatusDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    ServerStatusDiagramComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    ServerStatusDiagramComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFPckQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQWF4QyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWHRDLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVl2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBWEQsSUFDSSxJQUFJLENBQUMsSUFBSTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDRCxJQUFJLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFNRCxVQUFVLENBQUMsQ0FBQztRQUNYLHVDQUF1QztRQUN2Qyx1R0FBdUc7UUFDdkcseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIscUdBQXFHO1FBQ3JHLFVBQVU7UUFDVixPQUFPO0lBQ1IsQ0FBQzs7OztJQUNELFFBQVEsS0FBSSxDQUFDOzs7WUFoQ2IsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGdXQUFxRDs7YUFFckQ7Ozs7WUFSd0QsUUFBUTs7O21CQWEvRCxLQUFLOzs7O0lBSE4sd0RBQStCOztJQUMvQixrREFBd0M7O0lBQ3hDLDZDQUFNOzs7OztJQVVNLGdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1zZXJ2ZXItc3RhdHVzXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHR9XHJcblxyXG5cdHRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5faWQsIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXJcclxuXHRcdC8vICAgICB0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0Ly8gICAgICAgY29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdC8vICAgICB9KTtcclxuXHRcdC8vICAgfSlcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==