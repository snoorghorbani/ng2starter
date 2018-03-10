import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";

import { FlowModel } from "../../models";

import { MainContainerState, BpmnReducers } from "../../main-container";

@Component({
	selector: "bpmn-list",
	templateUrl: "./list.component.html"
})
export class BpmnListComponent {
	@Input("data") data$: Observable<FlowModel[]>;
	addNewFlow() {
		debugger;
	}
}
