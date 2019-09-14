/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";
var FormArrayComponent = /** @class */ (function () {
    function FormArrayComponent() {
        this.changes = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FormArrayComponent.prototype.changed = /**
     * @return {?}
     */
    function () {
        this.changes.emit();
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormArrayComponent.prototype.addFormGroup = /**
     * @param {?} root
     * @return {?}
     */
    function (root) {
        /** @type {?} */
        var group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormArrayComponent.prototype.addFormArray = /**
     * @param {?} root
     * @return {?}
     */
    function (root) {
        /** @type {?} */
        var array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormArrayComponent.prototype.addFormControl = /**
     * @param {?} root
     * @return {?}
     */
    function (root) {
        /** @type {?} */
        var control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    };
    FormArrayComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-form-array",
                    template: "<mat-card>\r\n  <mat-card-content>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\r\n    </mat-form-field>\r\n      \r\n    <div class=\"button-row\">\r\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\r\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\r\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\r\n    </div>\r\n    \r\n    <div *ngFor=\"let field of schema.fields\">\r\n      <div [ngSwitch]=\"field.type\">\r\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\r\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\r\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\r\n      </div>\r\n    </div>\r\n    \r\n  </mat-card-content>\r\n</mat-card>"
                }] }
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return []; };
    FormArrayComponent.propDecorators = {
        schema: [{ type: Input }],
        changes: [{ type: Output }]
    };
    return FormArrayComponent;
}());
export { FormArrayComponent };
if (false) {
    /** @type {?} */
    FormArrayComponent.prototype.schema;
    /** @type {?} */
    FormArrayComponent.prototype.changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvYWRkL2Zvcm0tYXJyYXkvZm9ybS1hcnJheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUzQztJQU9DO1FBRFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVoQixvQ0FBTzs7O0lBQVA7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLElBQWlCOztZQUN2QixLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFDRCx5Q0FBWTs7OztJQUFaLFVBQWEsSUFBaUI7O1lBQ3ZCLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDdEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUNELDJDQUFjOzs7O0lBQWQsVUFBZSxJQUFpQjs7WUFDekIsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDOztnQkE3QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDhqQ0FBMEM7aUJBQzFDOzs7Ozt5QkFFQyxLQUFLOzBCQUNMLE1BQU07O0lBd0JSLHlCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0ExQlksa0JBQWtCOzs7SUFDOUIsb0NBQTZCOztJQUM3QixxQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1hcnJheVwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZm9ybS1hcnJheS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXlDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGFkZEZvcm1Hcm91cChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgZ3JvdXAgPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHRcdGdyb3VwLmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChncm91cCk7XHJcblx0XHRyZXR1cm4gZ3JvdXA7XHJcblx0fVxyXG5cdGFkZEZvcm1BcnJheShyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgYXJyYXkgPSBuZXcgRmllbGRDb25maWcoXCJhcnJheVwiKTtcclxuXHRcdGFycmF5LmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChhcnJheSk7XHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblx0fVxyXG5cdGFkZEZvcm1Db250cm9sKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gbmV3IEZpZWxkQ29uZmlnKFwiY29udHJvbFwiKTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goY29udHJvbCk7XHJcblx0XHRyZXR1cm4gY29udHJvbDtcclxuXHR9XHJcbn1cclxuIl19