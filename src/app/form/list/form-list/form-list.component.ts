import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl } from "@angular/forms";
import { FormSchemaModel, EditFormApiModel } from "../../models";

@Component({
	selector: "form-list",
	templateUrl: "./form-list.component.html"
})
export class FormListComponent {
	@Input("data") data$: Observable<FormSchemaModel>;
	constructor() {}
}
