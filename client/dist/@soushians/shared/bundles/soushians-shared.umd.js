(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tslib')) :
    typeof define === 'function' && define.amd ? define('@soushians/shared', ['exports', '@angular/core', 'tslib'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.shared = {}),global.ng.core,global.tslib));
}(this, (function (exports,core,tslib) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SharedModule = (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.decorators = [
        { type: core.NgModule, args: [{},] },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var HttpResponseBaseModel = (function () {
        function HttpResponseBaseModel() {
        }
        return HttpResponseBaseModel;
    }());
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var HttpRequestBaseModel = (function () {
        function HttpRequestBaseModel() {
        }
        return HttpRequestBaseModel;
    }());
    var /** @type {?} */ PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
    var /** @type {?} */ PERSIAN_MONTH_NAMES = [
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
    var DateClass = (function () {
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         */
        function DateClass(year, month, date) {
            this.year = year;
            this.month = month;
            this.date = date;
        }
        /**
         * @param {?=} seprator
         * @return {?}
         */
        DateClass.prototype.fullDate = function (seprator) {
            if (seprator === void 0) {
                seprator = "/";
            }
            return [this.year, this.month, this.date].join(seprator);
        };
        /**
         * @return {?}
         */
        DateClass.prototype.nativeDate = function () {
            return new Date(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.date));
        };
        return DateClass;
    }());
    var UtilityService = (function () {
        function UtilityService() {
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
                var /** @type {?} */ PERSIAN_EPOCH = 1948320.5, /** @type {?} */ GREGORIAN_EPOCH = 1721425.5;
                var /** @type {?} */ date = {
                    persian: {
                        PERSIAN_MONTH_DAYS_COUNT: [],
                        now: function () { return null; },
                        create: function (y, m, d) { return null; },
                        getDaysOfoMonth: function (idx) { return null; },
                        getDayOfWeek: function (y, m, d) { return null; },
                        foretimeMonthOfYear: function () { return []; },
                        to: {
                            georgian: function () { return null; },
                            julian: function () { return null; }
                        }
                    },
                    julian: {
                        to: {
                            georgian: function () { return null; },
                            persian: function () { return null; }
                        }
                    },
                    georgian: {
                        // getFutureDate: (n: number) => null,
                        now: function () { return null; },
                        getRelativeDay: function (n) { return null; },
                        parse: function (date) { return null; },
                        to: {
                            persian: function () { return null; },
                            julian: function () { return null; }
                        }
                    },
                    as: {
                        Date: function () { return null; }
                    }
                };
                // date.persian = {};
                // date.persian.to = {};
                // date.georgian = {};
                // date.georgian.to = {};
                // date.julian = {};
                // date.julian.to = {};
                // date.as = {};
                date.as.Date = function (_a) {
                    var _b = tslib.__read(_a, 3), y = _b[0], m = _b[1], d = _b[2];
                    return new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
                };
                var /** @type {?} */ insertZero = function (i) {
                    i = i.toString();
                    return i.length == 1 ? "0" + i : i;
                };
                date.persian.PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
                date.persian.now = function () {
                    var /** @type {?} */ now = new Date();
                    return date.georgian.to.persian(now.getFullYear(), now.getMonth(), now.getDate());
                };
                date.persian.create = function (y, m, d) { return new DateClass(y, m, d); };
                date.persian.getDaysOfoMonth = function (idx) {
                    var /** @type {?} */ count = PERSIAN_MONTH_DAYS_COUNT[idx];
                    var /** @type {?} */ res = [];
                    for (var /** @type {?} */ i = 1; i < count + 1; i++) {
                        var /** @type {?} */ dayName = i < 10 ? "0" + i : i.toString();
                        res.push(dayName);
                    }
                    return res;
                };
                date.persian.getDayOfWeek = function (y, m, d) {
                    var /** @type {?} */ persianHoliday = date.persian.create("1396", "1", "1");
                    var /** @type {?} */ persianHolidayInGeorgian = date.persian.to.georgian("1396", "1", "1").nativeDate();
                    var /** @type {?} */ month = +m - 1;
                    var /** @type {?} */ day = +d;
                    var /** @type {?} */ daysOfYear = PERSIAN_MONTH_DAYS_COUNT.reduce(function (a, b, idx) {
                        if (idx == month)
                            return a + day;
                        if (idx > month)
                            return a;
                        return a + b;
                    });
                    return (daysOfYear + persianHolidayInGeorgian.getDay() - 1) % 7;
                };
                date.persian.foretimeMonthOfYear = function () {
                    return PERSIAN_MONTH_NAMES.filter(function (item, idx) { return idx <= +date.persian.now().month - 1; });
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
                date.georgian.parse = function (date) { return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate()); };
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
                    var /** @type {?} */ now = new Date();
                    return new DateClass(now.getFullYear(), now.getMonth() + 1, now.getDate());
                };
                (date.georgian.getRelativeDay = function (n) {
                    var /** @type {?} */ date = new Date(Date.now() + -1 * n * 24 * 60 * 60 * 1000);
                    debugger;
                    return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
                }),
                    (date.julian.to.georgian = function (jd) {
                        var /** @type {?} */ wjd, /** @type {?} */ depoch, /** @type {?} */ quadricent, /** @type {?} */ dqc, /** @type {?} */ cent, /** @type {?} */ dcent, /** @type {?} */ quad, /** @type {?} */ dquad, /** @type {?} */ yindex, /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ yearday, /** @type {?} */ leapadj;
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
        return UtilityService;
    }());
    UtilityService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */ UtilityService.ngInjectableDef = core.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ stringTemplate = function (template, model) {
        return eval('`' + template + '`');
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} destination
     * @return {?}
     */
    function MatchValidator(destination) {
        return function (control) {
            if (!control.root.value)
                return;
            var /** @type {?} */ destinationValue = control.root.value[destination];
            return (destinationValue == control.value)
                ? null
                : { key: "don't matched" };
        };
    }

    exports.SharedModule = SharedModule;
    exports.HttpResponseBaseModel = HttpResponseBaseModel;
    exports.HttpRequestBaseModel = HttpRequestBaseModel;
    exports.PERSIAN_MONTH_DAYS_COUNT = PERSIAN_MONTH_DAYS_COUNT;
    exports.PERSIAN_MONTH_NAMES = PERSIAN_MONTH_NAMES;
    exports.DateClass = DateClass;
    exports.UtilityService = UtilityService;
    exports.stringTemplate = stringTemplate;
    exports.MatchValidator = MatchValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-shared.umd.js.map
