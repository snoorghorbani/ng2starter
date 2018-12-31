import { Injector, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserFacadeService } from "@soushians/user";
import { GwtStep, GwtStepTypes } from "@soushians/rule";
import { UserIsAuthenticatedGwtGivenStepParams } from "./user-is-authenticated.gwt-given-step-params";
import { GivenUserIsAuthenticatedStepComponent } from "./step-component/given-user-is-authenticated-step.component";
export declare class IfUserIsAuthenticatedGwtGivenStep implements GwtStep<UserIsAuthenticatedGwtGivenStepParams> {
    injector: Injector;
    id: string;
    name: string;
    opposite: boolean;
    description: string;
    type: GwtStepTypes;
    params: {
        role: "";
    };
    stepComponent: typeof GivenUserIsAuthenticatedStepComponent;
    store: Store<any>;
    userFacadeService: UserFacadeService;
    constructor(injector: Injector);
    interperator(params: UserIsAuthenticatedGwtGivenStepParams, elementRef: ElementRef): Observable<boolean>;
}
