import { Component, OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef, Directive } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { pluck, filter, switchMap, map, startWith, tap } from "rxjs/operators";

import { WidgetModel } from "../models/widget.model";
import { AppState } from "../widget.reducer";
import { WidgetService } from "../services/widget.service";
import { WidgetConfigurationService } from "../services/widget-configuration.service";
import { IModuleConfigMapTypes } from "../models/module-config-map-types.interfce";

@Directive({
	selector: "[ngsDynamicWidgetConfig]"
})
export class DynamicWidgetConfigDirective implements OnInit {
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
		this._react_base_on_params();
	}
	_fill_component_map() {
		this.configurationService.config$.pipe(map((config) => config.types), startWith({})).subscribe((types) => {
			debugger;
			this.mapTypeToComponent = types;
		});
	}
	_react_base_on_params() {
		this.route.params.subscribe(({ type, _id }) => {
			if (_id) {
				this.service.selectById<any>(_id).subscribe((widget) => {
					this._resolve_correct_component_base_on_widget_type(type, widget);
				});
			} else {
				this._resolve_correct_component_base_on_widget_type(type);
			}
		});
	}
	_resolve_correct_component_base_on_widget_type(type: string, widget?: WidgetModel<any>) {
		if (this.component) {
			this.component.destroy();
		}

		if (!this.mapTypeToComponent[type]) {
			const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
			throw new Error(
				`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`
			);
		}
		const component = this.resolver.resolveComponentFactory<any>(this.mapTypeToComponent[type].upsert);
		this.component = this.container.createComponent(component);
		// this.widget$.subscribe((w) => (this.component.instance.widget = w));
		if (widget) this.component.instance.widget = widget;
	}
}
