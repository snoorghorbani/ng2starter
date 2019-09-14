import { PipeTransform } from "@angular/core";
export declare class TimeCounterPipe implements PipeTransform {
    private getHours;
    private getMinuts;
    private getSeconds;
    transform(value: number, exponent: string): string;
}
