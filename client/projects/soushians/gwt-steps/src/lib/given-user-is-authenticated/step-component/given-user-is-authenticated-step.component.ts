import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { GwtGivenStepUi } from "@soushians/rule";
import { UserIsAuthenticatedGwtGivenStepParams } from "../user-is-authenticated.gwt-given-step-params";

@Component({
	templateUrl: "./given-user-is-authenticated-step.component.html",
	styleUrls: [ "./given-user-is-authenticated-step.component.css" ]
})
export class GivenUserIsAuthenticatedStepComponent implements GwtGivenStepUi<UserIsAuthenticatedGwtGivenStepParams> {
	formGroup: FormGroup = new FormGroup({
		role: new FormControl("")
	});
	set params(value) {
		this.formGroup.patchValue(value);
	}
	get params(): UserIsAuthenticatedGwtGivenStepParams {
		return this.formGroup.value;
	}
	constructor() {}
}
