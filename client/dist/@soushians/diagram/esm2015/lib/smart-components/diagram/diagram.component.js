/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { DiagramService } from "../../services/diagram.service";
import { DiagramModel } from "../../models";
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
        this.modelIsCorrect = new BehaviorSubject(false);
        this.now = Date.now();
        this.data = this.injector.get("data");
        this.route.params.subscribe(params => {
            const /** @type {?} */ diagramId = params["id"];
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
        //         // .switchMap((res: any) => Observable.of(res.Result.Data))
        //         .map((res: any) => res.Result.Data)
        this.modelIsCorrect.delay(300).filter(data => data).subscribe(state => {
            this.chart = c3.generate(Object.assign({}, this.data.Chart, { bindto: `#diagram_${this.data._id}` }));
            this.dataSubscribtion = this.diagramService
                .getData(this.data.Source)
                .filter(data => data != undefined)
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        this.dataSubscribtion.unsubscribe();
        // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
        this.dataSubscribtion = this.diagramService
            .getData(this.data.Source, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
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
                styles: [`:host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}`]
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
function DiagramComponent_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFlNUMsTUFBTTs7Ozs7Ozs7SUFnQkwsWUFDUyxPQUNBLGdCQUNBLE1BQ0EsVUFDQTtRQUpBLFVBQUssR0FBTCxLQUFLO1FBQ0wsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsU0FBSSxHQUFKLElBQUk7UUFDSixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLOzhCQXBCNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO21CQWN2RCxJQUFJLENBQUMsR0FBRyxFQUFFO1FBUXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BDLHVCQUFNLFNBQVMsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsU0FBUztnQkFDUixJQUFJ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QUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7O1lBUXRCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQ2pHLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7WUF2SEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7OytGQUtvRjtnQkFDOUYsTUFBTSxFQUFFLENBQUMsd1BBQXdQLENBQUM7YUFDbFE7Ozs7WUFuQlEsS0FBSztZQUlMLGNBQWM7WUFOZCxVQUFVO1lBRjBDLFFBQVE7WUFNNUQsY0FBYzs7O21CQXFCckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE1hdFNsaWRlckNoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvdmVyXCIgZnhsYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cInN0YXJ0XCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e25vdyB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7dGltZSB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJlbmRcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7bm93IHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cIm1vZGVsSXNDb3JyZWN0IHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0gd2lkZ2V0XCIgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfW1hdC1zbGlkZXJ7d2lkdGg6MTAwJX0uZGF0YS10aW1le2RpcmVjdGlvbjpsdHI7dGV4dC1hbGlnbjpjZW50ZXJ9Lm92ZXJ7dmlzaWJpbGl0eTpoaWRkZW47b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozNXB4O2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjM7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2UtaW4tb3V0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHRtb2RlbElzQ29ycmVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X21vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YSh2YWx1ZTogRGlhZ3JhbU1vZGVsKSB7XHJcblx0XHRpZiAoISh2YWx1ZS5DaGFydCAmJiB2YWx1ZS5faWQpKSByZXR1cm47XHJcblx0XHR0aGlzLl9tb2RlbCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbDtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNoYXJ0OiBhbnk7XHJcblx0dGltZTogbnVtYmVyO1xyXG5cdG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gSW50ZXJ2YWxPYnNlcnZhYmxlXHJcblx0XHQvLyAgICAgICAgIC8vIC5jcmVhdGUodGhpcy5tb2RlbC5Tb3VyY2UuU3luYylcclxuXHRcdC8vICAgICAgICAgLmNyZWF0ZSg5OTkpXHJcblx0XHQvLyAgICAgICAgIC5zd2l0Y2hNYXAoaSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6ICcwJ1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pXHJcblx0XHQvLyAgICAgICAgIClcclxuXHRcdC8vICAgICAgICAgLy8gLnN3aXRjaE1hcCgocmVzOiBhbnkpID0+IE9ic2VydmFibGUub2YocmVzLlJlc3VsdC5EYXRhKSlcclxuXHRcdC8vICAgICAgICAgLm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQuRGF0YSlcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QuZGVsYXkoMzAwKS5maWx0ZXIoZGF0YSA9PiBkYXRhKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gYzMuZ2VuZXJhdGUoe1xyXG5cdFx0XHRcdC4uLnRoaXMuZGF0YS5DaGFydCxcclxuXHRcdFx0XHRiaW5kdG86IGAjZGlhZ3JhbV8ke3RoaXMuZGF0YS5faWR9YFxyXG5cdFx0XHRcdC8vIHNpemU6IHtcclxuXHRcdFx0XHQvLyAgICAgICAgIGhlaWdodDogMTUwXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UpXHJcblx0XHRcdFx0LmZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhLkNoYXJ0LkZsb3cpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5mbG93KHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxNTAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuQ2hhcnQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuX2lkLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuU3luY1xyXG5cdFx0Ly8gKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0dGltZUNoYW5nZShlOiBNYXRTbGlkZXJDaGFuZ2UpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIERhdGUubm93KCkgLSAoKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwpLCB0cnVlKVxyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHQuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCBEYXRlLm5vdygpIC0gKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsIHRydWUpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHQvLyBjb25zdCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC8vICAgICAgICAgLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0Ly8gICAgICAgICAubWFwKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBjb2x1bW5bMF0gKz0gJ19oaXN0b3JpYyc7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcblx0XHRcdFx0Ly8gICAgICAgICB9KTtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19