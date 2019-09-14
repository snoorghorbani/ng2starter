/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
/** @type {?} */
export const PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
/** @type {?} */
export const PERSIAN_MONTH_NAMES = [
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
if (false) {
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
            /** @type {?} */
            var is = function (node, selector) {
                if (node.matches)
                    return node.matches(selector);
                /** @type {?} */
                var nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
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
                    for (var i in o)
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
                /** @type {?} */
                var reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
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
            /** @type {?} */
            var not = {};
            /** @type {?} */
            var i;
            for (i in is)
                (function (i) {
                    if (is.hasOwnProperty(i))
                        not[i] = function (a, b, c) {
                            return !is[i](a, b, c);
                        };
                })(i);
            is.not = not;
            //TODO : impelement
            /** @type {?} */
            var all = {};
            for (i in is)
                (function (i) {
                    if (is.hasOwnProperty(i))
                        all[i] = function (o) { };
                })(i);
            is.all = all;
            /** @type {?} */
            var any = {};
            for (var j in is)
                (function (j) {
                    if (is.hasOwnProperty(j))
                        any[j] = function (o) { };
                })(j);
            is.any = any;
            return is;
        })(this);
        this.math = (function (_) {
            /** @type {?} */
            var math = {};
            math.mod = function (a, b) {
                return a - b * Math.floor(a / b);
            };
            return math;
        })(this);
        this.date = (function (_) {
            /** @type {?} */
            var PERSIAN_EPOCH = 1948320.5;
            /** @type {?} */
            var GREGORIAN_EPOCH = 1721425.5;
            /** @type {?} */
            var date = {
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
            /** @type {?} */
            var insertZero = function (i) {
                i = i.toString();
                return i.length == 1 ? "0" + i : i;
            };
            date.persian.PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
            date.persian.now = function () {
                /** @type {?} */
                let now = new Date();
                return date.georgian.to.persian(now.getFullYear(), now.getMonth(), now.getDate());
            };
            date.persian.create = (y, m, d) => new DateClass(y, m, d);
            date.persian.getDaysOfoMonth = (idx) => {
                /** @type {?} */
                var count = PERSIAN_MONTH_DAYS_COUNT[idx];
                /** @type {?} */
                let res = [];
                for (let i = 1; i < count + 1; i++) {
                    /** @type {?} */
                    let dayName = i < 10 ? "0" + i : i.toString();
                    res.push(dayName);
                }
                return res;
            };
            date.persian.getDayOfWeek = (y, m, d) => {
                /** @type {?} */
                let persianHoliday = date.persian.create("1396", "1", "1");
                /** @type {?} */
                let persianHolidayInGeorgian = date.persian.to.georgian("1396", "1", "1").nativeDate();
                /** @type {?} */
                var month = +m - 1;
                /** @type {?} */
                var day = +d;
                /** @type {?} */
                var daysOfYear = PERSIAN_MONTH_DAYS_COUNT.reduce((a, b, idx) => {
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
                /** @type {?} */
                var epbase;
                /** @type {?} */
                var epyear;
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
                /** @type {?} */
                var dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
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
                /** @type {?} */
                var dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                return new DateClass(dateArray[0], dateArray[1], dateArray[2]);
            };
            // date.georgian.getFutureDate = function (n) {
            //     var now = new Date();
            //     return new Date(now.getFullYear(), now.getMonth(), now.getDate() + n);
            // }
            date.georgian.now = function () {
                /** @type {?} */
                let now = new Date();
                return new DateClass(now.getFullYear(), now.getMonth() + 1, now.getDate());
            };
            (date.georgian.getRelativeDay = (n) => {
                /** @type {?} */
                let date = new Date(Date.now() + -1 * n * 24 * 60 * 60 * 1000);
                return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
            }),
                (date.julian.to.georgian = function (jd) {
                    /** @type {?} */
                    var wjd;
                    /** @type {?} */
                    var depoch;
                    /** @type {?} */
                    var quadricent;
                    /** @type {?} */
                    var dqc;
                    /** @type {?} */
                    var cent;
                    /** @type {?} */
                    var dcent;
                    /** @type {?} */
                    var quad;
                    /** @type {?} */
                    var dquad;
                    /** @type {?} */
                    var yindex;
                    /** @type {?} */
                    var dyindex;
                    /** @type {?} */
                    var year;
                    /** @type {?} */
                    var month;
                    /** @type {?} */
                    var day;
                    /** @type {?} */
                    var yearday;
                    /** @type {?} */
                    var leapadj;
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
                /** @type {?} */
                var year;
                /** @type {?} */
                var month;
                /** @type {?} */
                var day;
                /** @type {?} */
                var depoch;
                /** @type {?} */
                var cycle;
                /** @type {?} */
                var cyear;
                /** @type {?} */
                var ycycle;
                /** @type {?} */
                var aux1;
                /** @type {?} */
                var aux2;
                /** @type {?} */
                var yday;
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
            },] }
];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UtilityService.prototype.is;
    /** @type {?} */
    UtilityService.prototype.math;
    /** @type {?} */
    UtilityService.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJzaGFyZWQvc3JjL2xpYi91dGlsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUUzQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTs7QUFDMUYsTUFBTSxPQUFPLG1CQUFtQixHQUFHO0lBQ2xDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsT0FBTztJQUNQLEtBQUs7SUFDTCxPQUFPO0lBQ1AsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMLElBQUk7SUFDSixNQUFNO0lBQ04sT0FBTztDQUNQO0FBQ0QsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQUtyQixZQUFZLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUFtQixHQUFHO1FBQzlCLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ0QsVUFBVTtRQUNULE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNEOzs7SUFoQkEseUJBQWE7O0lBQ2IsMEJBQWM7O0lBQ2QseUJBQWE7O0FBbUJkLE1BQU0sT0FBTyxjQUFjO0lBSDNCO1FBSUMsT0FBRSxHQUFHLENBQUMsVUFBUyxDQUFDLEVBQUUsU0FBUzs7Z0JBQ3RCLEVBQUUsR0FBUSxVQUFTLElBQUksRUFBRSxRQUFRO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7b0JBQzVDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEQsQ0FBQztZQUVELEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFJO2dCQUN4QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztZQUNuRSxDQUFDLENBQUM7WUFDRixFQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsR0FBRztnQkFDekIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7b0JBQUUsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssbUJBQW1CLENBQUM7O29CQUVyRixPQUFPLENBQ04sR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTO3dCQUN4QixHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVM7d0JBQ3RCLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDdEQsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxHQUFHO2dCQUN4QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLGlGQUFpRjtZQUNsRixDQUFDLENBQUM7WUFDRixFQUFFLENBQUMsY0FBYyxHQUFHLFVBQVMsR0FBRztnQkFDL0IsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUsseUJBQXlCLENBQUM7WUFDMUUsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLElBQUk7Z0JBQ3ZCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGdCQUFnQixDQUFDO1lBQ2xFLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFJO2dCQUN4QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztZQUNuRSxDQUFDLENBQUM7WUFDRixFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBUyxJQUFJO2dCQUM3QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxtQkFBbUIsQ0FBQztZQUNyRSxDQUFDLENBQUM7WUFDRixFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSTtnQkFDeEIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxpQkFBaUI7WUFDckYsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLFNBQVMsR0FBRyxVQUFTLElBQUk7Z0JBQzNCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9CQUFvQixDQUFDO1lBQ3RFLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBUyxJQUFJO2dCQUN2QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEYsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQUk7Z0JBQ3pCLG9KQUFvSjtnQkFDcEosT0FBTyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUMzRCxDQUFDLENBQUM7WUFDRixFQUFFLENBQUMsSUFBSSxHQUFHLGNBQVksQ0FBQyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsY0FBWSxDQUFDLENBQUM7WUFFekIsRUFBRSxDQUFDLFNBQVMsR0FBRyxVQUFTLEdBQUcsRUFBRSxNQUFNO2dCQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxHQUFHLElBQUcsQ0FBQyxDQUFDO1lBRTlCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBUyxJQUFJO2dCQUN2QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUFFLE9BQU8sS0FBSyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLElBQUksQ0FBQztZQUNiLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxNQUFNLEdBQUcsY0FBWSxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFTLElBQUk7Z0JBQ3hCLGdCQUFnQjtnQkFDaEIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEcsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLGFBQWEsR0FBRyxVQUFTLEdBQUcsRUFBRSxJQUFJO2dCQUNwQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLEVBQUUsRUFBRSxFQUFFO2dCQUN6QixpRUFBaUU7Z0JBQ2pFLGlFQUFpRTtnQkFFakUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2hFLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBUyxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2pFLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxHQUFHLEVBQUUsU0FBUzs7b0JBQy9CLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO2dCQUN4RSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBUyxDQUFDO2dCQUNwQixPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztZQUN4QyxDQUFDLENBQUM7WUFDRixFQUFFLENBQUMsSUFBSSxHQUFHLFVBQVMsRUFBRSxFQUFFLEVBQUU7Z0JBQ3hCLGlFQUFpRTtnQkFDakUsaUVBQWlFO2dCQUVqRSxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEQsQ0FBQyxDQUFDO1lBQ0YsRUFBRSxDQUFDLGVBQWUsR0FBRyxVQUFTLElBQUk7Z0JBQ2pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNqRixDQUFDLENBQUM7WUFDRixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsVUFBUyxJQUFJO2dCQUNsQyxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQzs7Z0JBRUUsR0FBRyxHQUFHLEVBQUU7O2dCQUNSLENBQUM7WUFDTCxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNYLENBQUMsVUFBUyxDQUFDO29CQUNWLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDeEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7O2dCQUdULEdBQUcsR0FBRyxFQUFFO1lBQ1osS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDWCxDQUFDLFVBQVMsQ0FBQztvQkFDVixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFTLENBQUMsSUFBRyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O2dCQUVULEdBQUcsR0FBRyxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNmLENBQUMsVUFBUyxDQUFDO29CQUNWLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVMsQ0FBQyxJQUFHLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUViLE9BQU8sRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDVCxTQUFJLEdBQUcsQ0FBQyxVQUFTLENBQUM7O2dCQUNiLElBQUksR0FBUSxFQUFFO1lBRWxCLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFVCxTQUFJLEdBQUcsQ0FBQyxVQUFTLENBQUM7O2dCQUNiLGFBQWEsR0FBRyxTQUFTOztnQkFDNUIsZUFBZSxHQUFHLFNBQVM7O2dCQUV4QixJQUFJLEdBZ0NKO2dCQUNILE9BQU8sRUFBRTtvQkFDUix3QkFBd0IsRUFBRSxFQUFFO29CQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtvQkFDZixNQUFNLEVBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSTtvQkFDakQsZUFBZSxFQUFFLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJO29CQUN0QyxZQUFZLEVBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSTtvQkFDdkQsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFDN0IsRUFBRSxFQUFFO3dCQUNILFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO3dCQUNwQixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtxQkFDbEI7aUJBQ0Q7Z0JBQ0QsTUFBTSxFQUFFO29CQUNQLEVBQUUsRUFBRTt3QkFDSCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTt3QkFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7cUJBQ25CO2lCQUNEO2dCQUNELFFBQVEsRUFBRTs7b0JBRVQsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7b0JBQ2YsY0FBYyxFQUFFLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJO29CQUNuQyxLQUFLLEVBQUUsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLElBQUk7b0JBQzNCLEVBQUUsRUFBRTt3QkFDSCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTt3QkFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7cUJBQ2xCO2lCQUNEO2dCQUNELEVBQUUsRUFBRTtvQkFDSCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtpQkFDaEI7YUFDRDtZQUNELHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQVksRUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUVoRyxVQUFVLEdBQUcsVUFBUyxDQUFDO2dCQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUUsQ0FBQztZQUMvRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRzs7b0JBQ2QsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTs7b0JBQzFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxHQUFHLENBQUM7O29CQUNyQyxHQUFHLEdBQUcsRUFBRTtnQkFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7d0JBQy9CLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQjtnQkFDRCxPQUFPLEdBQUcsQ0FBQztZQUNaLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTs7b0JBQzNELGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7b0JBQ3RELHdCQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRTs7b0JBRWxGLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDOztvQkFDZCxHQUFHLEdBQUcsQ0FBQyxDQUFDOztvQkFDUixVQUFVLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDOUQsSUFBSSxHQUFHLElBQUksS0FBSzt3QkFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2pDLElBQUksR0FBRyxHQUFHLEtBQUs7d0JBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUM7Z0JBRUYsT0FBTyxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZDLE9BQU8sbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEYsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHOztvQkFDN0MsTUFBTTs7b0JBQUUsTUFBTTtnQkFDbEIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDakMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbkMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFFL0IsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV4QyxPQUFPLENBQ04sR0FBRztvQkFDSCxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUN2QyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPO29CQUNuQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FDbkIsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxVQUFTLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRzs7b0JBQy9DLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUN2RztnQkFDRCxPQUFPLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFVLEVBQWEsRUFBRSxDQUMvQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUc7Z0JBQ2xELElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUUvQixPQUFPLENBQ04sZUFBZTtvQkFDZixDQUFDO29CQUNELEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FDckcsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRzs7b0JBQy9DLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUN4RztnQkFDRCxPQUFPLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDO1lBQ0YsK0NBQStDO1lBQy9DLDRCQUE0QjtZQUM1Qiw2RUFBNkU7WUFDN0UsSUFBSTtZQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHOztvQkFDZixHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDNUUsQ0FBQyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFOztvQkFDekMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUM5RCxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQztnQkFDRCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxVQUFTLEVBQUU7O3dCQUNqQyxHQUFHOzt3QkFDTixNQUFNOzt3QkFDTixVQUFVOzt3QkFDVixHQUFHOzt3QkFDSCxJQUFJOzt3QkFDSixLQUFLOzt3QkFDTCxJQUFJOzt3QkFDSixLQUFLOzt3QkFDTCxNQUFNOzt3QkFDTixPQUFPOzt3QkFDUCxJQUFJOzt3QkFDSixLQUFLOzt3QkFDTCxHQUFHOzt3QkFDSCxPQUFPOzt3QkFDUCxPQUFPO29CQUNSLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBRS9CLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2pDLE1BQU0sR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQ3pDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUNoQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNoQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLElBQUksR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7b0JBQ3pELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFO3dCQUNoQyxJQUFJLEVBQUUsQ0FBQztxQkFDUDtvQkFDRCxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEQsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUMzRCxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUU5RCxPQUFPLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLENBQUMsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLFVBQVMsRUFBRTs7b0JBQy9CLElBQUk7O29CQUFFLEtBQUs7O29CQUFFLEdBQUc7O29CQUFFLE1BQU07O29CQUFFLEtBQUs7O29CQUFFLEtBQUs7O29CQUFFLE1BQU07O29CQUFFLElBQUk7O29CQUFFLElBQUk7O29CQUFFLElBQUk7Z0JBQ3BFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBRS9CLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFFMUIsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztnQkFDckMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxLQUFLLElBQUksT0FBTyxFQUFFO29CQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNkO3FCQUFNO29CQUNOLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztpQkFDN0U7Z0JBQ0QsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO29CQUNkLElBQUksRUFBRSxDQUFDO2lCQUNQO2dCQUNELElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckQsS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELE9BQU8sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ1Q7OztZQWhZQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7O0lBRUEsNEJBZ0lTOztJQUNULDhCQVFTOztJQUVULDhCQWdQUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVCA9IFsgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCBdO1xyXG5leHBvcnQgY29uc3QgUEVSU0lBTl9NT05USF9OQU1FUyA9IFtcclxuXHRcItmB2LHZiNix2K/bjNmGXCIsXHJcblx0XCLYp9ix2K/bjNio2YfYtNiqXCIsXHJcblx0XCLYrtix2K/Yp9ivXCIsXHJcblx0XCLYqtuM2LFcIixcclxuXHRcItmF2LHYr9in2K9cIixcclxuXHRcIti02YfYsduM2YjYsVwiLFxyXG5cdFwi2YXZh9ixXCIsXHJcblx0XCLYotio2KfZhlwiLFxyXG5cdFwi2KLYsNixXCIsXHJcblx0XCLYr9uMXCIsXHJcblx0XCLYqNmH2YXZhlwiLFxyXG5cdFwi2KfYs9mB2YbYr1wiXHJcbl07XHJcbmV4cG9ydCBjbGFzcyBEYXRlQ2xhc3Mge1xyXG5cdHllYXI6IHN0cmluZztcclxuXHRtb250aDogc3RyaW5nO1xyXG5cdGRhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoeWVhciwgbW9udGgsIGRhdGUpIHtcclxuXHRcdHRoaXMueWVhciA9IHllYXI7XHJcblx0XHR0aGlzLm1vbnRoID0gbW9udGg7XHJcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xyXG5cdH1cclxuXHJcblx0ZnVsbERhdGUoc2VwcmF0b3I6IHN0cmluZyA9IFwiL1wiKSB7XHJcblx0XHRyZXR1cm4gWyB0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF0ZSBdLmpvaW4oc2VwcmF0b3IpO1xyXG5cdH1cclxuXHRuYXRpdmVEYXRlKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHRoaXMueWVhciksIHBhcnNlSW50KHRoaXMubW9udGgpIC0gMSwgcGFyc2VJbnQodGhpcy5kYXRlKSk7XHJcblx0fVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuXHRpcyA9IChmdW5jdGlvbihfLCB1bmRlZmluZWQpIHtcclxuXHRcdHZhciBpczogYW55ID0gZnVuY3Rpb24obm9kZSwgc2VsZWN0b3IpIHtcclxuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcykgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRcdHZhciBub2RlcyA9IHRoaXMuYXJnVG9BcnJheShub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cdFx0XHRyZXR1cm4gbm9kZXMuaW5kZXhPZihub2RlKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpcy5vYmplY3QgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubm9kZUxpc3QgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0aWYgKF8uaXMubm90LmllKCkpIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE5vZGVMaXN0XVwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCAmJlxyXG5cdFx0XHRcdFx0b2JqLnB1c2ggPT09IHVuZGVmaW5lZCAmJlxyXG5cdFx0XHRcdFx0KG9iai5sZW5ndGggPiAwID8gb2JqWzBdLnRhZ05hbWUgIT09IHVuZGVmaW5lZCA6IHRydWUpXHJcblx0XHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRpcy5lbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zZWFyY2goXCJFbGVtZW50XCIpID4gLTE7XHJcblx0XHRcdC8vcmV0dXJuICEhT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKCdlbGVtZW50Jyk7O1xyXG5cdFx0fTtcclxuXHRcdGlzLkhUTUxDb2xsZWN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmFycmF5ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubnVtYmVyID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgTnVtYmVyXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzW1wiZnVuY3Rpb25cIl0gPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5zdHJpbmcgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBTdHJpbmddXCI7IC8vJiYgKChpc0VtcHR5KSk7XHJcblx0XHR9O1xyXG5cdFx0aXMudW5kZWZpbmVkID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgVW5kZWZpbmVkXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmV2ZW50ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKFwiZXZlbnRcIikgPiAtMTtcclxuXHRcdH07XHJcblx0XHRpcy5kZWZpbmVkID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHQvL3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IFVuZGVmaW5lZF0nICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSAhPT0gJ1tvYmplY3QgTnVsbF0nICYmIE9iamVjdCAhPT0gJyc7XHJcblx0XHRcdHJldHVybiBfdmFyICE9PSB1bmRlZmluZWQgJiYgX3ZhciAhPT0gbnVsbCAmJiBfdmFyICE9PSBcIlwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmpzb24gPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0aXMuZXJyb3IgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuXHRcdGlzLnN0YXJ0V2l0aCA9IGZ1bmN0aW9uKHN0ciwgcHJlZml4KSB7XHJcblx0XHRcdHJldHVybiBzdHIuaW5kZXhPZihwcmVmaXgpID09PSAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVuZFdpdGggPSBmdW5jdGlvbihzdHIpIHt9O1xyXG5cclxuXHRcdGlzLnZhbHVlID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gX3ZhciA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lbXB0eSA9IGZ1bmN0aW9uKG8pIHtcclxuXHRcdFx0aWYgKF8uaXMub2JqZWN0KDApKSBmb3IgKHZhciBpIGluIG8pIGlmIChvLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdGlmIChfLmlzLmFycmF5KG8pKSByZXR1cm4gby5sZW5ndGggPT09IDA7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdGlzLnRydXRoeSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5zY2FsYXIgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdC8vVE9ETyA6IGltcHJvdmVcclxuXHRcdFx0cmV0dXJuIGlzLmRlZmluZWQoX3ZhcikgJiYgaXMubm90LmFycmF5KF92YXIpICYmIGlzLm5vdC5vYmplY3QoX3ZhcikgJiYgaXMubm90W1wiZnVuY3Rpb25cIl0oX3Zhcik7XHJcblx0XHR9O1xyXG5cdFx0aXMucHJvdG90eXBlUHJvcCA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xyXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdICYmICFvYmouaGFzT3duUHJvcGVydHkocHJvcCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXF1YWwgPSBmdW5jdGlvbihmdiwgc3YpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShmdikgPT0gSlNPTi5zdHJpbmdpZnkoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsVGV4dCA9IGZ1bmN0aW9uKGZ2LCBzdikge1xyXG5cdFx0XHRyZXR1cm4gZnYudG9Mb3dlckNhc2UoZnYpID09PSBzdi50b0xvd2VyQ2FzZShzdikgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuY29udGFpbiA9IGZ1bmN0aW9uKHN0ciwgc2VhcmNoU3RyKSB7XHJcblx0XHRcdHZhciByZWcgPSBfLmlzLnJlZ2V4KHNlYXJjaFN0cikgPyBzZWFyY2hTdHIgOiBuZXcgUmVnRXhwKHNlYXJjaFN0ciwgXCJnXCIpO1xyXG5cdFx0XHRyZXR1cm4gc3RyLm1hdGNoKHJlZykgJiYgc3RyLm1hdGNoKHJlZykubGVuZ3RoID4gMDtcclxuXHRcdH07XHJcblx0XHRpcy5yZWdleCA9IGZ1bmN0aW9uKHIpIHtcclxuXHRcdFx0cmV0dXJuIHIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJSZWdFeHBcIjtcclxuXHRcdH07XHJcblx0XHRpcy5zYW1lID0gZnVuY3Rpb24oZnYsIHN2KSB7XHJcblx0XHRcdC8vaWYgKCFmdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIGZ2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblx0XHRcdC8vaWYgKCFzdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIHN2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZnYuaXNFcXVhbE5vZGUgPyBmdi5pc0VxdWFsTm9kZShzdikgOiBmdiA9PT0gc3Y7XHJcblx0XHR9O1xyXG5cdFx0aXMucGVyc2lhbkxlYXBZZWFyID0gZnVuY3Rpb24oeWVhcikge1xyXG5cdFx0XHRyZXR1cm4gKCgoeWVhciAtICh5ZWFyID4gMCA/IDQ3NCA6IDQ3MykpICUgMjgyMCArIDQ3NCArIDM4KSAqIDY4MikgJSAyODE2IDwgNjgyO1xyXG5cdFx0fTtcclxuXHRcdGlzLmdlb3JnaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyKSB7XHJcblx0XHRcdHJldHVybiB5ZWFyICUgNCA9PSAwICYmICEoeWVhciAlIDEwMCA9PSAwICYmIHllYXIgJSA0MDAgIT0gMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBub3QgPSB7fTtcclxuXHRcdHZhciBpO1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSlcclxuXHRcdFx0XHRcdG5vdFtpXSA9IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICFpc1tpXShhLCBiLCBjKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMubm90ID0gbm90O1xyXG5cclxuXHRcdC8vVE9ETyA6IGltcGVsZW1lbnRcclxuXHRcdHZhciBhbGwgPSB7fTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpIGFsbFtpXSA9IGZ1bmN0aW9uKG8pIHt9O1xyXG5cdFx0XHR9KShpKTtcclxuXHRcdGlzLmFsbCA9IGFsbDtcclxuXHJcblx0XHR2YXIgYW55ID0ge307XHJcblx0XHRmb3IgKHZhciBqIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaikge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShqKSkgYW55W2pdID0gZnVuY3Rpb24obykge307XHJcblx0XHRcdH0pKGopO1xyXG5cdFx0aXMuYW55ID0gYW55O1xyXG5cclxuXHRcdHJldHVybiBpcztcclxuXHR9KSh0aGlzKTtcclxuXHRtYXRoID0gKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBtYXRoOiBhbnkgPSB7fTtcclxuXHJcblx0XHRtYXRoLm1vZCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRcdFx0cmV0dXJuIGEgLSBiICogTWF0aC5mbG9vcihhIC8gYik7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBtYXRoO1xyXG5cdH0pKHRoaXMpO1xyXG5cclxuXHRkYXRlID0gKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBQRVJTSUFOX0VQT0NIID0gMTk0ODMyMC41LFxyXG5cdFx0XHRHUkVHT1JJQU5fRVBPQ0ggPSAxNzIxNDI1LjU7XHJcblxyXG5cdFx0dmFyIGRhdGU6IHtcclxuXHRcdFx0cGVyc2lhbjoge1xyXG5cdFx0XHRcdFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVDogbnVtYmVyW107XHJcblx0XHRcdFx0bm93KCk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRmb3JldGltZU1vbnRoT2ZZZWFyKCk6IHN0cmluZ1tdO1xyXG5cdFx0XHRcdGdldERheXNPZm9Nb250aChpZHg6IG51bWJlcik6IHN0cmluZ1tdO1xyXG5cdFx0XHRcdGNyZWF0ZSh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGdldERheU9mV2Vlayh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKTogbnVtYmVyO1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpID0+IERhdGVDbGFzcztcclxuXHRcdFx0XHRcdGp1bGlhbjogKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpID0+IG51bWJlcjtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRnZW9yZ2lhbjoge1xyXG5cdFx0XHRcdC8vIGdldEZ1dHVyZURhdGUobjogbnVtYmVyKTogRGF0ZSxcclxuXHRcdFx0XHRub3coKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGdldFJlbGF0aXZlRGF5KG46IG51bWJlcik6IERhdGVDbGFzcztcclxuXHRcdFx0XHRwYXJzZShkYXRlOiBEYXRlKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRwZXJzaWFuKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0XHRqdWxpYW4oeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlcjtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRqdWxpYW46IHtcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0cGVyc2lhbjogKGpkOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZ1tdO1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46IChqZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmdbXTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRhczoge1xyXG5cdFx0XHRcdERhdGU6IChbIHksIG0sIGQgXTogc3RyaW5nW10pID0+IERhdGU7XHJcblx0XHRcdH07XHJcblx0XHR9ID0ge1xyXG5cdFx0XHRwZXJzaWFuOiB7XHJcblx0XHRcdFx0UEVSU0lBTl9NT05USF9EQVlTX0NPVU5UOiBbXSxcclxuXHRcdFx0XHRub3c6ICgpID0+IG51bGwsXHJcblx0XHRcdFx0Y3JlYXRlOiAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXREYXlzT2ZvTW9udGg6IChpZHg6IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXREYXlPZldlZWs6ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiBudWxsLFxyXG5cdFx0XHRcdGZvcmV0aW1lTW9udGhPZlllYXI6ICgpID0+IFtdLFxyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRcdGp1bGlhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0anVsaWFuOiB7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdFx0cGVyc2lhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2VvcmdpYW46IHtcclxuXHRcdFx0XHQvLyBnZXRGdXR1cmVEYXRlOiAobjogbnVtYmVyKSA9PiBudWxsLFxyXG5cdFx0XHRcdG5vdzogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXRSZWxhdGl2ZURheTogKG46IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRwYXJzZTogKGRhdGU6IERhdGUpID0+IG51bGwsXHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdHBlcnNpYW46ICgpID0+IG51bGwsXHJcblx0XHRcdFx0XHRqdWxpYW46ICgpID0+IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzOiB7XHJcblx0XHRcdFx0RGF0ZTogKCkgPT4gbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Ly8gZGF0ZS5wZXJzaWFuID0ge307XHJcblx0XHQvLyBkYXRlLnBlcnNpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4gPSB7fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuanVsaWFuID0ge307XHJcblx0XHQvLyBkYXRlLmp1bGlhbi50byA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5hcyA9IHt9O1xyXG5cdFx0ZGF0ZS5hcy5EYXRlID0gKFsgeSwgbSwgZCBdOiBzdHJpbmdbXSk6IERhdGUgPT4gbmV3IERhdGUocGFyc2VJbnQoeSksIHBhcnNlSW50KG0pIC0gMSwgcGFyc2VJbnQoZCkpO1xyXG5cclxuXHRcdHZhciBpbnNlcnRaZXJvID0gZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRpID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRyZXR1cm4gaS5sZW5ndGggPT0gMSA/IFwiMFwiICsgaSA6IGk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLlBFUlNJQU5fTU9OVEhfREFZU19DT1VOVCA9IFsgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAgXTtcclxuXHRcdGRhdGUucGVyc2lhbi5ub3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHJldHVybiBkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4obm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uY3JlYXRlID0gKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IG5ldyBEYXRlQ2xhc3MoeSwgbSwgZCk7XHJcblx0XHRkYXRlLnBlcnNpYW4uZ2V0RGF5c09mb01vbnRoID0gKGlkeDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdHZhciBjb3VudCA9IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVFtpZHhdO1xyXG5cdFx0XHRsZXQgcmVzID0gW107XHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgY291bnQgKyAxOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgZGF5TmFtZSA9IGkgPCAxMCA/IFwiMFwiICsgaSA6IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRyZXMucHVzaChkYXlOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5nZXREYXlPZldlZWsgPSAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRsZXQgcGVyc2lhbkhvbGlkYXkgPSBkYXRlLnBlcnNpYW4uY3JlYXRlKFwiMTM5NlwiLCBcIjFcIiwgXCIxXCIpO1xyXG5cdFx0XHRsZXQgcGVyc2lhbkhvbGlkYXlJbkdlb3JnaWFuID0gZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuKFwiMTM5NlwiLCBcIjFcIiwgXCIxXCIpLm5hdGl2ZURhdGUoKTtcclxuXHJcblx0XHRcdHZhciBtb250aCA9ICttIC0gMTtcclxuXHRcdFx0dmFyIGRheSA9ICtkO1xyXG5cdFx0XHR2YXIgZGF5c09mWWVhciA9IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVC5yZWR1Y2UoKGEsIGIsIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpZHggPT0gbW9udGgpIHJldHVybiBhICsgZGF5O1xyXG5cdFx0XHRcdGlmIChpZHggPiBtb250aCkgcmV0dXJuIGE7XHJcblx0XHRcdFx0cmV0dXJuIGEgKyBiO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiAoZGF5c09mWWVhciArIHBlcnNpYW5Ib2xpZGF5SW5HZW9yZ2lhbi5nZXREYXkoKSAtIDEpICUgNztcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uZm9yZXRpbWVNb250aE9mWWVhciA9ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIFBFUlNJQU5fTU9OVEhfTkFNRVMuZmlsdGVyKChpdGVtLCBpZHgpID0+IGlkeCA8PSArZGF0ZS5wZXJzaWFuLm5vdygpLm1vbnRoIC0gMSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBlcGJhc2UsIGVweWVhcjtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSk7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSk7XHJcblx0XHRcdGRheSA9IHBhcnNlSW50KGRheS50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdGVwYmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuXHRcdFx0ZXB5ZWFyID0gNDc0ICsgXy5tYXRoLm1vZChlcGJhc2UsIDI4MjApO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRkYXkgK1xyXG5cdFx0XHRcdChtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6IChtb250aCAtIDEpICogMzAgKyA2KSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoZXB5ZWFyICogNjgyIC0gMTEwKSAvIDI4MTYpICtcclxuXHRcdFx0XHQoZXB5ZWFyIC0gMSkgKiAzNjUgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoZXBiYXNlIC8gMjgyMCkgKiAxMDI5OTgzICtcclxuXHRcdFx0XHQoUEVSU0lBTl9FUE9DSCAtIDEpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR2YXIgZGF0ZUFycmF5ID0gZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4oXHJcblx0XHRcdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbihwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpLCBwYXJzZUludChtb250aC50b1N0cmluZygpKSwgcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhkYXRlQXJyYXlbMF0sIHBhcnNlSW50KGRhdGVBcnJheVsxXSksIGRhdGVBcnJheVsyXSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuZ2VvcmdpYW4ucGFyc2UgPSAoZGF0ZTogRGF0ZSk6IERhdGVDbGFzcyA9PlxyXG5cdFx0XHRuZXcgRGF0ZUNsYXNzKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHllYXIgPSBwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpICsgMTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRHUkVHT1JJQU5fRVBPQ0ggLVxyXG5cdFx0XHRcdDEgK1xyXG5cdFx0XHRcdDM2NSAqICh5ZWFyIC0gMSkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpICtcclxuXHRcdFx0XHQtTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoMzY3ICogbW9udGggLSAzNjIpIC8gMTIgKyAobW9udGggPD0gMiA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAtMSA6IC0yKSArIGRheSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5wZXJzaWFuKFxyXG5cdFx0XHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSksIHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpLCBwYXJzZUludChkYXkudG9TdHJpbmcoKSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKGRhdGVBcnJheVswXSwgZGF0ZUFycmF5WzFdLCBkYXRlQXJyYXlbMl0pO1xyXG5cdFx0fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4uZ2V0RnV0dXJlRGF0ZSA9IGZ1bmN0aW9uIChuKSB7XHJcblx0XHQvLyAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHQvLyAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSArIG4pO1xyXG5cdFx0Ly8gfVxyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi5ub3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIG5vdy5nZXREYXRlKCkpO1xyXG5cdFx0fTtcclxuXHRcdChkYXRlLmdlb3JnaWFuLmdldFJlbGF0aXZlRGF5ID0gKG46IG51bWJlcikgPT4ge1xyXG5cdFx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAtMSAqIG4gKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3MoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblx0XHR9KSxcclxuXHRcdFx0KGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oamQpIHtcclxuXHRcdFx0XHR2YXIgd2pkLFxyXG5cdFx0XHRcdFx0ZGVwb2NoLFxyXG5cdFx0XHRcdFx0cXVhZHJpY2VudCxcclxuXHRcdFx0XHRcdGRxYyxcclxuXHRcdFx0XHRcdGNlbnQsXHJcblx0XHRcdFx0XHRkY2VudCxcclxuXHRcdFx0XHRcdHF1YWQsXHJcblx0XHRcdFx0XHRkcXVhZCxcclxuXHRcdFx0XHRcdHlpbmRleCxcclxuXHRcdFx0XHRcdGR5aW5kZXgsXHJcblx0XHRcdFx0XHR5ZWFyLFxyXG5cdFx0XHRcdFx0bW9udGgsXHJcblx0XHRcdFx0XHRkYXksXHJcblx0XHRcdFx0XHR5ZWFyZGF5LFxyXG5cdFx0XHRcdFx0bGVhcGFkajtcclxuXHRcdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRcdHdqZCA9IE1hdGguZmxvb3IoamQgLSAwLjUpICsgMC41O1xyXG5cdFx0XHRcdGRlcG9jaCA9IHdqZCAtIEdSRUdPUklBTl9FUE9DSDtcclxuXHRcdFx0XHRxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG5cdFx0XHRcdGRxYyA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxNDYwOTcpO1xyXG5cdFx0XHRcdGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcclxuXHRcdFx0XHRkY2VudCA9IF8ubWF0aC5tb2QoZHFjLCAzNjUyNCk7XHJcblx0XHRcdFx0cXVhZCA9IE1hdGguZmxvb3IoZGNlbnQgLyAxNDYxKTtcclxuXHRcdFx0XHRkcXVhZCA9IF8ubWF0aC5tb2QoZGNlbnQsIDE0NjEpO1xyXG5cdFx0XHRcdHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG5cdFx0XHRcdHllYXIgPSBxdWFkcmljZW50ICogNDAwICsgY2VudCAqIDEwMCArIHF1YWQgKiA0ICsgeWluZGV4O1xyXG5cdFx0XHRcdGlmICghKGNlbnQgPT0gNCB8fCB5aW5kZXggPT0gNCkpIHtcclxuXHRcdFx0XHRcdHllYXIrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0eWVhcmRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMCwgMSk7XHJcblx0XHRcdFx0bGVhcGFkaiA9IHdqZCA8IF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMywgMSkgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gMSA6IDI7XHJcblx0XHRcdFx0bW9udGggPSBNYXRoLmZsb29yKCgoeWVhcmRheSArIGxlYXBhZGopICogMTIgKyAzNzMpIC8gMzY3KTtcclxuXHRcdFx0XHRkYXkgPSB3amQgLSBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoIC0gMSwgMSkgKyAxO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdGRhdGUuanVsaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbihqZCkge1xyXG5cdFx0XHR2YXIgeWVhciwgbW9udGgsIGRheSwgZGVwb2NoLCBjeWNsZSwgY3llYXIsIHljeWNsZSwgYXV4MSwgYXV4MiwgeWRheTtcclxuXHRcdFx0amQgPSBwYXJzZUZsb2F0KGpkLnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0amQgPSBNYXRoLmZsb29yKGpkKSArIDAuNTtcclxuXHJcblx0XHRcdGRlcG9jaCA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKDQ3NSwgMSwgMSk7XHJcblx0XHRcdGN5Y2xlID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxMDI5OTgzKTtcclxuXHRcdFx0Y3llYXIgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTAyOTk4Myk7XHJcblx0XHRcdGlmIChjeWVhciA9PSAxMDI5OTgyKSB7XHJcblx0XHRcdFx0eWN5Y2xlID0gMjgyMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhdXgxID0gTWF0aC5mbG9vcihjeWVhciAvIDM2Nik7XHJcblx0XHRcdFx0YXV4MiA9IF8ubWF0aC5tb2QoY3llYXIsIDM2Nik7XHJcblx0XHRcdFx0eWN5Y2xlID0gTWF0aC5mbG9vcigoMjEzNCAqIGF1eDEgKyAyODE2ICogYXV4MiArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyID0geWN5Y2xlICsgMjgyMCAqIGN5Y2xlICsgNDc0O1xyXG5cdFx0XHRpZiAoeWVhciA8PSAwKSB7XHJcblx0XHRcdFx0eWVhci0tO1xyXG5cdFx0XHR9XHJcblx0XHRcdHlkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKSArIDE7XHJcblx0XHRcdG1vbnRoID0geWRheSA8PSAxODYgPyBNYXRoLmNlaWwoeWRheSAvIDMxKSA6IE1hdGguY2VpbCgoeWRheSAtIDYpIC8gMzApO1xyXG5cdFx0XHRkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCBtb250aCwgMSkgKyAxO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZGF0ZTtcclxuXHR9KSh0aGlzKTtcclxufVxyXG4iXX0=