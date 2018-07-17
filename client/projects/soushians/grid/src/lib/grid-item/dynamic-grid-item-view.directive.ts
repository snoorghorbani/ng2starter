import {
	Component,
	OnInit,
	ComponentRef,
	ComponentFactoryResolver,
	ViewContainerRef,
	Directive,
	Input,
	Inject,
	ViewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { pluck, filter, switchMap, map, startWith } from "rxjs/operators";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";
import { IGridItemModel } from "../models/gird-item.model";

@Directive({
	selector: "[ngsDynamicGridItemView]"
})
export class DynamicGridItemViewDirective implements OnInit {
	@Input("ngsDynamicGridItemView")
	set item(item: IGridItemModel<any>) {
		if (!item) return;
		if (!item.valid) return;
		this._resolve_correct_component_base_on_widget_type(item);
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
	_resolve_correct_component_base_on_widget_type(item: IGridItemModel<any>) {
		debugger;
		if (!this.mapTypeToComponent[item.type]) {
			const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
			throw new Error(
				`Trying to use an unsupported type (${item.type}).
		  		 Supported types: ${supportedTypes}`
			);
		}
		const componentFactory = this.resolver.resolveComponentFactory<any>(
			this.mapTypeToComponent[item.type].viewComponent
		);
		this.component = this.container.createComponent(componentFactory);
		Object.keys(item.config || {}).forEach((key) => {
			this.component.instance[key] = item.config[key];
		});
	}
}
