import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";

import { FormSchemaModel, EditFormApiModel } from "../../models";

import { MainContainerState, FormReducers } from "../../main-container";

@Component({
	selector: "form-list",
	templateUrl: "./form-list.component.html"
})
export class FormListComponent {
	@Input("data") data$: Observable<FormSchemaModel[]>;
}
