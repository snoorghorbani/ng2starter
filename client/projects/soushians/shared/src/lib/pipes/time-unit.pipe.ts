import { PipeTransform, Pipe } from "@angular/core";

interface TimeUnitExtractor {
    count: number;
    value: string;
    remaining: number;
}

@Pipe({ name: 'timeUnit' })
export class TimeUnitPipe implements PipeTransform {

    private getDays(value: number): TimeUnitExtractor {
        let rate = 60 * 60 * 24
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    }
    private getHours(value: number): TimeUnitExtractor {
        let rate = 60 * 60;
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    }
    private getMinuts(value: number): TimeUnitExtractor {
        let rate = 60;
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    }
    private getSeconds(value: number): TimeUnitExtractor {
        let count = Math.floor((value));
        return {
            count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    }


    transform(value: number, exponent: string): string {
        if (value === 0) return '0 دقیقه';
        if (!value) return '';

        const connector = ' و ';

        let daysData = this.getDays(value);
        let hoursData = this.getHours(daysData.remaining);
        let minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);

        return [daysData, hoursData, minutsData/*, secondssData*/]
            .filter(i => i.count)
            .map(i => i.value).join(connector);

    }
}