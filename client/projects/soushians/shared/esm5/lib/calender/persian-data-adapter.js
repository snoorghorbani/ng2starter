import * as tslib_1 from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as moment from "jalali-moment";
import { DateAdapter } from "@angular/material";
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    var /** @type {?} */ valuesArray = Array(length);
    for (var /** @type {?} */ i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var JalaliMomentDateAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(JalaliMomentDateAdapter, _super);
    function JalaliMomentDateAdapter() {
        var _this = 
        // @Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string
        _super.call(this) || this;
        // this.setLocale(dateLocale || jmoment.locale(dateLocale));
        _super.prototype.setLocale.call(_this, "fa");
        return _this;
    }
    /**
     * returns year in jalali calendar system.
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getYear = function (date) {
        return this.clone(date).jYear();
    };
    /**
     * returns month in jalali calendar system.
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getMonth = function (date) {
        return this.clone(date).jMonth();
    };
    /**
     * returns day in jalali calendar system.
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getDate = function (date) {
        return this.clone(date).jDate();
    };
    /**
     * returns Day Of Week in jalali calendar system.
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getDayOfWeek = function (date) {
        return this.clone(date).day();
    };
    /**
     * returns Month Names in jalali calendar system.
     * most of the time we use long format. short or narrow format for month names is a little odd.
     * @param {?} style
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getMonthNames = function (style) {
        switch (style) {
            case "long":
            case "short":
                return moment.localeData("fa").jMonths().slice(0);
            case "narrow":
                return moment.localeData("fa").jMonthsShort().slice(0);
        }
    };
    /**
     * borrowed from angular material code.
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getDateNames = function () {
        return range(31, function (i) { return String(i + 1); });
        // return this._localeData.dates;
    };
    /**
     * returns Day Of Week names in jalali calendar system.
     * @param {?} style
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getDayOfWeekNames = function (style) {
        switch (style) {
            case "long":
                return moment.localeData("fa").weekdays().slice(0);
            case "short":
                return moment.localeData("fa").weekdaysShort().slice(0);
            case "narrow":
                return ["ی", "د", "س", "چ", "پ", "ج", "ش"];
        }
    };
    /**
     * returns year in jalali calendar system.
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getYearName = function (date) {
        return this.clone(date).jYear().toString();
    };
    /**
     * returns first day of week in jalali calendar system.
     * first day of week is saturday, شنبه
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getFirstDayOfWeek = function () {
        return moment.localeData("fa").firstDayOfWeek();
        // return 6;
    };
    /**
     * returns Number of Days In Month in jalali calendar system.
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.getNumDaysInMonth = function (date) {
        return this.clone(date).jDaysInMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.clone = function (date) {
        return date.clone().locale("fa");
    };
    /**
     * Pass 3 number in jalali calendar system to this function and it returns a moment object
     * @param {?} year jalali year
     * @param {?} month zero indexed jalali month
     * @param {?} date jalali day
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.createDate = function (year, month, date) {
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var /** @type {?} */ result = moment()
            .jYear(year)
            .jMonth(month)
            .jDate(date)
            .hours(0)
            .minutes(0)
            .seconds(0)
            .milliseconds(0)
            .locale("fa");
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (this.getMonth(result) !== month) {
            throw Error("Invalid date " + date + " for month with index " + month + ".");
        }
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.today = function () {
        return moment().locale("fa");
    };
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.parse = function (value, parseFormat) {
        if (value && typeof value === "string") {
            var /** @type {?} */ result = moment(value, parseFormat, "fa");
            return result;
        }
        return value ? moment(value).locale("fa") : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.format = function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error("JalaliMomentDateAdapter: Cannot format invalid date.");
        }
        return date.format(displayFormat);
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.addCalendarYears = function (date, years) {
        return this.clone(date).add(years, "jYear");
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.addCalendarMonths = function (date, months) {
        return this.clone(date).add(months, "jmonth");
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.addCalendarDays = function (date, days) {
        return this.clone(date).add(days, "jDay");
    };
    /**
     * Gets the RFC 3339 compatible string (https://tools.ietf.org/html/rfc3339) for the given date.
     * This method is used to generate date strings that are compatible with native HTML attributes
     * such as the `min` or `max` attribute of an `<input>`.
     * @param {?} date The date to get the ISO date string for.
     * @return {?} The ISO date string date string.
     */
    JalaliMomentDateAdapter.prototype.toIso8601 = function (date) {
        return this.clone(date).format();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.isDateInstance = function (obj) {
        return moment.isMoment(obj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.isValid = function (date) {
        return this.clone(date).isValid();
        // return date.isValid();
    };
    /**
     * @return {?}
     */
    JalaliMomentDateAdapter.prototype.invalid = function () {
        return moment.invalid();
    };
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    JalaliMomentDateAdapter.prototype.deserialize = function (value) {
        var /** @type {?} */ date;
        if (value instanceof Date) {
            date = moment(value);
        }
        if (typeof value === "string") {
            if (!value) {
                return null;
            }
            // date = jmoment(value, jmoment.ISO_8601).locale('fa');
            date = moment(value).locale("fa");
        }
        if (date && this.isValid(date)) {
            return date;
        }
        return _super.prototype.deserialize.call(this, value);
    };
    return JalaliMomentDateAdapter;
}(DateAdapter));
export { JalaliMomentDateAdapter };
export var /** @type {?} */ JALALI_MOMENT_FORMATS = {
    parse: {
        dateInput: "jYYYY/jMM/jDD"
    },
    display: {
        dateInput: "jYYYY/jMM/jDD",
        monthYearLabel: "jYYYY jMMMM",
        dateA11yLabel: "jYYYY/jMM/jDD",
        monthYearA11yLabel: "jYYYY jMMMM"
    }
};
//# sourceMappingURL=persian-data-adapter.js.map
