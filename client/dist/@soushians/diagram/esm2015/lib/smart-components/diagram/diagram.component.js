/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { DiagramService } from "../../services/diagram.service";
import { DiagramModel } from "../../models/diagram.model";
import { filter, takeUntil } from "rxjs/operators";
export class DiagramComponent {
    /**
     * @param {?} store
     * @param {?} diagramService
     * @param {?} http
     * @param {?} injector
     * @param {?} route
     */
    constructor(store, diagramService, http, injector, route) {
        this.store = store;
        this.diagramService = diagramService;
        this.http = http;
        this.injector = injector;
        this.route = route;
        this.unsubscribe = new Subject();
        this.modelIsCorrect = new BehaviorSubject(false);
        this.now = Date.now();
        debugger;
        this.data = this.injector.get("data");
        this.route.params.subscribe(params => {
            /** @type {?} */
            const diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe(data => {
                    console.log(data);
                });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        if (!(value.Chart && value._id))
            return;
        this._model = value;
        this.modelIsCorrect.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._model;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // this.dataSubscribtion = IntervalObservable
        //         // .create(this.model.Source.Sync)
        //         .create(999)
        //         .switchMap(i =>
        //                 this.http.get(`http://localhost:3000/api/data`, {
        //                         params: {
        //                                 route: this.model.Source.Route,
        //                                 time: '0'
        //                         }
        //                 })
        //         )
        //         // .switchMap((res: any) => of(res.Result.Data))
        //         .map((res: any) => res.Result.Data)
        this.modelIsCorrect.delay(300).filter(data => data).subscribe(state => {
            this.chart = c3.generate(Object.assign({}, this.data.Chart, { bindto: `#diagram_${this.data._id}` }));
            this.dataSubscribtion = this.diagramService
                .getData(this.data.Source, this.unsubscribe)
                .pipe(filter(data => data != undefined), takeUntil(this.unsubscribe))
                .subscribe(data => {
                this.now = Date.now();
                this.time = data.Time;
                if (this.data.Chart.Flow) {
                    this.chart.flow({
                        columns: this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings),
                        duration: 1500
                    });
                }
                else {
                    this.chart.load({
                        columns: this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
                    });
                }
            });
        });
        // this.dataSubscribtion = this.diagramService.generateDiagram(
        //         this.model.Chart,
        //         this.model._id,
        //         this.model.Source.Route,
        //         this.model.Source.Sync
        // );
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
        debugger;
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        this.dataSubscribtion.unsubscribe();
        // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
        this.dataSubscribtion = this.diagramService
            .getData(this.data.Source, this.unsubscribe, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
            .subscribe(data => {
            this.time = data.Time;
            this.now = Date.now();
            // const columns = this.diagramService
            //         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            //         .map(column => {
            //                 debugger;
            //                 column[0] += '_historic';
            //                 return column;
            //         });
            this.chart.load({
                columns: this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            });
        });
    }
}
DiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram",
                template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n</div>\r\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
            }] }
];
/** @nocollapse */
DiagramComponent.ctorParameters = () => [
    { type: Store },
    { type: DiagramService },
    { type: HttpClient },
    { type: Injector },
    { type: ActivatedRoute }
];
DiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DiagramComponent.prototype.unsubscribe;
    /** @type {?} */
    DiagramComponent.prototype.modelIsCorrect;
    /** @type {?} */
    DiagramComponent.prototype._model;
    /** @type {?} */
    DiagramComponent.prototype.dataSubscribtion;
    /** @type {?} */
    DiagramComponent.prototype.chart;
    /** @type {?} */
    DiagramComponent.prototype.time;
    /** @type {?} */
    DiagramComponent.prototype.now;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBU25ELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBaUI1QixZQUNTLEtBQTBCLEVBQzFCLGNBQThCLEVBQzlCLElBQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLEtBQXFCO1FBSnJCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFyQjlCLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNsQyxtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FB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ZixPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUNqRyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTdIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDBnQkFBdUM7O2FBRXZDOzs7O1lBZlEsS0FBSztZQUlMLGNBQWM7WUFOZCxVQUFVO1lBRjBDLFFBQVE7WUFNNUQsY0FBYzs7O21CQWtCckIsS0FBSzs7OztJQUhOLHVDQUFrQzs7SUFDbEMsMENBQXNFOztJQUN0RSxrQ0FBcUI7O0lBVXJCLDRDQUErQjs7SUFDL0IsaUNBQVc7O0lBQ1gsZ0NBQWE7O0lBQ2IsK0JBQXlCOzs7OztJQUV4QixpQ0FBa0M7Ozs7O0lBQ2xDLDBDQUFzQzs7Ozs7SUFDdEMsZ0NBQXdCOzs7OztJQUN4QixvQ0FBMEI7Ozs7O0lBQzFCLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE1hdFNsaWRlckNoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbVwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGlhZ3JhbS5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vZGlhZ3JhbS5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRtb2RlbElzQ29ycmVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X21vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YSh2YWx1ZTogRGlhZ3JhbU1vZGVsKSB7XHJcblx0XHRpZiAoISh2YWx1ZS5DaGFydCAmJiB2YWx1ZS5faWQpKSByZXR1cm47XHJcblx0XHR0aGlzLl9tb2RlbCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbDtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNoYXJ0OiBhbnk7XHJcblx0dGltZTogbnVtYmVyO1xyXG5cdG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gSW50ZXJ2YWxPYnNlcnZhYmxlXHJcblx0XHQvLyAgICAgICAgIC8vIC5jcmVhdGUodGhpcy5tb2RlbC5Tb3VyY2UuU3luYylcclxuXHRcdC8vICAgICAgICAgLmNyZWF0ZSg5OTkpXHJcblx0XHQvLyAgICAgICAgIC5zd2l0Y2hNYXAoaSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6ICcwJ1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pXHJcblx0XHQvLyAgICAgICAgIClcclxuXHRcdC8vICAgICAgICAgLy8gLnN3aXRjaE1hcCgocmVzOiBhbnkpID0+IG9mKHJlcy5SZXN1bHQuRGF0YSkpXHJcblx0XHQvLyAgICAgICAgIC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0LkRhdGEpXHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0LmRlbGF5KDMwMCkuZmlsdGVyKGRhdGEgPT4gZGF0YSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydCA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0XHQuLi50aGlzLmRhdGEuQ2hhcnQsXHJcblx0XHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHt0aGlzLmRhdGEuX2lkfWBcclxuXHRcdFx0XHQvLyBzaXplOiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICBoZWlnaHQ6IDE1MFxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCB0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0XHRcdC5waXBlKGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhLkNoYXJ0LkZsb3cpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5mbG93KHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxNTAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuQ2hhcnQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuX2lkLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuU3luY1xyXG5cdFx0Ly8gKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdHRpbWVDaGFuZ2UoZTogTWF0U2xpZGVyQ2hhbmdlKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCBEYXRlLm5vdygpIC0gKCgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKSwgdHJ1ZSlcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0LmdldERhdGEoXHJcblx0XHRcdFx0dGhpcy5kYXRhLlNvdXJjZSxcclxuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlLFxyXG5cdFx0XHRcdERhdGUubm93KCkgLSAoMTAwMCAtIGUudmFsdWUpICogdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbCxcclxuXHRcdFx0XHR0cnVlXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0Ly8gICAgICAgICAuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHQvLyAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGNvbHVtblswXSArPSAnX2hpc3RvcmljJztcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuXHRcdFx0XHQvLyAgICAgICAgIH0pO1xyXG5cdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=