import { OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { GridConfigurationService } from "../services/grid-configuration.service";
export declare class DynamicGridItremConfigDirective implements OnInit {
    private configurationService;
    private resolver;
    private container;
    type: string;
    readonly valid: any;
    readonly config: any;
    component: ComponentRef<any>;
    mapTypeToComponent: any;
    constructor(configurationService: GridConfigurationService, resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnInit(): void;
    _resolve_correct_component_base_on_widget_type(type: any): void;
}
export declare class DynamicGridItemConfigComponent {
    data: any;
    DynamicWidgetRef: DynamicGridItremConfigDirective;
    constructor(data: any);
    readonly config: any;
    readonly valid: any;
}
