/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class FormViewComponent {
    /**
     * @param {?} service
     * @param {?} compiler
     * @param {?} resolver
     * @param {?} store
     */
    constructor(service, compiler, resolver, store) {
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
        this.schema$.pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} schema
         * @return {?}
         */
        schema => {
            if (!schema)
                return;
            this.formGroup = (/** @type {?} */ (this.createFrom(schema.form)));
            if (!schema.form.name)
                return;
            this.formGroupCreated = true;
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set id(id) {
        if (!this.local)
            this.store.dispatch(new GetFormSchemaAction(id));
        this.service
            .selectFormById(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((/**
         * @param {?} schema
         * @return {?}
         */
        schema => this.schema$.next(schema)));
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    set schema(schema) {
        this.schema$.next(schema);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    generate(schema) {
        this.schema$.next(schema);
    }
    /**
     * @param {?} data
     * @param {?=} parentPath
     * @return {?}
     */
    createFrom(data, parentPath = "") {
        if (data.type == "control") {
            /** @type {?} */
            let formGroupPath;
            if (data.parentType == "array") {
                // parentPath = `${parentPath}.controls[${(data as FieldConfig).name}]`;
            }
            else if (data.parentType == "group") {
                formGroupPath = parentPath;
                parentPath = `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            }
            /** @type {?} */
            const validators = [];
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
            const ctr = new FormControl(data.value, validators);
            ((/** @type {?} */ (ctr))).schema = data;
            ((/** @type {?} */ (ctr))).schema.path = parentPath;
            ((/** @type {?} */ (ctr))).schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            /** @type {?} */
            const formGroup = new FormGroup({});
            if (data.parentType == undefined) {
                parentPath = ((/** @type {?} */ (data))).name;
            }
            else if (data.parentType == "array") {
                parentPath = `${parentPath}.controls[${((/** @type {?} */ (data))).name}]`;
            }
            else if (data.parentType == "group") {
                parentPath = `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            }
            ((/** @type {?} */ (formGroup))).schema = data;
            ((/** @type {?} */ (formGroup))).schema.path = parentPath;
            data.fields.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                item.parentType = "group";
                formGroup.addControl(item.name, this.createFrom(item, parentPath));
            }));
            return formGroup;
        }
        else {
            /** @type {?} */
            const formArray = new FormArray([]);
            parentPath =
                parentPath == "" ? ((/** @type {?} */ (data))).name : `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            ((/** @type {?} */ (formArray))).schema = data;
            ((/** @type {?} */ (formArray))).schema.path = parentPath;
            data.fields.forEach((/**
             * @param {?} item
             * @param {?} idx
             * @return {?}
             */
            (item, idx) => {
                item.parentType = "array";
                item.name = idx.toString();
                formArray.controls.push(this.createFrom(item, parentPath));
            }));
            return formArray;
        }
    }
    /**
     * @return {?}
     */
    accepted() {
        this.accept.emit(this.formGroup);
    }
    /**
     * @return {?}
     */
    canceled() {
        this.cancel.emit(this.formGroup);
    }
}
FormViewComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-view",
                template: "<div fxFlex=\"nogrow\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n  <form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        {{(schema$ | async)?.name}}\r\n      </mat-card-title>\r\n      <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\r\n          <ng-container *ngIf=\"field && field.inputType\" dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\r\n        </div>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\r\n          | async)?.events.cancel.text}}</button>\r\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\r\n          | async)?.events.accept.text}}</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n  <form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\r\n    <div>\r\n      <h3>\r\n        {{(schema$ | async)?.name}}\r\n      </h3>\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"5px\">\r\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\r\n          <ng-container dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\r\n          | async)?.events.cancel.text}}</button>\r\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\r\n          | async)?.events.accept.text}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
FormViewComponent.ctorParameters = () => [
    { type: FormService },
    { type: Compiler },
    { type: ComponentFactoryResolver },
    { type: Store }
];
FormViewComponent.propDecorators = {
    accept: [{ type: Output }],
    cancel: [{ type: Output }],
    local: [{ type: Input }],
    card: [{ type: Input }],
    id: [{ type: Input }],
    schema: [{ type: Input }]
};
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
    /**
     * @type {?}
     * @private
     */
    FormViewComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    FormViewComponent.prototype.compiler;
    /**
     * @type {?}
     * @private
     */
    FormViewComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    FormViewComponent.prototype.store;
}
/** @type {?} */
const components = {
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
export class DynamicFieldDirective {
    /**
     * @param {?} resolver
     * @param {?} container
     */
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        debugger;
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        debugger;
        if (this.config.inputType == undefined)
            return;
        if (!components[this.config.inputType]) {
            /** @type {?} */
            const supportedTypes = Object.keys(components).join(", ");
            throw new Error(`Trying to use an unsupported type (${this.config.inputType}).
		  Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}
DynamicFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dynamicField]"
            },] }
];
/** @nocollapse */
DynamicFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicFieldDirective.propDecorators = {
    config: [{ type: Input }],
    group: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicFieldDirective.prototype.config;
    /** @type {?} */
    DynamicFieldDirective.prototype.group;
    /** @type {?} */
    DynamicFieldDirective.prototype.component;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tdmlldy9mb3JtLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUdULGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsUUFBUSxFQUdSLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLFNBQVMsRUFHVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFDTixlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGNBQWMsRUFDZCxNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQVMsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU9yRSxN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QUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7WUFsQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7YUFDMUI7Ozs7WUFyS0Esd0JBQXdCO1lBRHhCLGdCQUFnQjs7O3FCQXdLZixLQUFLO29CQUVMLEtBQUs7Ozs7SUFGTix1Q0FBNkI7O0lBRTdCLHNDQUEwQjs7SUFFMUIsMENBQStCOzs7OztJQUVuQix5Q0FBMEM7Ozs7O0lBQUUsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRDb21waWxlcixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0TmdNb2R1bGUsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRPbkNoYW5nZXMsXHJcblx0RGlyZWN0aXZlLFxyXG5cdFR5cGUsXHJcblx0T25EZXN0cm95XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5LCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdEVtYWlsQ29tcG9uZW50LFxyXG5cdENvbG9yQ29tcG9uZW50LFxyXG5cdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFRleHRDb21wb25lbnQsXHJcblx0VGFibGVDb21wb25lbnRcclxufSBmcm9tIFwiLi4vZm9ybS1jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldEZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQ29uZmlnLCBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFDb21wb25lbnQgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9scy9mb3JtLWNhcHRjaGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLXZpZXdcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2Zvcm0tdmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9mb3JtLXZpZXcuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRAT3V0cHV0KCkgYWNjZXB0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcblx0QE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cdEBJbnB1dCgpIGxvY2FsO1xyXG5cdEBJbnB1dCgpIGNhcmQgPSBmYWxzZTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBpZChpZDogc3RyaW5nKSB7XHJcblx0XHRpZiAoIXRoaXMubG9jYWwpIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEZvcm1TY2hlbWFBY3Rpb24oaWQpKTtcclxuXHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHQuc2VsZWN0Rm9ybUJ5SWQoaWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2hlbWEgPT4gdGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKSk7XHJcblx0fVxyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHNjaGVtYShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Zm9ybUdyb3VwQ3JlYXRlZCA9IGZhbHNlO1xyXG5cdHNjaGVtYSQ6IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbXBpbGVyOiBDb21waWxlcixcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc2NoZW1hJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc2NoZW1hJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSkuc3Vic2NyaWJlKHNjaGVtYSA9PiB7XHJcblx0XHRcdGlmICghc2NoZW1hKSByZXR1cm47XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5jcmVhdGVGcm9tKHNjaGVtYS5mb3JtKSBhcyBGb3JtR3JvdXA7XHJcblx0XHRcdGlmICghc2NoZW1hLmZvcm0ubmFtZSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cENyZWF0ZWQgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdGdlbmVyYXRlKHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnNjaGVtYSQubmV4dChzY2hlbWEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRnJvbShkYXRhOiBGaWVsZENvbmZpZywgcGFyZW50UGF0aCA9IFwiXCIpOiBBYnN0cmFjdENvbnRyb2wge1xyXG5cdFx0aWYgKGRhdGEudHlwZSA9PSBcImNvbnRyb2xcIikge1xyXG5cdFx0XHRsZXQgZm9ybUdyb3VwUGF0aDtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHQvLyBwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0Zm9ybUdyb3VwUGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB2YWxpZGF0b3JzID0gW107XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5yZXF1aXJlZCAmJiBkYXRhLnZhbGlkYXRvci5yZXF1aXJlZC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aCAmJiBkYXRhLnZhbGlkYXRvci5taW5sZW5ndGguYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aC52YWx1ZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5lbWFpbCAmJiBkYXRhLnZhbGlkYXRvci5lbWFpbC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgY3RyID0gbmV3IEZvcm1Db250cm9sKGRhdGEudmFsdWUsIHZhbGlkYXRvcnMpO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5mb3JtR3JvdXBQYXRoID0gZm9ybUdyb3VwUGF0aDtcclxuXHRcdFx0cmV0dXJuIGN0cjtcclxuXHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09IFwiZ3JvdXBcIikge1xyXG5cdFx0XHRjb25zdCBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gKGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9sc1skeyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfV1gO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQoZm9ybUdyb3VwIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLnBhcmVudFR5cGUgPSBcImdyb3VwXCI7XHJcblx0XHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woaXRlbS5uYW1lLCB0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1Hcm91cDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGZvcm1BcnJheTogRm9ybUFycmF5ID0gbmV3IEZvcm1BcnJheShbXSk7XHJcblx0XHRcdHBhcmVudFBhdGggPVxyXG5cdFx0XHRcdHBhcmVudFBhdGggPT0gXCJcIiA/IChkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lIDogYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHQoZm9ybUFycmF5IGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1BcnJheSBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcblx0XHRcdFx0aXRlbS5wYXJlbnRUeXBlID0gXCJhcnJheVwiO1xyXG5cdFx0XHRcdGl0ZW0ubmFtZSA9IGlkeC50b1N0cmluZygpO1xyXG5cdFx0XHRcdGZvcm1BcnJheS5jb250cm9scy5wdXNoKHRoaXMuY3JlYXRlRnJvbShpdGVtLCBwYXJlbnRQYXRoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gZm9ybUFycmF5O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWNjZXB0ZWQoKSB7XHJcblx0XHR0aGlzLmFjY2VwdC5lbWl0KHRoaXMuZm9ybUdyb3VwKTtcclxuXHR9XHJcblx0Y2FuY2VsZWQoKSB7XHJcblx0XHR0aGlzLmNhbmNlbC5lbWl0KHRoaXMuZm9ybUdyb3VwKTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHM6IHsgW3R5cGU6IHN0cmluZ106IFR5cGU8RmllbGQ+IH0gPSB7XHJcblx0Y2hlY2tib3g6IENoZWNrYm94Q29tcG9uZW50LFxyXG5cdHRleHQ6IFRleHRDb21wb25lbnQsXHJcblx0cGFzc3dvcmQ6IFRleHRDb21wb25lbnQsXHJcblx0ZGF0ZTogRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0ZmlsZTogRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0dGFibGU6IFRhYmxlQ29tcG9uZW50LFxyXG5cdGNvbG9yOiBDb2xvckNvbXBvbmVudCxcclxuXHRlbWFpbDogRW1haWxDb21wb25lbnQsXHJcblx0Y2FwdGNoYTogRm9ybUNhcHRjaGFDb21wb25lbnQsXHJcblx0c2VsZWN0OiBTZWxlY3RDb21wb25lbnRcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltkeW5hbWljRmllbGRdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEZpZWxkLCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcblx0QElucHV0KCkgY29uZmlnOiBGaWVsZENvbmZpZztcclxuXHJcblx0QElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8RmllbGQ+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICh0aGlzLmNvbmZpZy5pbnB1dFR5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblx0XHRpZiAoIWNvbXBvbmVudHNbdGhpcy5jb25maWcuaW5wdXRUeXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7dGhpcy5jb25maWcuaW5wdXRUeXBlfSkuXHJcblx0XHQgIFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PEZpZWxkPihjb21wb25lbnRzW3RoaXMuY29uZmlnLmlucHV0VHlwZV0pO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdH1cclxufVxyXG4iXX0=