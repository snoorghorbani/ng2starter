import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { MatDrawer } from "@angular/material";

import {
	UpsertApiModel,
	ProcessModel,
	TaskTypes,
	BpmnShapesType,
	TaskModel,
	EventModel,
	GatewayModel,
	ActionTypes,
	FlowModel,
	EventTypes
} from "../../models";

@Component({
	selector: "ngs-bpmn-upsert",
	templateUrl: "./upsert.component.html",
	styleUrls: [ "./upsert.component.css" ]
})
export class UpsertComponent implements OnInit {
	@Input("flow") flow$: Observable<ProcessModel>;
	@Output() submited = new EventEmitter();
	@ViewChild("drawer") sidenave: MatDrawer;
	flow: ProcessModel;
	formGroup: FormGroup;
	taskTypes: string[];
	eventTypes: string[];
	activeEl: TaskModel | EventModel | GatewayModel;
	activeFlowIdx: number;
	shapesType: any;
	actionTypes: any;
	constructor() {
		this.shapesType = BpmnShapesType;
		this.actionTypes = Object.keys(ActionTypes);
		this.taskTypes = Object.keys(TaskTypes);
		this.eventTypes = Object.keys(EventTypes);
	}
	ngOnInit() {
		this.flow$.subscribe(flow => (this.flow = flow));
		this.formGroup = new FormGroup({
			_id: new FormControl("", [ Validators.required ]),
			Name: new FormControl("", [ Validators.required ])
		});

		this.flow$.subscribe(flow => this.formGroup.patchValue(flow));
	}
	elementHover($event) {}
	elementOut($event) {}
	elementClick($event) {
		this.activeFlowIdx = undefined;
		this.activeEl = undefined;
		if ($event.businessObject.$type.includes("Flow")) {
			this.activeEl = [
				this.flow.Tasks.find(item => item.Id == $event.source.id),
				this.flow.Gateways.find(item => item.Id == $event.source.id),
				this.flow.Events.find(item => item.Id == $event.source.id)
			].find(item => item != undefined);
			this.activeFlowIdx = this.activeEl.Flows.findIndex(f => f.Id == $event.id);
		} else if ($event.businessObject.$type.includes("Task")) {
			this.activeEl = this.flow.Tasks.find(item => item.Id == $event.id);
		} else if ($event.businessObject.$type.includes("Gateway")) {
			this.activeEl = this.flow.Gateways.find(item => item.Id == $event.id);
		} else if ($event.businessObject.$type.includes("Event")) {
			this.activeEl = this.flow.Events.find(item => item.Id == $event.id);
		}
		(this.activeEl as any)._id = this.activeEl.Id;
		this.sidenave.open();
	}
	elementDblclick($event) {}
	elementMousedown($event) {}
	elementMouseup($event) {}

	upsert() {
		debugger;
		this.submited.emit(this.flow);
	}
	// setActiveElProperties() {
	// 	debugger;
	// 	this.flow$
	// 		.last(flow => {
	// 			debugger;
	// 			const task = flow.Tasks.find(state => state.Id == this.activeEl.Id);
	// 			// task.Properties.Type = this.activeEl.el.Properties.Type;
	// 			return true;
	// 		})
	// 		.subscribe(data => {
	// 			debugger;
	// 		});
	// }
}
