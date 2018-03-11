import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UpsertApiModel, FlowModel, StateType, BpmnShapesType, TaskModel } from "../../models";
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
	flow: FlowModel;
	formGroup: FormGroup;
	stateTypes: string[];
	activeEl: {
		type: BpmnShapesType;
		id: string;
		el: Partial<TaskModel>;
	};
	shapesType: any;
	constructor() {
		this.shapesType = BpmnShapesType;
		this.stateTypes = Object.keys(StateType);
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
		if ($event.businessObject.$type.includes("Task")) {
			const task = this.flow.States.find(task => task.Id == $event.id);
			this.activeEl = {
				type: BpmnShapesType.TASK,
				id: $event.id,
				el: {
					Properties: task.Properties
				}
			};
		} else if ($event.businessObject.$type.includes("Gateway")) {
			const task = this.flow.States.find(task => task.Id == $event.id);
			this.activeEl = {
				type: BpmnShapesType.GATEWAY,
				id: $event.id,
				el: {
					Properties: task.Properties
				}
			};
		} else if ($event.businessObject.$type.includes("Event")) {
			const task = this.flow.States.find(task => task.Id == $event.id);
			this.activeEl = {
				type: BpmnShapesType.EVENT,
				id: $event.id,
				el: {
					Properties: task.Properties
				}
			};
		}
		this.sidenave.open();
	}
	elementDblclick($event) {}
	elementMousedown($event) {}
	elementMouseup($event) {}
	upsert() {
		this.submited.emit(this.flow);
	}
	setActiveElProperties() {
		debugger;
		this.flow$
			.last(flow => {
				debugger;
				const task = flow.States.find(state => state.Id == this.activeEl.id);
				// task.Properties.Type = this.activeEl.el.Properties.Type;
				return true;
			})
			.subscribe(data => {
				debugger;
			});
	}
}
