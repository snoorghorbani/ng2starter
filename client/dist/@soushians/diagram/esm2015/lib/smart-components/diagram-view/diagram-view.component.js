/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
export class diagramViewComponent {
    /**
     * @param {?} diagramService
     */
    constructor(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    }
}
diagramViewComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-view",
                template: `<div *ngIf="diagramData$ | async" [style.color]="(diagramData$ | async)?.Box.Color">
    <dynamic-component-selector class="diagram-box" [data]="(diagramData$ | async)"></dynamic-component-selector>
</div>`,
                styles: [`:host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}`]
            },] },
];
/** @nocollapse */
diagramViewComponent.ctorParameters = () => [
    { type: DiagramService }
];
diagramViewComponent.propDecorators = {
    diagramId: [{ type: Input, args: ["id",] }]
};
if (false) {
    /** @type {?} */
    diagramViewComponent.prototype.diagrams;
    /** @type {?} */
    diagramViewComponent.prototype.width;
    /** @type {?} */
    diagramViewComponent.prototype.diagramData$;
    /** @type {?} */
    diagramViewComponent.prototype.diagramId;
    /** @type {?} */
    diagramViewComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFVaEUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQU9oQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEQsYUFBUSxHQUFHLENBQUM7UUFNWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbEQ7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbkU7OztZQXBCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7T0FFSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxrSUFBa0ksQ0FBQzthQUM1STs7OztZQVRRLGNBQWM7Ozt3QkFlckIsS0FBSyxTQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRpYWdyYW1EYXRhJCB8IGFzeW5jXCIgW3N0eWxlLmNvbG9yXT1cIihkaWFncmFtRGF0YSQgfCBhc3luYyk/LkJveC5Db2xvclwiPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbZGF0YV09XCIoZGlhZ3JhbURhdGEkIHwgYXN5bmMpXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTttYXJnaW46MTIuNXB4fS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9LndpZGdldC10aXRsZXtmb250OjEuM2VtIElSQU5TYW5zLHRhaG9tYX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZGlhZ3JhbVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cclxuXHRkaWFncmFtRGF0YSQ6IGFueTtcclxuXHRASW5wdXQoXCJpZFwiKSBkaWFncmFtSWQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbURhdGEkID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKHRoaXMuZGlhZ3JhbUlkKTtcclxuXHR9XHJcbn1cclxuIl19