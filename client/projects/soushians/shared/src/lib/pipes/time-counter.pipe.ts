import { PipeTransform, Pipe } from "@angular/core";


interface TimeCounterExtractor {
    count: number;
    value: string;
    remaining: number;
}

@Pipe({ name: 'timeCounter' })
export class TimeCounterPipe implements PipeTransform {


    private getHours(value: number): TimeCounterExtractor {
        let rate = 60 * 60;
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    }
    private getMinuts(value: number): TimeCounterExtractor {
        let rate = 60;
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    }
    private getSeconds(value: number): TimeCounterExtractor {
        let count = Math.floor((value));
        return {
            count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    }


    transform(value: number, exponent: string): string {
        if (!value) return '';
        const connector = ' : ';

        // let daysData = this.getDays(value);
        let hoursData = this.getHours(value);
        let minutsData = this.getMinuts(hoursData.remaining);
        let secondssData = this.getSeconds(minutsData.remaining);

        return [secondssData, minutsData,hoursData]
            .map(i => i.count).join(connector);

    }
}