/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe(function (data) {
                    console.log(data);
                });
        });
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
        this.modelIsCorrect.delay(300).filter(function (data) { return data; }).subscribe(function (state) {
            _this.chart = c3.generate(tslib_1.__assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
            _this.dataSubscribtion = _this.diagramService
                .getData(_this.data.Source, _this.unsubscribe)
                .pipe(filter(function (data) { return data != undefined; }), takeUntil(_this.unsubscribe))
                .subscribe(function (data) {
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
            });
        });
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
            .subscribe(function (data) {
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
        });
    };
    DiagramComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram",
                    template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n</div>\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                    styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
                },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTRCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUErQmxELDBCQUNTLE9BQ0EsZ0JBQ0EsTUFDQSxVQUNBO1FBTFQsaUJBa0JDO1FBakJRLFVBQUssR0FBTCxLQUFLO1FBQ0wsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsU0FBSSxHQUFKLElBQUk7UUFDSixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLO1FBckJkLG1CQUFjLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbEMsc0JBQTJDLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBY3RFLFdBQWMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBUXhCLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFB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QUFVOzs7O0lBQVYsVUFBVyxDQUFrQjtRQUE3QixpQkF3QkM7UUF2QkEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUVwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDekMsT0FBTyxDQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNoQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFDekQsSUFBSSxDQUNKO2FBQ0EsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7WUFRdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDakcsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFDO0tBQ0o7O2dCQWxJRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxzZkFLb0Y7b0JBQzlGLE1BQU0sRUFBRSxDQUFDLG9QQUFvUCxDQUFDO2lCQUM5UDs7OztnQkFwQlEsS0FBSztnQkFJTCxjQUFjO2dCQU5kLFVBQVU7Z0JBRjBDLFFBQVE7Z0JBTTVELGNBQWM7Ozt1QkF1QnJCLEtBQUs7OzJCQTdCUDs7U0F5QmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTWF0U2xpZGVyQ2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwib3ZlclwiIGZ4bGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJzdGFydFwiIGNsYXNzPVwiZGF0YS10aW1lXCI+e3tub3cgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e3RpbWUgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwiZW5kXCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e25vdyB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJtb2RlbElzQ29ycmVjdCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtIHdpZGdldFwiIFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1tYXQtc2xpZGVye3dpZHRoOjEwMCV9LmRhdGEtdGltZXtkaXJlY3Rpb246bHRyO3RleHQtYWxpZ246Y2VudGVyfS5vdmVye3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDozO3RyYW5zaXRpb246LjRzIGVhc2UtaW4tb3V0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0bW9kZWxJc0NvcnJlY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9tb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEodmFsdWU6IERpYWdyYW1Nb2RlbCkge1xyXG5cdFx0aWYgKCEodmFsdWUuQ2hhcnQgJiYgdmFsdWUuX2lkKSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fbW9kZWwgPSB2YWx1ZTtcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XHJcblx0fVxyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRjaGFydDogYW55O1xyXG5cdHRpbWU6IG51bWJlcjtcclxuXHRub3c6IG51bWJlciA9IERhdGUubm93KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcblx0KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IEludGVydmFsT2JzZXJ2YWJsZVxyXG5cdFx0Ly8gICAgICAgICAvLyAuY3JlYXRlKHRoaXMubW9kZWwuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5jcmVhdGUoOTk5KVxyXG5cdFx0Ly8gICAgICAgICAuc3dpdGNoTWFwKGkgPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhdGFgLCB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6IHRoaXMubW9kZWwuU291cmNlLlJvdXRlLFxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMCdcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdC8vICAgICAgICAgICAgICAgICB9KVxyXG5cdFx0Ly8gICAgICAgICApXHJcblx0XHQvLyAgICAgICAgIC8vIC5zd2l0Y2hNYXAoKHJlczogYW55KSA9PiBvZihyZXMuUmVzdWx0LkRhdGEpKVxyXG5cdFx0Ly8gICAgICAgICAubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdC5EYXRhKVxyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5kZWxheSgzMDApLmZpbHRlcihkYXRhID0+IGRhdGEpLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdHRoaXMuY2hhcnQgPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdFx0Li4udGhpcy5kYXRhLkNoYXJ0LFxyXG5cdFx0XHRcdGJpbmR0bzogYCNkaWFncmFtXyR7dGhpcy5kYXRhLl9pZH1gXHJcblx0XHRcdFx0Ly8gc2l6ZToge1xyXG5cdFx0XHRcdC8vICAgICAgICAgaGVpZ2h0OiAxNTBcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0LmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgdGhpcy51bnN1YnNjcmliZSlcclxuXHRcdFx0XHQucGlwZShmaWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZCksIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0YS5DaGFydC5GbG93KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQuZmxvdyh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTUwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLkNoYXJ0LFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLl9pZCxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuU291cmNlLlN5bmNcclxuXHRcdC8vICk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHR0aW1lQ2hhbmdlKGU6IE1hdFNsaWRlckNoYW5nZSkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHQvLyB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgRGF0ZS5ub3coKSAtICgoMTAwMCAtIGUudmFsdWUpICogdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbCksIHRydWUpXHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdC5nZXREYXRhKFxyXG5cdFx0XHRcdHRoaXMuZGF0YS5Tb3VyY2UsXHJcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSxcclxuXHRcdFx0XHREYXRlLm5vdygpIC0gKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHQvLyBjb25zdCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC8vICAgICAgICAgLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0Ly8gICAgICAgICAubWFwKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBjb2x1bW5bMF0gKz0gJ19oaXN0b3JpYyc7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcblx0XHRcdFx0Ly8gICAgICAgICB9KTtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19