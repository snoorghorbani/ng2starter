import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { UpsertApiModel, FlowModel } from "../../models";
import { Observable } from "rxjs/Observable";

@Component({
	selector: "ngs-bpmn-upsert",
	templateUrl: "./upsert.component.html"
})
export class UpsertComponent implements OnInit {
	@Input("flow") flow$: Observable<FlowModel>;
	@Output() submited = new EventEmitter();
	constructor() {}
	ngOnInit() {
		this.flow$.subscribe(flow => {
			debugger;
		});
	}
	elementHover($event) {}
	elementOut($event) {}
	elementClick($event) {}
	elementDblclick($event) {}
	elementMousedown($event) {}
	elementMouseup($event) {}
	upsert(flow: FlowModel) {
		this.submited.emit(flow);
	}
}
