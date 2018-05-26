import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { FormSchemaModel, AddFormApiModel, EditFormApiModel, FormListApiModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";

import { MainContainerState } from "../main-container/main-container.reducers";

@Injectable()
export class FormUtilityService {
	responseCache: AddFormApiModel.Response;

	constructor(
		private http: HttpClient,
		private store: Store<MainContainerState>,
		private configurationService: FormConfigurationService
	) {}

	// createFrom(data: FieldConfig, parentPath = ""): AbstractControl {
	// if (data.type == "control") {
	// 	if (data.parentType == "array") {
	// 		// parentPath = `${parentPath}.controls[${(data as FieldConfig).name}]`;
	// 	} else if (data.parentType == "group") {
	// 		var formGroupPath = parentPath;
	// 		parentPath = `${parentPath}.controls.${(data as FieldConfig).name}`;
	// 	}
	// 	var validators = [];
	// 	if (data.validator.required.active) {
	// 		validators.push(Validators.required);
	// 	}
	// 	if (data.validator.minlength.active) {
	// 		validators.push(Validators.minLength(data.validator.minlength.value));
	// 	}
	// 	if (data.validator.email.active) {
	// 		validators.push(Validators.email);
	// 	}
	// 	var ctr = new FormControl(data.value, validators);
	// 	(ctr as any).schema = data;
	// 	(ctr as any).schema.path = parentPath;
	// 	(ctr as any).schema.formGroupPath = formGroupPath;
	// 	return ctr;
	// } else if (data.type == "group") {
	// 	var formGroup = new FormGroup({});
	// 	if (data.parentType == undefined) {
	// 		parentPath = (data as FieldConfig).name;
	// 	} else if (data.parentType == "array") {
	// 		parentPath = `${parentPath}.controls[${(data as FieldConfig).name}]`;
	// 	} else if (data.parentType == "group") {
	// 		parentPath = `${parentPath}.controls.${(data as FieldConfig).name}`;
	// 	}

	// 	(formGroup as any).schema = data;
	// 	(formGroup as any).schema.path = parentPath;
	// 	data.fields.forEach(item => {
	// 		item.parentType = "group";
	// 		formGroup.addControl(item.name, this.createFrom(item, parentPath));
	// 	});
	// 	return formGroup;
	// } else {
	// 	var formArray: FormArray = new FormArray([]);
	// 	parentPath =
	// 		parentPath == ""
	// 			? (data as FieldConfig).name
	// 			: `${parentPath}.controls.${(data as FieldConfig).name}`;
	// 	(formArray as any).schema = data;
	// 	(formArray as any).schema.path = parentPath;
	// 	data.fields.forEach((item, idx) => {
	// 		item.parentType = "array";
	// 		item.name = idx.toString();
	// 		formArray.controls.push(this.createFrom(item, parentPath));
	// 	});
	// 	return formArray;
	// }
	// }
}
