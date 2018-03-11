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
	EventEmitter
} from "@angular/core";
import { StartEventComponent } from "../start-event";
import { MoodleTypes, GatewayModel, EventModel, TaskModel, BpmnElement, TaskTypes, EventTypes } from "../../models";
import { NotificationTaskComponent } from "../notification-task";
import { FormTaskComponent } from "../form-task";

@Component({
	selector: "dynamic-state",
	templateUrl: "./dynamic-state.component.html",
	styleUrls: [ "./dynamic-state.component.scss" ],
	entryComponents: [ StartEventComponent, NotificationTaskComponent, FormTaskComponent ]
})
export class DynamicStateComponent implements AfterViewInit {
	@Output() done = new EventEmitter();
	typeMapToDiagram = {
		[EventTypes.START]: StartEventComponent,
		[TaskTypes.NOTIFICATION]: NotificationTaskComponent,
		[TaskTypes.FORM]: FormTaskComponent
	};
	@ViewChild("DC", { read: ViewContainerRef })
	dynamicComponentContainer: ViewContainerRef;
	// @Output() ConfigChanged = new EventEmitter();
	currentComponent: any = null;
	@Input()
	set State(data: BpmnElement) {
		debugger;
		if (!data || Object.keys(data).length == 0) return;
		if (!(data.Properties.Type in this.typeMapToDiagram)) {
			if (this.currentComponent) this.currentComponent.destroy();
			return;
		}
		let _component = this.typeMapToDiagram[data.Properties.Type];
		let inputProviders = [ { provide: "State", useValue: data } ];
		let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

		let injector = ReflectiveInjector.fromResolvedProviders(
			resolvedInputs,
			this.dynamicComponentContainer.parentInjector
		);
		let factory = this.resolver.resolveComponentFactory(_component);
		let component = factory.create(injector);
		if ((<any>component.instance).change)
			(<any>component.instance).change.subscribe(() => {
				debugger;
				this.done.emit(data);
			});

		this.dynamicComponentContainer.insert(component.hostView);

		if (this.currentComponent) {
			this.currentComponent.destroy();
		}

		this.currentComponent = component;
	}
	constructor(private resolver: ComponentFactoryResolver) {}
	ngAfterViewInit() {}
}
