import { Component, OnInit } from "@angular/core";
import { GwtThenStepUi } from "@soushians/rule";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-gwt-then-authorize-step",
	templateUrl: "./gwt-then-authorize-step.component.html",
	styleUrls: [ "./gwt-then-authorize-step.component.css" ]
})
export class GwtThenAuthorizeStepComponent implements GwtThenStepUi<any> {
	set params(value) {}
	get params() {
		return {};
	}
	constructor() {}
}
