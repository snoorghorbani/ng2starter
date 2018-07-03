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
import { WidgetModel } from "../models";
import { AppState } from "../widget.reducer";
import { pluck, filter, switchMap, map, startWith } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { WidgetService, WidgetConfigurationService } from "../services";
import { IModuleConfigMapTypes } from "../models/module-config-map-types.interfce";

@Directive({
	selector: "[ngsDynamicWidgetView]"
})
export class DynamicWidgetViewDirective implements OnInit {
	@Input()
	set oid(id: string) {
		this._selectWidget(id);
	}
	widget$: Observable<WidgetModel<any>>;
	component: ComponentRef<any>;
	mapTypeToComponent: IModuleConfigMapTypes;
	constructor(
		public store: Store<AppState>,
		private route: ActivatedRoute,
		private service: WidgetService,
		private configurationService: WidgetConfigurationService,
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {
		this._fill_component_map();
	}
	ngOnInit() {
		this.widget$.pipe(filter((widget) => widget != undefined)).subscribe((widget) => {
			this._resolve_correct_component_base_on_widget_type(widget);
		});
	}
	_fill_component_map() {
		this.configurationService.config$.pipe(map((config) => config.types), startWith({})).subscribe((types) => {
			debugger;
			this.mapTypeToComponent = types;
		});
	}
	_selectWidget(id: string) {
		this.widget$ = this.service.selectById<any>(id);
	}
	_resolve_correct_component_base_on_widget_type(widget) {
		if (!this.mapTypeToComponent[widget.type]) {
			const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
			throw new Error(
				`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`
			);
		}
		const component = this.resolver.resolveComponentFactory<any>(this.mapTypeToComponent[widget.type].view);
		this.component = this.container.createComponent(component);
		this.widget$.subscribe((w) => (this.component.instance.widget = w));
	}
}
