/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export const /** @type {?} */ PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
export const /** @type {?} */ PERSIAN_MONTH_NAMES = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];
export class DateClass {
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     */
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    }
    /**
     * @param {?=} seprator
     * @return {?}
     */
    fullDate(seprator = "/") {
        return [this.year, this.month, this.date].join(seprator);
    }
    /**
     * @return {?}
     */
    nativeDate() {
        return new Date(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.date));
    }
}
function DateClass_tsickle_Closure_declarations() {
    /** @type {?} */
    DateClass.prototype.year;
    /** @type {?} */
    DateClass.prototype.month;
    /** @type {?} */
    DateClass.prototype.date;
}
export class UtilityService {
    constructor() {
        this.is = (function (_, undefined) {
            var /** @type {?} */ is = function (node, selector) {
                if (node.matches)
                    return node.matches(selector);
                var /** @type {?} */ nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
                return nodes.indexOf(node) > -1 ? true : false;
            };
            is.object = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Object]";
            };
            is.nodeList = function (obj) {
                if (_.is.not.ie())
                    return Object.prototype.toString.call(obj) === "[object NodeList]";
                else
                    return (obj.length !== undefined &&
                        obj.push === undefined &&
                        (obj.length > 0 ? obj[0].tagName !== undefined : true));
            };
            is.element = function (obj) {
                return Object.prototype.toString.call(obj).search("Element") > -1;
                //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
            };
            is.HTMLCollection = function (obj) {
                return Object.prototype.toString.call(obj) === "[object HTMLCollection]";
            };
            is.array = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Array]";
            };
            is.number = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Number]";
            };
            is["function"] = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Function]";
            };
            is.string = function (_var) {
                return Object.prototype.toString.call(_var) === "[object String]"; //&& ((isEmpty));
            };
            is.undefined = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Undefined]";
            };
            is.event = function (_var) {
                return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
            };
            is.defined = function (_var) {
                //return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
                return _var !== undefined && _var !== null && _var !== "";
            };
            is.json = function () { };
            is.error = function () { };
            is.startWith = function (str, prefix) {
                return str.indexOf(prefix) === 0;
            };
            is.endWith = function (str) { };
            is.value = function (_var) {
                return _var ? true : false;
            };
            is.empty = function (o) {
                if (_.is.object(0))
                    for (var /** @type {?} */ i in o)
                        if (o.hasOwnProperty(i))
                            return false;
                if (_.is.array(o))
                    return o.length === 0;
                return true;
            };
            is.truthy = function () { };
            is.scalar = function (_var) {
                //TODO : improve
                return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
            };
            is.prototypeProp = function (obj, prop) {
                return obj[prop] && !obj.hasOwnProperty(prop);
            };
            is.equal = function (fv, sv) {
                //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                return JSON.stringify(fv) == JSON.stringify(sv) ? true : false;
            };
            is.equalText = function (fv, sv) {
                return fv.toLowerCase(fv) === sv.toLowerCase(sv) ? true : false;
            };
            is.contain = function (str, searchStr) {
                var /** @type {?} */ reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
                return str.match(reg) && str.match(reg).length > 0;
            };
            is.regex = function (r) {
                return r.constructor.name === "RegExp";
            };
            is.same = function (fv, sv) {
                //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
            };
            is.persianLeapYear = function (year) {
                return (((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682) % 2816 < 682;
            };
            is.georgianLeapYear = function (year) {
                return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
            };
            var /** @type {?} */ not = {};
            var /** @type {?} */ i;
            for (i in is)
                (function (i) {
                    if (is.hasOwnProperty(i))
                        not[i] = function (a, b, c) {
                            return !is[i](a, b, c);
                        };
                })(i);
            is.not = not;
            //TODO : impelement
            var /** @type {?} */ all = {};
            for (i in is)
                (function (i) {
                    if (is.hasOwnProperty(i))
                        all[i] = function (o) { };
                })(i);
            is.all = all;
            var /** @type {?} */ any = {};
            for (var /** @type {?} */ j in is)
                (function (j) {
                    if (is.hasOwnProperty(j))
                        any[j] = function (o) { };
                })(j);
            is.any = any;
            return is;
        })(this);
        this.math = (function (_) {
            var /** @type {?} */ math = {};
            math.mod = function (a, b) {
                return a - b * Math.floor(a / b);
            };
            return math;
        })(this);
        this.date = (function (_) {
            var /** @type {?} */ PERSIAN_EPOCH = 1948320.5, /** @type {?} */
            GREGORIAN_EPOCH = 1721425.5;
            var /** @type {?} */ date = {
                persian: {
                    PERSIAN_MONTH_DAYS_COUNT: [],
                    now: () => null,
                    create: (y, m, d) => null,
                    getDaysOfoMonth: (idx) => null,
                    getDayOfWeek: (y, m, d) => null,
                    foretimeMonthOfYear: () => [],
                    to: {
                        georgian: () => null,
                        julian: () => null
                    }
                },
                julian: {
                    to: {
                        georgian: () => null,
                        persian: () => null
                    }
                },
                georgian: {
                    // getFutureDate: (n: number) => null,
                    now: () => null,
                    getRelativeDay: (n) => null,
                    parse: (date) => null,
                    to: {
                        persian: () => null,
                        julian: () => null
                    }
                },
                as: {
                    Date: () => null
                }
            };
            // date.persian = {};
            // date.persian.to = {};
            // date.georgian = {};
            // date.georgian.to = {};
            // date.julian = {};
            // date.julian.to = {};
            // date.as = {};
            date.as.Date = ([y, m, d]) => new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
            var /** @type {?} */ insertZero = function (i) {
                i = i.toString();
                return i.length == 1 ? "0" + i : i;
            };
            date.persian.PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
            date.persian.now = function () {
                let /** @type {?} */ now = new Date();
                return date.georgian.to.persian(now.getFullYear(), now.getMonth(), now.getDate());
            };
            date.persian.create = (y, m, d) => new DateClass(y, m, d);
            date.persian.getDaysOfoMonth = (idx) => {
                var /** @type {?} */ count = PERSIAN_MONTH_DAYS_COUNT[idx];
                let /** @type {?} */ res = [];
                for (let /** @type {?} */ i = 1; i < count + 1; i++) {
                    let /** @type {?} */ dayName = i < 10 ? "0" + i : i.toString();
                    res.push(dayName);
                }
                return res;
            };
            date.persian.getDayOfWeek = (y, m, d) => {
                let /** @type {?} */ persianHoliday = date.persian.create("1396", "1", "1");
                let /** @type {?} */ persianHolidayInGeorgian = date.persian.to.georgian("1396", "1", "1").nativeDate();
                var /** @type {?} */ month = +m - 1;
                var /** @type {?} */ day = +d;
                var /** @type {?} */ daysOfYear = PERSIAN_MONTH_DAYS_COUNT.reduce((a, b, idx) => {
                    if (idx == month)
                        return a + day;
                    if (idx > month)
                        return a;
                    return a + b;
                });
                return (daysOfYear + persianHolidayInGeorgian.getDay() - 1) % 7;
            };
            date.persian.foretimeMonthOfYear = () => {
                return PERSIAN_MONTH_NAMES.filter((item, idx) => idx <= +date.persian.now().month - 1);
            };
            date.persian.to.julian = function (year, month, day) {
                var /** @type {?} */ epbase, /** @type {?} */ epyear;
                year = parseInt(year.toString());
                month = parseInt(month.toString());
                day = parseInt(day.toString());
                epbase = year - (year >= 0 ? 474 : 473);
                epyear = 474 + _.math.mod(epbase, 2820);
                return (day +
                    (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
                    Math.floor((epyear * 682 - 110) / 2816) +
                    (epyear - 1) * 365 +
                    Math.floor(epbase / 2820) * 1029983 +
                    (PERSIAN_EPOCH - 1));
            };
            date.persian.to.georgian = function (year, month, day) {
                var /** @type {?} */ dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                return new DateClass(dateArray[0], parseInt(dateArray[1]), dateArray[2]);
            };
            date.georgian.parse = (date) => new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
            date.georgian.to.julian = function (year, month, day) {
                year = parseInt(year.toString());
                month = parseInt(month.toString()) + 1;
                day = parseInt(day.toString());
                return (GREGORIAN_EPOCH -
                    1 +
                    365 * (year - 1) +
                    Math.floor((year - 1) / 4) +
                    -Math.floor((year - 1) / 100) +
                    Math.floor((year - 1) / 400) +
                    Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : _.is.georgianLeapYear(year) ? -1 : -2) + day));
            };
            date.georgian.to.persian = function (year, month, day) {
                var /** @type {?} */ dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                return new DateClass(dateArray[0], dateArray[1], dateArray[2]);
            };
            // date.georgian.getFutureDate = function (n) {
            //     var now = new Date();
            //     return new Date(now.getFullYear(), now.getMonth(), now.getDate() + n);
            // }
            date.georgian.now = function () {
                let /** @type {?} */ now = new Date();
                return new DateClass(now.getFullYear(), now.getMonth() + 1, now.getDate());
            };
            (date.georgian.getRelativeDay = (n) => {
                let /** @type {?} */ date = new Date(Date.now() + -1 * n * 24 * 60 * 60 * 1000);
                return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
            }),
                (date.julian.to.georgian = function (jd) {
                    var /** @type {?} */ wjd, /** @type {?} */
                    depoch, /** @type {?} */
                    quadricent, /** @type {?} */
                    dqc, /** @type {?} */
                    cent, /** @type {?} */
                    dcent, /** @type {?} */
                    quad, /** @type {?} */
                    dquad, /** @type {?} */
                    yindex, /** @type {?} */
                    dyindex, /** @type {?} */
                    year, /** @type {?} */
                    month, /** @type {?} */
                    day, /** @type {?} */
                    yearday, /** @type {?} */
                    leapadj;
                    jd = parseFloat(jd.toString());
                    wjd = Math.floor(jd - 0.5) + 0.5;
                    depoch = wjd - GREGORIAN_EPOCH;
                    quadricent = Math.floor(depoch / 146097);
                    dqc = _.math.mod(depoch, 146097);
                    cent = Math.floor(dqc / 36524);
                    dcent = _.math.mod(dqc, 36524);
                    quad = Math.floor(dcent / 1461);
                    dquad = _.math.mod(dcent, 1461);
                    yindex = Math.floor(dquad / 365);
                    year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
                    if (!(cent == 4 || yindex == 4)) {
                        year++;
                    }
                    yearday = wjd - _.date.georgian.to.julian(year, 0, 1);
                    leapadj = wjd < _.date.georgian.to.julian(year, 3, 1) ? 0 : _.is.georgianLeapYear(year) ? 1 : 2;
                    month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
                    day = wjd - _.date.georgian.to.julian(year, month - 1, 1) + 1;
                    return new Array(insertZero(year), insertZero(month), insertZero(day));
                });
            date.julian.to.persian = function (jd) {
                var /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ depoch, /** @type {?} */ cycle, /** @type {?} */ cyear, /** @type {?} */ ycycle, /** @type {?} */ aux1, /** @type {?} */ aux2, /** @type {?} */ yday;
                jd = parseFloat(jd.toString());
                jd = Math.floor(jd) + 0.5;
                depoch = jd - _.date.persian.to.julian(475, 1, 1);
                cycle = Math.floor(depoch / 1029983);
                cyear = _.math.mod(depoch, 1029983);
                if (cyear == 1029982) {
                    ycycle = 2820;
                }
                else {
                    aux1 = Math.floor(cyear / 366);
                    aux2 = _.math.mod(cyear, 366);
                    ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
                }
                year = ycycle + 2820 * cycle + 474;
                if (year <= 0) {
                    year--;
                }
                yday = jd - _.date.persian.to.julian(year, 1, 1) + 1;
                month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
                day = jd - _.date.persian.to.julian(year, month, 1) + 1;
                return new Array(insertZero(year), insertZero(month), insertZero(day));
            };
            return date;
        })(this);
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
function UtilityService_tsickle_Closure_declarations() {
    /** @type {?} */
    UtilityService.prototype.is;
    /** @type {?} */
    UtilityService.prototype.math;
    /** @type {?} */
    UtilityService.prototype.date;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLENBQUMsdUJBQU0sd0JBQXdCLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRSxDQUFDO0FBQzNGLE1BQU0sQ0FBQyx1QkFBTSxtQkFBbUIsR0FBRztJQUNsQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxLQUFLO0lBQ0wsT0FBTztJQUNQLFFBQVE7SUFDUixLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxJQUFJO0lBQ0osTUFBTTtJQUNOLE9BQU87Q0FDUCxDQUFDO0FBQ0YsTUFBTTs7Ozs7O0lBS0wsWUFBWSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUk7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDakI7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQW1CLEdBQUc7UUFDOUIsTUFBTSxDQUFDLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDM0Q7Ozs7SUFDRCxVQUFVO1FBQ1QsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVB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QUNQO2dCQUNELElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckQsS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFLENBQUM7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQzs7OztZQS9YUixVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQgPSBbIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAgXTtcclxuZXhwb3J0IGNvbnN0IFBFUlNJQU5fTU9OVEhfTkFNRVMgPSBbXHJcblx0XCLZgdix2YjYsdiv24zZhlwiLFxyXG5cdFwi2KfYsdiv24zYqNmH2LTYqlwiLFxyXG5cdFwi2K7Ysdiv2KfYr1wiLFxyXG5cdFwi2KrbjNixXCIsXHJcblx0XCLZhdix2K/Yp9ivXCIsXHJcblx0XCLYtNmH2LHbjNmI2LFcIixcclxuXHRcItmF2YfYsVwiLFxyXG5cdFwi2KLYqNin2YZcIixcclxuXHRcItii2LDYsVwiLFxyXG5cdFwi2K/bjFwiLFxyXG5cdFwi2KjZh9mF2YZcIixcclxuXHRcItin2LPZgdmG2K9cIlxyXG5dO1xyXG5leHBvcnQgY2xhc3MgRGF0ZUNsYXNzIHtcclxuXHR5ZWFyOiBzdHJpbmc7XHJcblx0bW9udGg6IHN0cmluZztcclxuXHRkYXRlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHllYXIsIG1vbnRoLCBkYXRlKSB7XHJcblx0XHR0aGlzLnllYXIgPSB5ZWFyO1xyXG5cdFx0dGhpcy5tb250aCA9IG1vbnRoO1xyXG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcclxuXHR9XHJcblxyXG5cdGZ1bGxEYXRlKHNlcHJhdG9yOiBzdHJpbmcgPSBcIi9cIikge1xyXG5cdFx0cmV0dXJuIFsgdGhpcy55ZWFyLCB0aGlzLm1vbnRoLCB0aGlzLmRhdGUgXS5qb2luKHNlcHJhdG9yKTtcclxuXHR9XHJcblx0bmF0aXZlRGF0ZSgpIHtcclxuXHRcdHJldHVybiBuZXcgRGF0ZShwYXJzZUludCh0aGlzLnllYXIpLCBwYXJzZUludCh0aGlzLm1vbnRoKSAtIDEsIHBhcnNlSW50KHRoaXMuZGF0ZSkpO1xyXG5cdH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XHJcblx0aXMgPSAoZnVuY3Rpb24oXywgdW5kZWZpbmVkKSB7XHJcblx0XHR2YXIgaXM6IGFueSA9IGZ1bmN0aW9uKG5vZGUsIHNlbGVjdG9yKSB7XHJcblx0XHRcdGlmIChub2RlLm1hdGNoZXMpIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xyXG5cdFx0XHR2YXIgbm9kZXMgPSB0aGlzLmFyZ1RvQXJyYXkobm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuXHRcdFx0cmV0dXJuIG5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0aXMub2JqZWN0ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLm5vZGVMaXN0ID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdGlmIChfLmlzLm5vdC5pZSgpKSByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBOb2RlTGlzdF1cIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdG9iai5wdXNoID09PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdChvYmoubGVuZ3RoID4gMCA/IG9ialswXS50YWdOYW1lICE9PSB1bmRlZmluZWQgOiB0cnVlKVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2VhcmNoKFwiRWxlbWVudFwiKSA+IC0xO1xyXG5cdFx0XHQvL3JldHVybiAhIU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKS50b0xvd2VyQ2FzZSgpLnNlYXJjaCgnZWxlbWVudCcpOztcclxuXHRcdH07XHJcblx0XHRpcy5IVE1MQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBIVE1MQ29sbGVjdGlvbl1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5hcnJheSA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLm51bWJlciA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIjtcclxuXHRcdH07XHJcblx0XHRpc1tcImZ1bmN0aW9uXCJdID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuc3RyaW5nID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgU3RyaW5nXVwiOyAvLyYmICgoaXNFbXB0eSkpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFVuZGVmaW5lZF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ldmVudCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKS50b0xvd2VyQ2FzZSgpLnNlYXJjaChcImV2ZW50XCIpID4gLTE7XHJcblx0XHR9O1xyXG5cdFx0aXMuZGVmaW5lZCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0Ly9yZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBVbmRlZmluZWRdJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IE51bGxdJyAmJiBPYmplY3QgIT09ICcnO1xyXG5cdFx0XHRyZXR1cm4gX3ZhciAhPT0gdW5kZWZpbmVkICYmIF92YXIgIT09IG51bGwgJiYgX3ZhciAhPT0gXCJcIjtcclxuXHRcdH07XHJcblx0XHRpcy5qc29uID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLmVycm9yID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcblx0XHRpcy5zdGFydFdpdGggPSBmdW5jdGlvbihzdHIsIHByZWZpeCkge1xyXG5cdFx0XHRyZXR1cm4gc3RyLmluZGV4T2YocHJlZml4KSA9PT0gMDtcclxuXHRcdH07XHJcblx0XHRpcy5lbmRXaXRoID0gZnVuY3Rpb24oc3RyKSB7fTtcclxuXHJcblx0XHRpcy52YWx1ZSA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIF92YXIgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW1wdHkgPSBmdW5jdGlvbihvKSB7XHJcblx0XHRcdGlmIChfLmlzLm9iamVjdCgwKSkgZm9yICh2YXIgaSBpbiBvKSBpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRpZiAoXy5pcy5hcnJheShvKSkgcmV0dXJuIG8ubGVuZ3RoID09PSAwO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRpcy50cnV0aHkgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0aXMuc2NhbGFyID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHQvL1RPRE8gOiBpbXByb3ZlXHJcblx0XHRcdHJldHVybiBpcy5kZWZpbmVkKF92YXIpICYmIGlzLm5vdC5hcnJheShfdmFyKSAmJiBpcy5ub3Qub2JqZWN0KF92YXIpICYmIGlzLm5vdFtcImZ1bmN0aW9uXCJdKF92YXIpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnByb3RvdHlwZVByb3AgPSBmdW5jdGlvbihvYmosIHByb3ApIHtcclxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXSAmJiAhb2JqLmhhc093blByb3BlcnR5KHByb3ApO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsID0gZnVuY3Rpb24oZnYsIHN2KSB7XHJcblx0XHRcdC8vaWYgKCFmdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIGZ2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblx0XHRcdC8vaWYgKCFzdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIHN2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZnYpID09IEpTT04uc3RyaW5naWZ5KHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbFRleHQgPSBmdW5jdGlvbihmdiwgc3YpIHtcclxuXHRcdFx0cmV0dXJuIGZ2LnRvTG93ZXJDYXNlKGZ2KSA9PT0gc3YudG9Mb3dlckNhc2Uoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmNvbnRhaW4gPSBmdW5jdGlvbihzdHIsIHNlYXJjaFN0cikge1xyXG5cdFx0XHR2YXIgcmVnID0gXy5pcy5yZWdleChzZWFyY2hTdHIpID8gc2VhcmNoU3RyIDogbmV3IFJlZ0V4cChzZWFyY2hTdHIsIFwiZ1wiKTtcclxuXHRcdFx0cmV0dXJuIHN0ci5tYXRjaChyZWcpICYmIHN0ci5tYXRjaChyZWcpLmxlbmd0aCA+IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMucmVnZXggPSBmdW5jdGlvbihyKSB7XHJcblx0XHRcdHJldHVybiByLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiUmVnRXhwXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuc2FtZSA9IGZ1bmN0aW9uKGZ2LCBzdikge1xyXG5cdFx0XHQvL2lmICghZnYpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBmdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cdFx0XHQvL2lmICghc3YpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBzdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZ2LmlzRXF1YWxOb2RlID8gZnYuaXNFcXVhbE5vZGUoc3YpIDogZnYgPT09IHN2O1xyXG5cdFx0fTtcclxuXHRcdGlzLnBlcnNpYW5MZWFwWWVhciA9IGZ1bmN0aW9uKHllYXIpIHtcclxuXHRcdFx0cmV0dXJuICgoKHllYXIgLSAoeWVhciA+IDAgPyA0NzQgOiA0NzMpKSAlIDI4MjAgKyA0NzQgKyAzOCkgKiA2ODIpICUgMjgxNiA8IDY4MjtcclxuXHRcdH07XHJcblx0XHRpcy5nZW9yZ2lhbkxlYXBZZWFyID0gZnVuY3Rpb24oeWVhcikge1xyXG5cdFx0XHRyZXR1cm4geWVhciAlIDQgPT0gMCAmJiAhKHllYXIgJSAxMDAgPT0gMCAmJiB5ZWFyICUgNDAwICE9IDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgbm90ID0ge307XHJcblx0XHR2YXIgaTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpXHJcblx0XHRcdFx0XHRub3RbaV0gPSBmdW5jdGlvbihhLCBiLCBjKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAhaXNbaV0oYSwgYiwgYyk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHR9KShpKTtcclxuXHRcdGlzLm5vdCA9IG5vdDtcclxuXHJcblx0XHQvL1RPRE8gOiBpbXBlbGVtZW50XHJcblx0XHR2YXIgYWxsID0ge307XHJcblx0XHRmb3IgKGkgaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0aWYgKGlzLmhhc093blByb3BlcnR5KGkpKSBhbGxbaV0gPSBmdW5jdGlvbihvKSB7fTtcclxuXHRcdFx0fSkoaSk7XHJcblx0XHRpcy5hbGwgPSBhbGw7XHJcblxyXG5cdFx0dmFyIGFueSA9IHt9O1xyXG5cdFx0Zm9yICh2YXIgaiBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGopIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaikpIGFueVtqXSA9IGZ1bmN0aW9uKG8pIHt9O1xyXG5cdFx0XHR9KShqKTtcclxuXHRcdGlzLmFueSA9IGFueTtcclxuXHJcblx0XHRyZXR1cm4gaXM7XHJcblx0fSkodGhpcyk7XHJcblx0bWF0aCA9IChmdW5jdGlvbihfKSB7XHJcblx0XHR2YXIgbWF0aDogYW55ID0ge307XHJcblxyXG5cdFx0bWF0aC5tb2QgPSBmdW5jdGlvbihhLCBiKSB7XHJcblx0XHRcdHJldHVybiBhIC0gYiAqIE1hdGguZmxvb3IoYSAvIGIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gbWF0aDtcclxuXHR9KSh0aGlzKTtcclxuXHJcblx0ZGF0ZSA9IChmdW5jdGlvbihfKSB7XHJcblx0XHR2YXIgUEVSU0lBTl9FUE9DSCA9IDE5NDgzMjAuNSxcclxuXHRcdFx0R1JFR09SSUFOX0VQT0NIID0gMTcyMTQyNS41O1xyXG5cclxuXHRcdHZhciBkYXRlOiB7XHJcblx0XHRcdHBlcnNpYW46IHtcclxuXHRcdFx0XHRQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQ6IG51bWJlcltdO1xyXG5cdFx0XHRcdG5vdygpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0Zm9yZXRpbWVNb250aE9mWWVhcigpOiBzdHJpbmdbXTtcclxuXHRcdFx0XHRnZXREYXlzT2ZvTW9udGgoaWR4OiBudW1iZXIpOiBzdHJpbmdbXTtcclxuXHRcdFx0XHRjcmVhdGUoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZyk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRnZXREYXlPZldlZWsoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZyk6IG51bWJlcjtcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46ICh5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKSA9PiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0XHRqdWxpYW46ICh5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKSA9PiBudW1iZXI7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Z2VvcmdpYW46IHtcclxuXHRcdFx0XHQvLyBnZXRGdXR1cmVEYXRlKG46IG51bWJlcik6IERhdGUsXHJcblx0XHRcdFx0bm93KCk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRnZXRSZWxhdGl2ZURheShuOiBudW1iZXIpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0cGFyc2UoZGF0ZTogRGF0ZSk6IERhdGVDbGFzcztcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0cGVyc2lhbih5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdFx0anVsaWFuKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXI7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdFx0anVsaWFuOiB7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdHBlcnNpYW46IChqZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmdbXTtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoamQ6IG51bWJlciB8IHN0cmluZykgPT4gc3RyaW5nW107XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdFx0YXM6IHtcclxuXHRcdFx0XHREYXRlOiAoWyB5LCBtLCBkIF06IHN0cmluZ1tdKSA9PiBEYXRlO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSA9IHtcclxuXHRcdFx0cGVyc2lhbjoge1xyXG5cdFx0XHRcdFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVDogW10sXHJcblx0XHRcdFx0bm93OiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdGNyZWF0ZTogKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IG51bGwsXHJcblx0XHRcdFx0Z2V0RGF5c09mb01vbnRoOiAoaWR4OiBudW1iZXIpID0+IG51bGwsXHJcblx0XHRcdFx0Z2V0RGF5T2ZXZWVrOiAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4gbnVsbCxcclxuXHRcdFx0XHRmb3JldGltZU1vbnRoT2ZZZWFyOiAoKSA9PiBbXSxcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46ICgpID0+IG51bGwsXHJcblx0XHRcdFx0XHRqdWxpYW46ICgpID0+IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGp1bGlhbjoge1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRcdHBlcnNpYW46ICgpID0+IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdlb3JnaWFuOiB7XHJcblx0XHRcdFx0Ly8gZ2V0RnV0dXJlRGF0ZTogKG46IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRub3c6ICgpID0+IG51bGwsXHJcblx0XHRcdFx0Z2V0UmVsYXRpdmVEYXk6IChuOiBudW1iZXIpID0+IG51bGwsXHJcblx0XHRcdFx0cGFyc2U6IChkYXRlOiBEYXRlKSA9PiBudWxsLFxyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRwZXJzaWFuOiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdFx0anVsaWFuOiAoKSA9PiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhczoge1xyXG5cdFx0XHRcdERhdGU6ICgpID0+IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdC8vIGRhdGUucGVyc2lhbiA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5wZXJzaWFuLnRvID0ge307XHJcblx0XHQvLyBkYXRlLmdlb3JnaWFuID0ge307XHJcblx0XHQvLyBkYXRlLmdlb3JnaWFuLnRvID0ge307XHJcblx0XHQvLyBkYXRlLmp1bGlhbiA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5qdWxpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuYXMgPSB7fTtcclxuXHRcdGRhdGUuYXMuRGF0ZSA9IChbIHksIG0sIGQgXTogc3RyaW5nW10pOiBEYXRlID0+IG5ldyBEYXRlKHBhcnNlSW50KHkpLCBwYXJzZUludChtKSAtIDEsIHBhcnNlSW50KGQpKTtcclxuXHJcblx0XHR2YXIgaW5zZXJ0WmVybyA9IGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0aSA9IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0cmV0dXJuIGkubGVuZ3RoID09IDEgPyBcIjBcIiArIGkgOiBpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5QRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQgPSBbIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwIF07XHJcblx0XHRkYXRlLnBlcnNpYW4ubm93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmNyZWF0ZSA9ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiBuZXcgRGF0ZUNsYXNzKHksIG0sIGQpO1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmdldERheXNPZm9Nb250aCA9IChpZHg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHR2YXIgY291bnQgPSBQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlRbaWR4XTtcclxuXHRcdFx0bGV0IHJlcyA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGNvdW50ICsgMTsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGRheU5hbWUgPSBpIDwgMTAgPyBcIjBcIiArIGkgOiBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0cmVzLnB1c2goZGF5TmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uZ2V0RGF5T2ZXZWVrID0gKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0bGV0IHBlcnNpYW5Ib2xpZGF5ID0gZGF0ZS5wZXJzaWFuLmNyZWF0ZShcIjEzOTZcIiwgXCIxXCIsIFwiMVwiKTtcclxuXHRcdFx0bGV0IHBlcnNpYW5Ib2xpZGF5SW5HZW9yZ2lhbiA9IGRhdGUucGVyc2lhbi50by5nZW9yZ2lhbihcIjEzOTZcIiwgXCIxXCIsIFwiMVwiKS5uYXRpdmVEYXRlKCk7XHJcblxyXG5cdFx0XHR2YXIgbW9udGggPSArbSAtIDE7XHJcblx0XHRcdHZhciBkYXkgPSArZDtcclxuXHRcdFx0dmFyIGRheXNPZlllYXIgPSBQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQucmVkdWNlKChhLCBiLCBpZHgpID0+IHtcclxuXHRcdFx0XHRpZiAoaWR4ID09IG1vbnRoKSByZXR1cm4gYSArIGRheTtcclxuXHRcdFx0XHRpZiAoaWR4ID4gbW9udGgpIHJldHVybiBhO1xyXG5cdFx0XHRcdHJldHVybiBhICsgYjtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKGRheXNPZlllYXIgKyBwZXJzaWFuSG9saWRheUluR2VvcmdpYW4uZ2V0RGF5KCkgLSAxKSAlIDc7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmZvcmV0aW1lTW9udGhPZlllYXIgPSAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBQRVJTSUFOX01PTlRIX05BTUVTLmZpbHRlcigoaXRlbSwgaWR4KSA9PiBpZHggPD0gK2RhdGUucGVyc2lhbi5ub3coKS5tb250aCAtIDEpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRkYXRlLnBlcnNpYW4udG8uanVsaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR2YXIgZXBiYXNlLCBlcHllYXI7XHJcblx0XHRcdHllYXIgPSBwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRlcGJhc2UgPSB5ZWFyIC0gKHllYXIgPj0gMCA/IDQ3NCA6IDQ3Myk7XHJcblx0XHRcdGVweWVhciA9IDQ3NCArIF8ubWF0aC5tb2QoZXBiYXNlLCAyODIwKTtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0ZGF5ICtcclxuXHRcdFx0XHQobW9udGggPD0gNyA/IChtb250aCAtIDEpICogMzEgOiAobW9udGggLSAxKSAqIDMwICsgNikgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKGVweWVhciAqIDY4MiAtIDExMCkgLyAyODE2KSArXHJcblx0XHRcdFx0KGVweWVhciAtIDEpICogMzY1ICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKGVwYmFzZSAvIDI4MjApICogMTAyOTk4MyArXHJcblx0XHRcdFx0KFBFUlNJQU5fRVBPQ0ggLSAxKVxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi50by5nZW9yZ2lhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuKFxyXG5cdFx0XHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhci50b1N0cmluZygpKSwgcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSksIHBhcnNlSW50KGRheS50b1N0cmluZygpKSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3MoZGF0ZUFycmF5WzBdLCBwYXJzZUludChkYXRlQXJyYXlbMV0pLCBkYXRlQXJyYXlbMl0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRkYXRlLmdlb3JnaWFuLnBhcnNlID0gKGRhdGU6IERhdGUpOiBEYXRlQ2xhc3MgPT5cclxuXHRcdFx0bmV3IERhdGVDbGFzcyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhci50b1N0cmluZygpKTtcclxuXHRcdFx0bW9udGggPSBwYXJzZUludChtb250aC50b1N0cmluZygpKSArIDE7XHJcblx0XHRcdGRheSA9IHBhcnNlSW50KGRheS50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0R1JFR09SSUFOX0VQT0NIIC1cclxuXHRcdFx0XHQxICtcclxuXHRcdFx0XHQzNjUgKiAoeWVhciAtIDEpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KSArXHJcblx0XHRcdFx0LU1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKDM2NyAqIG1vbnRoIC0gMzYyKSAvIDEyICsgKG1vbnRoIDw9IDIgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gLTEgOiAtMikgKyBkYXkpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR2YXIgZGF0ZUFycmF5ID0gZGF0ZS5qdWxpYW4udG8ucGVyc2lhbihcclxuXHRcdFx0XHRkYXRlLmdlb3JnaWFuLnRvLmp1bGlhbihwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpLCBwYXJzZUludChtb250aC50b1N0cmluZygpKSwgcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhkYXRlQXJyYXlbMF0sIGRhdGVBcnJheVsxXSwgZGF0ZUFycmF5WzJdKTtcclxuXHRcdH07XHJcblx0XHQvLyBkYXRlLmdlb3JnaWFuLmdldEZ1dHVyZURhdGUgPSBmdW5jdGlvbiAobikge1xyXG5cdFx0Ly8gICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Ly8gICAgIHJldHVybiBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkgKyBuKTtcclxuXHRcdC8vIH1cclxuXHRcdGRhdGUuZ2VvcmdpYW4ubm93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCBub3cuZ2V0RGF0ZSgpKTtcclxuXHRcdH07XHJcblx0XHQoZGF0ZS5nZW9yZ2lhbi5nZXRSZWxhdGl2ZURheSA9IChuOiBudW1iZXIpID0+IHtcclxuXHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgLTEgKiBuICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xyXG5cdFx0fSksXHJcblx0XHRcdChkYXRlLmp1bGlhbi50by5nZW9yZ2lhbiA9IGZ1bmN0aW9uKGpkKSB7XHJcblx0XHRcdFx0dmFyIHdqZCxcclxuXHRcdFx0XHRcdGRlcG9jaCxcclxuXHRcdFx0XHRcdHF1YWRyaWNlbnQsXHJcblx0XHRcdFx0XHRkcWMsXHJcblx0XHRcdFx0XHRjZW50LFxyXG5cdFx0XHRcdFx0ZGNlbnQsXHJcblx0XHRcdFx0XHRxdWFkLFxyXG5cdFx0XHRcdFx0ZHF1YWQsXHJcblx0XHRcdFx0XHR5aW5kZXgsXHJcblx0XHRcdFx0XHRkeWluZGV4LFxyXG5cdFx0XHRcdFx0eWVhcixcclxuXHRcdFx0XHRcdG1vbnRoLFxyXG5cdFx0XHRcdFx0ZGF5LFxyXG5cdFx0XHRcdFx0eWVhcmRheSxcclxuXHRcdFx0XHRcdGxlYXBhZGo7XHJcblx0XHRcdFx0amQgPSBwYXJzZUZsb2F0KGpkLnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0XHR3amQgPSBNYXRoLmZsb29yKGpkIC0gMC41KSArIDAuNTtcclxuXHRcdFx0XHRkZXBvY2ggPSB3amQgLSBHUkVHT1JJQU5fRVBPQ0g7XHJcblx0XHRcdFx0cXVhZHJpY2VudCA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTQ2MDk3KTtcclxuXHRcdFx0XHRkcWMgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTQ2MDk3KTtcclxuXHRcdFx0XHRjZW50ID0gTWF0aC5mbG9vcihkcWMgLyAzNjUyNCk7XHJcblx0XHRcdFx0ZGNlbnQgPSBfLm1hdGgubW9kKGRxYywgMzY1MjQpO1xyXG5cdFx0XHRcdHF1YWQgPSBNYXRoLmZsb29yKGRjZW50IC8gMTQ2MSk7XHJcblx0XHRcdFx0ZHF1YWQgPSBfLm1hdGgubW9kKGRjZW50LCAxNDYxKTtcclxuXHRcdFx0XHR5aW5kZXggPSBNYXRoLmZsb29yKGRxdWFkIC8gMzY1KTtcclxuXHRcdFx0XHR5ZWFyID0gcXVhZHJpY2VudCAqIDQwMCArIGNlbnQgKiAxMDAgKyBxdWFkICogNCArIHlpbmRleDtcclxuXHRcdFx0XHRpZiAoIShjZW50ID09IDQgfHwgeWluZGV4ID09IDQpKSB7XHJcblx0XHRcdFx0XHR5ZWFyKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHllYXJkYXkgPSB3amQgLSBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIDAsIDEpO1xyXG5cdFx0XHRcdGxlYXBhZGogPSB3amQgPCBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIDMsIDEpID8gMCA6IF8uaXMuZ2VvcmdpYW5MZWFwWWVhcih5ZWFyKSA/IDEgOiAyO1xyXG5cdFx0XHRcdG1vbnRoID0gTWF0aC5mbG9vcigoKHllYXJkYXkgKyBsZWFwYWRqKSAqIDEyICsgMzczKSAvIDM2Nyk7XHJcblx0XHRcdFx0ZGF5ID0gd2pkIC0gXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCBtb250aCAtIDEsIDEpICsgMTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBcnJheShpbnNlcnRaZXJvKHllYXIpLCBpbnNlcnRaZXJvKG1vbnRoKSwgaW5zZXJ0WmVybyhkYXkpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRkYXRlLmp1bGlhbi50by5wZXJzaWFuID0gZnVuY3Rpb24oamQpIHtcclxuXHRcdFx0dmFyIHllYXIsIG1vbnRoLCBkYXksIGRlcG9jaCwgY3ljbGUsIGN5ZWFyLCB5Y3ljbGUsIGF1eDEsIGF1eDIsIHlkYXk7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZC50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdGpkID0gTWF0aC5mbG9vcihqZCkgKyAwLjU7XHJcblxyXG5cdFx0XHRkZXBvY2ggPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbig0NzUsIDEsIDEpO1xyXG5cdFx0XHRjeWNsZSA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTAyOTk4Myk7XHJcblx0XHRcdGN5ZWFyID0gXy5tYXRoLm1vZChkZXBvY2gsIDEwMjk5ODMpO1xyXG5cdFx0XHRpZiAoY3llYXIgPT0gMTAyOTk4Mikge1xyXG5cdFx0XHRcdHljeWNsZSA9IDI4MjA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXV4MSA9IE1hdGguZmxvb3IoY3llYXIgLyAzNjYpO1xyXG5cdFx0XHRcdGF1eDIgPSBfLm1hdGgubW9kKGN5ZWFyLCAzNjYpO1xyXG5cdFx0XHRcdHljeWNsZSA9IE1hdGguZmxvb3IoKDIxMzQgKiBhdXgxICsgMjgxNiAqIGF1eDIgKyAyODE1KSAvIDEwMjg1MjIpICsgYXV4MSArIDE7XHJcblx0XHRcdH1cclxuXHRcdFx0eWVhciA9IHljeWNsZSArIDI4MjAgKiBjeWNsZSArIDQ3NDtcclxuXHRcdFx0aWYgKHllYXIgPD0gMCkge1xyXG5cdFx0XHRcdHllYXItLTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZGF5ID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oeWVhciwgMSwgMSkgKyAxO1xyXG5cdFx0XHRtb250aCA9IHlkYXkgPD0gMTg2ID8gTWF0aC5jZWlsKHlkYXkgLyAzMSkgOiBNYXRoLmNlaWwoKHlkYXkgLSA2KSAvIDMwKTtcclxuXHRcdFx0ZGF5ID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oeWVhciwgbW9udGgsIDEpICsgMTtcclxuXHRcdFx0cmV0dXJuIG5ldyBBcnJheShpbnNlcnRaZXJvKHllYXIpLCBpbnNlcnRaZXJvKG1vbnRoKSwgaW5zZXJ0WmVybyhkYXkpKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGRhdGU7XHJcblx0fSkodGhpcyk7XHJcbn1cclxuIl19