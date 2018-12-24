/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewContainerRef, ComponentFactoryResolver, Compiler, Input, Output, EventEmitter, Directive } from "@angular/core";
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { SelectComponent, EmailComponent, ColorComponent, CheckboxComponent, TextComponent, TableComponent } from "../form-controls";
import { FormService } from "../../services/form.service";
import { GetFormSchemaAction } from "../../list/list.actions";
import { FieldConfig, FormSchemaModel } from "../../models";
import { DateFormInputControlComponent } from "../form-controls/date/date.component";
import { FileFormInputControlComponent } from "../form-controls/file/file.component";
import { FormCaptchaComponent } from "../form-controls/form-captcha";
var FormViewComponent = /** @class */ (function () {
    function FormViewComponent(service, compiler, resolver, store) {
        var _this = this;
        this.service = service;
        this.compiler = compiler;
        this.resolver = resolver;
        this.store = store;
        this.unsubscribe = new Subject();
        this.accept = new EventEmitter();
        this.cancel = new EventEmitter();
        this.card = false;
        this.formGroupCreated = false;
        this.schema$ = new BehaviorSubject(undefined);
        this.schema$.pipe(takeUntil(this.unsubscribe)).subscribe(function (schema) {
            if (!schema)
                return;
            _this.formGroup = /** @type {?} */ (_this.createFrom(schema.form));
            if (!schema.form.name)
                return;
            _this.formGroupCreated = true;
        });
    }
    Object.defineProperty(FormViewComponent.prototype, "id", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            var _this = this;
            if (!this.local)
                this.store.dispatch(new GetFormSchemaAction(id));
            this.service
                .selectFormById(id)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (schema) { return _this.schema$.next(schema); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormViewComponent.prototype, "schema", {
        set: /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            this.schema$.next(schema);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    FormViewComponent.prototype.generate = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        this.schema$.next(schema);
    };
    /**
     * @param {?} data
     * @param {?=} parentPath
     * @return {?}
     */
    FormViewComponent.prototype.createFrom = /**
     * @param {?} data
     * @param {?=} parentPath
     * @return {?}
     */
    function (data, parentPath) {
        var _this = this;
        if (parentPath === void 0) { parentPath = ""; }
        if (data.type == "control") {
            /** @type {?} */
            var formGroupPath = void 0;
            if (data.parentType == "array") {
                // parentPath = `${parentPath}.controls[${(data as FieldConfig).name}]`;
            }
            else if (data.parentType == "group") {
                formGroupPath = parentPath;
                parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            }
            /** @type {?} */
            var validators = [];
            if (data.validator.required && data.validator.required.active) {
                validators.push(Validators.required);
            }
            if (data.validator.minlength && data.validator.minlength.active) {
                validators.push(Validators.minLength(data.validator.minlength.value));
            }
            if (data.validator.email && data.validator.email.active) {
                validators.push(Validators.email);
            }
            /** @type {?} */
            var ctr = new FormControl(data.value, validators);
            (/** @type {?} */ (ctr)).schema = data;
            (/** @type {?} */ (ctr)).schema.path = parentPath;
            (/** @type {?} */ (ctr)).schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            /** @type {?} */
            var formGroup_1 = new FormGroup({});
            if (data.parentType == undefined) {
                parentPath = (/** @type {?} */ (data)).name;
            }
            else if (data.parentType == "array") {
                parentPath = parentPath + ".controls[" + ((/** @type {?} */ (data))).name + "]";
            }
            else if (data.parentType == "group") {
                parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            }
            (/** @type {?} */ (formGroup_1)).schema = data;
            (/** @type {?} */ (formGroup_1)).schema.path = parentPath;
            data.fields.forEach(function (item) {
                item.parentType = "group";
                formGroup_1.addControl(item.name, _this.createFrom(item, parentPath));
            });
            return formGroup_1;
        }
        else {
            /** @type {?} */
            var formArray_1 = new FormArray([]);
            parentPath =
                parentPath == "" ? (/** @type {?} */ (data)).name : parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            (/** @type {?} */ (formArray_1)).schema = data;
            (/** @type {?} */ (formArray_1)).schema.path = parentPath;
            data.fields.forEach(function (item, idx) {
                item.parentType = "array";
                item.name = idx.toString();
                formArray_1.controls.push(_this.createFrom(item, parentPath));
            });
            return formArray_1;
        }
    };
    /**
     * @return {?}
     */
    FormViewComponent.prototype.accepted = /**
     * @return {?}
     */
    function () {
        this.accept.emit(this.formGroup);
    };
    /**
     * @return {?}
     */
    FormViewComponent.prototype.canceled = /**
     * @return {?}
     */
    function () {
        this.cancel.emit(this.formGroup);
    };
    FormViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-form-view",
                    template: "<div fxFlex=\"nogrow\" fxLayoutAlign=\"center center\" class=\"main-container\">\n  <form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n    <mat-card>\n      <mat-card-title>\n        {{(schema$ | async)?.name}}\n      </mat-card-title>\n      <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n          <ng-container *ngIf=\"field && field.inputType\" dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\n        </div>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\n          | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\n          | async)?.events.accept.text}}</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n  <form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n    <div>\n      <h3>\n        {{(schema$ | async)?.name}}\n      </h3>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"5px\">\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n          <ng-container dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\n        </div>\n      </div>\n      <div>\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\n          | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\n          | async)?.events.accept.text}}</button>\n      </div>\n    </div>\n  </form>\n\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    FormViewComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: Compiler },
        { type: ComponentFactoryResolver },
        { type: Store }
    ]; };
    FormViewComponent.propDecorators = {
        accept: [{ type: Output }],
        cancel: [{ type: Output }],
        local: [{ type: Input }],
        card: [{ type: Input }],
        id: [{ type: Input }],
        schema: [{ type: Input }]
    };
    return FormViewComponent;
}());
export { FormViewComponent };
if (false) {
    /** @type {?} */
    FormViewComponent.prototype.unsubscribe;
    /** @type {?} */
    FormViewComponent.prototype.accept;
    /** @type {?} */
    FormViewComponent.prototype.cancel;
    /** @type {?} */
    FormViewComponent.prototype.local;
    /** @type {?} */
    FormViewComponent.prototype.card;
    /** @type {?} */
    FormViewComponent.prototype._id;
    /** @type {?} */
    FormViewComponent.prototype.formGroup;
    /** @type {?} */
    FormViewComponent.prototype.formGroupCreated;
    /** @type {?} */
    FormViewComponent.prototype.schema$;
    /** @type {?} */
    FormViewComponent.prototype.service;
    /** @type {?} */
    FormViewComponent.prototype.compiler;
    /** @type {?} */
    FormViewComponent.prototype.resolver;
    /** @type {?} */
    FormViewComponent.prototype.store;
}
/** @type {?} */
var components = {
    checkbox: CheckboxComponent,
    text: TextComponent,
    password: TextComponent,
    date: DateFormInputControlComponent,
    file: FileFormInputControlComponent,
    table: TableComponent,
    color: ColorComponent,
    email: EmailComponent,
    captcha: FormCaptchaComponent,
    select: SelectComponent
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        debugger;
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        debugger;
        if (this.config.inputType == undefined)
            return;
        if (!components[this.config.inputType]) {
            /** @type {?} */
            var supportedTypes = Object.keys(components).join(", ");
            throw new Error("Trying to use an unsupported type (" + this.config.inputType + ").\n\t\t  Supported types: " + supportedTypes);
        }
        /** @type {?} */
        var component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    DynamicFieldDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[dynamicField]"
                },] },
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicFieldDirective.propDecorators = {
        config: [{ type: Input }],
        group: [{ type: Input }]
    };
    return DynamicFieldDirective;
}());
export { DynamicFieldDirective };
if (false) {
    /** @type {?} */
    DynamicFieldDirective.prototype.config;
    /** @type {?} */
    DynamicFieldDirective.prototype.group;
    /** @type {?} */
    DynamicFieldDirective.prototype.component;
    /** @type {?} */
    DynamicFieldDirective.prototype.resolver;
    /** @type {?} */
    DynamicFieldDirective.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tdmlldy9mb3JtLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUdULGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsUUFBUSxFQUdSLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLFNBQVMsRUFHVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFDTixlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGNBQWMsRUFDZCxNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQVMsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFvRXBF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QUVMLEtBQUs7O2dDQXBOUDs7U0FpTmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRDb21waWxlcixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0TmdNb2R1bGUsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRPbkNoYW5nZXMsXHJcblx0RGlyZWN0aXZlLFxyXG5cdFR5cGUsXHJcblx0T25EZXN0cm95XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5LCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRTZWxlY3RDb21wb25lbnQsXHJcblx0RW1haWxDb21wb25lbnQsXHJcblx0Q29sb3JDb21wb25lbnQsXHJcblx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0VGV4dENvbXBvbmVudCxcclxuXHRUYWJsZUNvbXBvbmVudFxyXG59IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR2V0Rm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRDb25maWcsIEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9scy9kYXRlL2RhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHMvZmlsZS9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYUNvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2Zvcm0tY2FwdGNoYVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuICA8Zm9ybSAqbmdJZj1cImZvcm1Hcm91cENyZWF0ZWQgJiYgY2FyZFwiIGNsYXNzPVwibmdzLWR5bmFtaWMtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImFjY2VwdGVkKClcIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIHt7KHNjaGVtYSQgfCBhc3luYyk/Lm5hbWV9fVxyXG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudCBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgKHNjaGVtYSQgfCBhc3luYyk/LmZvcm0uZmllbGRzO1wiIFtmeEZsZXhdPVwiZmllbGQud2lkdGggKiAxMFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkICYmIGZpZWxkLmlucHV0VHlwZVwiIGR5bmFtaWNGaWVsZCBbY29uZmlnXT1cImZpZWxkXCIgW2dyb3VwXT1cImZvcm1Hcm91cFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC5zaG93XCIgKGNsaWNrKT1cImNhbmNlbC5lbWl0KClcIiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7KHNjaGVtYSRcclxuICAgICAgICAgIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnRleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQuc2hvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7KHNjaGVtYSRcclxuICAgICAgICAgIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnRleHR9fTwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuICA8Zm9ybSAqbmdJZj1cImZvcm1Hcm91cENyZWF0ZWQgJiYgIWNhcmRcIiBjbGFzcz1cIm5ncy1keW5hbWljLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJhY2NlcHRlZCgpXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAge3soc2NoZW1hJCB8IGFzeW5jKT8ubmFtZX19XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgKHNjaGVtYSQgfCBhc3luYyk/LmZvcm0uZmllbGRzO1wiIFtmeEZsZXhdPVwiZmllbGQud2lkdGggKiAxMFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBkeW5hbWljRmllbGQgW2NvbmZpZ109XCJmaWVsZFwiIFtncm91cF09XCJmb3JtR3JvdXBcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC5zaG93XCIgKGNsaWNrKT1cImNhbmNlbC5lbWl0KClcIiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7KHNjaGVtYSRcclxuICAgICAgICAgIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnRleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQuc2hvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7KHNjaGVtYSRcclxuICAgICAgICAgIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnRleHR9fTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuXHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdEBPdXRwdXQoKSBhY2NlcHQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHRAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcblx0QElucHV0KCkgbG9jYWw7XHJcblx0QElucHV0KCkgY2FyZCA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGlkKGlkOiBzdHJpbmcpIHtcclxuXHRcdGlmICghdGhpcy5sb2NhbCkgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Rm9ybVNjaGVtYUFjdGlvbihpZCkpO1xyXG5cdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdC5zZWxlY3RGb3JtQnlJZChpZClcclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjaGVtYSA9PiB0aGlzLnNjaGVtYSQubmV4dChzY2hlbWEpKTtcclxuXHR9XHJcblx0QElucHV0KClcclxuXHRzZXQgc2NoZW1hKHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnNjaGVtYSQubmV4dChzY2hlbWEpO1xyXG5cdH1cclxuXHRfaWQ6IHN0cmluZztcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRmb3JtR3JvdXBDcmVhdGVkID0gZmFsc2U7XHJcblx0c2NoZW1hJDogQmVoYXZpb3JTdWJqZWN0PEZvcm1TY2hlbWFNb2RlbD47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPlxyXG5cdCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zY2hlbWEkLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKS5zdWJzY3JpYmUoc2NoZW1hID0+IHtcclxuXHRcdFx0aWYgKCFzY2hlbWEpIHJldHVybjtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmNyZWF0ZUZyb20oc2NoZW1hLmZvcm0pIGFzIEZvcm1Hcm91cDtcclxuXHRcdFx0aWYgKCFzY2hlbWEuZm9ybS5uYW1lKSByZXR1cm47XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwQ3JlYXRlZCA9IHRydWU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0Z2VuZXJhdGUoc2NoZW1hOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVGcm9tKGRhdGE6IEZpZWxkQ29uZmlnLCBwYXJlbnRQYXRoID0gXCJcIik6IEFic3RyYWN0Q29udHJvbCB7XHJcblx0XHRpZiAoZGF0YS50eXBlID09IFwiY29udHJvbFwiKSB7XHJcblx0XHRcdGxldCBmb3JtR3JvdXBQYXRoO1xyXG5cdFx0XHRpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRcdC8vIHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9sc1skeyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfV1gO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHRmb3JtR3JvdXBQYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSBbXTtcclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLnJlcXVpcmVkICYmIGRhdGEudmFsaWRhdG9yLnJlcXVpcmVkLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoICYmIGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgoZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoLnZhbHVlKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLmVtYWlsICYmIGRhdGEudmFsaWRhdG9yLmVtYWlsLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLmVtYWlsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBjdHIgPSBuZXcgRm9ybUNvbnRyb2woZGF0YS52YWx1ZSwgdmFsaWRhdG9ycyk7XHJcblx0XHRcdChjdHIgYXMgYW55KS5zY2hlbWEgPSBkYXRhO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hLnBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hLmZvcm1Hcm91cFBhdGggPSBmb3JtR3JvdXBQYXRoO1xyXG5cdFx0XHRyZXR1cm4gY3RyO1xyXG5cdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdGNvbnN0IGZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xyXG5cdFx0XHRpZiAoZGF0YS5wYXJlbnRUeXBlID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSAoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZTtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJhcnJheVwiKSB7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzWyR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9XWA7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiZ3JvdXBcIikge1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9scy4keyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfWA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdChmb3JtR3JvdXAgYXMgYW55KS5zY2hlbWEgPSBkYXRhO1xyXG5cdFx0XHQoZm9ybUdyb3VwIGFzIGFueSkuc2NoZW1hLnBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHRkYXRhLmZpZWxkcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdGl0ZW0ucGFyZW50VHlwZSA9IFwiZ3JvdXBcIjtcclxuXHRcdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChpdGVtLm5hbWUsIHRoaXMuY3JlYXRlRnJvbShpdGVtLCBwYXJlbnRQYXRoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gZm9ybUdyb3VwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgZm9ybUFycmF5OiBGb3JtQXJyYXkgPSBuZXcgRm9ybUFycmF5KFtdKTtcclxuXHRcdFx0cGFyZW50UGF0aCA9XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9PSBcIlwiID8gKGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWUgOiBgJHtwYXJlbnRQYXRofS5jb250cm9scy4keyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfWA7XHJcblx0XHRcdChmb3JtQXJyYXkgYXMgYW55KS5zY2hlbWEgPSBkYXRhO1xyXG5cdFx0XHQoZm9ybUFycmF5IGFzIGFueSkuc2NoZW1hLnBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHRkYXRhLmZpZWxkcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuXHRcdFx0XHRpdGVtLnBhcmVudFR5cGUgPSBcImFycmF5XCI7XHJcblx0XHRcdFx0aXRlbS5uYW1lID0gaWR4LnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0Zm9ybUFycmF5LmNvbnRyb2xzLnB1c2godGhpcy5jcmVhdGVGcm9tKGl0ZW0sIHBhcmVudFBhdGgpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBmb3JtQXJyYXk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhY2NlcHRlZCgpIHtcclxuXHRcdHRoaXMuYWNjZXB0LmVtaXQodGhpcy5mb3JtR3JvdXApO1xyXG5cdH1cclxuXHRjYW5jZWxlZCgpIHtcclxuXHRcdHRoaXMuY2FuY2VsLmVtaXQodGhpcy5mb3JtR3JvdXApO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50czogeyBbdHlwZTogc3RyaW5nXTogVHlwZTxGaWVsZD4gfSA9IHtcclxuXHRjaGVja2JveDogQ2hlY2tib3hDb21wb25lbnQsXHJcblx0dGV4dDogVGV4dENvbXBvbmVudCxcclxuXHRwYXNzd29yZDogVGV4dENvbXBvbmVudCxcclxuXHRkYXRlOiBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRmaWxlOiBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHR0YWJsZTogVGFibGVDb21wb25lbnQsXHJcblx0Y29sb3I6IENvbG9yQ29tcG9uZW50LFxyXG5cdGVtYWlsOiBFbWFpbENvbXBvbmVudCxcclxuXHRjYXB0Y2hhOiBGb3JtQ2FwdGNoYUNvbXBvbmVudCxcclxuXHRzZWxlY3Q6IFNlbGVjdENvbXBvbmVudFxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW2R5bmFtaWNGaWVsZF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgRmllbGQsIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuXHRASW5wdXQoKSBjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cclxuXHRASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxGaWVsZD47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmlucHV0VHlwZSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHRcdGlmICghY29tcG9uZW50c1t0aGlzLmNvbmZpZy5pbnB1dFR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cykuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0aGlzLmNvbmZpZy5pbnB1dFR5cGV9KS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8RmllbGQ+KGNvbXBvbmVudHNbdGhpcy5jb25maWcuaW5wdXRUeXBlXSk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0fVxyXG59XHJcbiJdfQ==