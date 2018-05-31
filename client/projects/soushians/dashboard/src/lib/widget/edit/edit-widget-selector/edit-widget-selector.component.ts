import {
	Component,
	Input,
	OnInit,
	ViewChild,
	ComponentFactoryResolver,
	OnDestroy,
	ViewContainerRef,
	ReflectiveInjector,
	ComponentFactory
} from "@angular/core";
import { WidgetModel } from "app/dashboard/models/widget.model";
import { Observable } from "rxjs/Observable";
import { EditListComponent } from "app/dashboard/widget/component-list/list/edit-list/edit-list.component";
import { EditDiagramComponent } from "app/dashboard/widget/component-list/diagram/edit-diagram/edit-diagram.component";

const components = {
	ListComponent: EditListComponent,
	DiagramComponent: EditDiagramComponent
};

@Component({
	selector: "edit-widget-selector",
	templateUrl: "./edit-widget-selector.component.html"
})
export class EditWidgetSelectorComponent implements OnInit {
	@ViewChild("host", { read: ViewContainerRef })
	host: ViewContainerRef;
	currentComponent: any = null;
	constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

	ngOnInit() {}

	@Input()
	set data(_data: any) {
		if (!_data) return;
		const data = Object.assign({}, _data);
		data.typeId = data.typeId;
		if (!(data.typeId in components)) {
			return;
		}
		if (this.currentComponent) this.currentComponent.destroy();
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(components[data.typeId]);
		let inputProvider = [ { provide: "widget", useValue: data } ];
		let resolvedInjector = ReflectiveInjector.resolve(inputProvider);

		let injector = ReflectiveInjector.fromResolvedProviders(resolvedInjector, this.host.parentInjector);
		const component = componentFactory.create(injector);

		this.host.insert(component.hostView);

		if (this.currentComponent) {
			this.currentComponent.destroy();
		}

		this.currentComponent = component;
	}
}
