import { OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { WidgetModel } from "../models/widget.model";
import { AppState } from "../widget.reducer";
import { WidgetService } from "../services/widget.service";
import { WidgetConfigurationService } from "../services/widget-configuration.service";
import { IModuleConfigMapTypes } from "../models/module-config-map-types.interfce";
export declare class DynamicWidgetViewDirective implements OnInit {
    store: Store<AppState>;
    private route;
    private service;
    private configurationService;
    private resolver;
    private container;
    oid: string;
    widget$: Observable<WidgetModel<any>>;
    component: ComponentRef<any>;
    mapTypeToComponent: IModuleConfigMapTypes;
    constructor(store: Store<AppState>, route: ActivatedRoute, service: WidgetService, configurationService: WidgetConfigurationService, resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnInit(): void;
    _fill_component_map(): void;
    _selectWidget(id: string): void;
    _resolve_correct_component_base_on_widget_type(widget: any): void;
}
