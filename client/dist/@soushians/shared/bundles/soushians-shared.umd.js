(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@soushians/shared', ['exports', '@angular/core'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.shared = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DataUnitPipe = (function () {
        function DataUnitPipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        DataUnitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (value == 0)
                    return "0 بایت";
                if (value == null)
                    return "نامحدود";
                var /** @type {?} */ B = 1;
                var /** @type {?} */ KB = B * 1024;
                var /** @type {?} */ MB = KB * 1024;
                var /** @type {?} */ GB = MB * 1024;
                var /** @type {?} */ convertedValue;
                var /** @type {?} */ suffix = "بایت";
                if (value >= GB) {
                    suffix = "گیگا بایت";
                    convertedValue = (value / GB).toFixed(2);
                }
                else if (value >= MB) {
                    suffix = "مگا بایت";
                    convertedValue = (value / MB).toFixed(2);
                }
                else if (value >= KB) {
                    suffix = "کیلو بایت";
                    convertedValue = (value / KB).toFixed(2);
                }
                else {
                    suffix = "بایت";
                    convertedValue = value.toFixed(2);
                }
                return convertedValue + " " + suffix;
            };
        DataUnitPipe.decorators = [
            { type: i0.Pipe, args: [{ name: "dataUnit" },] },
        ];
        return DataUnitPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimeUnitPipe = (function () {
        function TimeUnitPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getDays = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60 * 60 * 24;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' روز',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getHours = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60 * 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' ساعت',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getMinuts = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' دقیقه',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getSeconds = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ count = Math.floor((value));
                return {
                    count: count,
                    value: count + ' ثانیه',
                    remaining: value - count
                };
            };
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        TimeUnitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (value === 0)
                    return '0 دقیقه';
                if (!value)
                    return '';
                var /** @type {?} */ connector = ' و ';
                var /** @type {?} */ daysData = this.getDays(value);
                var /** @type {?} */ hoursData = this.getHours(daysData.remaining);
                var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
                // let secondssData = this.getSeconds(minutsData.remaining);
                return [daysData, hoursData, minutsData]
                    .filter(function (i) { return i.count; })
                    .map(function (i) { return i.value; }).join(connector);
            };
        TimeUnitPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'timeUnit' },] },
        ];
        return TimeUnitPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PersianDatePipe = (function () {
        function PersianDatePipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        PersianDatePipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value)
                    return "";
                var /** @type {?} */ date;
                if (value.toDate) {
                    date = value.toDate();
                }
                else {
                    date = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
                }
                var /** @type {?} */ persianDate = _.date.georgian.to.persian(date.getFullYear(), date.getMonth() + 1, date.getDate());
                return [
                    parseInt(persianDate[0]).toLocaleString("fa-IR", { useGrouping: false }),
                    parseInt(persianDate[1]).toLocaleString("fa-IR", { useGrouping: false }),
                    parseInt(persianDate[2]).toLocaleString("fa-IR", { useGrouping: false })
                ].join("/");
            };
        PersianDatePipe.decorators = [
            { type: i0.Pipe, args: [{ name: "persianDate" },] },
        ];
        return PersianDatePipe;
    }());
    var ɵ0 = function (_) {
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
        is.closet = function (fo, so) {
            return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
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
    }, ɵ1 = function () {
        var /** @type {?} */ math = {};
        math.mod = function (a, b) {
            return a - b * Math.floor(a / b);
        };
        return math;
    }, ɵ2 = function () {
        var /** @type {?} */ PERSIAN_EPOCH = 1948320.5, /** @type {?} */ GREGORIAN_EPOCH = 1721425.5;
        var /** @type {?} */ date = {};
        date.persian = {};
        date.persian.to = {};
        date.georgian = {};
        date.georgian.to = {};
        date.julian = {};
        date.julian.to = {};
        var /** @type {?} */ insertZero = function (i) {
            i = i.toString();
            return i.length == 1 ? "0" + i : i;
        };
        date.persian.to.julian = function (year, month, day) {
            var /** @type {?} */ epbase, /** @type {?} */ epyear;
            year = parseInt(year);
            month = parseInt(month);
            day = parseInt(day);
            epbase = year - (year >= 0 ? 474 : 473);
            epyear = 474 + _.math.mod(epbase, 2820);
            return (day +
                (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
                Math.floor((epyear * 682 - 110) / 2816) +
                (epyear - 1) * 365 +
                Math.floor(epbase / 2820) * 1029983 +
                (PERSIAN_EPOCH - 1));
        };
        date.persian.to.georgian = function (year, month, day, joinCharacter) {
            var /** @type {?} */ dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year), parseInt(month) + 1, parseInt(day)));
            return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
        };
        date.georgian.to.julian = function (year, month, day) {
            year = parseInt(year);
            month = parseInt(month);
            day = parseInt(day);
            return (GREGORIAN_EPOCH -
                1 +
                365 * (year - 1) +
                Math.floor((year - 1) / 4) +
                -Math.floor((year - 1) / 100) +
                Math.floor((year - 1) / 400) +
                Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : _.is.georgianLeapYear(year) ? -1 : -2) + day));
        };
        date.georgian.to.persian = function (year, month, day, joinCharacter) {
            var /** @type {?} */ dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year), parseInt(month), parseInt(day)));
            return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
        };
        date.julian.to.georgian = function (jd) {
            var /** @type {?} */ wjd, /** @type {?} */ depoch, /** @type {?} */ quadricent, /** @type {?} */ dqc, /** @type {?} */ cent, /** @type {?} */ dcent, /** @type {?} */ quad, /** @type {?} */ dquad, /** @type {?} */ yindex, /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ yearday, /** @type {?} */ leapadj;
            jd = parseFloat(jd);
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
            yearday = wjd - _.date.georgian.to.julian(year, 1, 1);
            leapadj = wjd < _.date.georgian.to.julian(year, 3, 1) ? 0 : _.is.georgianLeapYear(year) ? 1 : 2;
            month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
            day = wjd - _.date.georgian.to.julian(year, month, 1) + 1;
            return new Array(insertZero(year), insertZero(month), insertZero(day));
        };
        date.julian.to.persian = function (jd) {
            var /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ depoch, /** @type {?} */ cycle, /** @type {?} */ cyear, /** @type {?} */ ycycle, /** @type {?} */ aux1, /** @type {?} */ aux2, /** @type {?} */ yday;
            jd = parseFloat(jd);
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
    };
    var /** @type {?} */ _ = {
        is: (ɵ0)(this),
        math: (ɵ1)(),
        date: (ɵ2)()
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CurrencyUnitPipe = (function () {
        function CurrencyUnitPipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        CurrencyUnitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value && value != 0)
                    return '';
                else if (value == 0)
                    return 'رایگان';
                var /** @type {?} */ suffix = 'ریال';
                return [value.toLocaleString('fa-IR'), suffix].join(' ');
            };
        CurrencyUnitPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'currencyUnit' },] },
        ];
        return CurrencyUnitPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PersianNumberPipe = (function () {
        function PersianNumberPipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        PersianNumberPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value)
                    return '';
                var /** @type {?} */ res = '';
                for (var /** @type {?} */ index = 0; index < value.length; index++) {
                    res += (+value[index]).toLocaleString('fa-IR', {
                        useGrouping: false
                    });
                }
                return res;
            };
        PersianNumberPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'persianNumber' },] },
        ];
        return PersianNumberPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimeCounterPipe = (function () {
        function TimeCounterPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TimeCounterPipe.prototype.getHours = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60 * 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' ساعت',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeCounterPipe.prototype.getMinuts = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' دقیقه',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeCounterPipe.prototype.getSeconds = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ count = Math.floor((value));
                return {
                    count: count,
                    value: count + ' ثانیه',
                    remaining: value - count
                };
            };
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        TimeCounterPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value)
                    return '';
                var /** @type {?} */ connector = ' : ';
                // let daysData = this.getDays(value);
                var /** @type {?} */ hoursData = this.getHours(value);
                var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
                var /** @type {?} */ secondssData = this.getSeconds(minutsData.remaining);
                return [secondssData, minutsData, hoursData]
                    .map(function (i) { return i.count; }).join(connector);
            };
        TimeCounterPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'timeCounter' },] },
        ];
        return TimeCounterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SharedModule = (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                        exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
                    },] },
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var /**
     * @abstract
     * @template T
     */ HttpResponseBaseModel = (function () {
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
    var /**
     * @abstract
     * @template T
     */ HttpRequestBaseModel = (function () {
        function HttpRequestBaseModel() {
        }
        return HttpRequestBaseModel;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
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
        function DateClass(year, month, date) {
            this.year = year;
            this.month = month;
            this.date = date;
        }
        /**
         * @param {?=} seprator
         * @return {?}
         */
        DateClass.prototype.fullDate = /**
         * @param {?=} seprator
         * @return {?}
         */
            function (seprator) {
                if (seprator === void 0) {
                    seprator = "/";
                }
                return [this.year, this.month, this.date].join(seprator);
            };
        /**
         * @return {?}
         */
        DateClass.prototype.nativeDate = /**
         * @return {?}
         */
            function () {
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
                    var _b = __read(_a, 3), y = _b[0], m = _b[1], d = _b[2];
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
                date.georgian.parse = function (date) {
                    return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
                };
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
        UtilityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
        return UtilityService;
    }());

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ IResponse = (function () {
        function IResponse() {
        }
        return IResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.SharedModule = SharedModule;
    exports.HttpResponseBaseModel = HttpResponseBaseModel;
    exports.HttpRequestBaseModel = HttpRequestBaseModel;
    exports.PERSIAN_MONTH_DAYS_COUNT = PERSIAN_MONTH_DAYS_COUNT;
    exports.PERSIAN_MONTH_NAMES = PERSIAN_MONTH_NAMES;
    exports.DateClass = DateClass;
    exports.UtilityService = UtilityService;
    exports.stringTemplate = stringTemplate;
    exports.MatchValidator = MatchValidator;
    exports.IResponse = IResponse;
    exports.ɵd = CurrencyUnitPipe;
    exports.ɵa = DataUnitPipe;
    exports.ɵc = PersianDatePipe;
    exports.ɵe = PersianNumberPipe;
    exports.ɵf = TimeCounterPipe;
    exports.ɵb = TimeUnitPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNoYXJlZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9kYXRhLXVuaXQucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL3RpbWUtdW5pdC5waXBlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvcGlwZXMvcGVyc2lhbi1kYXRlLnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9jdXJyZW5jeS11bml0LnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9wZXJzaWFuLW51bWJlci5waXBlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvcGlwZXMvdGltZS1jb3VudGVyLnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvaHR0cC1yZXNwb25zZS1iYXNlLW1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvaHR0cC1yZXF1ZXN0LWJhc2UtbW9kZWwudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3V0aWxpdHkuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL2hlbHBlcnMvc3RyaW5nLXRlbXBsYXRlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvdmFsaWRhdG9ycy9tYXRjaC52YWxpZGF0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9yZXNwb25zZS5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwiZGF0YVVuaXRcIiB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHZhbHVlID09IDApIHJldHVybiBcIjAgw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHJldHVybiBcIsOZwobDmMKnw5nChcOYwq3DmMKvw5nCiMOYwq9cIjtcclxuXHJcblx0XHRsZXQgQiA9IDE7XHJcblx0XHRsZXQgS0IgPSBCICogMTAyNDtcclxuXHRcdGxldCBNQiA9IEtCICogMTAyNDtcclxuXHRcdGxldCBHQiA9IE1CICogMTAyNDtcclxuXHJcblx0XHRsZXQgY29udmVydGVkVmFsdWU7XHJcblx0XHRsZXQgc3VmZml4ID0gXCLDmMKow5jCp8ObwozDmMKqXCI7XHJcblxyXG5cdFx0aWYgKHZhbHVlID49IEdCKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5rCr8ObwozDmsKvw5jCpyDDmMKow5jCp8ObwozDmMKqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gR0IpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlID49IE1CKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5nChcOawq/DmMKnIMOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBNQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPj0gS0IpIHtcclxuXHRcdFx0c3VmZml4ID0gXCLDmsKpw5vCjMOZwoTDmcKIIMOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBLQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9IHZhbHVlLnRvRml4ZWQoMik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnZlcnRlZFZhbHVlICsgXCIgXCIgKyBzdWZmaXg7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW50ZXJmYWNlIFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVtYWluaW5nOiBudW1iZXI7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWVVbml0JyB9KVxyXG5leHBvcnQgY2xhc3MgVGltZVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREYXlzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwICogMjRcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCscOZwojDmMKyJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEhvdXJzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKzw5jCp8OYwrnDmMKqJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1pbnV0cyh2YWx1ZTogbnVtYmVyKTogVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwq/DmcKCw5vCjMOZwoLDmcKHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFNlY29uZHModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwqvDmMKnw5nChsObwozDmcKHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkgcmV0dXJuICcwIMOYwq/DmcKCw5vCjMOZwoLDmcKHJztcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RvciA9ICcgw5nCiCAnO1xyXG5cclxuICAgICAgICBsZXQgZGF5c0RhdGEgPSB0aGlzLmdldERheXModmFsdWUpO1xyXG4gICAgICAgIGxldCBob3Vyc0RhdGEgPSB0aGlzLmdldEhvdXJzKGRheXNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IG1pbnV0c0RhdGEgPSB0aGlzLmdldE1pbnV0cyhob3Vyc0RhdGEucmVtYWluaW5nKTtcclxuICAgICAgICAvLyBsZXQgc2Vjb25kc3NEYXRhID0gdGhpcy5nZXRTZWNvbmRzKG1pbnV0c0RhdGEucmVtYWluaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtkYXlzRGF0YSwgaG91cnNEYXRhLCBtaW51dHNEYXRhLyosIHNlY29uZHNzRGF0YSovXVxyXG4gICAgICAgICAgICAuZmlsdGVyKGkgPT4gaS5jb3VudClcclxuICAgICAgICAgICAgLm1hcChpID0+IGkudmFsdWUpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQZXJzaWFuRGF0ZUV4dHJhY3RvciB7XHJcblx0Y291bnQ6IG51bWJlcjtcclxuXHR2YWx1ZTogc3RyaW5nO1xyXG5cdHJlbWFpbmluZzogbnVtYmVyO1xyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwicGVyc2lhbkRhdGVcIiB9KVxyXG5leHBvcnQgY2xhc3MgUGVyc2lhbkRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKHZhbHVlOiBhbnksIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCI7XHJcblx0XHR2YXIgZGF0ZTtcclxuXHRcdGlmICh2YWx1ZS50b0RhdGUpIHtcclxuXHRcdFx0ZGF0ZSA9IHZhbHVlLnRvRGF0ZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoXCIvRGF0ZShcIiwgXCJcIikucmVwbGFjZShcIikvXCIsIFwiXCIpLCAxMCkpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHBlcnNpYW5EYXRlID0gXy5kYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4oZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblxyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0cGFyc2VJbnQocGVyc2lhbkRhdGVbMF0pLnRvTG9jYWxlU3RyaW5nKFwiZmEtSVJcIiwgeyB1c2VHcm91cGluZzogZmFsc2UgfSksXHJcblx0XHRcdHBhcnNlSW50KHBlcnNpYW5EYXRlWzFdKS50b0xvY2FsZVN0cmluZyhcImZhLUlSXCIsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pLFxyXG5cdFx0XHRwYXJzZUludChwZXJzaWFuRGF0ZVsyXSkudG9Mb2NhbGVTdHJpbmcoXCJmYS1JUlwiLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KVxyXG5cdFx0XS5qb2luKFwiL1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciBfID0ge1xyXG5cdGlzOiAoZnVuY3Rpb24oXykge1xyXG5cdFx0dmFyIGlzOiBhbnkgPSBmdW5jdGlvbihub2RlOiBhbnksIHNlbGVjdG9yOiBhbnkpIHtcclxuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcykgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRcdHZhciBub2RlcyA9IHRoaXMuYXJnVG9BcnJheShub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cdFx0XHRyZXR1cm4gbm9kZXMuaW5kZXhPZihub2RlKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpcy5vYmplY3QgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ub2RlTGlzdCA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdGlmIChfLmlzLm5vdC5pZSgpKSByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBOb2RlTGlzdF1cIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdG9iai5wdXNoID09PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdChvYmoubGVuZ3RoID4gMCA/IG9ialswXS50YWdOYW1lICE9PSB1bmRlZmluZWQgOiB0cnVlKVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZWxlbWVudCA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zZWFyY2goXCJFbGVtZW50XCIpID4gLTE7XHJcblx0XHRcdC8vcmV0dXJuICEhT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKCdlbGVtZW50Jyk7O1xyXG5cdFx0fTtcclxuXHRcdGlzLkhUTUxDb2xsZWN0aW9uID0gZnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuYXJyYXkgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLm51bWJlciA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgTnVtYmVyXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzW1wiZnVuY3Rpb25cIl0gPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLnN0cmluZyA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgU3RyaW5nXVwiOyAvLyYmICgoaXNFbXB0eSkpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgVW5kZWZpbmVkXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmV2ZW50ID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikudG9Mb3dlckNhc2UoKS5zZWFyY2goXCJldmVudFwiKSA+IC0xO1xyXG5cdFx0fTtcclxuXHRcdGlzLmRlZmluZWQgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0Ly9yZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBVbmRlZmluZWRdJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IE51bGxdJyAmJiBPYmplY3QgIT09ICcnO1xyXG5cdFx0XHRyZXR1cm4gX3ZhciAhPT0gdW5kZWZpbmVkICYmIF92YXIgIT09IG51bGwgJiYgX3ZhciAhPT0gXCJcIjtcclxuXHRcdH07XHJcblx0XHRpcy5qc29uID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLmVycm9yID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcblx0XHRpcy5zdGFydFdpdGggPSBmdW5jdGlvbihzdHI6IGFueSwgcHJlZml4OiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5pbmRleE9mKHByZWZpeCkgPT09IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW5kV2l0aCA9IGZ1bmN0aW9uKHN0cjogYW55KSB7fTtcclxuXHJcblx0XHRpcy52YWx1ZSA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gX3ZhciA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lbXB0eSA9IGZ1bmN0aW9uKG86IGFueSkge1xyXG5cdFx0XHRpZiAoXy5pcy5vYmplY3QoMCkpIGZvciAodmFyIGkgaW4gbykgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkobykpIHJldHVybiBvLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0aXMudHJ1dGh5ID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLnNjYWxhciA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHQvL1RPRE8gOiBpbXByb3ZlXHJcblx0XHRcdHJldHVybiBpcy5kZWZpbmVkKF92YXIpICYmIGlzLm5vdC5hcnJheShfdmFyKSAmJiBpcy5ub3Qub2JqZWN0KF92YXIpICYmIGlzLm5vdFtcImZ1bmN0aW9uXCJdKF92YXIpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnByb3RvdHlwZVByb3AgPSBmdW5jdGlvbihvYmo6IGFueSwgcHJvcDogYW55KSB7XHJcblx0XHRcdHJldHVybiBvYmpbcHJvcF0gJiYgIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbCA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShmdikgPT0gSlNPTi5zdHJpbmdpZnkoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsVGV4dCA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIGZ2LnRvTG93ZXJDYXNlKGZ2KSA9PT0gc3YudG9Mb3dlckNhc2Uoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmNsb3NldCA9IGZ1bmN0aW9uKGZvOiBhbnksIHNvOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIF8uaXMuZXF1YWwoXy5wYXJ0aWFsKGZvLCBfLnJlcG9ydC5za2VsZXRvbihzbykpLCBzbyk7XHJcblx0XHR9O1xyXG5cdFx0aXMuY29udGFpbiA9IGZ1bmN0aW9uKHN0cjogYW55LCBzZWFyY2hTdHI6IGFueSkge1xyXG5cdFx0XHR2YXIgcmVnID0gXy5pcy5yZWdleChzZWFyY2hTdHIpID8gc2VhcmNoU3RyIDogbmV3IFJlZ0V4cChzZWFyY2hTdHIsIFwiZ1wiKTtcclxuXHRcdFx0cmV0dXJuIHN0ci5tYXRjaChyZWcpICYmIHN0ci5tYXRjaChyZWcpLmxlbmd0aCA+IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMucmVnZXggPSBmdW5jdGlvbihyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJSZWdFeHBcIjtcclxuXHRcdH07XHJcblx0XHRpcy5zYW1lID0gZnVuY3Rpb24oZnY6IGFueSwgc3Y6IGFueSkge1xyXG5cdFx0XHQvL2lmICghZnYpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBmdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cdFx0XHQvL2lmICghc3YpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBzdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZ2LmlzRXF1YWxOb2RlID8gZnYuaXNFcXVhbE5vZGUoc3YpIDogZnYgPT09IHN2O1xyXG5cdFx0fTtcclxuXHRcdGlzLnBlcnNpYW5MZWFwWWVhciA9IGZ1bmN0aW9uKHllYXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gKCgoeWVhciAtICh5ZWFyID4gMCA/IDQ3NCA6IDQ3MykpICUgMjgyMCArIDQ3NCArIDM4KSAqIDY4MikgJSAyODE2IDwgNjgyO1xyXG5cdFx0fTtcclxuXHRcdGlzLmdlb3JnaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHllYXIgJSA0ID09IDAgJiYgISh5ZWFyICUgMTAwID09IDAgJiYgeWVhciAlIDQwMCAhPSAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIG5vdDogYW55ID0ge307XHJcblx0XHR2YXIgaTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGk6IGFueSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSlcclxuXHRcdFx0XHRcdG5vdFtpXSA9IGZ1bmN0aW9uKGE6IGFueSwgYjogYW55LCBjOiBhbnkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICFpc1tpXShhLCBiLCBjKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMubm90ID0gbm90O1xyXG5cclxuXHRcdC8vVE9ETyA6IGltcGVsZW1lbnRcclxuXHRcdHZhciBhbGw6IGFueSA9IHt9O1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSkgYWxsW2ldID0gZnVuY3Rpb24obzogYW55KSB7fTtcclxuXHRcdFx0fSkoaSk7XHJcblx0XHRpcy5hbGwgPSBhbGw7XHJcblxyXG5cdFx0dmFyIGFueTogYW55ID0ge307XHJcblx0XHRmb3IgKHZhciBqIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaikge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShqKSkgYW55W2pdID0gZnVuY3Rpb24obzogYW55KSB7fTtcclxuXHRcdFx0fSkoaik7XHJcblx0XHRpcy5hbnkgPSBhbnk7XHJcblxyXG5cdFx0cmV0dXJuIGlzO1xyXG5cdH0pKHRoaXMpLFxyXG5cdG1hdGg6IChmdW5jdGlvbigpIHtcclxuXHRcdHZhciBtYXRoOiBhbnkgPSB7fTtcclxuXHJcblx0XHRtYXRoLm1vZCA9IGZ1bmN0aW9uKGE6IGFueSwgYjogYW55KSB7XHJcblx0XHRcdHJldHVybiBhIC0gYiAqIE1hdGguZmxvb3IoYSAvIGIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gbWF0aDtcclxuXHR9KSgpLFxyXG5cdGRhdGU6IChmdW5jdGlvbigpIHtcclxuXHRcdHZhciBQRVJTSUFOX0VQT0NIID0gMTk0ODMyMC41LFxyXG5cdFx0XHRHUkVHT1JJQU5fRVBPQ0ggPSAxNzIxNDI1LjU7XHJcblxyXG5cdFx0dmFyIGRhdGU6IGFueSA9IHt9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuID0ge307XHJcblx0XHRkYXRlLnBlcnNpYW4udG8gPSB7fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4gPSB7fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8gPSB7fTtcclxuXHRcdGRhdGUuanVsaWFuID0ge307XHJcblx0XHRkYXRlLmp1bGlhbi50byA9IHt9O1xyXG5cclxuXHRcdHZhciBpbnNlcnRaZXJvID0gZnVuY3Rpb24oaTogYW55KSB7XHJcblx0XHRcdGkgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdHJldHVybiBpLmxlbmd0aCA9PSAxID8gXCIwXCIgKyBpIDogaTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXI6IGFueSwgbW9udGg6IGFueSwgZGF5OiBhbnkpIHtcclxuXHRcdFx0dmFyIGVwYmFzZSwgZXB5ZWFyO1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhcik7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkpO1xyXG5cclxuXHRcdFx0ZXBiYXNlID0geWVhciAtICh5ZWFyID49IDAgPyA0NzQgOiA0NzMpO1xyXG5cdFx0XHRlcHllYXIgPSA0NzQgKyBfLm1hdGgubW9kKGVwYmFzZSwgMjgyMCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGRheSArXHJcblx0XHRcdFx0KG1vbnRoIDw9IDcgPyAobW9udGggLSAxKSAqIDMxIDogKG1vbnRoIC0gMSkgKiAzMCArIDYpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKChlcHllYXIgKiA2ODIgLSAxMTApIC8gMjgxNikgK1xyXG5cdFx0XHRcdChlcHllYXIgLSAxKSAqIDM2NSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcihlcGJhc2UgLyAyODIwKSAqIDEwMjk5ODMgK1xyXG5cdFx0XHRcdChQRVJTSUFOX0VQT0NIIC0gMSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55LCBqb2luQ2hhcmFjdGVyOiBhbnkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuKFxyXG5cdFx0XHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSArIDEsIHBhcnNlSW50KGRheSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBqb2luQ2hhcmFjdGVyID8gZGF0ZUFycmF5LmpvaW4oam9pbkNoYXJhY3RlcikgOiBkYXRlQXJyYXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuID0gZnVuY3Rpb24oeWVhcjogYW55LCBtb250aDogYW55LCBkYXk6IGFueSkge1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhcik7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRHUkVHT1JJQU5fRVBPQ0ggLVxyXG5cdFx0XHRcdDEgK1xyXG5cdFx0XHRcdDM2NSAqICh5ZWFyIC0gMSkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpICtcclxuXHRcdFx0XHQtTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoMzY3ICogbW9udGggLSAzNjIpIC8gMTIgKyAobW9udGggPD0gMiA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAtMSA6IC0yKSArIGRheSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55LCBqb2luQ2hhcmFjdGVyOiBhbnkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLnBlcnNpYW4oXHJcblx0XHRcdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSwgcGFyc2VJbnQoZGF5KSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIGpvaW5DaGFyYWN0ZXIgPyBkYXRlQXJyYXkuam9pbihqb2luQ2hhcmFjdGVyKSA6IGRhdGVBcnJheTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbihqZDogYW55KSB7XHJcblx0XHRcdHZhciB3amQsXHJcblx0XHRcdFx0ZGVwb2NoLFxyXG5cdFx0XHRcdHF1YWRyaWNlbnQsXHJcblx0XHRcdFx0ZHFjLFxyXG5cdFx0XHRcdGNlbnQsXHJcblx0XHRcdFx0ZGNlbnQsXHJcblx0XHRcdFx0cXVhZCxcclxuXHRcdFx0XHRkcXVhZCxcclxuXHRcdFx0XHR5aW5kZXgsXHJcblx0XHRcdFx0ZHlpbmRleCxcclxuXHRcdFx0XHR5ZWFyLFxyXG5cdFx0XHRcdG1vbnRoLFxyXG5cdFx0XHRcdGRheSxcclxuXHRcdFx0XHR5ZWFyZGF5LFxyXG5cdFx0XHRcdGxlYXBhZGo7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZCk7XHJcblxyXG5cdFx0XHR3amQgPSBNYXRoLmZsb29yKGpkIC0gMC41KSArIDAuNTtcclxuXHRcdFx0ZGVwb2NoID0gd2pkIC0gR1JFR09SSUFOX0VQT0NIO1xyXG5cdFx0XHRxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG5cdFx0XHRkcWMgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTQ2MDk3KTtcclxuXHRcdFx0Y2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xyXG5cdFx0XHRkY2VudCA9IF8ubWF0aC5tb2QoZHFjLCAzNjUyNCk7XHJcblx0XHRcdHF1YWQgPSBNYXRoLmZsb29yKGRjZW50IC8gMTQ2MSk7XHJcblx0XHRcdGRxdWFkID0gXy5tYXRoLm1vZChkY2VudCwgMTQ2MSk7XHJcblx0XHRcdHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG5cdFx0XHR5ZWFyID0gcXVhZHJpY2VudCAqIDQwMCArIGNlbnQgKiAxMDAgKyBxdWFkICogNCArIHlpbmRleDtcclxuXHRcdFx0aWYgKCEoY2VudCA9PSA0IHx8IHlpbmRleCA9PSA0KSkge1xyXG5cdFx0XHRcdHllYXIrKztcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyZGF5ID0gd2pkIC0gXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKTtcclxuXHRcdFx0bGVhcGFkaiA9IHdqZCA8IF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMywgMSkgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gMSA6IDI7XHJcblx0XHRcdG1vbnRoID0gTWF0aC5mbG9vcigoKHllYXJkYXkgKyBsZWFwYWRqKSAqIDEyICsgMzczKSAvIDM2Nyk7XHJcblx0XHRcdGRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgbW9udGgsIDEpICsgMTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5qdWxpYW4udG8ucGVyc2lhbiA9IGZ1bmN0aW9uKGpkOiBhbnkpIHtcclxuXHRcdFx0dmFyIHllYXIsIG1vbnRoLCBkYXksIGRlcG9jaCwgY3ljbGUsIGN5ZWFyLCB5Y3ljbGUsIGF1eDEsIGF1eDIsIHlkYXk7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZCk7XHJcblxyXG5cdFx0XHRqZCA9IE1hdGguZmxvb3IoamQpICsgMC41O1xyXG5cclxuXHRcdFx0ZGVwb2NoID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oNDc1LCAxLCAxKTtcclxuXHRcdFx0Y3ljbGUgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDEwMjk5ODMpO1xyXG5cdFx0XHRjeWVhciA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxMDI5OTgzKTtcclxuXHRcdFx0aWYgKGN5ZWFyID09IDEwMjk5ODIpIHtcclxuXHRcdFx0XHR5Y3ljbGUgPSAyODIwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuXHRcdFx0XHRhdXgyID0gXy5tYXRoLm1vZChjeWVhciwgMzY2KTtcclxuXHRcdFx0XHR5Y3ljbGUgPSBNYXRoLmZsb29yKCgyMTM0ICogYXV4MSArIDI4MTYgKiBhdXgyICsgMjgxNSkgLyAxMDI4NTIyKSArIGF1eDEgKyAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHllYXIgPSB5Y3ljbGUgKyAyODIwICogY3ljbGUgKyA0NzQ7XHJcblx0XHRcdGlmICh5ZWFyIDw9IDApIHtcclxuXHRcdFx0XHR5ZWFyLS07XHJcblx0XHRcdH1cclxuXHRcdFx0eWRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIDEsIDEpICsgMTtcclxuXHRcdFx0bW9udGggPSB5ZGF5IDw9IDE4NiA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcblx0XHRcdGRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoLCAxKSArIDE7XHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBkYXRlO1xyXG5cdH0pKClcclxufTtcclxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeVVuaXQnIH0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSE9MCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDApIHJldHVybiAnw5jCscOYwqfDm8KMw5rCr8OYwqfDmcKGJztcclxuXHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9ICfDmMKxw5vCjMOYwqfDmcKEJztcclxuICAgICAgICByZXR1cm4gW3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdmYS1JUicpLCBzdWZmaXhdLmpvaW4oJyAnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncGVyc2lhbk51bWJlcicgfSlcclxuZXhwb3J0IGNsYXNzIFBlcnNpYW5OdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHZhciByZXMgPSAnJztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICByZXMgKz0gKCt2YWx1ZVtpbmRleF0pLnRvTG9jYWxlU3RyaW5nKCdmYS1JUicsIHtcclxuICAgICAgICAgICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICByZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndGltZUNvdW50ZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lQ291bnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIb3Vycyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjAgKiA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCs8OYwqfDmMK5w5jCqicsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRNaW51dHModmFsdWU6IG51bWJlcik6IFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKvw5nCgsObwozDmcKCw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcigodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKrw5jCp8OZwobDm8KMw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdG9yID0gJyA6ICc7XHJcblxyXG4gICAgICAgIC8vIGxldCBkYXlzRGF0YSA9IHRoaXMuZ2V0RGF5cyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGhvdXJzRGF0YSA9IHRoaXMuZ2V0SG91cnModmFsdWUpO1xyXG4gICAgICAgIGxldCBtaW51dHNEYXRhID0gdGhpcy5nZXRNaW51dHMoaG91cnNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IHNlY29uZHNzRGF0YSA9IHRoaXMuZ2V0U2Vjb25kcyhtaW51dHNEYXRhLnJlbWFpbmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbc2Vjb25kc3NEYXRhLCBtaW51dHNEYXRhLGhvdXJzRGF0YV1cclxuICAgICAgICAgICAgLm1hcChpID0+IGkuY291bnQpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL2RhdGEtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFBlcnNpYW5EYXRlUGlwZSB9IGZyb20gXCIuL3BpcGVzL3BlcnNpYW4tZGF0ZS5waXBlXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5VW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy9jdXJyZW5jeS11bml0LnBpcGVcIjtcclxuaW1wb3J0IHsgUGVyc2lhbk51bWJlclBpcGUgfSBmcm9tIFwiLi9waXBlcy9wZXJzaWFuLW51bWJlci5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVDb3VudGVyUGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtY291bnRlci5waXBlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF0sXHJcblx0ZXhwb3J0czogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxUPiB7XHJcbiAgICBSZXN1bHQ6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBhYnN0cmFjdCBleHRyYWN0RGF0YT8oKTogYW55O1xyXG59IiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cFJlcXVlc3RCYXNlTW9kZWw8VD4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0YWJzdHJhY3QgZ2V0UmVxdWVzdEJvZHk/PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXlzOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG5cdGFic3RyYWN0IGdldFJlcXVlc3RRdWVyeVBhcmFtcz88SyBleHRlbmRzIGtleW9mIFQ+KGtleXM6IGFueSk6IEh0dHBQYXJhbXM7XHJcblxyXG5cdC8vIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB8IG51bGwge1xyXG5cdC8vIFx0cmV0dXJuO1xyXG5cdC8vIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVCA9IFsgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCBdO1xyXG5leHBvcnQgY29uc3QgUEVSU0lBTl9NT05USF9OQU1FUyA9IFtcclxuXHRcIsOZwoHDmMKxw5nCiMOYwrHDmMKvw5vCjMOZwoZcIixcclxuXHRcIsOYwqfDmMKxw5jCr8ObwozDmMKow5nCh8OYwrTDmMKqXCIsXHJcblx0XCLDmMKuw5jCscOYwq/DmMKnw5jCr1wiLFxyXG5cdFwiw5jCqsObwozDmMKxXCIsXHJcblx0XCLDmcKFw5jCscOYwq/DmMKnw5jCr1wiLFxyXG5cdFwiw5jCtMOZwofDmMKxw5vCjMOZwojDmMKxXCIsXHJcblx0XCLDmcKFw5nCh8OYwrFcIixcclxuXHRcIsOYwqLDmMKow5jCp8OZwoZcIixcclxuXHRcIsOYwqLDmMKww5jCsVwiLFxyXG5cdFwiw5jCr8ObwoxcIixcclxuXHRcIsOYwqjDmcKHw5nChcOZwoZcIixcclxuXHRcIsOYwqfDmMKzw5nCgcOZwobDmMKvXCJcclxuXTtcclxuZXhwb3J0IGNsYXNzIERhdGVDbGFzcyB7XHJcblx0eWVhcjogc3RyaW5nO1xyXG5cdG1vbnRoOiBzdHJpbmc7XHJcblx0ZGF0ZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih5ZWFyLCBtb250aCwgZGF0ZSkge1xyXG5cdFx0dGhpcy55ZWFyID0geWVhcjtcclxuXHRcdHRoaXMubW9udGggPSBtb250aDtcclxuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XHJcblx0fVxyXG5cclxuXHRmdWxsRGF0ZShzZXByYXRvcjogc3RyaW5nID0gXCIvXCIpIHtcclxuXHRcdHJldHVybiBbIHRoaXMueWVhciwgdGhpcy5tb250aCwgdGhpcy5kYXRlIF0uam9pbihzZXByYXRvcik7XHJcblx0fVxyXG5cdG5hdGl2ZURhdGUoKSB7XHJcblx0XHRyZXR1cm4gbmV3IERhdGUocGFyc2VJbnQodGhpcy55ZWFyKSwgcGFyc2VJbnQodGhpcy5tb250aCkgLSAxLCBwYXJzZUludCh0aGlzLmRhdGUpKTtcclxuXHR9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xyXG5cdGlzID0gKGZ1bmN0aW9uKF8sIHVuZGVmaW5lZCkge1xyXG5cdFx0dmFyIGlzOiBhbnkgPSBmdW5jdGlvbihub2RlLCBzZWxlY3Rvcikge1xyXG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzKSByZXR1cm4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKTtcclxuXHRcdFx0dmFyIG5vZGVzID0gdGhpcy5hcmdUb0FycmF5KG5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcblx0XHRcdHJldHVybiBub2Rlcy5pbmRleE9mKG5vZGUpID4gLTEgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlzLm9iamVjdCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ub2RlTGlzdCA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRpZiAoXy5pcy5ub3QuaWUoKSkgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgTm9kZUxpc3RdXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0b2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHRvYmoucHVzaCA9PT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHQob2JqLmxlbmd0aCA+IDAgPyBvYmpbMF0udGFnTmFtZSAhPT0gdW5kZWZpbmVkIDogdHJ1ZSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNlYXJjaChcIkVsZW1lbnRcIikgPiAtMTtcclxuXHRcdFx0Ly9yZXR1cm4gISFPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikudG9Mb3dlckNhc2UoKS5zZWFyY2goJ2VsZW1lbnQnKTs7XHJcblx0XHR9O1xyXG5cdFx0aXMuSFRNTENvbGxlY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuYXJyYXkgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5udW1iZXIgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBOdW1iZXJdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXNbXCJmdW5jdGlvblwiXSA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLnN0cmluZyA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjsgLy8mJiAoKGlzRW1wdHkpKTtcclxuXHRcdH07XHJcblx0XHRpcy51bmRlZmluZWQgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBVbmRlZmluZWRdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXZlbnQgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikudG9Mb3dlckNhc2UoKS5zZWFyY2goXCJldmVudFwiKSA+IC0xO1xyXG5cdFx0fTtcclxuXHRcdGlzLmRlZmluZWQgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdC8vcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSAhPT0gJ1tvYmplY3QgVW5kZWZpbmVkXScgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBOdWxsXScgJiYgT2JqZWN0ICE9PSAnJztcclxuXHRcdFx0cmV0dXJuIF92YXIgIT09IHVuZGVmaW5lZCAmJiBfdmFyICE9PSBudWxsICYmIF92YXIgIT09IFwiXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuanNvbiA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5lcnJvciA9IGZ1bmN0aW9uKCkge307XHJcblxyXG5cdFx0aXMuc3RhcnRXaXRoID0gZnVuY3Rpb24oc3RyLCBwcmVmaXgpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5pbmRleE9mKHByZWZpeCkgPT09IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW5kV2l0aCA9IGZ1bmN0aW9uKHN0cikge307XHJcblxyXG5cdFx0aXMudmFsdWUgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBfdmFyID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVtcHR5ID0gZnVuY3Rpb24obykge1xyXG5cdFx0XHRpZiAoXy5pcy5vYmplY3QoMCkpIGZvciAodmFyIGkgaW4gbykgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkobykpIHJldHVybiBvLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0aXMudHJ1dGh5ID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLnNjYWxhciA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0Ly9UT0RPIDogaW1wcm92ZVxyXG5cdFx0XHRyZXR1cm4gaXMuZGVmaW5lZChfdmFyKSAmJiBpcy5ub3QuYXJyYXkoX3ZhcikgJiYgaXMubm90Lm9iamVjdChfdmFyKSAmJiBpcy5ub3RbXCJmdW5jdGlvblwiXShfdmFyKTtcclxuXHRcdH07XHJcblx0XHRpcy5wcm90b3R5cGVQcm9wID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7XHJcblx0XHRcdHJldHVybiBvYmpbcHJvcF0gJiYgIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbCA9IGZ1bmN0aW9uKGZ2LCBzdikge1xyXG5cdFx0XHQvL2lmICghZnYpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBmdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cdFx0XHQvL2lmICghc3YpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBzdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cclxuXHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KGZ2KSA9PSBKU09OLnN0cmluZ2lmeShzdikgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXF1YWxUZXh0ID0gZnVuY3Rpb24oZnYsIHN2KSB7XHJcblx0XHRcdHJldHVybiBmdi50b0xvd2VyQ2FzZShmdikgPT09IHN2LnRvTG93ZXJDYXNlKHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5jb250YWluID0gZnVuY3Rpb24oc3RyLCBzZWFyY2hTdHIpIHtcclxuXHRcdFx0dmFyIHJlZyA9IF8uaXMucmVnZXgoc2VhcmNoU3RyKSA/IHNlYXJjaFN0ciA6IG5ldyBSZWdFeHAoc2VhcmNoU3RyLCBcImdcIik7XHJcblx0XHRcdHJldHVybiBzdHIubWF0Y2gocmVnKSAmJiBzdHIubWF0Y2gocmVnKS5sZW5ndGggPiAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLnJlZ2V4ID0gZnVuY3Rpb24ocikge1xyXG5cdFx0XHRyZXR1cm4gci5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIlJlZ0V4cFwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLnNhbWUgPSBmdW5jdGlvbihmdiwgc3YpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBmdi5pc0VxdWFsTm9kZSA/IGZ2LmlzRXF1YWxOb2RlKHN2KSA6IGZ2ID09PSBzdjtcclxuXHRcdH07XHJcblx0XHRpcy5wZXJzaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyKSB7XHJcblx0XHRcdHJldHVybiAoKCh5ZWFyIC0gKHllYXIgPiAwID8gNDc0IDogNDczKSkgJSAyODIwICsgNDc0ICsgMzgpICogNjgyKSAlIDI4MTYgPCA2ODI7XHJcblx0XHR9O1xyXG5cdFx0aXMuZ2VvcmdpYW5MZWFwWWVhciA9IGZ1bmN0aW9uKHllYXIpIHtcclxuXHRcdFx0cmV0dXJuIHllYXIgJSA0ID09IDAgJiYgISh5ZWFyICUgMTAwID09IDAgJiYgeWVhciAlIDQwMCAhPSAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIG5vdCA9IHt9O1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0aWYgKGlzLmhhc093blByb3BlcnR5KGkpKVxyXG5cdFx0XHRcdFx0bm90W2ldID0gZnVuY3Rpb24oYSwgYiwgYykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gIWlzW2ldKGEsIGIsIGMpO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0fSkoaSk7XHJcblx0XHRpcy5ub3QgPSBub3Q7XHJcblxyXG5cdFx0Ly9UT0RPIDogaW1wZWxlbWVudFxyXG5cdFx0dmFyIGFsbCA9IHt9O1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSkgYWxsW2ldID0gZnVuY3Rpb24obykge307XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMuYWxsID0gYWxsO1xyXG5cclxuXHRcdHZhciBhbnkgPSB7fTtcclxuXHRcdGZvciAodmFyIGogaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihqKSB7XHJcblx0XHRcdFx0aWYgKGlzLmhhc093blByb3BlcnR5KGopKSBhbnlbal0gPSBmdW5jdGlvbihvKSB7fTtcclxuXHRcdFx0fSkoaik7XHJcblx0XHRpcy5hbnkgPSBhbnk7XHJcblxyXG5cdFx0cmV0dXJuIGlzO1xyXG5cdH0pKHRoaXMpO1xyXG5cdG1hdGggPSAoZnVuY3Rpb24oXykge1xyXG5cdFx0dmFyIG1hdGg6IGFueSA9IHt9O1xyXG5cclxuXHRcdG1hdGgubW9kID0gZnVuY3Rpb24oYSwgYikge1xyXG5cdFx0XHRyZXR1cm4gYSAtIGIgKiBNYXRoLmZsb29yKGEgLyBiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIG1hdGg7XHJcblx0fSkodGhpcyk7XHJcblxyXG5cdGRhdGUgPSAoZnVuY3Rpb24oXykge1xyXG5cdFx0dmFyIFBFUlNJQU5fRVBPQ0ggPSAxOTQ4MzIwLjUsXHJcblx0XHRcdEdSRUdPUklBTl9FUE9DSCA9IDE3MjE0MjUuNTtcclxuXHJcblx0XHR2YXIgZGF0ZToge1xyXG5cdFx0XHRwZXJzaWFuOiB7XHJcblx0XHRcdFx0UEVSU0lBTl9NT05USF9EQVlTX0NPVU5UOiBudW1iZXJbXTtcclxuXHRcdFx0XHRub3coKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGZvcmV0aW1lTW9udGhPZlllYXIoKTogc3RyaW5nW107XHJcblx0XHRcdFx0Z2V0RGF5c09mb01vbnRoKGlkeDogbnVtYmVyKTogc3RyaW5nW107XHJcblx0XHRcdFx0Y3JlYXRlKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0Z2V0RGF5T2ZXZWVrKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpOiBudW1iZXI7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZykgPT4gRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdFx0anVsaWFuOiAoeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZykgPT4gbnVtYmVyO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHRcdGdlb3JnaWFuOiB7XHJcblx0XHRcdFx0Ly8gZ2V0RnV0dXJlRGF0ZShuOiBudW1iZXIpOiBEYXRlLFxyXG5cdFx0XHRcdG5vdygpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0Z2V0UmVsYXRpdmVEYXkobjogbnVtYmVyKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdHBhcnNlKGRhdGU6IERhdGUpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdHBlcnNpYW4oeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZyk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRcdGp1bGlhbih5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHRcdGp1bGlhbjoge1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRwZXJzaWFuOiAoamQ6IG51bWJlciB8IHN0cmluZykgPT4gc3RyaW5nW107XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKGpkOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZ1tdO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHRcdGFzOiB7XHJcblx0XHRcdFx0RGF0ZTogKFsgeSwgbSwgZCBdOiBzdHJpbmdbXSkgPT4gRGF0ZTtcclxuXHRcdFx0fTtcclxuXHRcdH0gPSB7XHJcblx0XHRcdHBlcnNpYW46IHtcclxuXHRcdFx0XHRQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQ6IFtdLFxyXG5cdFx0XHRcdG5vdzogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRjcmVhdGU6ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiBudWxsLFxyXG5cdFx0XHRcdGdldERheXNPZm9Nb250aDogKGlkeDogbnVtYmVyKSA9PiBudWxsLFxyXG5cdFx0XHRcdGdldERheU9mV2VlazogKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IG51bGwsXHJcblx0XHRcdFx0Zm9yZXRpbWVNb250aE9mWWVhcjogKCkgPT4gW10sXHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdFx0anVsaWFuOiAoKSA9PiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRqdWxpYW46IHtcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46ICgpID0+IG51bGwsXHJcblx0XHRcdFx0XHRwZXJzaWFuOiAoKSA9PiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZW9yZ2lhbjoge1xyXG5cdFx0XHRcdC8vIGdldEZ1dHVyZURhdGU6IChuOiBudW1iZXIpID0+IG51bGwsXHJcblx0XHRcdFx0bm93OiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdGdldFJlbGF0aXZlRGF5OiAobjogbnVtYmVyKSA9PiBudWxsLFxyXG5cdFx0XHRcdHBhcnNlOiAoZGF0ZTogRGF0ZSkgPT4gbnVsbCxcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0cGVyc2lhbjogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRcdGp1bGlhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXM6IHtcclxuXHRcdFx0XHREYXRlOiAoKSA9PiBudWxsXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQvLyBkYXRlLnBlcnNpYW4gPSB7fTtcclxuXHRcdC8vIGRhdGUucGVyc2lhbi50byA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5nZW9yZ2lhbiA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5nZW9yZ2lhbi50byA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5qdWxpYW4gPSB7fTtcclxuXHRcdC8vIGRhdGUuanVsaWFuLnRvID0ge307XHJcblx0XHQvLyBkYXRlLmFzID0ge307XHJcblx0XHRkYXRlLmFzLkRhdGUgPSAoWyB5LCBtLCBkIF06IHN0cmluZ1tdKTogRGF0ZSA9PiBuZXcgRGF0ZShwYXJzZUludCh5KSwgcGFyc2VJbnQobSkgLSAxLCBwYXJzZUludChkKSk7XHJcblxyXG5cdFx0dmFyIGluc2VydFplcm8gPSBmdW5jdGlvbihpKSB7XHJcblx0XHRcdGkgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdHJldHVybiBpLmxlbmd0aCA9PSAxID8gXCIwXCIgKyBpIDogaTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uUEVSU0lBTl9NT05USF9EQVlTX0NPVU5UID0gWyAzMSwgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCBdO1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLm5vdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0cmV0dXJuIGRhdGUuZ2VvcmdpYW4udG8ucGVyc2lhbihub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5jcmVhdGUgPSAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4gbmV3IERhdGVDbGFzcyh5LCBtLCBkKTtcclxuXHRcdGRhdGUucGVyc2lhbi5nZXREYXlzT2ZvTW9udGggPSAoaWR4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0dmFyIGNvdW50ID0gUEVSU0lBTl9NT05USF9EQVlTX0NPVU5UW2lkeF07XHJcblx0XHRcdGxldCByZXMgPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjb3VudCArIDE7IGkrKykge1xyXG5cdFx0XHRcdGxldCBkYXlOYW1lID0gaSA8IDEwID8gXCIwXCIgKyBpIDogaS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHJlcy5wdXNoKGRheU5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXM7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmdldERheU9mV2VlayA9ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGxldCBwZXJzaWFuSG9saWRheSA9IGRhdGUucGVyc2lhbi5jcmVhdGUoXCIxMzk2XCIsIFwiMVwiLCBcIjFcIik7XHJcblx0XHRcdGxldCBwZXJzaWFuSG9saWRheUluR2VvcmdpYW4gPSBkYXRlLnBlcnNpYW4udG8uZ2VvcmdpYW4oXCIxMzk2XCIsIFwiMVwiLCBcIjFcIikubmF0aXZlRGF0ZSgpO1xyXG5cclxuXHRcdFx0dmFyIG1vbnRoID0gK20gLSAxO1xyXG5cdFx0XHR2YXIgZGF5ID0gK2Q7XHJcblx0XHRcdHZhciBkYXlzT2ZZZWFyID0gUEVSU0lBTl9NT05USF9EQVlTX0NPVU5ULnJlZHVjZSgoYSwgYiwgaWR4KSA9PiB7XHJcblx0XHRcdFx0aWYgKGlkeCA9PSBtb250aCkgcmV0dXJuIGEgKyBkYXk7XHJcblx0XHRcdFx0aWYgKGlkeCA+IG1vbnRoKSByZXR1cm4gYTtcclxuXHRcdFx0XHRyZXR1cm4gYSArIGI7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIChkYXlzT2ZZZWFyICsgcGVyc2lhbkhvbGlkYXlJbkdlb3JnaWFuLmdldERheSgpIC0gMSkgJSA3O1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5mb3JldGltZU1vbnRoT2ZZZWFyID0gKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gUEVSU0lBTl9NT05USF9OQU1FUy5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4gaWR4IDw9ICtkYXRlLnBlcnNpYW4ubm93KCkubW9udGggLSAxKTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0dmFyIGVwYmFzZSwgZXB5ZWFyO1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhci50b1N0cmluZygpKTtcclxuXHRcdFx0bW9udGggPSBwYXJzZUludChtb250aC50b1N0cmluZygpKTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0ZXBiYXNlID0geWVhciAtICh5ZWFyID49IDAgPyA0NzQgOiA0NzMpO1xyXG5cdFx0XHRlcHllYXIgPSA0NzQgKyBfLm1hdGgubW9kKGVwYmFzZSwgMjgyMCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGRheSArXHJcblx0XHRcdFx0KG1vbnRoIDw9IDcgPyAobW9udGggLSAxKSAqIDMxIDogKG1vbnRoIC0gMSkgKiAzMCArIDYpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKChlcHllYXIgKiA2ODIgLSAxMTApIC8gMjgxNikgK1xyXG5cdFx0XHRcdChlcHllYXIgLSAxKSAqIDM2NSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcihlcGJhc2UgLyAyODIwKSAqIDEwMjk5ODMgK1xyXG5cdFx0XHRcdChQRVJTSUFOX0VQT0NIIC0gMSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5nZW9yZ2lhbihcclxuXHRcdFx0XHRkYXRlLnBlcnNpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSksIHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpLCBwYXJzZUludChkYXkudG9TdHJpbmcoKSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKGRhdGVBcnJheVswXSwgcGFyc2VJbnQoZGF0ZUFycmF5WzFdKSwgZGF0ZUFycmF5WzJdKTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi5wYXJzZSA9IChkYXRlOiBEYXRlKTogRGF0ZUNsYXNzID0+XHJcblx0XHRcdG5ldyBEYXRlQ2xhc3MoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSk7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSkgKyAxO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdEdSRUdPUklBTl9FUE9DSCAtXHJcblx0XHRcdFx0MSArXHJcblx0XHRcdFx0MzY1ICogKHllYXIgLSAxKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNCkgK1xyXG5cdFx0XHRcdC1NYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0MDApICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCgzNjcgKiBtb250aCAtIDM2MikgLyAxMiArIChtb250aCA8PSAyID8gMCA6IF8uaXMuZ2VvcmdpYW5MZWFwWWVhcih5ZWFyKSA/IC0xIDogLTIpICsgZGF5KVxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8ucGVyc2lhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLnBlcnNpYW4oXHJcblx0XHRcdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhci50b1N0cmluZygpKSwgcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSksIHBhcnNlSW50KGRheS50b1N0cmluZygpKSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3MoZGF0ZUFycmF5WzBdLCBkYXRlQXJyYXlbMV0sIGRhdGVBcnJheVsyXSk7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZGF0ZS5nZW9yZ2lhbi5nZXRGdXR1cmVEYXRlID0gZnVuY3Rpb24gKG4pIHtcclxuXHRcdC8vICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdC8vICAgICByZXR1cm4gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpICsgbik7XHJcblx0XHQvLyB9XHJcblx0XHRkYXRlLmdlb3JnaWFuLm5vdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3Mobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpICsgMSwgbm93LmdldERhdGUoKSk7XHJcblx0XHR9O1xyXG5cdFx0KGRhdGUuZ2VvcmdpYW4uZ2V0UmVsYXRpdmVEYXkgPSAobjogbnVtYmVyKSA9PiB7XHJcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIC0xICogbiAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKTtcclxuXHRcdH0pLFxyXG5cdFx0XHQoZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbihqZCkge1xyXG5cdFx0XHRcdHZhciB3amQsXHJcblx0XHRcdFx0XHRkZXBvY2gsXHJcblx0XHRcdFx0XHRxdWFkcmljZW50LFxyXG5cdFx0XHRcdFx0ZHFjLFxyXG5cdFx0XHRcdFx0Y2VudCxcclxuXHRcdFx0XHRcdGRjZW50LFxyXG5cdFx0XHRcdFx0cXVhZCxcclxuXHRcdFx0XHRcdGRxdWFkLFxyXG5cdFx0XHRcdFx0eWluZGV4LFxyXG5cdFx0XHRcdFx0ZHlpbmRleCxcclxuXHRcdFx0XHRcdHllYXIsXHJcblx0XHRcdFx0XHRtb250aCxcclxuXHRcdFx0XHRcdGRheSxcclxuXHRcdFx0XHRcdHllYXJkYXksXHJcblx0XHRcdFx0XHRsZWFwYWRqO1xyXG5cdFx0XHRcdGpkID0gcGFyc2VGbG9hdChqZC50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdFx0d2pkID0gTWF0aC5mbG9vcihqZCAtIDAuNSkgKyAwLjU7XHJcblx0XHRcdFx0ZGVwb2NoID0gd2pkIC0gR1JFR09SSUFOX0VQT0NIO1xyXG5cdFx0XHRcdHF1YWRyaWNlbnQgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDE0NjA5Nyk7XHJcblx0XHRcdFx0ZHFjID0gXy5tYXRoLm1vZChkZXBvY2gsIDE0NjA5Nyk7XHJcblx0XHRcdFx0Y2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xyXG5cdFx0XHRcdGRjZW50ID0gXy5tYXRoLm1vZChkcWMsIDM2NTI0KTtcclxuXHRcdFx0XHRxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xyXG5cdFx0XHRcdGRxdWFkID0gXy5tYXRoLm1vZChkY2VudCwgMTQ2MSk7XHJcblx0XHRcdFx0eWluZGV4ID0gTWF0aC5mbG9vcihkcXVhZCAvIDM2NSk7XHJcblx0XHRcdFx0eWVhciA9IHF1YWRyaWNlbnQgKiA0MDAgKyBjZW50ICogMTAwICsgcXVhZCAqIDQgKyB5aW5kZXg7XHJcblx0XHRcdFx0aWYgKCEoY2VudCA9PSA0IHx8IHlpbmRleCA9PSA0KSkge1xyXG5cdFx0XHRcdFx0eWVhcisrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR5ZWFyZGF5ID0gd2pkIC0gXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCAwLCAxKTtcclxuXHRcdFx0XHRsZWFwYWRqID0gd2pkIDwgXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCAzLCAxKSA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAxIDogMjtcclxuXHRcdFx0XHRtb250aCA9IE1hdGguZmxvb3IoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMiArIDM3MykgLyAzNjcpO1xyXG5cdFx0XHRcdGRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgbW9udGggLSAxLCAxKSArIDE7XHJcblxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0ZGF0ZS5qdWxpYW4udG8ucGVyc2lhbiA9IGZ1bmN0aW9uKGpkKSB7XHJcblx0XHRcdHZhciB5ZWFyLCBtb250aCwgZGF5LCBkZXBvY2gsIGN5Y2xlLCBjeWVhciwgeWN5Y2xlLCBhdXgxLCBhdXgyLCB5ZGF5O1xyXG5cdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRqZCA9IE1hdGguZmxvb3IoamQpICsgMC41O1xyXG5cclxuXHRcdFx0ZGVwb2NoID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oNDc1LCAxLCAxKTtcclxuXHRcdFx0Y3ljbGUgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDEwMjk5ODMpO1xyXG5cdFx0XHRjeWVhciA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxMDI5OTgzKTtcclxuXHRcdFx0aWYgKGN5ZWFyID09IDEwMjk5ODIpIHtcclxuXHRcdFx0XHR5Y3ljbGUgPSAyODIwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuXHRcdFx0XHRhdXgyID0gXy5tYXRoLm1vZChjeWVhciwgMzY2KTtcclxuXHRcdFx0XHR5Y3ljbGUgPSBNYXRoLmZsb29yKCgyMTM0ICogYXV4MSArIDI4MTYgKiBhdXgyICsgMjgxNSkgLyAxMDI4NTIyKSArIGF1eDEgKyAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHllYXIgPSB5Y3ljbGUgKyAyODIwICogY3ljbGUgKyA0NzQ7XHJcblx0XHRcdGlmICh5ZWFyIDw9IDApIHtcclxuXHRcdFx0XHR5ZWFyLS07XHJcblx0XHRcdH1cclxuXHRcdFx0eWRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIDEsIDEpICsgMTtcclxuXHRcdFx0bW9udGggPSB5ZGF5IDw9IDE4NiA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcblx0XHRcdGRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoLCAxKSArIDE7XHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBkYXRlO1xyXG5cdH0pKHRoaXMpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzdHJpbmdUZW1wbGF0ZSA9ICh0ZW1wbGF0ZTogYW55LCBtb2RlbDogYW55KSA9PiB7XHJcblx0cmV0dXJuIGV2YWwoJ2AnICsgdGVtcGxhdGUgKyAnYCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0Y2hWYWxpZGF0b3IoZGVzdGluYXRpb246IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLnJvb3QudmFsdWUpIHJldHVybjtcclxuICAgICAgICBsZXQgZGVzdGluYXRpb25WYWx1ZSA9IGNvbnRyb2wucm9vdC52YWx1ZVtkZXN0aW5hdGlvbl07XHJcblxyXG4gICAgICAgIHJldHVybiAoZGVzdGluYXRpb25WYWx1ZSA9PSBjb250cm9sLnZhbHVlKVxyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiB7IGtleTogXCJkb24ndCBtYXRjaGVkXCIgfTtcclxuICAgIH07XHJcbn0iLCJleHBvcnQgY2xhc3MgSVJlc3BvbnNlPFQ+IHtcclxuXHRSZXN1bHQ6IFQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBpcGUiLCJ0aGlzIiwiTmdNb2R1bGUiLCJJbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O1FBSUMsZ0NBQVM7Ozs7O1lBQVQsVUFBVSxLQUFhLEVBQUUsUUFBZ0I7Z0JBQ3hDLElBQUksS0FBSyxJQUFJLENBQUM7b0JBQUUsT0FBTyxRQUFRLENBQUM7Z0JBQ2hDLElBQUksS0FBSyxJQUFJLElBQUk7b0JBQUUsT0FBTyxTQUFTLENBQUM7Z0JBRXBDLHFCQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1YscUJBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLHFCQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixxQkFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFFbkIscUJBQUksY0FBYyxDQUFDO2dCQUNuQixxQkFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUVwQixJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sR0FBRyxXQUFXLENBQUM7b0JBQ3JCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztxQkFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7b0JBQ3ZCLE1BQU0sR0FBRyxVQUFVLENBQUM7b0JBQ3BCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztxQkFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7b0JBQ3ZCLE1B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