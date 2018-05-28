import { AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { NumericDiagramComponent } from "../../dumb-components/numeric-diagram/numeric-diagram.component";
import { ServerStatusDiagramComponent } from "../../dumb-components/server-status-diagram/server-status-diagram.component";
import { ServerConnectingTimeDiagramComponent } from "../../dumb-components/server-connecting-time-diagram/server-connecting-time-diagram.component";
import { DiagramComponent } from "../../smart-components/diagram/diagram.component";
export declare class DynamicComponentSelectorComponent implements AfterViewInit {
    private resolver;
    typeMapToDiagram: {
        bar: typeof DiagramComponent;
        donut: typeof DiagramComponent;
        pie: typeof DiagramComponent;
        scatter: typeof DiagramComponent;
        line: typeof DiagramComponent;
        area: typeof DiagramComponent;
        "area-spline": typeof DiagramComponent;
        numero: typeof NumericDiagramComponent;
        tempo: typeof ServerConnectingTimeDiagramComponent;
        booleano: typeof ServerStatusDiagramComponent;
    };
    dynamicComponentContainer: ViewContainerRef;
    widgetComponent: DiagramComponent;
    currentComponent: any;
    _data: any;
    data: any;
    backgroundColor: String;
    constructor(resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    timeChange(e: any): void;
}
