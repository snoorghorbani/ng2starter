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
        this.schema$.pipe(takeUntil(this.unsubscribe)).subscribe(schema => {
            if (!schema)
                return;
            this.formGroup = /** @type {?} */ (this.createFrom(schema.form));
            if (!schema.form.name)
                return;
            this.formGroupCreated = true;
        });
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
            .subscribe(schema => this.schema$.next(schema));
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
            (/** @type {?} */ (ctr)).schema = data;
            (/** @type {?} */ (ctr)).schema.path = parentPath;
            (/** @type {?} */ (ctr)).schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            /** @type {?} */
            const formGroup = new FormGroup({});
            if (data.parentType == undefined) {
                parentPath = (/** @type {?} */ (data)).name;
            }
            else if (data.parentType == "array") {
                parentPath = `${parentPath}.controls[${((/** @type {?} */ (data))).name}]`;
            }
            else if (data.parentType == "group") {
                parentPath = `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            }
            (/** @type {?} */ (formGroup)).schema = data;
            (/** @type {?} */ (formGroup)).schema.path = parentPath;
            data.fields.forEach(item => {
                item.parentType = "group";
                formGroup.addControl(item.name, this.createFrom(item, parentPath));
            });
            return formGroup;
        }
        else {
            /** @type {?} */
            const formArray = new FormArray([]);
            parentPath =
                parentPath == "" ? (/** @type {?} */ (data)).name : `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            (/** @type {?} */ (formArray)).schema = data;
            (/** @type {?} */ (formArray)).schema.path = parentPath;
            data.fields.forEach((item, idx) => {
                item.parentType = "array";
                item.name = idx.toString();
                formArray.controls.push(this.createFrom(item, parentPath));
            });
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
                template: `<div fxFlex="nogrow" fxLayoutAlign="center center" class="main-container">
  <form *ngIf="formGroupCreated && card" class="ngs-dynamic-form" [formGroup]="formGroup" (ngSubmit)="accepted()">
    <mat-card>
      <mat-card-title>
        {{(schema$ | async)?.name}}
      </mat-card-title>
      <mat-card-content fxLayout="row wrap" fxLayoutGap="25px">
        <div *ngFor="let field of (schema$ | async)?.form.fields;" [fxFlex]="field.width * 10">
          <ng-container *ngIf="field && field.inputType" dynamicField [config]="field" [group]="formGroup"></ng-container>
        </div>
      </mat-card-content>
      <mat-card-actions align="end">
        <button type="button" *ngIf="(schema$ | async)?.events.cancel.show" (click)="cancel.emit()" mat-button color="primary">{{(schema$
          | async)?.events.cancel.text}}</button>
        <button type="submit" *ngIf="(schema$ | async)?.events.accept.show" mat-raised-button color="primary">{{(schema$
          | async)?.events.accept.text}}</button>
      </mat-card-actions>
    </mat-card>
  </form>
  <form *ngIf="formGroupCreated && !card" class="ngs-dynamic-form" [formGroup]="formGroup" (ngSubmit)="accepted()">
    <div>
      <h3>
        {{(schema$ | async)?.name}}
      </h3>
      <div fxLayout="row wrap" fxLayoutGap="5px">
        <div *ngFor="let field of (schema$ | async)?.form.fields;" [fxFlex]="field.width * 10">
          <ng-container dynamicField [config]="field" [group]="formGroup"></ng-container>
        </div>
      </div>
      <div>
        <button type="button" *ngIf="(schema$ | async)?.events.cancel.show" (click)="cancel.emit()" mat-button color="primary">{{(schema$
          | async)?.events.cancel.text}}</button>
        <button type="submit" *ngIf="(schema$ | async)?.events.accept.show" mat-raised-button color="primary">{{(schema$
          | async)?.events.accept.text}}</button>
      </div>
    </div>
  </form>

</div>`,
                styles: [``]
            },] },
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
            },] },
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
    /** @type {?} */
    DynamicFieldDirective.prototype.resolver;
    /** @type {?} */
    DynamicFieldDirective.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tdmlldy9mb3JtLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUdULGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsUUFBUSxFQUdSLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLFNBQVMsRUFHVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFDTixlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGNBQWMsRUFDZCxNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQVMsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQTZDckUs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LFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0M7S0FDRDs7OztJQUVELFFBQVE7UUFDUCxRQUFRLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFNBQVM7WUFBRSxPQUFPO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTs7WUFDdkMsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUQsTUFBTSxJQUFJLEtBQUssQ0FDZCxzQ0FBc0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO3VCQUN4QyxjQUFjLEVBQUUsQ0FDbkMsQ0FBQztTQUNGOztRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQVEsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzNDOzs7WUFsQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7YUFDMUI7Ozs7WUEzTUEsd0JBQXdCO1lBRHhCLGdCQUFnQjs7O3FCQThNZixLQUFLO29CQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdENvbXBpbGVyLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHROZ01vZHVsZSxcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdE9uQ2hhbmdlcyxcclxuXHREaXJlY3RpdmUsXHJcblx0VHlwZSxcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNlbGVjdENvbXBvbmVudCxcclxuXHRFbWFpbENvbXBvbmVudCxcclxuXHRDb2xvckNvbXBvbmVudCxcclxuXHRDaGVja2JveENvbXBvbmVudCxcclxuXHRUZXh0Q29tcG9uZW50LFxyXG5cdFRhYmxlQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXRGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZywgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1DYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG4gIDxmb3JtICpuZ0lmPVwiZm9ybUdyb3VwQ3JlYXRlZCAmJiBjYXJkXCIgY2xhc3M9XCJuZ3MtZHluYW1pYy1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiYWNjZXB0ZWQoKVwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAge3soc2NoZW1hJCB8IGFzeW5jKT8ubmFtZX19XHJcbiAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiAoc2NoZW1hJCB8IGFzeW5jKT8uZm9ybS5maWVsZHM7XCIgW2Z4RmxleF09XCJmaWVsZC53aWR0aCAqIDEwXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQgJiYgZmllbGQuaW5wdXRUeXBlXCIgZHluYW1pY0ZpZWxkIFtjb25maWddPVwiZmllbGRcIiBbZ3JvdXBdPVwiZm9ybUdyb3VwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnNob3dcIiAoY2xpY2spPVwiY2FuY2VsLmVtaXQoKVwiIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJFxyXG4gICAgICAgICAgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwudGV4dH19PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC5zaG93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJFxyXG4gICAgICAgICAgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQudGV4dH19PC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9mb3JtPlxyXG4gIDxmb3JtICpuZ0lmPVwiZm9ybUdyb3VwQ3JlYXRlZCAmJiAhY2FyZFwiIGNsYXNzPVwibmdzLWR5bmFtaWMtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImFjY2VwdGVkKClcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICB7eyhzY2hlbWEkIHwgYXN5bmMpPy5uYW1lfX1cclxuICAgICAgPC9oMz5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiAoc2NoZW1hJCB8IGFzeW5jKT8uZm9ybS5maWVsZHM7XCIgW2Z4RmxleF09XCJmaWVsZC53aWR0aCAqIDEwXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIGR5bmFtaWNGaWVsZCBbY29uZmlnXT1cImZpZWxkXCIgW2dyb3VwXT1cImZvcm1Hcm91cFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnNob3dcIiAoY2xpY2spPVwiY2FuY2VsLmVtaXQoKVwiIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJFxyXG4gICAgICAgICAgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwudGV4dH19PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC5zaG93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJFxyXG4gICAgICAgICAgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQudGV4dH19PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0QE91dHB1dCgpIGFjY2VwdCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cdEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHRASW5wdXQoKSBsb2NhbDtcclxuXHRASW5wdXQoKSBjYXJkID0gZmFsc2U7XHJcblx0QElucHV0KClcclxuXHRzZXQgaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0aWYgKCF0aGlzLmxvY2FsKSB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRGb3JtU2NoZW1hQWN0aW9uKGlkKSk7XHJcblx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0LnNlbGVjdEZvcm1CeUlkKGlkKVxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NoZW1hID0+IHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSkpO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdHNldCBzY2hlbWEoc2NoZW1hOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSk7XHJcblx0fVxyXG5cdF9pZDogc3RyaW5nO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZvcm1Hcm91cENyZWF0ZWQgPSBmYWxzZTtcclxuXHRzY2hlbWEkOiBCZWhhdmlvclN1YmplY3Q8Rm9ybVNjaGVtYU1vZGVsPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLnNjaGVtYSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnNjaGVtYSQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpLnN1YnNjcmliZShzY2hlbWEgPT4ge1xyXG5cdFx0XHRpZiAoIXNjaGVtYSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuY3JlYXRlRnJvbShzY2hlbWEuZm9ybSkgYXMgRm9ybUdyb3VwO1xyXG5cdFx0XHRpZiAoIXNjaGVtYS5mb3JtLm5hbWUpIHJldHVybjtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXBDcmVhdGVkID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRnZW5lcmF0ZShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUZyb20oZGF0YTogRmllbGRDb25maWcsIHBhcmVudFBhdGggPSBcIlwiKTogQWJzdHJhY3RDb250cm9sIHtcclxuXHRcdGlmIChkYXRhLnR5cGUgPT0gXCJjb250cm9sXCIpIHtcclxuXHRcdFx0bGV0IGZvcm1Hcm91cFBhdGg7XHJcblx0XHRcdGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJhcnJheVwiKSB7XHJcblx0XHRcdFx0Ly8gcGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzWyR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9XWA7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiZ3JvdXBcIikge1xyXG5cdFx0XHRcdGZvcm1Hcm91cFBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9scy4keyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfWA7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgdmFsaWRhdG9ycyA9IFtdO1xyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IucmVxdWlyZWQgJiYgZGF0YS52YWxpZGF0b3IucmVxdWlyZWQuYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5taW5sZW5ndGggJiYgZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChkYXRhLnZhbGlkYXRvci5taW5sZW5ndGgudmFsdWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IuZW1haWwgJiYgZGF0YS52YWxpZGF0b3IuZW1haWwuYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMuZW1haWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGN0ciA9IG5ldyBGb3JtQ29udHJvbChkYXRhLnZhbHVlLCB2YWxpZGF0b3JzKTtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChjdHIgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdChjdHIgYXMgYW55KS5zY2hlbWEuZm9ybUdyb3VwUGF0aCA9IGZvcm1Hcm91cFBhdGg7XHJcblx0XHRcdHJldHVybiBjdHI7XHJcblx0XHR9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0Y29uc3QgZm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcblx0XHRcdGlmIChkYXRhLnBhcmVudFR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IChkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChmb3JtR3JvdXAgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdGRhdGEuZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5wYXJlbnRUeXBlID0gXCJncm91cFwiO1xyXG5cdFx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGl0ZW0ubmFtZSwgdGhpcy5jcmVhdGVGcm9tKGl0ZW0sIHBhcmVudFBhdGgpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBmb3JtR3JvdXA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBmb3JtQXJyYXk6IEZvcm1BcnJheSA9IG5ldyBGb3JtQXJyYXkoW10pO1xyXG5cdFx0XHRwYXJlbnRQYXRoID1cclxuXHRcdFx0XHRwYXJlbnRQYXRoID09IFwiXCIgPyAoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZSA6IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0KGZvcm1BcnJheSBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChmb3JtQXJyYXkgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdGRhdGEuZmllbGRzLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0ucGFyZW50VHlwZSA9IFwiYXJyYXlcIjtcclxuXHRcdFx0XHRpdGVtLm5hbWUgPSBpZHgudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRmb3JtQXJyYXkuY29udHJvbHMucHVzaCh0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1BcnJheTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFjY2VwdGVkKCkge1xyXG5cdFx0dGhpcy5hY2NlcHQuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG5cdGNhbmNlbGVkKCkge1xyXG5cdFx0dGhpcy5jYW5jZWwuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzOiB7IFt0eXBlOiBzdHJpbmddOiBUeXBlPEZpZWxkPiB9ID0ge1xyXG5cdGNoZWNrYm94OiBDaGVja2JveENvbXBvbmVudCxcclxuXHR0ZXh0OiBUZXh0Q29tcG9uZW50LFxyXG5cdHBhc3N3b3JkOiBUZXh0Q29tcG9uZW50LFxyXG5cdGRhdGU6IERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdGZpbGU6IEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdHRhYmxlOiBUYWJsZUNvbXBvbmVudCxcclxuXHRjb2xvcjogQ29sb3JDb21wb25lbnQsXHJcblx0ZW1haWw6IEVtYWlsQ29tcG9uZW50LFxyXG5cdGNhcHRjaGE6IEZvcm1DYXB0Y2hhQ29tcG9uZW50LFxyXG5cdHNlbGVjdDogU2VsZWN0Q29tcG9uZW50XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbZHluYW1pY0ZpZWxkXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBGaWVsZCwgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGNvbmZpZzogRmllbGRDb25maWc7XHJcblxyXG5cdEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPEZpZWxkPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAodGhpcy5jb25maWcuaW5wdXRUeXBlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cdFx0aWYgKCFjb21wb25lbnRzW3RoaXMuY29uZmlnLmlucHV0VHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3RoaXMuY29uZmlnLmlucHV0VHlwZX0pLlxyXG5cdFx0ICBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxGaWVsZD4oY29tcG9uZW50c1t0aGlzLmNvbmZpZy5pbnB1dFR5cGVdKTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuXHR9XHJcbn1cclxuIl19