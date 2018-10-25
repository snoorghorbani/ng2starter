/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";
var ServerConnectingTimeDiagramComponent = /** @class */ (function () {
    function ServerConnectingTimeDiagramComponent(injector) {
        var _this = this;
        this.injector = injector;
        this.time = 0;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
        setInterval(function () {
            _this.time = _this.time + 1;
        }, 1000);
    }
    Object.defineProperty(ServerConnectingTimeDiagramComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.timeChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
        //         .subscribe(data => {
        //                 this.chart.load({
        //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //                 });
        //         })
    };
    ServerConnectingTimeDiagramComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram-server-connecting-time",
                    template: "<div *ngIf=\"dataLoaded | async\">\n  <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div> -->\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                    styles: [".numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
                },] },
    ];
    /** @nocollapse */
    ServerConnectingTimeDiagramComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ServerConnectingTimeDiagramComponent.propDecorators = {
        time: [{ type: Input }],
        data: [{ type: Input }]
    };
    return ServerConnectingTimeDiagramComponent;
}());
export { ServerConnectingTimeDiagramComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF1QnRDLDhDQUFvQixRQUFrQjtRQUF0QyxpQkFLQztRQUxtQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWHRDLFlBQXdCLENBQUMsQ0FBQztRQUMxQixrQkFBYSxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVd2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLFdBQVcsQ0FBQztZQUNYLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDMUIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNUO0lBYkQsc0JBQ0ksc0RBQUk7Ozs7UUFJUjtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjs7Ozs7UUFQRCxVQUNTLElBQUk7WUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjs7O09BQUE7Ozs7SUFXRCx1REFBUTs7O0lBQVIsZUFBYTs7Ozs7SUFDYix5REFBVTs7OztJQUFWLFVBQVcsQ0FBQzs7Ozs7Ozs7S0FRWDs7Z0JBckNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxRQUFRLEVBQUUscVJBSUo7b0JBQ04sTUFBTSxFQUFFLENBQUMsNEdBQTRHLENBQUM7aUJBQ3RIOzs7O2dCQVp3RCxRQUFROzs7dUJBYy9ELEtBQUs7dUJBR0wsS0FBSzs7K0NBakJQOztTQWFhLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tc2VydmVyLWNvbm5lY3RpbmctdGltZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWMgdGl0bGVcIj57e2RhdGEuRGVzY3JpcHRpb259fTwvZGl2PlxyXG4gIDwhLS0gPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpY1wiPnt7dGltZSB8IHRpbWVDb3VudGVyfX08L2Rpdj4gLS0+XHJcbiAgPGRpdiBbaWRdPVwiJ2RpYWdyYW1fJyArIGRhdGEuX2lkXCI+PC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5udW1lcmlje2ZvbnQtc2l6ZToyLjRlbTtsaW5lLWhlaWdodDoxLjh9Lm51bWVyaWMudGl0bGV7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hO2ZvbnQtc2l6ZToxLjFlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSB0aW1lOiBudW1iZXIgPSAwO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHRoaXMudGltZSA9IHRoaXMudGltZSArIDE7XHJcblx0XHR9LCAxMDAwKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUsIHRoaXMuZGF0YS5Tb3VyY2UuU3luYylcclxuXHRcdC8vICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdC8vICAgICAgICAgICAgICAgICB9KTtcclxuXHRcdC8vICAgICAgICAgfSlcclxuXHR9XHJcbn1cclxuIl19