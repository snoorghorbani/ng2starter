export declare const PERSIAN_MONTH_DAYS_COUNT: number[];
export declare const PERSIAN_MONTH_NAMES: string[];
export declare class DateClass {
    year: string;
    month: string;
    date: string;
    constructor(year: any, month: any, date: any);
    fullDate(seprator?: string): string;
    nativeDate(): Date;
}
export declare class UtilityService {
    is: any;
    math: any;
    date: {
        persian: {
            PERSIAN_MONTH_DAYS_COUNT: number[];
            now(): DateClass;
            foretimeMonthOfYear(): string[];
            getDaysOfoMonth(idx: number): string[];
            create(y: string, m: string, d: string): DateClass;
            getDayOfWeek(y: string, m: string, d: string): number;
            to: {
                georgian: (year: string | number, month: string | number, day: string | number) => DateClass;
                julian: (year: string | number, month: string | number, day: string | number) => number;
            };
        };
        georgian: {
            now(): DateClass;
            getRelativeDay(n: number): DateClass;
            parse(date: Date): DateClass;
            to: {
                persian(year: string | number, month: string | number, day: string | number): DateClass;
                julian(year: string | number, month: string | number, day: string | number): number;
            };
        };
        julian: {
            to: {
                persian: (jd: string | number) => string[];
                georgian: (jd: string | number) => string[];
            };
        };
        as: {
            Date: ([y, m, d]: string[]) => Date;
        };
    };
}
