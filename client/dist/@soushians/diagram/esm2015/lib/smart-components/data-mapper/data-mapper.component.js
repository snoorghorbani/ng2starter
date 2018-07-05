/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function DataMapperComponent_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1tYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvZGF0YS1tYXBwZXIvZGF0YS1tYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQThCaEUsTUFBTTs7Ozs7SUFVTCxZQUFvQixjQUE4QixFQUFVLEtBQXlDO1FBQWpGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9DOzBCQURqRixFQUFFO0tBQ21GOzs7OztJQVB6RyxJQUNJLElBQUksQ0FBQyxJQUFJO1FBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOzs7O0lBSUQsUUFBUSxNQUFLOzs7WUFyQ2IsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0JWO2dCQUNBLE1BQU0sRUFBRSxDQUFDLHdHQUF3RyxDQUFDO2FBQ2xIOzs7O1lBN0JRLGNBQWM7WUFIZCxLQUFLOzs7MEJBa0NaLEtBQUs7bUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRhdGEtbWFwcGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgICAgS2V5XHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAgICBUeXBlXHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFSZXBvcnRcIiBbY2xhc3NdPVwiJ2RlcHRzXycgKyBpdGVtLmRlcHRzXCIgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcblx0c3R5bGVzOiBbYG1hdC1yYWRpby1idXR0b257d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrfWRpdi5kZXB0c18ye21hcmdpbi1yaWdodDoyNXB4fWRpdi5kZXB0c18ze21hcmdpbi1yaWdodDo1MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBkZXN0aW5hdGlvbjogc3RyaW5nO1xyXG5cdF9kYXRhOiBhbnk7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuZGF0YVJlcG9ydCA9IF8ucmVwb3J0KGRhdGEpO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0fVxyXG5cdGRhdGFSZXBvcnQ6IGFueVtdID0gW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=