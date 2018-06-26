import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { OperationGwtStepParams } from "../operation.gwt-given-step";
import { GwtGivenStepUi } from "@rule";

@Component({
	selector: "app-operation-gwt-step",
	templateUrl: "./operation-gwt-step.component.html",
	styleUrls: [ "./operation-gwt-step.component.css" ]
})
export class OperationGwtStepComponent implements GwtGivenStepUi<OperationGwtStepParams> {
	formGroup: FormGroup = new FormGroup({
		operation: new FormControl("")
	});
	set params(value) {
		this.formGroup.patchValue(value);
	}
	get params(): OperationGwtStepParams {
		return this.formGroup.value;
	}
	constructor() {}
}
