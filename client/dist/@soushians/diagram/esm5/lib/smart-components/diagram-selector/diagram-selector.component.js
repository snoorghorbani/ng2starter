/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
import { map } from "rxjs/operators";
var DiagramSelectorComponent = /** @class */ (function () {
    function DiagramSelectorComponent(diagramService) {
        this.diagramService = diagramService;
        this.diagrams$ = this.diagramService.getDiagrams().pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res.Result; })));
    }
    Object.defineProperty(DiagramSelectorComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.diagramId != undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiagramSelectorComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                diagramId: this.selectedDiagramId
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DiagramSelectorComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n<h4>\u0644\u06CC\u0633\u062A \u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627</h4>\r\n      <mat-form-field fxFlex=\"100\">\r\n  <mat-select placeholder=\"\u0646\u0645\u0648\u062F\u0627\u0631 \u0647\u0627\" [(ngModel)]=\"selectedDiagramId\" name=\"selectedDiagramId\">\r\n  <mat-option *ngFor=\"let item of (diagrams$ | async)\" [value]=\"item._id\">\r\n    {{item.Name}}\r\n  </mat-option>\r\n</mat-select>\r\n</mat-form-field>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DiagramSelectorComponent.ctorParameters = function () { return [
        { type: DiagramService }
    ]; };
    return DiagramSelectorComponent;
}());
export { DiagramSelectorComponent };
if (false) {
    /** @type {?} */
    DiagramSelectorComponent.prototype.diagrams$;
    /** @type {?} */
    DiagramSelectorComponent.prototype.selectedDiagramId;
    /**
     * @type {?}
     * @private
     */
    DiagramSelectorComponent.prototype.diagramService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFjQyxrQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sRUFBVixDQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFWRCxzQkFBSSwyQ0FBSzs7OztRQUFUO1lBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw0Q0FBTTs7OztRQUFWO1lBQ0MsT0FBTztnQkFDTixTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjthQUNqQyxDQUFDO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFJRCwyQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFqQmIsU0FBUyxTQUFDO29CQUNWLHlmQUE4QztpQkFDOUM7Ozs7Z0JBTFEsY0FBYzs7SUFxQnZCLCtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FmWSx3QkFBd0I7OztJQUNwQyw2Q0FBc0M7O0lBQ3RDLHFEQUEwQjs7Ozs7SUFTZCxrREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6IFwiZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHcmlkSXRlbUNvbXBvbmVudDx7IGRpYWdyYW1JZDogc3RyaW5nIH0+IHtcclxuXHRkaWFncmFtcyQ6IE9ic2VydmFibGU8RGlhZ3JhbU1vZGVsW10+O1xyXG5cdHNlbGVjdGVkRGlhZ3JhbUlkOiBzdHJpbmc7XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRpYWdyYW1JZCAhPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkaWFncmFtSWQ6IHRoaXMuc2VsZWN0ZWREaWFncmFtSWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKS5waXBlKG1hcChyZXMgPT4gcmVzLlJlc3VsdCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19