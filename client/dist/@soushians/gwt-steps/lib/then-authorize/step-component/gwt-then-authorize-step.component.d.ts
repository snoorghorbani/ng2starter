import { GwtThenStepUi } from "@soushians/rule";
import { FormGroup } from "@angular/forms";
import { ThenShowBlockGwtStepParams } from "../authorize.gwt-then-step";
import { BehaviorSubject } from "rxjs";
export declare class GwtThenAuthorizeStepComponent implements GwtThenStepUi<any> {
    formGroup: FormGroup;
    params$: BehaviorSubject<ThenShowBlockGwtStepParams>;
    params: ThenShowBlockGwtStepParams;
    constructor();
    /**
     * private methods
     */
    _create_formGroup(): FormGroup;
}
