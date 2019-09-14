import { AfterViewInit, ComponentFactoryResolver, ViewContainerRef, EventEmitter } from "@angular/core";
import { DiagramPartialConfigEditComponent } from "../../dumb-components/diagram-partial-config-edit/diagram-partial-config-edit.component";
import { PieDiagramPartialConfigComponent } from "../../dumb-components/pie-diagram-partial-config/pie-diagram-partial-config.component";
import { BooleanoWidgetPartialConfigComponent } from "../../dumb-components/booleano-widget-partial-config/booleano-widget-partial-config.component";
import { LinearDiagramPartialConfigComponent } from "../../dumb-components/linear-diagram-partial-config/linear-diagram-partial-config.component";
export declare class DynamicConfigComponentSelectorComponent implements AfterViewInit {
    private resolver;
    typeMapToDiagram: {
        bar: typeof DiagramPartialConfigEditComponent;
        area: typeof LinearDiagramPartialConfigComponent;
        "area-spline": typeof LinearDiagramPartialConfigComponent;
        donut: typeof DiagramPartialConfigEditComponent;
        pie: typeof PieDiagramPartialConfigComponent;
        scatter: typeof DiagramPartialConfigEditComponent;
        line: typeof LinearDiagramPartialConfigComponent;
        booleano: typeof BooleanoWidgetPartialConfigComponent;
    };
    dynamicComponentContainer: ViewContainerRef;
    ConfigChanged: EventEmitter<any>;
    currentComponent: any;
    data: any;
    constructor(resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
}
