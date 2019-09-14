import { OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnChanges } from "@angular/core";
import { GwtStep } from "../models/gwt-step.model";
export declare class StepLoaderDirective implements OnChanges, OnInit {
    private resolver;
    private container;
    step: GwtStep<any>;
    component: ComponentRef<any>;
    readonly params: any;
    constructor(resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnChanges(): void;
    ngOnInit(): void;
}
