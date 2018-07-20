import {
	Component,
	OnInit,
	ComponentRef,
	ComponentFactoryResolver,
	ViewContainerRef,
	Directive,
	Input
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { pluck, filter, switchMap, map, startWith } from "rxjs/operators";

import { WidgetModel } from "../models/widget.model";
import { AppState } from "../widget.reducer";
import { IModuleConfigMapTypes } from "../models/module-config-map-types.interfce";
import { WidgetService } from "../services/widget.service";
import { WidgetConfigurationService } from "../services/widget-configuration.service";

@Component({
	selector: "widget",
	template: ""
})
export class DynamicWidgetViewComponent implements OnInit {
	@Input()
	set oid(id: string) {
		this._selectWidget(id);
	}
	widget$: Observable<WidgetModel<any>>;
	component: ComponentRef<any>;
	mapTypeToComponent: IModuleConfigMapTypes;
	constructor(
		public store: Store<AppState>,
		private service: WidgetService,
		private configurationService: WidgetConfigurationService,
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {
		this._fill_component_map();
	}
	ngOnInit() {
		this.widget$.pipe(filter(widget => widget != undefined)).subscribe(widget => {
			this._resolve_correct_component_base_on_widget_type(widget);
		});
	}
	_fill_component_map() {
		this.configurationService.config$.pipe(map(config => config.types), startWith({})).subscribe(types => {
			debugger;
			this.mapTypeToComponent = types;
		});
	}
	_selectWidget(id: string) {
		this.widget$ = this.service.selectById<any>(id);
	}
	_resolve_correct_component_base_on_widget_type(widget) {
		if (!this.mapTypeToComponent[widget.type]) {
			debugger;
			const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
			throw new Error(
				`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`
			);
		}
		const component = this.resolver.resolveComponentFactory<any>(this.mapTypeToComponent[widget.type].view);
		this.component = this.container.createComponent(component);
		this.widget$.subscribe(w => (this.component.instance.widget = w));
	}
}
