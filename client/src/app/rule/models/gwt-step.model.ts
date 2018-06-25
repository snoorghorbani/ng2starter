import { GwtStepTypes } from "./gwt-step-types.enum";

import { ElementRef } from "@angular/core";
import { Observable } from "rxjs";

export interface GwtStep<T = any> {
	// (injector: Injector): GwtStep<T>;
	Id: string;
	name: string;
	description: string;
	type: GwtStepTypes;
	params: T;
	stepComponent: any;
	interperator(params: T, elementRef?: ElementRef): Observable<boolean>;
}
