/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DiagramService } from "../../services/diagram.service";
import { EditDiagramApiModel } from "../../models";
import { EditDiagramAction } from "../../actions";
var EditDiagramComponent = /** @class */ (function () {
    function EditDiagramComponent(diagramService, route, store) {
        var _this = this;
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        var /** @type {?} */ Route = this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            _this.diagramService.getDiagram(diagramId).subscribe(function (data) { return _this.formGroup.patchValue(data); });
        });
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
                    template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\n\n        <mat-card-header>\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n            </mat-form-field>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\n            </mat-form-field>\n\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n\n        </mat-card-content>\n        <mat-card-actions>\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n        </mat-card-actions>\n    </form>\n</mat-card>\n",
                    styles: [""]
                },] },
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
function EditDiagramComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramComponent.prototype.formGroup;
    /** @type {?} */
    EditDiagramComponent.prototype.diagramService;
    /** @type {?} */
    EditDiagramComponent.prototype.route;
    /** @type {?} */
    EditDiagramComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVoRSxPQUFPLEVBQWdCLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFpQ2pELDhCQUNTLGdCQUNBLE9BQ0E7UUFIVCxpQkFTQztRQVJRLG1CQUFjLEdBQWQsY0FBYztRQUNkLFVBQUssR0FBTCxLQUFLO1FBQ0wsVUFBSyxHQUFMLEtBQUs7eUJBSlMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFNBQVM7UUFNM0QscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDN0MscUJBQU0sU0FBUyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1NBQzdGLENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsdUNBQVE7OztJQUFSLGVBQWE7Ozs7O0lBRWIsa0NBQUc7Ozs7SUFBSCxVQUFJLEtBQUs7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNqRTs7Z0JBOUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGt0Q0F3QlY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNaOzs7O2dCQWpDUSxjQUFjO2dCQU5kLGNBQWM7Z0JBR2QsS0FBSzs7K0JBSGQ7O1NBd0NhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsLCBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjQwMHB4XCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nIChuZ1N1Ym1pdCk9XCJhZGQoJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+2KfZgdiy2YjYr9mGINmG2YXZiNiv2KfYsSDYrNiv24zYrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIti52YbZiNin2YYg2YbZhdmI2K/Yp9ixXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItii2K/YsdizINmG2YXZiNiv2KfYsVwiIGZvcm1Db250cm9sTmFtZT1cIlJvdXRlXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCI+2YjYtti524zYqjwvbWF0LWNoZWNrYm94PlxyXG5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7Yq9io2Ko8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPtin2YbYtdix2KfZgTwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvZm9ybT5cclxuPC9tYXQtY2FyZD5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0bGV0IFJvdXRlID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdERpYWdyYW1BY3Rpb24odGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIl19