/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { DiagramService } from "../../services/diagram.service";
export class DataMapperComponent {
    /**
     * @param {?} diagramService
     * @param {?} store
     */
    constructor(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data)
            return;
        this.dataReport = _.report(data);
        this._data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DataMapperComponent.decorators = [
    { type: Component, args: [{
                selector: "data-mapper",
                template: `<div fxLayout="row">
    <div fxFlex="grow">
        <b>
            Key
        </b>
    </div>
    <div fxFlex="nogrow">
        <b>
            Type
        </b>
    </div>
</div>
<div *ngFor="let item of dataReport" [class]="'depts_' + item.depts" fxLayout="row">
    <div fxFlex="grow">
        {{item.name}}
    </div>
    <div fxFlex="nogrow">
        {{item.type}}
    </div>
</div>
`,
                styles: [`mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}`]
            },] },
];
/** @nocollapse */
DataMapperComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: Store }
];
DataMapperComponent.propDecorators = {
    destination: [{ type: Input }],
    data: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1tYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGF0YS1tYXBwZXIvZGF0YS1tYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQThCaEUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFVL0IsWUFBb0IsY0FBOEIsRUFBVSxLQUF5QztRQUFqRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFvQztRQURyRyxrQkFBb0IsRUFBRSxDQUFDO0tBQ2tGOzs7OztJQVB6RyxJQUNJLElBQUksQ0FBQyxJQUFJO1FBQ1osSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUNsQjs7OztJQUlELFFBQVEsTUFBSzs7O1lBckNiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CVjtnQkFDQSxNQUFNLEVBQUUsQ0FBQyx3R0FBd0csQ0FBQzthQUNsSDs7OztZQTdCUSxjQUFjO1lBSGQsS0FBSzs7OzBCQWtDWixLQUFLO21CQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkYXRhLW1hcHBlclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJncm93XCI+XHJcbiAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIEtleVxyXG4gICAgICAgIDwvYj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgICAgVHlwZVxyXG4gICAgICAgIDwvYj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhUmVwb3J0XCIgW2NsYXNzXT1cIidkZXB0c18nICsgaXRlbS5kZXB0c1wiIGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2BtYXQtcmFkaW8tYnV0dG9ue3dpZHRoOjEwMCU7ZGlzcGxheTpibG9ja31kaXYuZGVwdHNfMnttYXJnaW4tcmlnaHQ6MjVweH1kaXYuZGVwdHNfM3ttYXJnaW4tcmlnaHQ6NTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YU1hcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZGVzdGluYXRpb246IHN0cmluZztcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLmRhdGFSZXBvcnQgPSBfLnJlcG9ydChkYXRhKTtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdH1cclxuXHRkYXRhUmVwb3J0OiBhbnlbXSA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19