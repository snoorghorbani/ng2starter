/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { DiagramService } from "../../services/diagram.service";
var DataMapperComponent = /** @class */ (function () {
    function DataMapperComponent(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    Object.defineProperty(DataMapperComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data)
                return;
            this.dataReport = _.report(data);
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataMapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DataMapperComponent.decorators = [
        { type: Component, args: [{
                    selector: "data-mapper",
                    template: "<div fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        <b>\n            Key\n        </b>\n    </div>\n    <div fxFlex=\"nogrow\">\n        <b>\n            Type\n        </b>\n    </div>\n</div>\n<div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        {{item.name}}\n    </div>\n    <div fxFlex=\"nogrow\">\n        {{item.type}}\n    </div>\n</div>\n",
                    styles: ["mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}"]
                },] },
    ];
    /** @nocollapse */
    DataMapperComponent.ctorParameters = function () { return [
        { type: DiagramService },
        { type: Store }
    ]; };
    DataMapperComponent.propDecorators = {
        destination: [{ type: Input }],
        data: [{ type: Input }]
    };
    return DataMapperComponent;
}());
export { DataMapperComponent };
if (false) {
    /** @type {?} */
    DataMapperComponent.prototype.destination;
    /** @type {?} */
    DataMapperComponent.prototype._data;
    /** @type {?} */
    DataMapperComponent.prototype.dataReport;
    /** @type {?} */
    DataMapperComponent.prototype.diagramService;
    /** @type {?} */
    DataMapperComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1tYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGF0YS1tYXBwZXIvZGF0YS1tYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUF3Qy9ELDZCQUFvQixjQUE4QixFQUFVLEtBQXlDO1FBQWpGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9DOzBCQURqRixFQUFFO0tBQ21GO0lBUHpHLHNCQUNJLHFDQUFJOzs7OztRQURSLFVBQ1MsSUFBSTtZQUNaLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs7T0FBQTs7OztJQUlELHNDQUFROzs7SUFBUixlQUFhOztnQkFyQ2IsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsNmFBb0JWO29CQUNBLE1BQU0sRUFBRSxDQUFDLHdHQUF3RyxDQUFDO2lCQUNsSDs7OztnQkE3QlEsY0FBYztnQkFIZCxLQUFLOzs7OEJBa0NaLEtBQUs7dUJBRUwsS0FBSzs7OEJBdENQOztTQW1DYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkYXRhLW1hcHBlclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJncm93XCI+XHJcbiAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIEtleVxyXG4gICAgICAgIDwvYj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgICAgVHlwZVxyXG4gICAgICAgIDwvYj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhUmVwb3J0XCIgW2NsYXNzXT1cIidkZXB0c18nICsgaXRlbS5kZXB0c1wiIGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2BtYXQtcmFkaW8tYnV0dG9ue3dpZHRoOjEwMCU7ZGlzcGxheTpibG9ja31kaXYuZGVwdHNfMnttYXJnaW4tcmlnaHQ6MjVweH1kaXYuZGVwdHNfM3ttYXJnaW4tcmlnaHQ6NTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YU1hcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZGVzdGluYXRpb246IHN0cmluZztcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLmRhdGFSZXBvcnQgPSBfLnJlcG9ydChkYXRhKTtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdH1cclxuXHRkYXRhUmVwb3J0OiBhbnlbXSA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19