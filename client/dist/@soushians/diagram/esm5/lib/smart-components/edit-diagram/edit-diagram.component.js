/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DiagramService } from "../../services/diagram.service";
import { EditDiagramApiModel } from "../../models/edit-diagram-api.model";
import { EditDiagramAction } from "../../actions/edit-diagram.actions";
var EditDiagramComponent = /** @class */ (function () {
    function EditDiagramComponent(diagramService, route, store) {
        var _this = this;
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        /** @type {?} */
        var Route = this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            /** @type {?} */
            var diagramId = params["id"];
            _this.diagramService.getDiagram(diagramId).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.formGroup.patchValue(data); }));
        }));
    }
    /**
     * @return {?}
     */
    EditDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    EditDiagramComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.store.dispatch(new EditDiagramAction(this.formGroup.value));
    };
    EditDiagramComponent.decorators = [
        { type: Component, args: [{
                    selector: "diagram-edit",
                    template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\r\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\r\n\r\n        <mat-card-header>\r\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <mat-form-field fxFlexFill>\r\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlexFill>\r\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\r\n            </mat-form-field>\r\n\r\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\r\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n        </mat-card-actions>\r\n    </form>\r\n</mat-card>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    EditDiagramComponent.ctorParameters = function () { return [
        { type: DiagramService },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return EditDiagramComponent;
}());
export { EditDiagramComponent };
if (false) {
    /** @type {?} */
    EditDiagramComponent.prototype.formGroup;
    /**
     * @type {?}
     * @private
     */
    EditDiagramComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    EditDiagramComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    EditDiagramComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV2RTtJQU9DLDhCQUNTLGNBQThCLEVBQzlCLEtBQXFCLEVBQ3JCLEtBQTBCO1FBSG5DLGlCQVNDO1FBUlEsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBSm5DLGNBQVMsR0FBYyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDOztZQU14RCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTs7Z0JBQ3ZDLFNBQVMsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7UUFDOUYsQ0FBQyxFQUFDO0lBQ0gsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsa0NBQUc7Ozs7SUFBSCxVQUFJLEtBQUs7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkF0QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw0d0NBQTRDOztpQkFFNUM7Ozs7Z0JBVFEsY0FBYztnQkFOZCxjQUFjO2dCQUdkLEtBQUs7O0lBK0JkLDJCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksb0JBQW9COzs7SUFDaEMseUNBQTZEOzs7OztJQUU1RCw4Q0FBc0M7Ozs7O0lBQ3RDLHFDQUE2Qjs7Ozs7SUFDN0IscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvZWRpdC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tZWRpdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZWRpdC1kaWFncmFtLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdGxldCBSb3V0ZSA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRhZGQoZXZlbnQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXREaWFncmFtQWN0aW9uKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==