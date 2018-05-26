import { FormGroup } from "@angular/forms";

export interface PartialConfig {
    type: string,
    inputs: {
            configFormGroup: FormGroup
    }
}
