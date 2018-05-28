import { PipeTransform } from "@angular/core";
export declare class TimeUnitPipe implements PipeTransform {
    private getDays(value);
    private getHours(value);
    private getMinuts(value);
    private getSeconds(value);
    transform(value: number, exponent: string): string;
}
