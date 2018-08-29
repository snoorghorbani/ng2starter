import { Injector, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { GwtStep, GwtStepTypes } from "@soushians/rule";

import { GwtThenAuthorizeStepComponent } from "./step-component/gwt-then-authorize-step.component";

export interface ThenShowBlockGwtStepParams {
	verb: "visible" | "hidden";
}

export class GwtThenAuthorizeStep implements GwtStep<ThenShowBlockGwtStepParams> {
	id: string;
	name: string;
	opposite: boolean;
	description: string;
	type: GwtStepTypes;
	params: ThenShowBlockGwtStepParams;
	stepComponent = GwtThenAuthorizeStepComponent;
	store: Store<any>;
	constructor(private injector: Injector) {
		this.id = "authorize_and_show_block";
		this.name = "authorize and show block";
		this.description = "آنگاه این بخش قابل نمایش است";
		this.type = GwtStepTypes.Then;
		this.store = this.injector.get(Store);
	}
	interperator(params: ThenShowBlockGwtStepParams, elementRef: ElementRef) {
		debugger;
		const display = (params.verb === "visible") ? "block" : "none";
		elementRef.nativeElement.style.display = display;
		return of(true);
	}
}
