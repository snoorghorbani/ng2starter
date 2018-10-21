import { PipeTransform } from "@angular/core";
export declare class TimeCounterPipe implements PipeTransform {
    private getHours(value);
    private getMinuts(value);
    private getSeconds(value);
    transform(value: number, exponent: string): string;
}
