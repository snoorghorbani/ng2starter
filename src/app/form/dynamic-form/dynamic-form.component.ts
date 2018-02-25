import {
	Component,
	OnInit,
	ViewChild,
	ViewContainerRef,
	ComponentFactoryResolver,
	Compiler,
	ReflectiveInjector,
	NgModule
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormControl, FormGroup, FormArray, AbstractControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
	MatSidenavModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatInputModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSelectModule,
	MatSliderModule
} from "@angular/material";
import { CommonModule } from "@angular/common";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ComponentRef } from "@angular/core/src/linker/component_factory";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";
import { FormSchema } from "app/form/models/form-schema.model";
import { FormFieldTypesModule } from "app/form/form-field-types/form-field-types.module";

const contorlTemplate = (schema: FormFieldSchema) => {
	switch (schema.inputType) {
		case "text":
			return `
        <mat-form-field fxFlexFill>
        <input type="${schema.inputType}" matInput placeholder="${schema.placeholder}" formControlName="${schema.name}">
        </mat-form-field>
    `;
		case "number":
			return `
        <mat-form-field fxFlexFill>
        <input type="${schema.inputType}" matInput placeholder="${schema.placeholder}" formControlName="${schema.name}">
        </mat-form-field>
    `;
		case "email":
			return `
        <mat-form-field fxFlexFill>
        <input type="${schema.inputType}" matInput placeholder="${schema.placeholder}" formControlName="${schema.name}">
        </mat-form-field>
    `;
		case "color":
			return `
        <mat-form-field fxFlexFill>
        <input type="${schema.inputType}" matInput placeholder="${schema.placeholder}" formControlName="${schema.name}">
        </mat-form-field>
    `;
		case "checkbox":
			debugger;
			return `
      <mat-checkbox formControlName="${schema.name}">${schema.placeholder}</mat-checkbox>
    `;
		case "select":
			debugger;
			return `
      <app-select-form-control-ui [schema]="${schema.path}.schema"></app-select-form-control-ui>
    `;
	}
};
const GroupOpenTemplate = ({ path }) => {
	return `
      <div [formGroup]="${path}" fxLayout="column">
  `;
};
const GroupCloseTemplate = () => {
	return `
  </div>
  `;
};
const ArrayOpenTemplate = ({ path }) => {
	return `
    <div *ngFor="let item of ${path}.controls">
  `;
};
const ArrayCloseTemplate = () => {
	return `
  </div>
  `;
};

@Component({
	selector: "app-dynamic-form",
	templateUrl: "./dynamic-form.component.html",
	styleUrls: [ "./dynamic-form.component.scss" ]
})
export class DynamicformComponent {
	schema$: BehaviorSubject<FormSchema>;
	formGroup: AbstractControl;
	formGroupCreated = false;
	template = "";
	formCompnent: ComponentRef<any>;
	@ViewChild("contentFormGen", { read: ViewContainerRef })
	private target: ViewContainerRef;

	constructor(private compiler: Compiler, private resolver: ComponentFactoryResolver) {
		this.schema$ = new BehaviorSubject(undefined);

		this.schema$.subscribe((schema) => {
			if (!schema) return;

			this.formGroup = this.createFrom(schema.form);
			this.template = this.createTemplate(this.formGroup);
			this.formGroupCreated = true;
			debugger;

			setTimeout(() => {
				if (this.formCompnent) this.formCompnent.destroy();

				let _module = this.createModuleWithFormComponent(
					schema,
					this.template,
					schema.form.name,
					this.formGroup
				);

				this.compiler.compileModuleAndAllComponentsAsync(_module).then((factory) => {
					this.formCompnent = this.target.createComponent(
						factory.componentFactories.find((item) => item.selector == "dynamic"),
						0
					);
					this.target.insert(this.formCompnent.hostView);
				});
			}, 10);
		});
	}
	generate(schema: FormSchema) {
		this.schema$.next(schema);
	}
	createTemplate(control: AbstractControl) {
		if (control instanceof FormArray) {
			var res = ArrayOpenTemplate((control as any).schema);
			control.controls.map((item) => {
				res += this.createTemplate(item);
			});
			res += ArrayCloseTemplate();
			return res;
		} else if (control instanceof FormGroup) {
			var res = GroupOpenTemplate((control as any).schema);
			Object.keys(control.controls).forEach((key) => {
				res += this.createTemplate(control.controls[key]);
			});
			res += GroupCloseTemplate();
			return res;
		} else {
			return contorlTemplate((control as any).schema);
		}
	}
	createModuleWithFormComponent(
		schema: FormSchema,
		template: string,
		formGroupName: string,
		formGroup: AbstractControl
	): any {
		@Component({
			template: template,
			selector: "dynamic"
		})
		class CustomComponent {
			// formGroup = formGroup;
			constructor() {
				this[formGroupName] = formGroup;
				this["schema"] = schema;
			}
		}

		@NgModule({
			imports: [
				CommonModule,
				MatSidenavModule,
				MatToolbarModule,
				MatFormFieldModule,
				MatInputModule,
				MatCheckboxModule,
				MatRadioModule,
				MatSelectModule,
				MatSliderModule,
				FormsModule,
				ReactiveFormsModule,
				MatIconModule,
				MatButtonModule,
				MatCardModule,
				FormFieldTypesModule
			],
			declarations: [ CustomComponent ],
			exports: [ CustomComponent ]
		})
		class _module {}

		return _module;
	}

	createFrom(data: FormFieldSchema, parentPath = ""): AbstractControl {
		if (data.type == "control") {
			if (data.parentType == "array") {
				debugger;
				// parentPath = `${parentPath}.controls[${(data as FormFieldSchema).name}]`;
			} else if (data.parentType == "group") {
				debugger;
				parentPath = `${parentPath}.controls.${(data as FormFieldSchema).name}`;
			}
			var ctr = new FormControl(data.value);
			(ctr as any).schema = data;
			(ctr as any).schema.path = parentPath;
			return ctr;
		} else if (data.type == "group") {
			var formGroup = new FormGroup({});
			if (data.parentType == undefined) {
				parentPath = (data as FormFieldSchema).name;
			} else if (data.parentType == "array") {
				parentPath = `${parentPath}.controls[${(data as FormFieldSchema).name}]`;
			} else if (data.parentType == "group") {
				parentPath = `${parentPath}.controls.${(data as FormFieldSchema).name}`;
			}

			(formGroup as any).schema = data;
			(formGroup as any).schema.path = parentPath;
			data.fields.forEach((item) => {
				item.parentType = "group";
				formGroup.addControl(item.name, this.createFrom(item, parentPath));
			});
			return formGroup;
		} else {
			var formArray: FormArray = new FormArray([]);
			parentPath =
				parentPath == ""
					? (data as FormFieldSchema).name
					: `${parentPath}.controls.${(data as FormFieldSchema).name}`;
			(formArray as any).schema = data;
			(formArray as any).schema.path = parentPath;
			data.fields.forEach((item, idx) => {
				item.parentType = "array";
				item.name = idx.toString();
				formArray.controls.push(this.createFrom(item, parentPath));
			});
			return formArray;
		}
	}
}
