import { PipeTransform } from "@angular/core";
export declare class TimeUnitPipe implements PipeTransform {
    private getDays;
    private getHours;
    private getMinuts;
    private getSeconds;
    transform(value: number, exponent: string): string;
}
