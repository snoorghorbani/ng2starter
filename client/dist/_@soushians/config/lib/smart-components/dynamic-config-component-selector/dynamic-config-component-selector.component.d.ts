import { AfterViewInit, ComponentFactoryResolver, ViewContainerRef, EventEmitter } from "@angular/core";
import { PartialConfig } from "../../models";
export declare class DynamicConfigComponentSelectorComponent implements AfterViewInit {
    private resolver;
    typeMapToDiagram: any;
    dynamicComponentContainer: ViewContainerRef;
    configChanged: EventEmitter<{}>;
    readonly config: any;
    currentComponent: any;
    data: PartialConfig;
    constructor(resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
}
