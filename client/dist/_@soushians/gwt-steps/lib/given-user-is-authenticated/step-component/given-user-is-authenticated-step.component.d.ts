import { FormGroup } from "@angular/forms";
import { GwtGivenStepUi } from "@soushians/rule";
import { UserIsAuthenticatedGwtGivenStepParams } from "../user-is-authenticated.gwt-given-step-params";
export declare class GivenUserIsAuthenticatedStepComponent implements GwtGivenStepUi<UserIsAuthenticatedGwtGivenStepParams> {
    formGroup: FormGroup;
    params: UserIsAuthenticatedGwtGivenStepParams;
    constructor();
}
