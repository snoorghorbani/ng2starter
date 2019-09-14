/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.is = ((/**
         * @param {?} _
         * @param {?} undefined
         * @return {?}
         */
        function (_, undefined) {
            /** @type {?} */
            var is = (/**
             * @param {?} node
             * @param {?} selector
             * @return {?}
             */
            function (node, selector) {
                if (node.matches)
                    return node.matches(selector);
                /** @type {?} */
                var nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
                return nodes.indexOf(node) > -1 ? true : false;
            });
            is.object = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return Object.prototype.toString.call(_var) === "[object Object]";
            });
            is.nodeList = (/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                if (_.is.not.ie())
                    return Object.prototype.toString.call(obj) === "[object NodeList]";
                else
                    return (obj.length !== undefined &&
                        obj.push === undefined &&
                        (obj.length > 0 ? obj[0].tagName !== undefined : true));
            });
            is.element = (/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                return Object.prototype.toString.call(obj).search("Element") > -1;
                //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
            });
            is.HTMLCollection = (/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                return Object.prototype.toString.call(obj) === "[object HTMLCollection]";
            });
            is.array = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return Object.prototype.toString.call(_var) === "[object Array]";
            });
            is.number = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return Object.prototype.toString.call(_var) === "[object Number]";
            });
            is["function"] = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return Object.prototype.toString.call(_var) === "[object Function]";
            });
            is.string = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return Object.prototype.toString.call(_var) === "[object String]"; //&& ((isEmpty));
            });
            is.undefined = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return Object.prototype.toString.call(_var) === "[object Undefined]";
            });
            is.event = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
            });
            is.defined = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                //return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
                return _var !== undefined && _var !== null && _var !== "";
            });
            is.json = (/**
             * @return {?}
             */
            function () { });
            is.error = (/**
             * @return {?}
             */
            function () { });
            is.startWith = (/**
             * @param {?} str
             * @param {?} prefix
             * @return {?}
             */
            function (str, prefix) {
                return str.indexOf(prefix) === 0;
            });
            is.endWith = (/**
             * @param {?} str
             * @return {?}
             */
            function (str) { });
            is.value = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                return _var ? true : false;
            });
            is.empty = (/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                if (_.is.object(0))
                    for (var i in o)
                        if (o.hasOwnProperty(i))
                            return false;
                if (_.is.array(o))
                    return o.length === 0;
                return true;
            });
            is.truthy = (/**
             * @return {?}
             */
            function () { });
            is.scalar = (/**
             * @param {?} _var
             * @return {?}
             */
            function (_var) {
                //TODO : improve
                return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
            });
            is.prototypeProp = (/**
             * @param {?} obj
             * @param {?} prop
             * @return {?}
             */
            function (obj, prop) {
                return obj[prop] && !obj.hasOwnProperty(prop);
            });
            is.equal = (/**
             * @param {?} fv
             * @param {?} sv
             * @return {?}
             */
            function (fv, sv) {
                //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                return JSON.stringify(fv) == JSON.stringify(sv) ? true : false;
            });
            is.equalText = (/**
             * @param {?} fv
             * @param {?} sv
             * @return {?}
             */
            function (fv, sv) {
                return fv.toLowerCase(fv) === sv.toLowerCase(sv) ? true : false;
            });
            is.contain = (/**
             * @param {?} str
             * @param {?} searchStr
             * @return {?}
             */
            function (str, searchStr) {
                /** @type {?} */
                var reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
                return str.match(reg) && str.match(reg).length > 0;
            });
            is.regex = (/**
             * @param {?} r
             * @return {?}
             */
            function (r) {
                return r.constructor.name === "RegExp";
            });
            is.same = (/**
             * @param {?} fv
             * @param {?} sv
             * @return {?}
             */
            function (fv, sv) {
                //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
            });
            is.persianLeapYear = (/**
             * @param {?} year
             * @return {?}
             */
            function (year) {
                return (((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682) % 2816 < 682;
            });
            is.georgianLeapYear = (/**
             * @param {?} year
             * @return {?}
             */
            function (year) {
                return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
            });
            /** @type {?} */
            var not = {};
            /** @type {?} */
            var i;
            for (i in is)
                ((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
                    if (is.hasOwnProperty(i))
                        not[i] = (/**
                         * @param {?} a
                         * @param {?} b
                         * @param {?} c
                         * @return {?}
                         */
                        function (a, b, c) {
                            return !is[i](a, b, c);
                        });
                }))(i);
            is.not = not;
            //TODO : impelement
            /** @type {?} */
            var all = {};
            for (i in is)
                ((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
                    if (is.hasOwnProperty(i))
                        all[i] = (/**
                         * @param {?} o
                         * @return {?}
                         */
                        function (o) { });
                }))(i);
            is.all = all;
            /** @type {?} */
            var any = {};
            for (var j in is)
                ((/**
                 * @param {?} j
                 * @return {?}
                 */
                function (j) {
                    if (is.hasOwnProperty(j))
                        any[j] = (/**
                         * @param {?} o
                         * @return {?}
                         */
                        function (o) { });
                }))(j);
            is.any = any;
            return is;
        }))(this);
        this.math = ((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            /** @type {?} */
            var math = {};
            math.mod = (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return a - b * Math.floor(a / b);
            });
            return math;
        }))(this);
        this.date = ((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            /** @type {?} */
            var PERSIAN_EPOCH = 1948320.5;
            /** @type {?} */
            var GREGORIAN_EPOCH = 1721425.5;
            /** @type {?} */
            var date = {
                persian: {
                    PERSIAN_MONTH_DAYS_COUNT: [],
                    now: (/**
                     * @return {?}
                     */
                    () => null),
                    create: (/**
                     * @param {?} y
                     * @param {?} m
                     * @param {?} d
                     * @return {?}
                     */
                    (y, m, d) => null),
                    getDaysOfoMonth: (/**
                     * @param {?} idx
                     * @return {?}
                     */
                    (idx) => null),
                    getDayOfWeek: (/**
                     * @param {?} y
                     * @param {?} m
                     * @param {?} d
                     * @return {?}
                     */
                    (y, m, d) => null),
                    foretimeMonthOfYear: (/**
                     * @return {?}
                     */
                    () => []),
                    to: {
                        georgian: (/**
                         * @return {?}
                         */
                        () => null),
                        julian: (/**
                         * @return {?}
                         */
                        () => null)
                    }
                },
                julian: {
                    to: {
                        georgian: (/**
                         * @return {?}
                         */
                        () => null),
                        persian: (/**
                         * @return {?}
                         */
                        () => null)
                    }
                },
                georgian: {
                    // getFutureDate: (n: number) => null,
                    now: (/**
                     * @return {?}
                     */
                    () => null),
                    getRelativeDay: (/**
                     * @param {?} n
                     * @return {?}
                     */
                    (n) => null),
                    parse: (/**
                     * @param {?} date
                     * @return {?}
                     */
                    (date) => null),
                    to: {
                        persian: (/**
                         * @return {?}
                         */
                        () => null),
                        julian: (/**
                         * @return {?}
                         */
                        () => null)
                    }
                },
                as: {
                    Date: (/**
                     * @return {?}
                     */
                    () => null)
                }
            };
            // date.persian = {};
            // date.persian.to = {};
            // date.georgian = {};
            // date.georgian.to = {};
            // date.julian = {};
            // date.julian.to = {};
            // date.as = {};
            date.as.Date = (/**
             * @param {?} __0
             * @return {?}
             */
            ([y, m, d]) => new Date(parseInt(y), parseInt(m) - 1, parseInt(d)));
            /** @type {?} */
            var insertZero = (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                i = i.toString();
                return i.length == 1 ? "0" + i : i;
            });
            date.persian.PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
            date.persian.now = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let now = new Date();
                return date.georgian.to.persian(now.getFullYear(), now.getMonth(), now.getDate());
            });
            date.persian.create = (/**
             * @param {?} y
             * @param {?} m
             * @param {?} d
             * @return {?}
             */
            (y, m, d) => new DateClass(y, m, d));
            date.persian.getDaysOfoMonth = (/**
             * @param {?} idx
             * @return {?}
             */
            (idx) => {
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
            });
            date.persian.getDayOfWeek = (/**
             * @param {?} y
             * @param {?} m
             * @param {?} d
             * @return {?}
             */
            (y, m, d) => {
                /** @type {?} */
                let persianHoliday = date.persian.create("1396", "1", "1");
                /** @type {?} */
                let persianHolidayInGeorgian = date.persian.to.georgian("1396", "1", "1").nativeDate();
                /** @type {?} */
                var month = +m - 1;
                /** @type {?} */
                var day = +d;
                /** @type {?} */
                var daysOfYear = PERSIAN_MONTH_DAYS_COUNT.reduce((/**
                 * @param {?} a
                 * @param {?} b
                 * @param {?} idx
                 * @return {?}
                 */
                (a, b, idx) => {
                    if (idx == month)
                        return a + day;
                    if (idx > month)
                        return a;
                    return a + b;
                }));
                return (daysOfYear + persianHolidayInGeorgian.getDay() - 1) % 7;
            });
            date.persian.foretimeMonthOfYear = (/**
             * @return {?}
             */
            () => {
                return PERSIAN_MONTH_NAMES.filter((/**
                 * @param {?} item
                 * @param {?} idx
                 * @return {?}
                 */
                (item, idx) => idx <= +date.persian.now().month - 1));
            });
            date.persian.to.julian = (/**
             * @param {?} year
             * @param {?} month
             * @param {?} day
             * @return {?}
             */
            function (year, month, day) {
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
            });
            date.persian.to.georgian = (/**
             * @param {?} year
             * @param {?} month
             * @param {?} day
             * @return {?}
             */
            function (year, month, day) {
                /** @type {?} */
                var dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                return new DateClass(dateArray[0], parseInt(dateArray[1]), dateArray[2]);
            });
            date.georgian.parse = (/**
             * @param {?} date
             * @return {?}
             */
            (date) => new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate()));
            date.georgian.to.julian = (/**
             * @param {?} year
             * @param {?} month
             * @param {?} day
             * @return {?}
             */
            function (year, month, day) {
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
            });
            date.georgian.to.persian = (/**
             * @param {?} year
             * @param {?} month
             * @param {?} day
             * @return {?}
             */
            function (year, month, day) {
                /** @type {?} */
                var dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                return new DateClass(dateArray[0], dateArray[1], dateArray[2]);
            });
            // date.georgian.getFutureDate = function (n) {
            //     var now = new Date();
            //     return new Date(now.getFullYear(), now.getMonth(), now.getDate() + n);
            // }
            date.georgian.now = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let now = new Date();
                return new DateClass(now.getFullYear(), now.getMonth() + 1, now.getDate());
            });
            (date.georgian.getRelativeDay = (/**
             * @param {?} n
             * @return {?}
             */
            (n) => {
                /** @type {?} */
                let date = new Date(Date.now() + -1 * n * 24 * 60 * 60 * 1000);
                return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
            })),
                (date.julian.to.georgian = (/**
                 * @param {?} jd
                 * @return {?}
                 */
                function (jd) {
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
                }));
            date.julian.to.persian = (/**
             * @param {?} jd
             * @return {?}
             */
            function (jd) {
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
            });
            return date;
        }))(this);
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UtilityService.prototype.is;
    /** @type {?} */
    UtilityService.prototype.math;
    /** @type {?} */
    UtilityService.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFM0MsTUFBTSxPQUFPLHdCQUF3QixHQUFHLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUU7O0FBQzFGLE1BQU0sT0FBTyxtQkFBbUIsR0FBRztJQUNsQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxLQUFLO0lBQ0wsT0FBTztJQUNQLFFBQVE7SUFDUixLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxJQUFJO0lBQ0osTUFBTTtJQUNOLE9BQU87Q0FDUDtBQUNELE1BQU0sT0FBTyxTQUFTOzs7Ozs7SUFLckIsWUFBWSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUk7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBbUIsR0FBRztRQUM5QixPQUFPLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUNELFVBQVU7UUFDVCxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxD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LENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ1Q7OztZQWhZQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7O0lBRUEsNEJBZ0lTOztJQUNULDhCQVFTOztJQUVULDhCQWdQUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVCA9IFsgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCBdO1xyXG5leHBvcnQgY29uc3QgUEVSU0lBTl9NT05USF9OQU1FUyA9IFtcclxuXHRcItmB2LHZiNix2K/bjNmGXCIsXHJcblx0XCLYp9ix2K/bjNio2YfYtNiqXCIsXHJcblx0XCLYrtix2K/Yp9ivXCIsXHJcblx0XCLYqtuM2LFcIixcclxuXHRcItmF2LHYr9in2K9cIixcclxuXHRcIti02YfYsduM2YjYsVwiLFxyXG5cdFwi2YXZh9ixXCIsXHJcblx0XCLYotio2KfZhlwiLFxyXG5cdFwi2KLYsNixXCIsXHJcblx0XCLYr9uMXCIsXHJcblx0XCLYqNmH2YXZhlwiLFxyXG5cdFwi2KfYs9mB2YbYr1wiXHJcbl07XHJcbmV4cG9ydCBjbGFzcyBEYXRlQ2xhc3Mge1xyXG5cdHllYXI6IHN0cmluZztcclxuXHRtb250aDogc3RyaW5nO1xyXG5cdGRhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoeWVhciwgbW9udGgsIGRhdGUpIHtcclxuXHRcdHRoaXMueWVhciA9IHllYXI7XHJcblx0XHR0aGlzLm1vbnRoID0gbW9udGg7XHJcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xyXG5cdH1cclxuXHJcblx0ZnVsbERhdGUoc2VwcmF0b3I6IHN0cmluZyA9IFwiL1wiKSB7XHJcblx0XHRyZXR1cm4gWyB0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF0ZSBdLmpvaW4oc2VwcmF0b3IpO1xyXG5cdH1cclxuXHRuYXRpdmVEYXRlKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHRoaXMueWVhciksIHBhcnNlSW50KHRoaXMubW9udGgpIC0gMSwgcGFyc2VJbnQodGhpcy5kYXRlKSk7XHJcblx0fVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuXHRpcyA9IChmdW5jdGlvbihfLCB1bmRlZmluZWQpIHtcclxuXHRcdHZhciBpczogYW55ID0gZnVuY3Rpb24obm9kZSwgc2VsZWN0b3IpIHtcclxuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcykgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRcdHZhciBub2RlcyA9IHRoaXMuYXJnVG9BcnJheShub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cdFx0XHRyZXR1cm4gbm9kZXMuaW5kZXhPZihub2RlKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpcy5vYmplY3QgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubm9kZUxpc3QgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0aWYgKF8uaXMubm90LmllKCkpIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE5vZGVMaXN0XVwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCAmJlxyXG5cdFx0XHRcdFx0b2JqLnB1c2ggPT09IHVuZGVmaW5lZCAmJlxyXG5cdFx0XHRcdFx0KG9iai5sZW5ndGggPiAwID8gb2JqWzBdLnRhZ05hbWUgIT09IHVuZGVmaW5lZCA6IHRydWUpXHJcblx0XHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRpcy5lbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zZWFyY2goXCJFbGVtZW50XCIpID4gLTE7XHJcblx0XHRcdC8vcmV0dXJuICEhT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKCdlbGVtZW50Jyk7O1xyXG5cdFx0fTtcclxuXHRcdGlzLkhUTUxDb2xsZWN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmFycmF5ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubnVtYmVyID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgTnVtYmVyXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzW1wiZnVuY3Rpb25cIl0gPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5zdHJpbmcgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBTdHJpbmddXCI7IC8vJiYgKChpc0VtcHR5KSk7XHJcblx0XHR9O1xyXG5cdFx0aXMudW5kZWZpbmVkID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgVW5kZWZpbmVkXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmV2ZW50ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKFwiZXZlbnRcIikgPiAtMTtcclxuXHRcdH07XHJcblx0XHRpcy5kZWZpbmVkID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHQvL3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IFVuZGVmaW5lZF0nICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSAhPT0gJ1tvYmplY3QgTnVsbF0nICYmIE9iamVjdCAhPT0gJyc7XHJcblx0XHRcdHJldHVybiBfdmFyICE9PSB1bmRlZmluZWQgJiYgX3ZhciAhPT0gbnVsbCAmJiBfdmFyICE9PSBcIlwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmpzb24gPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0aXMuZXJyb3IgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuXHRcdGlzLnN0YXJ0V2l0aCA9IGZ1bmN0aW9uKHN0ciwgcHJlZml4KSB7XHJcblx0XHRcdHJldHVybiBzdHIuaW5kZXhPZihwcmVmaXgpID09PSAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVuZFdpdGggPSBmdW5jdGlvbihzdHIpIHt9O1xyXG5cclxuXHRcdGlzLnZhbHVlID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gX3ZhciA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lbXB0eSA9IGZ1bmN0aW9uKG8pIHtcclxuXHRcdFx0aWYgKF8uaXMub2JqZWN0KDApKSBmb3IgKHZhciBpIGluIG8pIGlmIChvLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdGlmIChfLmlzLmFycmF5KG8pKSByZXR1cm4gby5sZW5ndGggPT09IDA7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdGlzLnRydXRoeSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5zY2FsYXIgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdC8vVE9ETyA6IGltcHJvdmVcclxuXHRcdFx0cmV0dXJuIGlzLmRlZmluZWQoX3ZhcikgJiYgaXMubm90LmFycmF5KF92YXIpICYmIGlzLm5vdC5vYmplY3QoX3ZhcikgJiYgaXMubm90W1wiZnVuY3Rpb25cIl0oX3Zhcik7XHJcblx0XHR9O1xyXG5cdFx0aXMucHJvdG90eXBlUHJvcCA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xyXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdICYmICFvYmouaGFzT3duUHJvcGVydHkocHJvcCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXF1YWwgPSBmdW5jdGlvbihmdiwgc3YpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShmdikgPT0gSlNPTi5zdHJpbmdpZnkoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsVGV4dCA9IGZ1bmN0aW9uKGZ2LCBzdikge1xyXG5cdFx0XHRyZXR1cm4gZnYudG9Mb3dlckNhc2UoZnYpID09PSBzdi50b0xvd2VyQ2FzZShzdikgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuY29udGFpbiA9IGZ1bmN0aW9uKHN0ciwgc2VhcmNoU3RyKSB7XHJcblx0XHRcdHZhciByZWcgPSBfLmlzLnJlZ2V4KHNlYXJjaFN0cikgPyBzZWFyY2hTdHIgOiBuZXcgUmVnRXhwKHNlYXJjaFN0ciwgXCJnXCIpO1xyXG5cdFx0XHRyZXR1cm4gc3RyLm1hdGNoKHJlZykgJiYgc3RyLm1hdGNoKHJlZykubGVuZ3RoID4gMDtcclxuXHRcdH07XHJcblx0XHRpcy5yZWdleCA9IGZ1bmN0aW9uKHIpIHtcclxuXHRcdFx0cmV0dXJuIHIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJSZWdFeHBcIjtcclxuXHRcdH07XHJcblx0XHRpcy5zYW1lID0gZnVuY3Rpb24oZnYsIHN2KSB7XHJcblx0XHRcdC8vaWYgKCFmdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIGZ2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblx0XHRcdC8vaWYgKCFzdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIHN2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZnYuaXNFcXVhbE5vZGUgPyBmdi5pc0VxdWFsTm9kZShzdikgOiBmdiA9PT0gc3Y7XHJcblx0XHR9O1xyXG5cdFx0aXMucGVyc2lhbkxlYXBZZWFyID0gZnVuY3Rpb24oeWVhcikge1xyXG5cdFx0XHRyZXR1cm4gKCgoeWVhciAtICh5ZWFyID4gMCA/IDQ3NCA6IDQ3MykpICUgMjgyMCArIDQ3NCArIDM4KSAqIDY4MikgJSAyODE2IDwgNjgyO1xyXG5cdFx0fTtcclxuXHRcdGlzLmdlb3JnaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyKSB7XHJcblx0XHRcdHJldHVybiB5ZWFyICUgNCA9PSAwICYmICEoeWVhciAlIDEwMCA9PSAwICYmIHllYXIgJSA0MDAgIT0gMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBub3QgPSB7fTtcclxuXHRcdHZhciBpO1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSlcclxuXHRcdFx0XHRcdG5vdFtpXSA9IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICFpc1tpXShhLCBiLCBjKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMubm90ID0gbm90O1xyXG5cclxuXHRcdC8vVE9ETyA6IGltcGVsZW1lbnRcclxuXHRcdHZhciBhbGwgPSB7fTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpIGFsbFtpXSA9IGZ1bmN0aW9uKG8pIHt9O1xyXG5cdFx0XHR9KShpKTtcclxuXHRcdGlzLmFsbCA9IGFsbDtcclxuXHJcblx0XHR2YXIgYW55ID0ge307XHJcblx0XHRmb3IgKHZhciBqIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaikge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShqKSkgYW55W2pdID0gZnVuY3Rpb24obykge307XHJcblx0XHRcdH0pKGopO1xyXG5cdFx0aXMuYW55ID0gYW55O1xyXG5cclxuXHRcdHJldHVybiBpcztcclxuXHR9KSh0aGlzKTtcclxuXHRtYXRoID0gKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBtYXRoOiBhbnkgPSB7fTtcclxuXHJcblx0XHRtYXRoLm1vZCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRcdFx0cmV0dXJuIGEgLSBiICogTWF0aC5mbG9vcihhIC8gYik7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBtYXRoO1xyXG5cdH0pKHRoaXMpO1xyXG5cclxuXHRkYXRlID0gKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBQRVJTSUFOX0VQT0NIID0gMTk0ODMyMC41LFxyXG5cdFx0XHRHUkVHT1JJQU5fRVBPQ0ggPSAxNzIxNDI1LjU7XHJcblxyXG5cdFx0dmFyIGRhdGU6IHtcclxuXHRcdFx0cGVyc2lhbjoge1xyXG5cdFx0XHRcdFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVDogbnVtYmVyW107XHJcblx0XHRcdFx0bm93KCk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRmb3JldGltZU1vbnRoT2ZZZWFyKCk6IHN0cmluZ1tdO1xyXG5cdFx0XHRcdGdldERheXNPZm9Nb250aChpZHg6IG51bWJlcik6IHN0cmluZ1tdO1xyXG5cdFx0XHRcdGNyZWF0ZSh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGdldERheU9mV2Vlayh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKTogbnVtYmVyO1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpID0+IERhdGVDbGFzcztcclxuXHRcdFx0XHRcdGp1bGlhbjogKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpID0+IG51bWJlcjtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRnZW9yZ2lhbjoge1xyXG5cdFx0XHRcdC8vIGdldEZ1dHVyZURhdGUobjogbnVtYmVyKTogRGF0ZSxcclxuXHRcdFx0XHRub3coKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGdldFJlbGF0aXZlRGF5KG46IG51bWJlcik6IERhdGVDbGFzcztcclxuXHRcdFx0XHRwYXJzZShkYXRlOiBEYXRlKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRwZXJzaWFuKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0XHRqdWxpYW4oeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlcjtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRqdWxpYW46IHtcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0cGVyc2lhbjogKGpkOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZ1tdO1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46IChqZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmdbXTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRhczoge1xyXG5cdFx0XHRcdERhdGU6IChbIHksIG0sIGQgXTogc3RyaW5nW10pID0+IERhdGU7XHJcblx0XHRcdH07XHJcblx0XHR9ID0ge1xyXG5cdFx0XHRwZXJzaWFuOiB7XHJcblx0XHRcdFx0UEVSU0lBTl9NT05USF9EQVlTX0NPVU5UOiBbXSxcclxuXHRcdFx0XHRub3c6ICgpID0+IG51bGwsXHJcblx0XHRcdFx0Y3JlYXRlOiAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXREYXlzT2ZvTW9udGg6IChpZHg6IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXREYXlPZldlZWs6ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiBudWxsLFxyXG5cdFx0XHRcdGZvcmV0aW1lTW9udGhPZlllYXI6ICgpID0+IFtdLFxyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRcdGp1bGlhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0anVsaWFuOiB7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdFx0cGVyc2lhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2VvcmdpYW46IHtcclxuXHRcdFx0XHQvLyBnZXRGdXR1cmVEYXRlOiAobjogbnVtYmVyKSA9PiBudWxsLFxyXG5cdFx0XHRcdG5vdzogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXRSZWxhdGl2ZURheTogKG46IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRwYXJzZTogKGRhdGU6IERhdGUpID0+IG51bGwsXHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdHBlcnNpYW46ICgpID0+IG51bGwsXHJcblx0XHRcdFx0XHRqdWxpYW46ICgpID0+IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzOiB7XHJcblx0XHRcdFx0RGF0ZTogKCkgPT4gbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Ly8gZGF0ZS5wZXJzaWFuID0ge307XHJcblx0XHQvLyBkYXRlLnBlcnNpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4gPSB7fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuanVsaWFuID0ge307XHJcblx0XHQvLyBkYXRlLmp1bGlhbi50byA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5hcyA9IHt9O1xyXG5cdFx0ZGF0ZS5hcy5EYXRlID0gKFsgeSwgbSwgZCBdOiBzdHJpbmdbXSk6IERhdGUgPT4gbmV3IERhdGUocGFyc2VJbnQoeSksIHBhcnNlSW50KG0pIC0gMSwgcGFyc2VJbnQoZCkpO1xyXG5cclxuXHRcdHZhciBpbnNlcnRaZXJvID0gZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRpID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRyZXR1cm4gaS5sZW5ndGggPT0gMSA/IFwiMFwiICsgaSA6IGk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLlBFUlNJQU5fTU9OVEhfREFZU19DT1VOVCA9IFsgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAgXTtcclxuXHRcdGRhdGUucGVyc2lhbi5ub3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHJldHVybiBkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4obm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uY3JlYXRlID0gKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IG5ldyBEYXRlQ2xhc3MoeSwgbSwgZCk7XHJcblx0XHRkYXRlLnBlcnNpYW4uZ2V0RGF5c09mb01vbnRoID0gKGlkeDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdHZhciBjb3VudCA9IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVFtpZHhdO1xyXG5cdFx0XHRsZXQgcmVzID0gW107XHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgY291bnQgKyAxOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgZGF5TmFtZSA9IGkgPCAxMCA/IFwiMFwiICsgaSA6IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRyZXMucHVzaChkYXlOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5nZXREYXlPZldlZWsgPSAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRsZXQgcGVyc2lhbkhvbGlkYXkgPSBkYXRlLnBlcnNpYW4uY3JlYXRlKFwiMTM5NlwiLCBcIjFcIiwgXCIxXCIpO1xyXG5cdFx0XHRsZXQgcGVyc2lhbkhvbGlkYXlJbkdlb3JnaWFuID0gZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuKFwiMTM5NlwiLCBcIjFcIiwgXCIxXCIpLm5hdGl2ZURhdGUoKTtcclxuXHJcblx0XHRcdHZhciBtb250aCA9ICttIC0gMTtcclxuXHRcdFx0dmFyIGRheSA9ICtkO1xyXG5cdFx0XHR2YXIgZGF5c09mWWVhciA9IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVC5yZWR1Y2UoKGEsIGIsIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpZHggPT0gbW9udGgpIHJldHVybiBhICsgZGF5O1xyXG5cdFx0XHRcdGlmIChpZHggPiBtb250aCkgcmV0dXJuIGE7XHJcblx0XHRcdFx0cmV0dXJuIGEgKyBiO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiAoZGF5c09mWWVhciArIHBlcnNpYW5Ib2xpZGF5SW5HZW9yZ2lhbi5nZXREYXkoKSAtIDEpICUgNztcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uZm9yZXRpbWVNb250aE9mWWVhciA9ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIFBFUlNJQU5fTU9OVEhfTkFNRVMuZmlsdGVyKChpdGVtLCBpZHgpID0+IGlkeCA8PSArZGF0ZS5wZXJzaWFuLm5vdygpLm1vbnRoIC0gMSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBlcGJhc2UsIGVweWVhcjtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSk7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSk7XHJcblx0XHRcdGRheSA9IHBhcnNlSW50KGRheS50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdGVwYmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuXHRcdFx0ZXB5ZWFyID0gNDc0ICsgXy5tYXRoLm1vZChlcGJhc2UsIDI4MjApO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRkYXkgK1xyXG5cdFx0XHRcdChtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6IChtb250aCAtIDEpICogMzAgKyA2KSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoZXB5ZWFyICogNjgyIC0gMTEwKSAvIDI4MTYpICtcclxuXHRcdFx0XHQoZXB5ZWFyIC0gMSkgKiAzNjUgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoZXBiYXNlIC8gMjgyMCkgKiAxMDI5OTgzICtcclxuXHRcdFx0XHQoUEVSU0lBTl9FUE9DSCAtIDEpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR2YXIgZGF0ZUFycmF5ID0gZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4oXHJcblx0XHRcdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbihwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpLCBwYXJzZUludChtb250aC50b1N0cmluZygpKSwgcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhkYXRlQXJyYXlbMF0sIHBhcnNlSW50KGRhdGVBcnJheVsxXSksIGRhdGVBcnJheVsyXSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuZ2VvcmdpYW4ucGFyc2UgPSAoZGF0ZTogRGF0ZSk6IERhdGVDbGFzcyA9PlxyXG5cdFx0XHRuZXcgRGF0ZUNsYXNzKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHllYXIgPSBwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpICsgMTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRHUkVHT1JJQU5fRVBPQ0ggLVxyXG5cdFx0XHRcdDEgK1xyXG5cdFx0XHRcdDM2NSAqICh5ZWFyIC0gMSkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpICtcclxuXHRcdFx0XHQtTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoMzY3ICogbW9udGggLSAzNjIpIC8gMTIgKyAobW9udGggPD0gMiA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAtMSA6IC0yKSArIGRheSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5wZXJzaWFuKFxyXG5cdFx0XHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSksIHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpLCBwYXJzZUludChkYXkudG9TdHJpbmcoKSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKGRhdGVBcnJheVswXSwgZGF0ZUFycmF5WzFdLCBkYXRlQXJyYXlbMl0pO1xyXG5cdFx0fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4uZ2V0RnV0dXJlRGF0ZSA9IGZ1bmN0aW9uIChuKSB7XHJcblx0XHQvLyAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHQvLyAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSArIG4pO1xyXG5cdFx0Ly8gfVxyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi5ub3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIG5vdy5nZXREYXRlKCkpO1xyXG5cdFx0fTtcclxuXHRcdChkYXRlLmdlb3JnaWFuLmdldFJlbGF0aXZlRGF5ID0gKG46IG51bWJlcikgPT4ge1xyXG5cdFx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAtMSAqIG4gKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3MoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblx0XHR9KSxcclxuXHRcdFx0KGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oamQpIHtcclxuXHRcdFx0XHR2YXIgd2pkLFxyXG5cdFx0XHRcdFx0ZGVwb2NoLFxyXG5cdFx0XHRcdFx0cXVhZHJpY2VudCxcclxuXHRcdFx0XHRcdGRxYyxcclxuXHRcdFx0XHRcdGNlbnQsXHJcblx0XHRcdFx0XHRkY2VudCxcclxuXHRcdFx0XHRcdHF1YWQsXHJcblx0XHRcdFx0XHRkcXVhZCxcclxuXHRcdFx0XHRcdHlpbmRleCxcclxuXHRcdFx0XHRcdGR5aW5kZXgsXHJcblx0XHRcdFx0XHR5ZWFyLFxyXG5cdFx0XHRcdFx0bW9udGgsXHJcblx0XHRcdFx0XHRkYXksXHJcblx0XHRcdFx0XHR5ZWFyZGF5LFxyXG5cdFx0XHRcdFx0bGVhcGFkajtcclxuXHRcdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRcdHdqZCA9IE1hdGguZmxvb3IoamQgLSAwLjUpICsgMC41O1xyXG5cdFx0XHRcdGRlcG9jaCA9IHdqZCAtIEdSRUdPUklBTl9FUE9DSDtcclxuXHRcdFx0XHRxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG5cdFx0XHRcdGRxYyA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxNDYwOTcpO1xyXG5cdFx0XHRcdGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcclxuXHRcdFx0XHRkY2VudCA9IF8ubWF0aC5tb2QoZHFjLCAzNjUyNCk7XHJcblx0XHRcdFx0cXVhZCA9IE1hdGguZmxvb3IoZGNlbnQgLyAxNDYxKTtcclxuXHRcdFx0XHRkcXVhZCA9IF8ubWF0aC5tb2QoZGNlbnQsIDE0NjEpO1xyXG5cdFx0XHRcdHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG5cdFx0XHRcdHllYXIgPSBxdWFkcmljZW50ICogNDAwICsgY2VudCAqIDEwMCArIHF1YWQgKiA0ICsgeWluZGV4O1xyXG5cdFx0XHRcdGlmICghKGNlbnQgPT0gNCB8fCB5aW5kZXggPT0gNCkpIHtcclxuXHRcdFx0XHRcdHllYXIrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0eWVhcmRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMCwgMSk7XHJcblx0XHRcdFx0bGVhcGFkaiA9IHdqZCA8IF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMywgMSkgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gMSA6IDI7XHJcblx0XHRcdFx0bW9udGggPSBNYXRoLmZsb29yKCgoeWVhcmRheSArIGxlYXBhZGopICogMTIgKyAzNzMpIC8gMzY3KTtcclxuXHRcdFx0XHRkYXkgPSB3amQgLSBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoIC0gMSwgMSkgKyAxO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdGRhdGUuanVsaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbihqZCkge1xyXG5cdFx0XHR2YXIgeWVhciwgbW9udGgsIGRheSwgZGVwb2NoLCBjeWNsZSwgY3llYXIsIHljeWNsZSwgYXV4MSwgYXV4MiwgeWRheTtcclxuXHRcdFx0amQgPSBwYXJzZUZsb2F0KGpkLnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0amQgPSBNYXRoLmZsb29yKGpkKSArIDAuNTtcclxuXHJcblx0XHRcdGRlcG9jaCA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKDQ3NSwgMSwgMSk7XHJcblx0XHRcdGN5Y2xlID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxMDI5OTgzKTtcclxuXHRcdFx0Y3llYXIgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTAyOTk4Myk7XHJcblx0XHRcdGlmIChjeWVhciA9PSAxMDI5OTgyKSB7XHJcblx0XHRcdFx0eWN5Y2xlID0gMjgyMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhdXgxID0gTWF0aC5mbG9vcihjeWVhciAvIDM2Nik7XHJcblx0XHRcdFx0YXV4MiA9IF8ubWF0aC5tb2QoY3llYXIsIDM2Nik7XHJcblx0XHRcdFx0eWN5Y2xlID0gTWF0aC5mbG9vcigoMjEzNCAqIGF1eDEgKyAyODE2ICogYXV4MiArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyID0geWN5Y2xlICsgMjgyMCAqIGN5Y2xlICsgNDc0O1xyXG5cdFx0XHRpZiAoeWVhciA8PSAwKSB7XHJcblx0XHRcdFx0eWVhci0tO1xyXG5cdFx0XHR9XHJcblx0XHRcdHlkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKSArIDE7XHJcblx0XHRcdG1vbnRoID0geWRheSA8PSAxODYgPyBNYXRoLmNlaWwoeWRheSAvIDMxKSA6IE1hdGguY2VpbCgoeWRheSAtIDYpIC8gMzApO1xyXG5cdFx0XHRkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCBtb250aCwgMSkgKyAxO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZGF0ZTtcclxuXHR9KSh0aGlzKTtcclxufVxyXG4iXX0=