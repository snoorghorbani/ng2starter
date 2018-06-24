import { GwtStepTypes } from "./gwt-step-types.enum";

import { ElementRef } from "@angular/core";
import { Observable } from "rxjs";

export interface GwtStep<T = any> {
	// (injector: Injector): GwtStep<T>;
	name: string;
	type: GwtStepTypes;
	params: T;
	interperator: { (params: T, elementRef?: ElementRef): Observable<boolean> };
	stepComponent: any;
}

export interface OperationGwtStepParams {
	role: string;
}
