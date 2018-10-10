/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                template: `<div class="over" fxlayout="row" fxLayoutAlign="space-between">
    <div fxFlex="nogrow" fxFlexAlign="start" class="data-time">{{now | date : 'y/M/d h:m:s'}}</div>
    <div fxFlex="nogrow" fxFlexAlign="center" class="data-time">{{time | date : 'y/M/d h:m:s'}}</div>
    <div fxFlex="nogrow" fxFlexAlign="end" class="data-time">{{now | date : 'y/M/d h:m:s'}}</div>
</div>
<div *ngIf="modelIsCorrect | async" class="diagram widget" [id]="'diagram_' + data._id"></div>`,
                styles: [`:host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}`]
            },] },
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
    /** @type {?} */
    DiagramComponent.prototype.store;
    /** @type {?} */
    DiagramComponent.prototype.diagramService;
    /** @type {?} */
    DiagramComponent.prototype.http;
    /** @type {?} */
    DiagramComponent.prototype.injector;
    /** @type {?} */
    DiagramComponent.prototype.route;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY25ELE1BQU07Ozs7Ozs7O0lBaUJMLFlBQ1MsT0FDQSxnQkFDQSxNQUNBLFVBQ0E7UUFKQSxVQUFLLEdBQUwsS0FBSztRQUNMLG1CQUFjLEdBQWQsY0FBYztRQUNkLFNBQUksR0FBSixJQUFJO1FBQ0osYUFBUSxHQUFSLFFBQVE7UUFDUixVQUFLLEdBQUwsS0FBSzsyQkFyQkEsSUFBSSxPQUFPLEVBQVE7OEJBQ1UsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO21CQWN2RCxJQUFJLENBQUMsR0FBRyxFQUFFO1FBUXZCLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENB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RXBDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYzthQUN6QyxPQUFPLENBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUN6RCxJQUFJLENBQ0o7YUFDQSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7Ozs7OztZQVF0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUNqRyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7O1lBbElELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7OzsrRkFLb0Y7Z0JBQzlGLE1BQU0sRUFBRSxDQUFDLG9QQUFvUCxDQUFDO2FBQzlQOzs7O1lBcEJRLEtBQUs7WUFJTCxjQUFjO1lBTmQsVUFBVTtZQUYwQyxRQUFRO1lBTTVELGNBQWM7OzttQkF1QnJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBNYXRTbGlkZXJDaGFuZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvdmVyXCIgZnhsYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cInN0YXJ0XCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e25vdyB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7dGltZSB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJlbmRcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7bm93IHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cIm1vZGVsSXNDb3JyZWN0IHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0gd2lkZ2V0XCIgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfW1hdC1zbGlkZXJ7d2lkdGg6MTAwJX0uZGF0YS10aW1le2RpcmVjdGlvbjpsdHI7dGV4dC1hbGlnbjpjZW50ZXJ9Lm92ZXJ7dmlzaWJpbGl0eTpoaWRkZW47b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozNXB4O2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjM7dHJhbnNpdGlvbjouNHMgZWFzZS1pbi1vdXR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRtb2RlbElzQ29ycmVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X21vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YSh2YWx1ZTogRGlhZ3JhbU1vZGVsKSB7XHJcblx0XHRpZiAoISh2YWx1ZS5DaGFydCAmJiB2YWx1ZS5faWQpKSByZXR1cm47XHJcblx0XHR0aGlzLl9tb2RlbCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbDtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNoYXJ0OiBhbnk7XHJcblx0dGltZTogbnVtYmVyO1xyXG5cdG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gSW50ZXJ2YWxPYnNlcnZhYmxlXHJcblx0XHQvLyAgICAgICAgIC8vIC5jcmVhdGUodGhpcy5tb2RlbC5Tb3VyY2UuU3luYylcclxuXHRcdC8vICAgICAgICAgLmNyZWF0ZSg5OTkpXHJcblx0XHQvLyAgICAgICAgIC5zd2l0Y2hNYXAoaSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6ICcwJ1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pXHJcblx0XHQvLyAgICAgICAgIClcclxuXHRcdC8vICAgICAgICAgLy8gLnN3aXRjaE1hcCgocmVzOiBhbnkpID0+IG9mKHJlcy5SZXN1bHQuRGF0YSkpXHJcblx0XHQvLyAgICAgICAgIC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0LkRhdGEpXHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0LmRlbGF5KDMwMCkuZmlsdGVyKGRhdGEgPT4gZGF0YSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydCA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0XHQuLi50aGlzLmRhdGEuQ2hhcnQsXHJcblx0XHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHt0aGlzLmRhdGEuX2lkfWBcclxuXHRcdFx0XHQvLyBzaXplOiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICBoZWlnaHQ6IDE1MFxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCB0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0XHRcdC5waXBlKGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhLkNoYXJ0LkZsb3cpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5mbG93KHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxNTAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuQ2hhcnQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuX2lkLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuU3luY1xyXG5cdFx0Ly8gKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdHRpbWVDaGFuZ2UoZTogTWF0U2xpZGVyQ2hhbmdlKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCBEYXRlLm5vdygpIC0gKCgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKSwgdHJ1ZSlcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0LmdldERhdGEoXHJcblx0XHRcdFx0dGhpcy5kYXRhLlNvdXJjZSxcclxuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlLFxyXG5cdFx0XHRcdERhdGUubm93KCkgLSAoMTAwMCAtIGUudmFsdWUpICogdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbCxcclxuXHRcdFx0XHR0cnVlXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0Ly8gICAgICAgICAuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHQvLyAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGNvbHVtblswXSArPSAnX2hpc3RvcmljJztcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuXHRcdFx0XHQvLyAgICAgICAgIH0pO1xyXG5cdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=