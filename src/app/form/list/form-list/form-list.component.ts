import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { UserModel } from "app/models/user";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl } from "@angular/forms";
import { FormModel, EditFormApiModel } from "app/models/form";

@Component({
	selector: "form-list",
	templateUrl: "./form-list.component.html"
})
export class FormListComponent {
	@Input("data") data$: Observable<FormModel>;
	constructor() {}
}
