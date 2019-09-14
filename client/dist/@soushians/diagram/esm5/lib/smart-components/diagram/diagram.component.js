/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Injector } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { DiagramService } from "../../services/diagram.service";
import { DiagramModel } from "../../models/diagram.model";
import { filter, takeUntil } from "rxjs/operators";
var DiagramComponent = /** @class */ (function () {
    function DiagramComponent(store, diagramService, http, injector, route) {
        var _this = this;
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
        function (params) {
            /** @type {?} */
            var diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    console.log(data);
                }));
        }));
    }
    Object.defineProperty(DiagramComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value.Chart && value._id))
                return;
            this._model = value;
            this.modelIsCorrect.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (data) { return data; })).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            _this.chart = c3.generate(tslib_1.__assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
            _this.dataSubscribtion = _this.diagramService
                .getData(_this.data.Source, _this.unsubscribe)
                .pipe(filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data != undefined; })), takeUntil(_this.unsubscribe))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.now = Date.now();
                _this.time = data.Time;
                if (_this.data.Chart.Flow) {
                    _this.chart.flow({
                        columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings),
                        duration: 1500
                    });
                }
                else {
                    _this.chart.load({
                        columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
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
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
        debugger;
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DiagramComponent.prototype.timeChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        this.dataSubscribtion.unsubscribe();
        // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
        this.dataSubscribtion = this.diagramService
            .getData(this.data.Source, this.unsubscribe, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.time = data.Time;
            _this.now = Date.now();
            // const columns = this.diagramService
            //         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            //         .map(column => {
            //                 debugger;
            //                 column[0] += '_historic';
            //                 return column;
            //         });
            _this.chart.load({
                columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
            });
        }));
    };
    DiagramComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram",
                    template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n</div>\r\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                    styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
                }] }
    ];
    /** @nocollapse */
    DiagramComponent.ctorParameters = function () { return [
        { type: Store },
        { type: DiagramService },
        { type: HttpClient },
        { type: Injector },
        { type: ActivatedRoute }
    ]; };
    DiagramComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return DiagramComponent;
}());
export { DiagramComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTRCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUluRDtJQXNCQywwQkFDUyxLQUEwQixFQUMxQixjQUE4QixFQUM5QixJQUFnQixFQUNoQixRQUFrQixFQUNsQixLQUFxQjtRQUw5QixpQkFrQkM7UUFqQlEsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXJCOUIsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2xDLG1CQUFjLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBY3RFLFFB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LGlDQUFpQztZQUNqQyxjQUFjO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDakcsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3SEQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxTQUFTO29CQUNuQiwwZ0JBQXVDOztpQkFFdkM7Ozs7Z0JBZlEsS0FBSztnQkFJTCxjQUFjO2dCQU5kLFVBQVU7Z0JBRjBDLFFBQVE7Z0JBTTVELGNBQWM7Ozt1QkFrQnJCLEtBQUs7O0lBcUhQLHVCQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F6SFksZ0JBQWdCOzs7SUFDNUIsdUNBQWtDOztJQUNsQywwQ0FBc0U7O0lBQ3RFLGtDQUFxQjs7SUFVckIsNENBQStCOztJQUMvQixpQ0FBVzs7SUFDWCxnQ0FBYTs7SUFDYiwrQkFBeUI7Ozs7O0lBRXhCLGlDQUFrQzs7Ozs7SUFDbEMsMENBQXNDOzs7OztJQUN0QyxnQ0FBd0I7Ozs7O0lBQ3hCLG9DQUEwQjs7Ozs7SUFDMUIsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTWF0U2xpZGVyQ2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9kaWFncmFtLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9kaWFncmFtLmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdG1vZGVsSXNDb3JyZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfbW9kZWw6IERpYWdyYW1Nb2RlbDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKHZhbHVlOiBEaWFncmFtTW9kZWwpIHtcclxuXHRcdGlmICghKHZhbHVlLkNoYXJ0ICYmIHZhbHVlLl9pZCkpIHJldHVybjtcclxuXHRcdHRoaXMuX21vZGVsID0gdmFsdWU7XHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0Lm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsO1xyXG5cdH1cclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0Y2hhcnQ6IGFueTtcclxuXHR0aW1lOiBudW1iZXI7XHJcblx0bm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cdCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0XHRkaWFncmFtSWQgJiZcclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSBJbnRlcnZhbE9ic2VydmFibGVcclxuXHRcdC8vICAgICAgICAgLy8gLmNyZWF0ZSh0aGlzLm1vZGVsLlNvdXJjZS5TeW5jKVxyXG5cdFx0Ly8gICAgICAgICAuY3JlYXRlKDk5OSlcclxuXHRcdC8vICAgICAgICAgLnN3aXRjaE1hcChpID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlOiB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogJzAnXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgfSlcclxuXHRcdC8vICAgICAgICAgKVxyXG5cdFx0Ly8gICAgICAgICAvLyAuc3dpdGNoTWFwKChyZXM6IGFueSkgPT4gb2YocmVzLlJlc3VsdC5EYXRhKSlcclxuXHRcdC8vICAgICAgICAgLm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQuRGF0YSlcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QuZGVsYXkoMzAwKS5maWx0ZXIoZGF0YSA9PiBkYXRhKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gYzMuZ2VuZXJhdGUoe1xyXG5cdFx0XHRcdC4uLnRoaXMuZGF0YS5DaGFydCxcclxuXHRcdFx0XHRiaW5kdG86IGAjZGlhZ3JhbV8ke3RoaXMuZGF0YS5faWR9YFxyXG5cdFx0XHRcdC8vIHNpemU6IHtcclxuXHRcdFx0XHQvLyAgICAgICAgIGhlaWdodDogMTUwXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIHRoaXMudW5zdWJzY3JpYmUpXHJcblx0XHRcdFx0LnBpcGUoZmlsdGVyKGRhdGEgPT4gZGF0YSAhPSB1bmRlZmluZWQpLCB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRcdHRoaXMudGltZSA9IGRhdGEuVGltZTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGEuQ2hhcnQuRmxvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJ0LmZsb3coe1xyXG5cdFx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuRGF0YSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5nc1xyXG5cdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDE1MDBcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuRGF0YSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5nc1xyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdlbmVyYXRlRGlhZ3JhbShcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5DaGFydCxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5faWQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuU291cmNlLlJvdXRlLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5TeW5jXHJcblx0XHQvLyApO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0dGltZUNoYW5nZShlOiBNYXRTbGlkZXJDaGFuZ2UpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIERhdGUubm93KCkgLSAoKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwpLCB0cnVlKVxyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHQuZ2V0RGF0YShcclxuXHRcdFx0XHR0aGlzLmRhdGEuU291cmNlLFxyXG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUsXHJcblx0XHRcdFx0RGF0ZS5ub3coKSAtICgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsLFxyXG5cdFx0XHRcdHRydWVcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMudGltZSA9IGRhdGEuVGltZTtcclxuXHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQvLyAgICAgICAgIC5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdC8vICAgICAgICAgLm1hcChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgY29sdW1uWzBdICs9ICdfaGlzdG9yaWMnO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG5cdFx0XHRcdC8vICAgICAgICAgfSk7XHJcblx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==