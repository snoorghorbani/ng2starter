import {
	Component,
	OnInit,
	ViewChild,
	ViewContainerRef,
	ComponentFactoryResolver,
	Compiler,
	ReflectiveInjector,
	NgModule,
	Input
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
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormSchemaModel } from "app/form/models/form-schema.model";
import { FormControlsModule } from "app/form/form-controls";
import { FormService } from "app/form/services";

const contorlTemplate = (schema: FormControlSchema) => {
	switch (schema.inputType) {
		case "text":
			return `
				<ngs-form-control-text [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-text>
    `;
		case "number":
			return `
				<ngs-form-control-number [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-number>
    `;
		case "email":
			return `
				<ngs-form-control-email [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-email>
    `;
		case "color":
			return `
				<ngs-form-control-color [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-color>
    `;
		case "checkbox":
			return `
      			<ngs-form-control-checkbox [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-checkbox>
    `;
		case "select":
			return `
      			<ngs-form-control-select [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-select>
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
	selector: "ngs-form-view",
	templateUrl: "./form-view.component.html"
})
export class FormViewComponent {
	@Input()
	set id(id: string) {
		this.service.get(id).subscribe(schema => this.schema$.next(schema));
	}
	@Input() schema$: BehaviorSubject<FormSchemaModel>;
	formGroup: AbstractControl;
	formGroupCreated = false;
	template = "";
	formCompnent: ComponentRef<any>;
	@ViewChild("contentFormGen", { read: ViewContainerRef })
	private target: ViewContainerRef;

	constructor(private service: FormService, private compiler: Compiler, private resolver: ComponentFactoryResolver) {
		this.schema$ = new BehaviorSubject(undefined);

		this.schema$.subscribe(schema => {
			if (!schema) return;

			this.formGroup = this.createFrom(schema.form);
			this.template = this.createTemplate(this.formGroup);
			this.formGroupCreated = true;

			setTimeout(() => {
				if (this.formCompnent) this.formCompnent.destroy();

				let _module = this.createModuleWithFormComponent(
					schema,
					this.template,
					schema.form.name,
					this.formGroup
				);

				this.compiler.compileModuleAndAllComponentsAsync(_module).then(factory => {
					this.formCompnent = this.target.createComponent(
						factory.componentFactories.find(item => item.selector == "dynamic"),
						0
					);
					this.target.insert(this.formCompnent.hostView);
				});
			}, 10);
		});
	}
	generate(schema: FormSchemaModel) {
		this.schema$.next(schema);
	}
	createTemplate(control: AbstractControl) {
		if (control instanceof FormArray) {
			var res = ArrayOpenTemplate((control as any).schema);
			control.controls.map(item => {
				res += this.createTemplate(item);
			});
			res += ArrayCloseTemplate();
			return res;
		} else if (control instanceof FormGroup) {
			var res = GroupOpenTemplate((control as any).schema);
			Object.keys(control.controls).forEach(key => {
				res += this.createTemplate(control.controls[key]);
			});
			res += GroupCloseTemplate();
			return res;
		} else {
			return contorlTemplate((control as any).schema);
		}
	}
	createModuleWithFormComponent(
		schema: FormSchemaModel,
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
				FormControlsModule
			],
			declarations: [ CustomComponent ],
			exports: [ CustomComponent ]
		})
		class _module {}

		return _module;
	}

	createFrom(data: FormControlSchema, parentPath = ""): AbstractControl {
		if (data.type == "control") {
			if (data.parentType == "array") {
				// parentPath = `${parentPath}.controls[${(data as FormControlSchema).name}]`;
			} else if (data.parentType == "group") {
				var formGroupPath = parentPath;
				parentPath = `${parentPath}.controls.${(data as FormControlSchema).name}`;
			}
			var ctr = new FormControl(data.value);
			(ctr as any).schema = data;
			(ctr as any).schema.path = parentPath;
			(ctr as any).schema.formGroupPath = formGroupPath;
			return ctr;
		} else if (data.type == "group") {
			var formGroup = new FormGroup({});
			if (data.parentType == undefined) {
				parentPath = (data as FormControlSchema).name;
			} else if (data.parentType == "array") {
				parentPath = `${parentPath}.controls[${(data as FormControlSchema).name}]`;
			} else if (data.parentType == "group") {
				parentPath = `${parentPath}.controls.${(data as FormControlSchema).name}`;
			}

			(formGroup as any).schema = data;
			(formGroup as any).schema.path = parentPath;
			data.fields.forEach(item => {
				item.parentType = "group";
				formGroup.addControl(item.name, this.createFrom(item, parentPath));
			});
			return formGroup;
		} else {
			var formArray: FormArray = new FormArray([]);
			parentPath =
				parentPath == ""
					? (data as FormControlSchema).name
					: `${parentPath}.controls.${(data as FormControlSchema).name}`;
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
