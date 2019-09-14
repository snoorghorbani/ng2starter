/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
var diagramViewComponent = /** @class */ (function () {
    function diagramViewComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    /**
     * @return {?}
     */
    diagramViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    };
    diagramViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram-view",
                    template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">\r\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector>\r\n</div>",
                    styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}"]
                }] }
    ];
    /** @nocollapse */
    diagramViewComponent.ctorParameters = function () { return [
        { type: DiagramService }
    ]; };
    diagramViewComponent.propDecorators = {
        diagramId: [{ type: Input, args: ["id",] }]
    };
    return diagramViewComponent;
}());
export { diagramViewComponent };
if (false) {
    /** @type {?} */
    diagramViewComponent.prototype.diagrams;
    /** @type {?} */
    diagramViewComponent.prototype.width;
    /** @type {?} */
    diagramViewComponent.prototype.diagramData$;
    /** @type {?} */
    diagramViewComponent.prototype.diagramId;
    /**
     * @type {?}
     * @private
     */
    diagramViewComponent.prototype.diagramService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHaEU7SUFZQyw4QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTGxELFVBQUssR0FBRyxHQUFHLENBQUM7UUFNWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2dCQWxCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHVPQUE0Qzs7aUJBRTVDOzs7O2dCQVBRLGNBQWM7Ozs0QkFhckIsS0FBSyxTQUFDLElBQUk7O0lBU1osMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLG9CQUFvQjs7O0lBQ2hDLHdDQUFtRDs7SUFDbkQscUNBQVk7O0lBRVosNENBQWtCOztJQUNsQix5Q0FBK0I7Ozs7O0lBRW5CLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS12aWV3XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9kaWFncmFtLXZpZXcuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcIi4vZGlhZ3JhbS12aWV3LmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBkaWFncmFtVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGlhZ3JhbXM6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblx0d2lkdGggPSAxMDA7XHJcblxyXG5cdGRpYWdyYW1EYXRhJDogYW55O1xyXG5cdEBJbnB1dChcImlkXCIpIGRpYWdyYW1JZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kaWFncmFtRGF0YSQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0odGhpcy5kaWFncmFtSWQpO1xyXG5cdH1cclxufVxyXG4iXX0=