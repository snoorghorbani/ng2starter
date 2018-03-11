import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BpmnModel, StateType, TaskModel, EventModel, GatewayModel, BpmnElement } from "../../models";
import { Observable } from "rxjs/Observable";
import { MatDrawer } from "@angular/material";

@Component({
	selector: "flow-view",
	templateUrl: "./view.component.html",
	styleUrls: [ "./view.component.css" ]
})
export class FlowViewComponent implements OnInit {
	_flow: BpmnModel;
	@Input()
	set flow(flow: BpmnModel) {
		if (!flow) return;
		this._flow = flow;
		flow.currentState;
	}
	get flow() {
		return this._flow;
	}
	constructor() {}
	ngOnInit() {}
	traverse(State: BpmnElement) {
		debugger;
		this.flow.traverse(State.Flows.filter(f => f.traversed == true));
	}
}
