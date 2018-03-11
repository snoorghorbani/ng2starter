import { Component, Output, EventEmitter, Injector } from "@angular/core";

@Component({
	selector: "accept-flow",
	templateUrl: "./accept-flow.component.html"
})
export class AcceptFlowComponent {
	@Output() accept = new EventEmitter();
	constructor(private injector: Injector) {
		debugger;
	}
}
