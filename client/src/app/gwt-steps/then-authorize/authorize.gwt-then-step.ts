import { Injector } from "@angular/core";
import { Store } from "@ngrx/store";

import { GwtStep, GwtStepTypes } from "@rule";

import { AppState } from "../../app.reducers";
import { GwtThenAuthorizeStepComponent } from "./step-component/gwt-then-authorize-step.component";
import { of } from "rxjs";

export class GwtThenAuthorizeStep implements GwtStep {
	id: string;
	name: string;
	description: string;
	type: GwtStepTypes;
	params: {};
	stepComponent = GwtThenAuthorizeStepComponent;
	store: Store<AppState>;
	constructor(private injector: Injector) {
		this.id = "authorize_and_show_block";
		this.name = "authorize and show block";
		this.description = "آنگاه این بخش قابل نمایش است";
		this.type = GwtStepTypes.Then;
		this.store = this.injector.get(Store);
	}
	interperator(params, elementRef) {
		debugger;
		elementRef.nativeElement.style.display = "none";
		return of(true);
	}
}
