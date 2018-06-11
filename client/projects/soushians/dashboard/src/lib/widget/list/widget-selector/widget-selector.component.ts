import {
	Component,
	Input,
	OnInit,
	ViewChild,
	ComponentFactoryResolver,
	OnDestroy,
	ViewContainerRef,
	ReflectiveInjector
} from "@angular/core";
import { WidgetModel } from "app/dashboard/models";
import { Observable } from "rxjs/Observable";
import { ListComponent } from "app/dashboard/widget/component-list/list/view/list.component";

const components = {
	ListComponent: ListComponent
};

@Component({
	selector: "widget-selector",
	templateUrl: "./widget-selector.component.html"
})
export class WidgetSelectorComponent {
	@Input() typeId: number;
	@ViewChild("host", { read: ViewContainerRef })
	host: ViewContainerRef;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

	@Input()
	set data(data: any) {
		if (!(this.typeId in components)) {
			return;
		}
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(components[this.typeId]);

		let inputProvider = Object.keys(data).map(key => {
			return { provide: key, useValue: data[key] };
		});
		let resolvedInjector = ReflectiveInjector.resolve(inputProvider);

		let injector = ReflectiveInjector.fromResolvedProviders(resolvedInjector, this.host.parentInjector);
		let component = componentFactory.create(injector);

		this.host.insert(component.hostView);
	}
}
