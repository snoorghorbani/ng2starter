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
import { MoodleTypes, GatewayModel, EventModel, TaskModel } from "../../models";

@Component({
	selector: "dynamic-state",
	templateUrl: "./dynamic-state.component.html",
	styleUrls: [ "./dynamic-state.component.scss" ],
	entryComponents: [ StartEventComponent ]
})
export class DynamicStateComponent implements AfterViewInit {
	@Output() done = new EventEmitter();
	typeMapToDiagram = {
		[MoodleTypes.BpmnStartEvent]: StartEventComponent
	};
	@ViewChild("DC", { read: ViewContainerRef })
	dynamicComponentContainer: ViewContainerRef;
	// @Output() ConfigChanged = new EventEmitter();
	currentComponent: any = null;
	@Input()
	set State(data: TaskModel | EventModel | GatewayModel) {
		debugger;
		if (!data || Object.keys(data).length == 0) return;
		if (!(data.MoodleType in this.typeMapToDiagram)) {
			if (this.currentComponent) this.currentComponent.destroy();
			return;
		}
		let _component = this.typeMapToDiagram[data.MoodleType];
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
