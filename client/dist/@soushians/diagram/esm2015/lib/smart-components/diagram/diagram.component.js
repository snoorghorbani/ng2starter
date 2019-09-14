/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    console.log(data);
                }));
        }));
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
        this.modelIsCorrect.delay(300).filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data)).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            this.chart = c3.generate(Object.assign({}, this.data.Chart, { bindto: `#diagram_${this.data._id}` }));
            this.dataSubscribtion = this.diagramService
                .getData(this.data.Source, this.unsubscribe)
                .pipe(filter((/**
             * @param {?} data
             * @return {?}
             */
            data => data != undefined)), takeUntil(this.unsubscribe))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
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
            }));
        }));
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
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
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
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBU25ELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBaUI1QixZQUNTLEtBQTBCLEVBQzFCLGNBQThCLEVBQzlCLElBQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLEtBQXFCO1FBSnJCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFyQjlCLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNsQyxtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FB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QUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDakcsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3SEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxTQUFTO2dCQUNuQiwwZ0JBQXVDOzthQUV2Qzs7OztZQWZRLEtBQUs7WUFJTCxjQUFjO1lBTmQsVUFBVTtZQUYwQyxRQUFRO1lBTTVELGNBQWM7OzttQkFrQnJCLEtBQUs7Ozs7SUFITix1Q0FBa0M7O0lBQ2xDLDBDQUFzRTs7SUFDdEUsa0NBQXFCOztJQVVyQiw0Q0FBK0I7O0lBQy9CLGlDQUFXOztJQUNYLGdDQUFhOztJQUNiLCtCQUF5Qjs7Ozs7SUFFeEIsaUNBQWtDOzs7OztJQUNsQywwQ0FBc0M7Ozs7O0lBQ3RDLGdDQUF3Qjs7Ozs7SUFDeEIsb0NBQTBCOzs7OztJQUMxQixpQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBNYXRTbGlkZXJDaGFuZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1cIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2RpYWdyYW0uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2RpYWdyYW0uY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0bW9kZWxJc0NvcnJlY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9tb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEodmFsdWU6IERpYWdyYW1Nb2RlbCkge1xyXG5cdFx0aWYgKCEodmFsdWUuQ2hhcnQgJiYgdmFsdWUuX2lkKSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fbW9kZWwgPSB2YWx1ZTtcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XHJcblx0fVxyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRjaGFydDogYW55O1xyXG5cdHRpbWU6IG51bWJlcjtcclxuXHRub3c6IG51bWJlciA9IERhdGUubm93KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcblx0KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IEludGVydmFsT2JzZXJ2YWJsZVxyXG5cdFx0Ly8gICAgICAgICAvLyAuY3JlYXRlKHRoaXMubW9kZWwuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5jcmVhdGUoOTk5KVxyXG5cdFx0Ly8gICAgICAgICAuc3dpdGNoTWFwKGkgPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhdGFgLCB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6IHRoaXMubW9kZWwuU291cmNlLlJvdXRlLFxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMCdcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdC8vICAgICAgICAgICAgICAgICB9KVxyXG5cdFx0Ly8gICAgICAgICApXHJcblx0XHQvLyAgICAgICAgIC8vIC5zd2l0Y2hNYXAoKHJlczogYW55KSA9PiBvZihyZXMuUmVzdWx0LkRhdGEpKVxyXG5cdFx0Ly8gICAgICAgICAubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdC5EYXRhKVxyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5kZWxheSgzMDApLmZpbHRlcihkYXRhID0+IGRhdGEpLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdHRoaXMuY2hhcnQgPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdFx0Li4udGhpcy5kYXRhLkNoYXJ0LFxyXG5cdFx0XHRcdGJpbmR0bzogYCNkaWFncmFtXyR7dGhpcy5kYXRhLl9pZH1gXHJcblx0XHRcdFx0Ly8gc2l6ZToge1xyXG5cdFx0XHRcdC8vICAgICAgICAgaGVpZ2h0OiAxNTBcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0LmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgdGhpcy51bnN1YnNjcmliZSlcclxuXHRcdFx0XHQucGlwZShmaWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZCksIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0YS5DaGFydC5GbG93KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQuZmxvdyh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTUwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLkNoYXJ0LFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLl9pZCxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuU291cmNlLlN5bmNcclxuXHRcdC8vICk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHR0aW1lQ2hhbmdlKGU6IE1hdFNsaWRlckNoYW5nZSkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHQvLyB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgRGF0ZS5ub3coKSAtICgoMTAwMCAtIGUudmFsdWUpICogdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbCksIHRydWUpXHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdC5nZXREYXRhKFxyXG5cdFx0XHRcdHRoaXMuZGF0YS5Tb3VyY2UsXHJcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSxcclxuXHRcdFx0XHREYXRlLm5vdygpIC0gKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHQvLyBjb25zdCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC8vICAgICAgICAgLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0Ly8gICAgICAgICAubWFwKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBjb2x1bW5bMF0gKz0gJ19oaXN0b3JpYyc7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcblx0XHRcdFx0Ly8gICAgICAgICB9KTtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19