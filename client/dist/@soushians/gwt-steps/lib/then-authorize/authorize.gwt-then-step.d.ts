import { Injector, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { GwtStep, GwtStepTypes } from "@soushians/rule";
import { GwtThenAuthorizeStepComponent } from "./step-component/gwt-then-authorize-step.component";
export interface ThenShowBlockGwtStepParams {
    verb: "visible" | "hidden";
}
export declare class GwtThenAuthorizeStep implements GwtStep<ThenShowBlockGwtStepParams> {
    private injector;
    id: string;
    name: string;
    opposite: boolean;
    description: string;
    type: GwtStepTypes;
    params: ThenShowBlockGwtStepParams;
    stepComponent: typeof GwtThenAuthorizeStepComponent;
    store: Store<any>;
    constructor(injector: Injector);
    interperator(params: ThenShowBlockGwtStepParams, elementRef: ElementRef): Observable<boolean>;
}
