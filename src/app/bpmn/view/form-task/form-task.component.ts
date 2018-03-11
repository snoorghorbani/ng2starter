import { Component, Output, EventEmitter, Injector, OnInit, AfterViewInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BpmnElement } from "../../models";

@Component({
	selector: "form-task",
	templateUrl: "./form-task.component.html"
})
export class FormTaskComponent {
	// @Output() accept = new EventEmitter();
	change: BehaviorSubject<any> = new BehaviorSubject({});
	State: BpmnElement;
	constructor(private injector: Injector) {
		debugger;
		this.State = this.injector.get("State");
	}
	done() {
		debugger;
		this.State.Flows.find(f => true).traverse();
		this.change.next({});
	}
}
