import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UpsertApiModel, FlowModel, StateType, BpmnShapesType } from "../../models";
import { Observable } from "rxjs/Observable";
import { MatDrawer } from "@angular/material";

@Component({
	selector: "ngs-bpmn-upsert",
	templateUrl: "./upsert.component.html",
	styleUrls: [ "./upsert.component.css" ]
})
export class UpsertComponent implements OnInit {
	@Input("flow") flow$: Observable<FlowModel>;
	@Output() submited = new EventEmitter();
	@ViewChild("drawer") sidenave: MatDrawer;
	formGroup: FormGroup;
	stateTypes: string[];
	activeEl: {
		type: BpmnShapesType;
		id: string;
	};
	shapesType: any;
	constructor() {
		this.shapesType = BpmnShapesType;
		this.stateTypes = Object.keys(StateType);
	}
	ngOnInit() {
		this.formGroup = new FormGroup({
			_id: new FormControl("", [ Validators.required ]),
			Name: new FormControl("", [ Validators.required ])
		});

		this.flow$.subscribe(flow => this.formGroup.patchValue(flow));
	}
	elementHover($event) {}
	elementOut($event) {}
	elementClick($event) {
		if ($event.businessObject.$type.includes("Task")) {
			this.activeEl = {
				type: BpmnShapesType.TASK,
				id: $event.id
			};
		} else if ($event.businessObject.$type.includes("Gateway")) {
			this.activeEl = {
				type: BpmnShapesType.GATEWAY,
				id: $event.id
			};
		} else if ($event.businessObject.$type.includes("Event")) {
			this.activeEl = {
				type: BpmnShapesType.EVENT,
				id: $event.id
			};
		}
		this.sidenave.open();
	}
	elementDblclick($event) {}
	elementMousedown($event) {}
	elementMouseup($event) {}
	upsert(flow: FlowModel) {
		this.submited.emit(Object.assign({}, flow, this.formGroup.value));
	}
	setProperty(value, field) {
		debugger;
		this.flow$
			.last(flow => {
				debugger;
				const task = flow.States.find(state => state.Id == this.activeEl.id);
				task.properties.Type = value;
				return true;
			})
			.subscribe(data => {
				debugger;
			});
	}
}
