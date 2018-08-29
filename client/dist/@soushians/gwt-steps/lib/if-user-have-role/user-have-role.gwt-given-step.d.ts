import { Injector, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { GwtStep, GwtStepTypes } from "@soushians/rule";
import { IfUserHaveRoleGwtGivenStepComponent } from "./step-component/operation-gwt-step.component";
export interface IfUserHaveRoleGwtGivenStepParams {
    role: string;
}
export declare class IfUserHaveRoleGwtGivenStep implements GwtStep<IfUserHaveRoleGwtGivenStepParams> {
    injector: Injector;
    id: string;
    name: string;
    opposite: boolean;
    description: string;
    type: GwtStepTypes;
    params: {
        role: "";
    };
    stepComponent: typeof IfUserHaveRoleGwtGivenStepComponent;
    store: Store<any>;
    constructor(injector: Injector);
    interperator(params: IfUserHaveRoleGwtGivenStepParams, elementRef: ElementRef): Observable<boolean>;
}
