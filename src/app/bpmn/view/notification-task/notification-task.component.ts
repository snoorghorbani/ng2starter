import { Component, Output, EventEmitter, Injector, OnInit, AfterViewInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BpmnElement } from "../../models";

@Component({
	selector: "notification-task",
	templateUrl: "./notification-task.component.html"
})
export class NotificationTaskComponent implements AfterViewInit {
	// @Output() accept = new EventEmitter();
	change: BehaviorSubject<any> = new BehaviorSubject({});
	State: BpmnElement;
	constructor(private injector: Injector) {
		this.State = this.injector.get("State");
	}
	ngAfterViewInit() {
		alert("done!");
		debugger;
		setTimeout(() => {
			this.State.Flows.find(f => true).traverse();
			this.change.next({});
		}, 0);
	}
}
