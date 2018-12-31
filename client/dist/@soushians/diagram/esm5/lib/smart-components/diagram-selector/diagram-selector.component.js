/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
import { map } from "rxjs/operators";
var DiagramSelectorComponent = /** @class */ (function () {
    function DiagramSelectorComponent(diagramService) {
        this.diagramService = diagramService;
        this.diagrams$ = this.diagramService.getDiagrams().pipe(map(function (res) { return res.Result; }));
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
    /** @type {?} */
    DiagramSelectorComponent.prototype.diagramService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBZ0JwQyxrQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ2hGO0lBVkQsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1NBQzFDOzs7T0FBQTtJQUNELHNCQUFJLDRDQUFNOzs7O1FBQVY7WUFDQyxPQUFPO2dCQUNOLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2FBQ2pDLENBQUM7U0FDRjs7O09BQUE7Ozs7SUFJRCwyQ0FBUTs7O0lBQVIsZUFBYTs7Z0JBakJiLFNBQVMsU0FBQztvQkFDVix5ZkFBOEM7aUJBQzlDOzs7O2dCQUxRLGNBQWM7O21DQU52Qjs7U0FZYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6IFwiZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHcmlkSXRlbUNvbXBvbmVudDx7IGRpYWdyYW1JZDogc3RyaW5nIH0+IHtcclxuXHRkaWFncmFtcyQ6IE9ic2VydmFibGU8RGlhZ3JhbU1vZGVsW10+O1xyXG5cdHNlbGVjdGVkRGlhZ3JhbUlkOiBzdHJpbmc7XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRpYWdyYW1JZCAhPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkaWFncmFtSWQ6IHRoaXMuc2VsZWN0ZWREaWFncmFtSWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKS5waXBlKG1hcChyZXMgPT4gcmVzLlJlc3VsdCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19