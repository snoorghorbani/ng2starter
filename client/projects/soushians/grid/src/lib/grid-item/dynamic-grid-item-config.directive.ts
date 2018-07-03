import {
	Component,
	OnInit,
	ComponentRef,
	ComponentFactoryResolver,
	ViewContainerRef,
	Directive,
	Input,
	ViewChild,
	Inject
} from "@angular/core";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";

@Directive({
	selector: "[ngsDynamicGridItemConfig]"
})
export class DynamicGridItremConfigDirective implements OnInit {
	@Input()
	set type(type: string) {
		if (!type) return;
		this._resolve_correct_component_base_on_widget_type(type);
	}
	get valid() {
		return this.component.instance.valid;
	}
	get config() {
		return this.component.instance.config;
	}
	component: ComponentRef<any>;
	mapTypeToComponent: any;
	constructor(
		private configurationService: GridConfigurationService,
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {
		this.mapTypeToComponent = this.configurationService.config$.getValue().types;
	}
	ngOnInit() {}
	_resolve_correct_component_base_on_widget_type(type) {
		if (!this.mapTypeToComponent[type]) {
			const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
			throw new Error(
				`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`
			);
		}
		const component = this.resolver.resolveComponentFactory<any>(this.mapTypeToComponent[type].configComponent);
		this.component = this.container.createComponent(component);
		// this.widget$.subscribe((w) => (this.component.instance.widget = w));
	}
}

@Component({
	template: `
	<div ngsDynamicGridItemConfig [type]="data.type"></div>
	`
})
export class DynamicGridItemConfigComponent {
	@ViewChild(DynamicGridItremConfigDirective) DynamicWidgetRef: DynamicGridItremConfigDirective;
	constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}
	get config() {
		return this.DynamicWidgetRef.config;
	}
	get valid() {
		return this.DynamicWidgetRef.valid;
	}
}
