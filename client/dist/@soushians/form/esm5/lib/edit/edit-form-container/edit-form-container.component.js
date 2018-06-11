/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { EditFormApiModel } from "../../models";
import { FormService } from "../../services/form.service";
import { EditFormAction } from "../../edit/edit-form.actions";
import { AddFormContainerComponent } from "../../add/add-form-container";
import { GetFormSchemaAction } from "../../list/list.actions";
var EditFormContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditFormContainerComponent, _super);
    function EditFormContainerComponent(service, route, store) {
        var _this = _super.call(this, store, service) || this;
        _this.service = service;
        _this.route = route;
        _this.store = store;
        _this.formGroup = EditFormApiModel.Request.formGroup;
        return _this;
    }
    /**
     * @return {?}
     */
    EditFormContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params["_id"]; })
            .subscribe(function (id) { return _this.store.dispatch(new GetFormSchemaAction(id)); });
        this.route.params
            .map(function (params) { return params["_id"]; })
            .switchMap(function (id) { return _this.service.selectFormById(id); })
            .filter(function (data) { return data != null; })
            .take(1)
            .subscribe(function (formSchema) {
            _this.schema = formSchema;
            _this.formGroup.patchValue(formSchema);
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    EditFormContainerComponent.prototype.update = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.store.dispatch(new EditFormAction(data));
    };
    EditFormContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
                },] },
    ];
    /** @nocollapse */
    EditFormContainerComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return EditFormContainerComponent;
}(AddFormContainerComponent));
export { EditFormContainerComponent };
function EditFormContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormContainerComponent.prototype.formGroup;
    /** @type {?} */
    EditFormContainerComponent.prototype.service;
    /** @type {?} */
    EditFormContainerComponent.prototype.route;
    /** @type {?} */
    EditFormContainerComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFVZCxzREFBeUI7SUFFeEUsb0NBQW1CLE9BQW9CLEVBQVUsS0FBcUIsRUFBUyxLQUFnQztRQUEvRyxZQUNDLGtCQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsU0FDckI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUFVLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQVMsV0FBSyxHQUFMLEtBQUssQ0FBMkI7MEJBRG5HLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTOztLQUc3Qzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUFBLGlCQWNDO1FBYkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2YsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQzthQUM1QixTQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDO2FBQ2hELE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksSUFBSSxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzVCLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDUCxTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELDJDQUFNOzs7O0lBQU4sVUFBTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUM5Qzs7Z0JBaENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsK0xBS007aUJBQ2hCOzs7O2dCQVpRLFdBQVc7Z0JBUFgsY0FBYztnQkFFZCxLQUFLOztxQ0FIZDtFQXFCZ0QseUJBQXlCO1NBQTVELDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vLi4vZWRpdC9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybS1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgR2V0Rm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZWRpdC1mb3JtXHJcblx0XHRcdFx0XHRbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcblx0XHRcdFx0XHRbc2NoZW1hXT1cInNjaGVtYVwiXHJcblx0XHRcdFx0XHQoY2hhbmdlcyk9XCJ1cGRhdGVfc2NoZW1hKCRldmVudClcIlxyXG5cdFx0XHRcdFx0KHN1Ym1pdGVkKT1cInVwZGF0ZSgkZXZlbnQpXCI+XHJcblx0XHRcdFx0PC9lZGl0LWZvcm0+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXAgPSBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHB1YmxpYyBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPikge1xyXG5cdFx0c3VwZXIoc3RvcmUsIHNlcnZpY2UpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQubWFwKHBhcmFtcyA9PiBwYXJhbXNbXCJfaWRcIl0pXHJcblx0XHRcdC5zdWJzY3JpYmUoaWQgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Rm9ybVNjaGVtYUFjdGlvbihpZCkpKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQubWFwKHBhcmFtcyA9PiBwYXJhbXNbXCJfaWRcIl0pXHJcblx0XHRcdC5zd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEZvcm1CeUlkKGlkKSlcclxuXHRcdFx0LmZpbHRlcihkYXRhID0+IGRhdGEgIT0gbnVsbClcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN1YnNjcmliZShmb3JtU2NoZW1hID0+IHtcclxuXHRcdFx0XHR0aGlzLnNjaGVtYSA9IGZvcm1TY2hlbWE7XHJcblx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShmb3JtU2NoZW1hKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdEZvcm1BY3Rpb24oZGF0YSkpO1xyXG5cdH1cclxufVxyXG4iXX0=