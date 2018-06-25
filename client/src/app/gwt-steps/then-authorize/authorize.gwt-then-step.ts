import { Injector } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../app.reducers";
import { GwtStep, GwtStepTypes } from "@rule";
import { GwtThenAuthorizeStepComponent } from "./step-component/gwt-then-authorize-step.component";
import { of } from "rxjs";

export class GwtThenAuthorizeStep implements GwtStep {
	name: string;
	description: string;
	type: GwtStepTypes;
	params: {};
	stepComponent = GwtThenAuthorizeStepComponent;
	store: Store<AppState>;
	constructor(private injector: Injector) {
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
