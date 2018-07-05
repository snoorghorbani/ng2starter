/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<div *ngIf="dataLoaded | async">
  <!-- <mat-icon [ngClass]="dataStatus$ ? 'connected' : 'disconnected'">
    fiber_manual_record
  </mat-icon> -->
  <!-- <span *ngIf="dataStatus$">{{data.Widget.booleano.SuccessMessage}}</span>
  <span *ngIf="!dataStatus$">{{data.Widget.booleano.FailureMessage}}</span> -->
</div>`,
                styles: [`.disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}`]
            },] },
];
/** @nocollapse */
ServerStatusDiagramComponent.ctorParameters = () => [
    { type: Injector }
];
ServerStatusDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
function ServerStatusDiagramComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ServerStatusDiagramComponent.prototype.dataSubscribtion;
    /** @type {?} */
    ServerStatusDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    ServerStatusDiagramComponent.prototype._data;
    /** @type {?} */
    ServerStatusDiagramComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFhckQsTUFBTTs7OztJQWFMLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7MEJBWHpCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQztRQVl0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3RDOzs7OztJQVhELElBQ0ksSUFBSSxDQUFDLElBQUk7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjs7OztJQUNELElBQUksSUFBSTtRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ2xCOzs7OztJQU1ELFVBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7S0FTWDs7OztJQUNELFFBQVEsTUFBSzs7O1lBdENiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7OztPQU1KO2dCQUNOLE1BQU0sRUFBRSxDQUFDLGlLQUFpSyxDQUFDO2FBQzNLOzs7O1lBZHdELFFBQVE7OzttQkFtQi9ELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tc2VydmVyLXN0YXR1c1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1pY29uIFtuZ0NsYXNzXT1cImRhdGFTdGF0dXMkID8gJ2Nvbm5lY3RlZCcgOiAnZGlzY29ubmVjdGVkJ1wiPlxyXG4gICAgZmliZXJfbWFudWFsX3JlY29yZFxyXG4gIDwvbWF0LWljb24+IC0tPlxyXG4gIDwhLS0gPHNwYW4gKm5nSWY9XCJkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uU3VjY2Vzc01lc3NhZ2V9fTwvc3Bhbj5cclxuICA8c3BhbiAqbmdJZj1cIiFkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uRmFpbHVyZU1lc3NhZ2V9fTwvc3Bhbj4gLS0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5kaXNjb25uZWN0ZWR7Y29sb3I6I2JhMzAzMH0uY29ubmVjdGVke2NvbG9yOiMzMGFlMWN9Lm51bWVyaWN7Zm9udC1zaXplOjIuNGVtO2xpbmUtaGVpZ2h0OjEuOH0ubnVtZXJpYy50aXRsZXtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWE7Zm9udC1zaXplOjEuMWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuX2lkLCB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyXHJcblx0XHQvLyAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgfSk7XHJcblx0XHQvLyAgIH0pXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=