import { ElementRef } from "@angular/core";
import { Observable } from "rxjs";
import { GwtStepTypes } from "./gwt-step-types.enum";
export interface GwtStep<T = any> {
    id: string;
    name: string;
    description: string;
    type: GwtStepTypes;
    opposite: boolean;
    params: T;
    stepComponent: any;
    interperator(params: T, elementRef?: ElementRef): Observable<boolean>;
}
