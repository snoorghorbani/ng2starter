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
import { Observable } from "rxjs/Observable";

import { PartialConfig } from "../../models";
import { AuthenticationModuleConfigComponent } from "../../dumb-components/authentication-module-config/authentication-module-config.component";
import { ConfigAppConfigComponent } from "../../dumb-components/app-config/app-config.component";
import { UserModuleConfigComponent } from "../../dumb-components/user-module-config/user-module-config.component";
import { LayoutModuleConfigComponent } from "../../dumb-components/layout-config/layout-module-config.component";

@Component({
	selector: "dynamic-config-component-selector",
	templateUrl: "./dynamic-config-component-selector.component.html",
	styleUrls: [ "./dynamic-config-component-selector.component.scss" ],
	entryComponents: [
		AuthenticationModuleConfigComponent,
		ConfigAppConfigComponent,
		UserModuleConfigComponent,
		LayoutModuleConfigComponent
	]
})
export class DynamicConfigComponentSelectorComponent implements AfterViewInit {
	typeMapToDiagram: any = {
		authentication_module_config: AuthenticationModuleConfigComponent,
		app_config: ConfigAppConfigComponent,
		user_module_config: UserModuleConfigComponent,
		layout_config: LayoutModuleConfigComponent
	};
	@ViewChild("dynamicComponentContainer", { read: ViewContainerRef })
	dynamicComponentContainer: ViewContainerRef;
	@Output() configChanged = new EventEmitter();
	currentComponent: any = null;
	@Input()
	set data(data: PartialConfig) {
		if (!data || Object.keys(data).length == 0) return;
		if (!(data.type in this.typeMapToDiagram)) {
			if (this.currentComponent) this.currentComponent.destroy();
			return;
		}
		let _component: any = this.typeMapToDiagram[data.type];
		let inputProviders = Object.keys(data.inputs).map(inputName => {
			return { provide: inputName, useValue: (data.inputs as any)[inputName] };
		});
		let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

		let injector = ReflectiveInjector.fromResolvedProviders(
			resolvedInputs,
			this.dynamicComponentContainer.parentInjector
		);
		let factory = this.resolver.resolveComponentFactory(_component);

		let component = factory.create(injector);
		(<any>component.instance).configChanged.subscribe((data: any) => {
			this.configChanged.emit(data);
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
