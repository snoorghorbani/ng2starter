import {
	Component,
	OnInit,
	Input,
	ViewContainerRef,
	ComponentFactoryResolver,
	ComponentRef,
	ViewChild,
	Directive,
	OnChanges
} from "@angular/core";

import { GwtStep } from "../models/gwt-step.model";

@Directive({
	selector: "[rule-step-loader]"
	// templateUrl: "./step-loader.component.html",
	// styleUrls: [ "./step-loader.component.css" ]
})
export class StepLoaderDirective implements OnChanges, OnInit {
	@Input() step: GwtStep<any>;
	@ViewChild("container", { read: ViewContainerRef, static: false })
	// TODO: fix generic type
	component: ComponentRef<any>;
	get params() {
		return this.component.instance.params || {};
	}
	constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

	ngOnChanges() {
		if (this.component) {
			// this.component.instance.config = this.config;
			// this.component.instance.group = this.group;
		}
	}

	ngOnInit() {
		if (!this.step.stepComponent) {
			debugger;
			throw new Error(
				`Trying to use an unsupported type ().
		  Supported types: `
			);
		}
		// TODO: fix generic type
		const component = this.resolver.resolveComponentFactory<any>(this.step.stepComponent);
		this.component = this.container.createComponent(component);
		debugger;
		this.component.instance.params = this.step.params;
	}
}
