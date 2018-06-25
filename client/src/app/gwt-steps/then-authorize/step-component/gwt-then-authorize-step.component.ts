import { Component, OnInit } from "@angular/core";
import { GwtThenStepUi } from "@rule";

@Component({
	selector: "app-gwt-then-authorize-step",
	templateUrl: "./gwt-then-authorize-step.component.html",
	styleUrls: [ "./gwt-then-authorize-step.component.css" ]
})
export class GwtThenAuthorizeStepComponent implements GwtThenStepUi<any> {
	constructor() {}
}
