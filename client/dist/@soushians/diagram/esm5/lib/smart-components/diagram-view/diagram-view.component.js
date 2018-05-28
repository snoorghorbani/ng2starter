/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
var diagramViewComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     */
    function diagramViewComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    /**
     * @return {?}
     */
    diagramViewComponent.prototype.ngOnInit = function () {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    };
    return diagramViewComponent;
}());
export { diagramViewComponent };
diagramViewComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-view",
                template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector>\n</div>",
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}"]
            },] },
];
/** @nocollapse */
diagramViewComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };
diagramViewComponent.propDecorators = {
    diagramId: [{ type: Input, args: ["id",] }]
};
function diagramViewComponent_tsickle_Closure_declarations() {
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
//# sourceMappingURL=diagram-view.component.js.map