import * as moment from "jalali-moment";
import { DateAdapter } from "@angular/material";
export declare class JalaliMomentDateAdapter extends DateAdapter<moment.Moment> {
    constructor();
    /**
       * returns year in jalali calendar system.
       */
    getYear(date: moment.Moment): number;
    /**
       * returns month in jalali calendar system.
       */
    getMonth(date: moment.Moment): number;
    /**
       * returns day in jalali calendar system.
       */
    getDate(date: moment.Moment): number;
    /**
       * returns Day Of Week in jalali calendar system.
       */
    getDayOfWeek(date: moment.Moment): number;
    /**
       * returns Month Names in jalali calendar system.
       * most of the time we use long format. short or narrow format for month names is a little odd.
       */
    getMonthNames(style: "long" | "short" | "narrow"): string[];
    /**
       * borrowed from angular material code.
       */
    getDateNames(): string[];
    /**
       * returns Day Of Week names in jalali calendar system.
       */
    getDayOfWeekNames(style: "long" | "short" | "narrow"): string[];
    /**
       * returns year in jalali calendar system.
       */
    getYearName(date: moment.Moment): string;
    /**
       * returns first day of week in jalali calendar system.
       * first day of week is saturday, شنبه
       */
    getFirstDayOfWeek(): number;
    /**
       * returns Number of Days In Month in jalali calendar system.
       */
    getNumDaysInMonth(date: moment.Moment): number;
    clone(date: moment.Moment): moment.Moment;
    /**
       * Pass 3 number in jalali calendar system to this function and it returns a moment object
       * @param year jalali year
       * @param month zero indexed jalali month
       * @param date jalali day
       */
    createDate(year: number, month: number, date: number): moment.Moment;
    today(): moment.Moment;
    parse(value: any, parseFormat: string | string[]): moment.Moment | null;
    format(date: moment.Moment, displayFormat: string): string;
    addCalendarYears(date: moment.Moment, years: number): moment.Moment;
    addCalendarMonths(date: moment.Moment, months: number): moment.Moment;
    addCalendarDays(date: moment.Moment, days: number): moment.Moment;
    /**
   *Gets the RFC 3339 compatible string (https://tools.ietf.org/html/rfc3339) for the given date.
   * This method is used to generate date strings that are compatible with native HTML attributes
   *such as the `min` or `max` attribute of an `<input>`.
   *@param date The date to get the ISO date string for.
   *@returns The ISO date string date string.
   */
    toIso8601(date: moment.Moment): string;
    isDateInstance(obj: any): boolean;
    isValid(date: moment.Moment): boolean;
    invalid(): moment.Moment;
    /**
   * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
   * string into null. Returns an invalid date for all other values.
   */
    /**
    * Attempts to deserialize a value to a valid date object. This is different from parsing in that
    * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
    * string). The default implementation does not allow any deserialization, it simply checks that
    * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
    * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
    * support passing values from your backend directly to these properties by overriding this method
    * to also deserialize the format used by your backend.
    * @param value The value to be deserialized into a date object.
    * @returns The deserialized date object, either a valid date, null if the value can be
    *     deserialized into a null date (e.g. the empty string), or an invalid date.
    */
    deserialize(value: any): moment.Moment | null;
}
import { MatDateFormats } from "@angular/material";
export declare const JALALI_MOMENT_FORMATS: MatDateFormats;
