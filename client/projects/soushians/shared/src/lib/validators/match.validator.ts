import { ValidatorFn, AbstractControl } from "@angular/forms";

export function MatchValidator(destination: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!control.root.value) return;
        let destinationValue = control.root.value[destination];

        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    };
}