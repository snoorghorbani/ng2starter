import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { GwtGivenStepUi } from "@rule";
import { IfUserHaveRoleGwtGivenStepParams } from "../user-have-role.gwt-given-step";

@Component({
	templateUrl: "./operation-gwt-step.component.html",
	styleUrls: [ "./operation-gwt-step.component.css" ]
})
export class IfUserHaveRoleGwtGivenStepComponent implements GwtGivenStepUi<IfUserHaveRoleGwtGivenStepParams> {
	formGroup: FormGroup;
	set params(value) {
		debugger;
		this.formGroup.patchValue(value);
	}
	get params(): IfUserHaveRoleGwtGivenStepParams {
		return this.formGroup.value;
	}
	constructor() {
		this.formGroup = new FormGroup({
			role: new FormControl("")
		});
	}
}
