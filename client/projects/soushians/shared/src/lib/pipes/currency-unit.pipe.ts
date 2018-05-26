import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'currencyUnit' })
export class CurrencyUnitPipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        if (!value && value!=0) return '';
        else if (value == 0) return 'رایگان';

        let suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    }
}