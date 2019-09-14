import { Pipe, NgModule, Injectable, ɵɵdefineInjectable } from '@angular/core';
import { __read } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataUnitPipe = /** @class */ (function () {
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
        /** @type {?} */
        var B = 1;
        /** @type {?} */
        var KB = B * 1024;
        /** @type {?} */
        var MB = KB * 1024;
        /** @type {?} */
        var GB = MB * 1024;
        /** @type {?} */
        var convertedValue;
        /** @type {?} */
        var suffix = "بایت";
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
        { type: Pipe, args: [{ name: "dataUnit" },] }
    ];
    return DataUnitPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TimeUnitExtractor() { }
if (false) {
    /** @type {?} */
    TimeUnitExtractor.prototype.count;
    /** @type {?} */
    TimeUnitExtractor.prototype.value;
    /** @type {?} */
    TimeUnitExtractor.prototype.remaining;
}
var TimeUnitPipe = /** @class */ (function () {
    function TimeUnitPipe() {
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getDays = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60 * 60 * 24;
        /** @type {?} */
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getHours = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60 * 60;
        /** @type {?} */
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getMinuts = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60;
        /** @type {?} */
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getSeconds = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var count = Math.floor((value));
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
        /** @type {?} */
        var connector = ' و ';
        /** @type {?} */
        var daysData = this.getDays(value);
        /** @type {?} */
        var hoursData = this.getHours(daysData.remaining);
        /** @type {?} */
        var minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData /*, secondssData*/]
            .filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.count; }))
            .map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.value; })).join(connector);
    };
    TimeUnitPipe.decorators = [
        { type: Pipe, args: [{ name: 'timeUnit' },] }
    ];
    return TimeUnitPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PersianDateExtractor() { }
if (false) {
    /** @type {?} */
    PersianDateExtractor.prototype.count;
    /** @type {?} */
    PersianDateExtractor.prototype.value;
    /** @type {?} */
    PersianDateExtractor.prototype.remaining;
}
var PersianDatePipe = /** @class */ (function () {
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
        /** @type {?} */
        var date;
        if (value.toDate) {
            date = value.toDate();
        }
        else {
            date = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
        }
        /** @type {?} */
        var persianDate = _.date.georgian.to.persian(date.getFullYear(), date.getMonth() + 1, date.getDate());
        return [
            parseInt(persianDate[0]).toLocaleString("fa-IR", { useGrouping: false }),
            parseInt(persianDate[1]).toLocaleString("fa-IR", { useGrouping: false }),
            parseInt(persianDate[2]).toLocaleString("fa-IR", { useGrouping: false })
        ].join("/");
    };
    PersianDatePipe.decorators = [
        { type: Pipe, args: [{ name: "persianDate" },] }
    ];
    return PersianDatePipe;
}());
var ɵ0 = /**
 * @param {?} _
 * @return {?}
 */
function (_) {
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
    is.closet = (/**
     * @param {?} fo
     * @param {?} so
     * @return {?}
     */
    function (fo, so) {
        return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
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
}, ɵ1 = /**
 * @return {?}
 */
function () {
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
}, ɵ2 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var PERSIAN_EPOCH = 1948320.5;
    /** @type {?} */
    var GREGORIAN_EPOCH = 1721425.5;
    /** @type {?} */
    var date = {};
    date.persian = {};
    date.persian.to = {};
    date.georgian = {};
    date.georgian.to = {};
    date.julian = {};
    date.julian.to = {};
    /** @type {?} */
    var insertZero = (/**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        i = i.toString();
        return i.length == 1 ? "0" + i : i;
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
    });
    date.persian.to.georgian = (/**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @param {?} joinCharacter
     * @return {?}
     */
    function (year, month, day, joinCharacter) {
        /** @type {?} */
        var dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year), parseInt(month) + 1, parseInt(day)));
        return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
    });
    date.georgian.to.julian = (/**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    function (year, month, day) {
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
    });
    date.georgian.to.persian = (/**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @param {?} joinCharacter
     * @return {?}
     */
    function (year, month, day, joinCharacter) {
        /** @type {?} */
        var dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year), parseInt(month), parseInt(day)));
        return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
    });
    date.julian.to.georgian = (/**
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
    });
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
    });
    return date;
};
/** @type {?} */
var _ = {
    is: ((ɵ0))(this),
    math: ((ɵ1))(),
    date: ((ɵ2))()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CurrencyUnitPipe = /** @class */ (function () {
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
        /** @type {?} */
        var suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    };
    CurrencyUnitPipe.decorators = [
        { type: Pipe, args: [{ name: 'currencyUnit' },] }
    ];
    return CurrencyUnitPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PersianNumberPipe = /** @class */ (function () {
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
        /** @type {?} */
        var res = '';
        for (var index = 0; index < value.length; index++) {
            res += (+value[index]).toLocaleString('fa-IR', {
                useGrouping: false
            });
        }
        return res;
    };
    PersianNumberPipe.decorators = [
        { type: Pipe, args: [{ name: 'persianNumber' },] }
    ];
    return PersianNumberPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TimeCounterExtractor() { }
if (false) {
    /** @type {?} */
    TimeCounterExtractor.prototype.count;
    /** @type {?} */
    TimeCounterExtractor.prototype.value;
    /** @type {?} */
    TimeCounterExtractor.prototype.remaining;
}
var TimeCounterPipe = /** @class */ (function () {
    function TimeCounterPipe() {
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getHours = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60 * 60;
        /** @type {?} */
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getMinuts = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60;
        /** @type {?} */
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getSeconds = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var count = Math.floor((value));
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
        /** @type {?} */
        var connector = ' : ';
        // let daysData = this.getDays(value);
        /** @type {?} */
        var hoursData = this.getHours(value);
        /** @type {?} */
        var minutsData = this.getMinuts(hoursData.remaining);
        /** @type {?} */
        var secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.count; })).join(connector);
    };
    TimeCounterPipe.decorators = [
        { type: Pipe, args: [{ name: 'timeCounter' },] }
    ];
    return TimeCounterPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.shared = "8.0.10";
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                    exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
                },] }
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return []; };
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
HttpResponseBaseModel = /** @class */ (function () {
    function HttpResponseBaseModel() {
    }
    return HttpResponseBaseModel;
}());
if (false) {
    /** @type {?} */
    HttpResponseBaseModel.prototype.Result;
    /**
     * @abstract
     * @return {?}
     */
    HttpResponseBaseModel.prototype.extractData = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
HttpRequestBaseModel = /** @class */ (function () {
    function HttpRequestBaseModel() {
    }
    return HttpRequestBaseModel;
}());
if (false) {
    /**
     * @abstract
     * @template K
     * @param {?} keys
     * @return {?}
     */
    HttpRequestBaseModel.prototype.getRequestBody = function (keys) { };
    /**
     * @abstract
     * @template K
     * @param {?} keys
     * @return {?}
     */
    HttpRequestBaseModel.prototype.getRequestQueryParams = function (keys) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
/** @type {?} */
var PERSIAN_MONTH_NAMES = [
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
var DateClass = /** @class */ (function () {
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
        if (seprator === void 0) { seprator = "/"; }
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
if (false) {
    /** @type {?} */
    DateClass.prototype.year;
    /** @type {?} */
    DateClass.prototype.month;
    /** @type {?} */
    DateClass.prototype.date;
}
var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this.is = ((/**
         * @param {?} _
         * @param {?} undefined
         * @return {?}
         */
        function (_, undefined$1) {
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
                    return (obj.length !== undefined$1 &&
                        obj.push === undefined$1 &&
                        (obj.length > 0 ? obj[0].tagName !== undefined$1 : true));
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
                return _var !== undefined$1 && _var !== null && _var !== "";
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
                    function () { return null; }),
                    create: (/**
                     * @param {?} y
                     * @param {?} m
                     * @param {?} d
                     * @return {?}
                     */
                    function (y, m, d) { return null; }),
                    getDaysOfoMonth: (/**
                     * @param {?} idx
                     * @return {?}
                     */
                    function (idx) { return null; }),
                    getDayOfWeek: (/**
                     * @param {?} y
                     * @param {?} m
                     * @param {?} d
                     * @return {?}
                     */
                    function (y, m, d) { return null; }),
                    foretimeMonthOfYear: (/**
                     * @return {?}
                     */
                    function () { return []; }),
                    to: {
                        georgian: (/**
                         * @return {?}
                         */
                        function () { return null; }),
                        julian: (/**
                         * @return {?}
                         */
                        function () { return null; })
                    }
                },
                julian: {
                    to: {
                        georgian: (/**
                         * @return {?}
                         */
                        function () { return null; }),
                        persian: (/**
                         * @return {?}
                         */
                        function () { return null; })
                    }
                },
                georgian: {
                    // getFutureDate: (n: number) => null,
                    now: (/**
                     * @return {?}
                     */
                    function () { return null; }),
                    getRelativeDay: (/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return null; }),
                    parse: (/**
                     * @param {?} date
                     * @return {?}
                     */
                    function (date) { return null; }),
                    to: {
                        persian: (/**
                         * @return {?}
                         */
                        function () { return null; }),
                        julian: (/**
                         * @return {?}
                         */
                        function () { return null; })
                    }
                },
                as: {
                    Date: (/**
                     * @return {?}
                     */
                    function () { return null; })
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
            function (_a) {
                var _b = __read(_a, 3), y = _b[0], m = _b[1], d = _b[2];
                return new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
            });
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
                var now = new Date();
                return date.georgian.to.persian(now.getFullYear(), now.getMonth(), now.getDate());
            });
            date.persian.create = (/**
             * @param {?} y
             * @param {?} m
             * @param {?} d
             * @return {?}
             */
            function (y, m, d) { return new DateClass(y, m, d); });
            date.persian.getDaysOfoMonth = (/**
             * @param {?} idx
             * @return {?}
             */
            function (idx) {
                /** @type {?} */
                var count = PERSIAN_MONTH_DAYS_COUNT[idx];
                /** @type {?} */
                var res = [];
                for (var i = 1; i < count + 1; i++) {
                    /** @type {?} */
                    var dayName = i < 10 ? "0" + i : i.toString();
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
            function (y, m, d) {
                /** @type {?} */
                var persianHoliday = date.persian.create("1396", "1", "1");
                /** @type {?} */
                var persianHolidayInGeorgian = date.persian.to.georgian("1396", "1", "1").nativeDate();
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
                function (a, b, idx) {
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
            function () {
                return PERSIAN_MONTH_NAMES.filter((/**
                 * @param {?} item
                 * @param {?} idx
                 * @return {?}
                 */
                function (item, idx) { return idx <= +date.persian.now().month - 1; }));
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
            function (date) {
                return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
            });
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
                var now = new Date();
                return new DateClass(now.getFullYear(), now.getMonth() + 1, now.getDate());
            });
            (date.georgian.getRelativeDay = (/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                /** @type {?} */
                var date = new Date(Date.now() + -1 * n * 24 * 60 * 60 * 1000);
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
    UtilityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */ UtilityService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
    return UtilityService;
}());
if (false) {
    /** @type {?} */
    UtilityService.prototype.is;
    /** @type {?} */
    UtilityService.prototype.math;
    /** @type {?} */
    UtilityService.prototype.date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var stringTemplate = (/**
 * @param {?} template
 * @param {?} model
 * @return {?}
 */
function (template, model) {
    /** @type {?} */
    var url;
    try {
        // tslint:disable-next-line:no-eval
        url = eval("`" + template + "`");
    }
    catch (error) {
        // tslint:disable-next-line:no-eval
        url = "";
    }
    return url;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Cookie = /** @class */ (function () {
    // private isConsented: boolean = false;
    function Cookie() {
        // this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    Cookie.getCookie = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var ca = document.cookie.split(";");
        /** @type {?} */
        var caLen = ca.length;
        /** @type {?} */
        var cookieName = name + "=";
        /** @type {?} */
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    };
    /**
     * @param {?} name
     * @return {?}
     */
    Cookie.deleteCookie = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.setCookie(name, "", -1);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} expireDays
     * @param {?=} path
     * @return {?}
     */
    Cookie.setCookie = /**
     * @param {?} name
     * @param {?} value
     * @param {?} expireDays
     * @param {?=} path
     * @return {?}
     */
    function (name, value, expireDays, path) {
        if (path === void 0) { path = ""; }
        /** @type {?} */
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        /** @type {?} */
        var expires = "expires=" + d.toUTCString();
        /** @type {?} */
        var cpath = path ? "; path=" + path : "";
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    /**
     * @param {?} isConsent
     * @param {?} e
     * @return {?}
     */
    Cookie.consent = /**
     * @param {?} isConsent
     * @param {?} e
     * @return {?}
     */
    function (isConsent, e) {
        // if (!isConsent) {
        //     return this.isConsented;
        // } else if (isConsent) {
        //     this.setCookie(COOKIE_CONSENT, "1", COOKIE_CONSENT_EXPIRE_DAYS);
        //     this.isConsented = true;
        //     e.preventDefault();
        // }
    };
    return Cookie;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} destination
 * @return {?}
 */
function MatchValidator(destination) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (!control.root.value)
            return;
        /** @type {?} */
        var destinationValue = control.root.value[destination];
        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
IResponse = /** @class */ (function () {
    function IResponse() {
    }
    return IResponse;
}());
if (false) {
    /** @type {?} */
    IResponse.prototype.Result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Cookie, DateClass, HttpRequestBaseModel, HttpResponseBaseModel, IResponse, MatchValidator, PERSIAN_MONTH_DAYS_COUNT, PERSIAN_MONTH_NAMES, SharedModule, UtilityService, stringTemplate, DataUnitPipe as ɵa, TimeUnitPipe as ɵb, PersianDatePipe as ɵc, CurrencyUnitPipe as ɵd, PersianNumberPipe as ɵe, TimeCounterPipe as ɵf };
//# sourceMappingURL=soushians-shared.js.map
