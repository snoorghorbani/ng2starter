import { PipeTransform } from "@angular/core";
export declare class CurrencyUnitPipe implements PipeTransform {
    transform(value: number, exponent: string): string;
}
