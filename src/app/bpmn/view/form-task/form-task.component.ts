import { Component, Output, EventEmitter, Injector, OnInit, AfterViewInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BpmnElement } from "../../models";
import { FormGroup } from "@angular/forms";

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
	done(formGroup: FormGroup) {
		debugger;
		this.State.Flows.find(f => true).traverse();
		this.change.next({});
	}
}
