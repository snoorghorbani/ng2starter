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
	MatInputModule
} from "@angular/material";
import { CommonModule } from "@angular/common";

const contorlTemplate = ({ placeholder, title, type = "text" }) => {
	return `
      <mat-form-field fxFlexFill>
        <input type="${type}" matInput placeholder="${placeholder}" formControlName="${title}">
      </mat-form-field>
`;
};
const GroupOpenTemplate = ({ title, path, parentType }) => {
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
	debugger;
	//
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
	selector: "app-dynamicform",
	templateUrl: "./dynamicform.component.html",
	styleUrls: [ "./dynamicform.component.scss" ]
})
export class DynamicformComponent {
	schema$: Observable<FormSchema>;
	formGroup: AbstractControl;
	formGroupCreated = false;
	template = "";
	@ViewChild("contentFormGen", { read: ViewContainerRef })
	private target: ViewContainerRef;

	constructor(private compiler: Compiler, private resolver: ComponentFactoryResolver) {
		this.schema$ = Observable.of(data);

		this.schema$.subscribe((schema) => {
			if (!schema) return;
			this.formGroup = this.createFrom(schema.form);
			this.template = this.createTemplate(this.formGroup);
			this.formGroupCreated = true;
		});

		let _module = this.createModuleWithFormComponent(this.template, this.formGroup);

		this.compiler.compileModuleAndAllComponentsAsync(_module).then((factory) => {
			let dynComponent = this.target.createComponent(
				factory.componentFactories.find((item) => item.selector == "dynamic"),
				0
			);
			this.target.insert(dynComponent.hostView);
		});
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
	createModuleWithFormComponent(template: string, formGroup: AbstractControl): any {
		@Component({
			template: template,
			selector: "dynamic"
		})
		class CustomComponent {
			formGroup = formGroup;
		}

		@NgModule({
			imports: [
				CommonModule,
				MatSidenavModule,
				MatToolbarModule,
				MatFormFieldModule,
				MatInputModule,
				FormsModule,
				ReactiveFormsModule,
				MatIconModule,
				MatButtonModule,
				MatCardModule
			],
			declarations: [ CustomComponent ],
			exports: [ CustomComponent ]
		})
		class _module {}

		return _module;
	}

	createFrom(data: FormFieldSchema, parentPath = ""): AbstractControl {
		if (data.type == "control") {
			var ctr = new FormControl(data.value);
			(ctr as any).schema = data;
			return ctr;
		} else if (data.type == "group") {
			var formGroup = new FormGroup({});
			if (data.parentType == undefined) {
				parentPath = (data as FormFieldSchema).title;
			} else if (data.parentType == "array") {
				parentPath = `${parentPath}.controls[${(data as FormFieldSchema).title}]`;
			} else if (data.parentType == "group") {
				parentPath = `${parentPath}.controls.${(data as FormFieldSchema).title}`;
			}

			(formGroup as any).schema = data;
			(formGroup as any).schema.path = parentPath;
			data.fields.forEach((item) => {
				item.parentType = "group";
				formGroup.addControl(item.title, this.createFrom(item, parentPath));
			});
			return formGroup;
		} else {
			var formArray: FormArray = new FormArray([]);
			parentPath =
				parentPath == ""
					? (data as FormFieldSchema).title
					: `${parentPath}.controls.${(data as FormFieldSchema).title}`;
			(formArray as any).schema = data;
			(formArray as any).schema.path = parentPath;
			data.fields.forEach((item, idx) => {
				item.parentType = "array";
				item.title = idx.toString();
				formArray.controls.push(this.createFrom(item, parentPath));
			});
			return formArray;
		}
	}
}

interface Validators {
	readonly: boolean;
}

interface FormFieldSchema {
	type: "group" | "array" | "control";
	title: string;
	parentType?: "array" | "group";
	path?: string;
	placeholder: string;
	inputType: "select" | "input" | "radio";
	value?: any;
	fields?: FormFieldSchema[];
	validators: Validators;
}

interface FormSchema {
	_id: string;
	name: string;
	description: string;
	// type: "group" | "array";
	form: FormFieldSchema;
}

const data: FormSchema = {
	_id: "asdfasdfasdfasdff",
	name: "test",
	description: "test desciption",
	// type: "group",
	form: {
		type: "group",
		title: "formGroup",
		placeholder: "placeholer",
		inputType: "input",
		validators: {
			readonly: true
		},
		fields: [
			{
				type: "control",
				title: "c1",
				value: "value_c1",
				placeholder: "value_c1",
				inputType: "input",
				validators: {
					readonly: true
				},
				fields: []
			},
			{
				type: "control",
				title: "c2",
				value: "c2",
				placeholder: "c2",
				inputType: "input",
				validators: {
					readonly: true
				},
				fields: []
			},
			{
				type: "group",
				title: "g11",
				value: "g11",
				placeholder: "g11",
				inputType: "input",
				validators: {
					readonly: true
				},
				fields: [
					{
						type: "control",
						title: "a11",
						value: "a11",
						placeholder: "a11",
						inputType: "input",
						validators: {
							readonly: true
						},
						fields: []
					},
					{
						type: "array",
						title: "a12",
						value: "a12",
						placeholder: "a12",
						inputType: "input",
						validators: {
							readonly: true
						},
						fields: [
							{
								type: "group",
								title: "a11g1",
								value: "a11g1",
								placeholder: "a11g1",
								inputType: "input",
								validators: {
									readonly: true
								},
								fields: [
									{
										type: "control",
										title: "a11g1c1",
										value: "a11g1c1",
										placeholder: "a11g1c1",
										inputType: "input",
										validators: {
											readonly: true
										}
									},
									{
										type: "control",
										title: "a11g1c2",
										value: "a11g1c2",
										placeholder: "a11g1c2",
										inputType: "input",
										validators: {
											readonly: true
										}
									}
								]
							}
						]
					}
				]
			}
		]
	}
};
