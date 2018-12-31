import { OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { IGridItemModel } from "../models/gird-item.model";
export declare class DynamicGridItemViewDirective implements OnInit {
    private configurationService;
    private resolver;
    private container;
    item: IGridItemModel<any>;
    component: ComponentRef<any>;
    mapTypeToComponent: any;
    constructor(configurationService: GridConfigurationService, resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnInit(): void;
    _resolve_correct_component_base_on_widget_type(item: IGridItemModel<any>): void;
}
