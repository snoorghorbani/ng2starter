import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	ComponentFactoryResolver,
	ViewChild,
	ViewContainerRef,
	ReflectiveInjector,
	OnDestroy,
	Output,
	EventEmitter,
	Inject,
	Injector
} from "@angular/core";
import { TaskModel, EventModel, GatewayModel, ActionTypes } from "app/bpmn/models";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "start-event",
	templateUrl: "./start-event.component.html"
})
export class StartEventComponent implements AfterViewInit {
	@Output() accept = new EventEmitter();
	change: BehaviorSubject<any> = new BehaviorSubject({});
	State: TaskModel | EventModel | GatewayModel;
	Actions: string[];
	ActionType = ActionTypes;
	constructor(private injector: Injector) {
		this.State = this.injector.get("State");
		this.Actions = this.State.Flows.map(f => f.Action);
	}
	ngAfterViewInit() {}
	accepted() {
		debugger;
		this.State.Flows.find(f => f.Action == ActionTypes.ACCEPT).traverse();
		this.change.next({ a: 1 });
	}
}
