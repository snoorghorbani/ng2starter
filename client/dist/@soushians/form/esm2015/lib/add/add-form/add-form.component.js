/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormSchemaModel, AddFormApiModel, FieldConfig } from "../../models";
export class AddFormComponent {
    constructor() {
        this.formGroup = AddFormApiModel.Request.formGroup;
        this.submited = new EventEmitter();
        this.changes = new EventEmitter();
    }
    /**
     * @return {?}
     */
    emit() {
        this.formGroup.patchValue({ form: this.schema.form });
        this.submited.emit(this.formGroup.value);
    }
    /**
     * @return {?}
     */
    changed() {
        this.formGroup.patchValue({ form: this.schema.form });
        this.changes.emit(this.formGroup.value);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    changeOrder($event) { }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormGroup(root) {
        /** @type {?} */
        const group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormArray(root) {
        /** @type {?} */
        const array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormControl(root) {
        /** @type {?} */
        const control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    }
}
AddFormComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-add",
                template: "<div fxLayout=\"row\" *ngIf=\"schema\">\r\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\r\n    <form [formGroup]=\"formGroup\">\r\n      <mat-card>\r\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\r\n          </mat-form-field>\r\n          <!-- <div class=\"button-row\">\r\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\r\n              </div> -->\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div [ngSwitch]=\"schema.form?.type\">\r\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\r\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\r\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n\r\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\r\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\r\n          <mat-form-field>\r\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\r\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\r\n          <mat-form-field>\r\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </mat-card>\r\n    </form>\r\n  </div>\r\n  <div [fxFlex]=\"50\">\r\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\r\n  </div>\r\n</div>"
            }] }
];
AddFormComponent.propDecorators = {
    schema: [{ type: Input }],
    formGroup: [{ type: Input }],
    submited: [{ type: Output }],
    changes: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AddFormComponent.prototype.schema;
    /** @type {?} */
    AddFormComponent.prototype.formGroup;
    /** @type {?} */
    AddFormComponent.prototype.submited;
    /** @type {?} */
    AddFormComponent.prototype.changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdFLE1BQU0sT0FBTyxnQkFBZ0I7SUFKN0I7UUFNVSxjQUFTLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDN0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUE2QnhDLENBQUM7Ozs7SUEzQkEsSUFBSTtRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxPQUFPO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsTUFBTSxJQUFHLENBQUM7Ozs7O0lBRXRCLFlBQVksQ0FBQyxJQUFpQjs7Y0FDdkIsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QsWUFBWSxDQUFDLElBQWlCOztjQUN2QixLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsSUFBaUI7O2NBQ3pCLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQzs7O1lBcENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsNjFGQUF3QzthQUN4Qzs7O3FCQUVDLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxNQUFNO3NCQUNOLE1BQU07Ozs7SUFIUCxrQ0FBaUM7O0lBQ2pDLHFDQUF1RDs7SUFDdkQsb0NBQXdDOztJQUN4QyxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwsIEFkZEZvcm1BcGlNb2RlbCwgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1hZGRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2FkZC1mb3JtLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1Db21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsO1xyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cCA9IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGVtaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgZm9ybTogdGhpcy5zY2hlbWEuZm9ybSB9KTtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgZm9ybTogdGhpcy5zY2hlbWEuZm9ybSB9KTtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblx0Y2hhbmdlT3JkZXIoJGV2ZW50KSB7fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG59XHJcbiJdfQ==