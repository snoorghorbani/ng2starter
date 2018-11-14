import { Pipe, NgModule, Injectable, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DataUnitPipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (value == 0)
            return "0 بایت";
        if (value == null)
            return "نامحدود";
        /** @type {?} */
        let B = 1;
        /** @type {?} */
        let KB = B * 1024;
        /** @type {?} */
        let MB = KB * 1024;
        /** @type {?} */
        let GB = MB * 1024;
        /** @type {?} */
        let convertedValue;
        /** @type {?} */
        let suffix = "بایت";
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
    }
}
DataUnitPipe.decorators = [
    { type: Pipe, args: [{ name: "dataUnit" },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TimeUnitPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    getDays(value) {
        /** @type {?} */
        let rate = 60 * 60 * 24;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getHours(value) {
        /** @type {?} */
        let rate = 60 * 60;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinuts(value) {
        /** @type {?} */
        let rate = 60;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getSeconds(value) {
        /** @type {?} */
        let count = Math.floor((value));
        return {
            count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (value === 0)
            return '0 دقیقه';
        if (!value)
            return '';
        /** @type {?} */
        const connector = ' و ';
        /** @type {?} */
        let daysData = this.getDays(value);
        /** @type {?} */
        let hoursData = this.getHours(daysData.remaining);
        /** @type {?} */
        let minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData]
            .filter(i => i.count)
            .map(i => i.value).join(connector);
    }
}
TimeUnitPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeUnit' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PersianDatePipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
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
    }
}
PersianDatePipe.decorators = [
    { type: Pipe, args: [{ name: "persianDate" },] },
];
const ɵ0 = function (_) {
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
    is.closet = function (fo, so) {
        return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
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
}, ɵ1 = function () {
    /** @type {?} */
    var math = {};
    math.mod = function (a, b) {
        return a - b * Math.floor(a / b);
    };
    return math;
}, ɵ2 = function () {
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
    var insertZero = function (i) {
        i = i.toString();
        return i.length == 1 ? "0" + i : i;
    };
    date.persian.to.julian = function (year, month, day) {
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
    };
    date.persian.to.georgian = function (year, month, day, joinCharacter) {
        /** @type {?} */
        var dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year), parseInt(month) + 1, parseInt(day)));
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
        /** @type {?} */
        var dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year), parseInt(month), parseInt(day)));
        return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
    };
    date.julian.to.georgian = function (jd) {
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
    };
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
/** @type {?} */
var _ = {
    is: (ɵ0)(this),
    math: (ɵ1)(),
    date: (ɵ2)()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CurrencyUnitPipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (!value && value != 0)
            return '';
        else if (value == 0)
            return 'رایگان';
        /** @type {?} */
        let suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    }
}
CurrencyUnitPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyUnit' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PersianNumberPipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
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
    }
}
PersianNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'persianNumber' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TimeCounterPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    getHours(value) {
        /** @type {?} */
        let rate = 60 * 60;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinuts(value) {
        /** @type {?} */
        let rate = 60;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getSeconds(value) {
        /** @type {?} */
        let count = Math.floor((value));
        return {
            count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (!value)
            return '';
        /** @type {?} */
        const connector = ' : ';
        /** @type {?} */
        let hoursData = this.getHours(value);
        /** @type {?} */
        let minutsData = this.getMinuts(hoursData.remaining);
        /** @type {?} */
        let secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(i => i.count).join(connector);
    }
}
TimeCounterPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeCounter' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class HttpResponseBaseModel {
    constructor() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class HttpRequestBaseModel {
    constructor() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
/** @type {?} */
const PERSIAN_MONTH_NAMES = [
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
class DateClass {
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
class UtilityService {
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
            },] },
];
/** @nocollapse */ UtilityService.ngInjectableDef = defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const stringTemplate = (template, model) => {
    /** @type {?} */
    let url;
    try {
        // tslint:disable-next-line:no-eval
        url = eval("`" + template + "`");
    }
    catch (error) {
        // tslint:disable-next-line:no-eval
        url = "";
    }
    return url;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Cookie {
    constructor() {
        // this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    static getCookie(name) {
        /** @type {?} */
        const ca = document.cookie.split(";");
        /** @type {?} */
        const caLen = ca.length;
        /** @type {?} */
        const cookieName = `${name}=`;
        /** @type {?} */
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }
    /**
     * @param {?} name
     * @return {?}
     */
    static deleteCookie(name) {
        this.setCookie(name, "", -1);
    }
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} expireDays
     * @param {?=} path
     * @return {?}
     */
    static setCookie(name, value, expireDays, path = "") {
        /** @type {?} */
        const d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        /** @type {?} */
        const expires = `expires=${d.toUTCString()}`;
        /** @type {?} */
        const cpath = path ? `; path=${path}` : "";
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    /**
     * @param {?} isConsent
     * @param {?} e
     * @return {?}
     */
    static consent(isConsent, e) {
        // if (!isConsent) {
        //     return this.isConsented;
        // } else if (isConsent) {
        //     this.setCookie(COOKIE_CONSENT, "1", COOKIE_CONSENT_EXPIRE_DAYS);
        //     this.isConsented = true;
        //     e.preventDefault();
        // }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} destination
 * @return {?}
 */
function MatchValidator(destination) {
    return (control) => {
        if (!control.root.value)
            return;
        /** @type {?} */
        let destinationValue = control.root.value[destination];
        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class IResponse {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Cookie, SharedModule, HttpResponseBaseModel, HttpRequestBaseModel, PERSIAN_MONTH_DAYS_COUNT, PERSIAN_MONTH_NAMES, DateClass, UtilityService, stringTemplate, MatchValidator, IResponse, CurrencyUnitPipe as ɵd, DataUnitPipe as ɵa, PersianDatePipe as ɵc, PersianNumberPipe as ɵe, TimeCounterPipe as ɵf, TimeUnitPipe as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNoYXJlZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL2RhdGEtdW5pdC5waXBlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvcGlwZXMvdGltZS11bml0LnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9wZXJzaWFuLWRhdGUucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL2N1cnJlbmN5LXVuaXQucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL3BlcnNpYW4tbnVtYmVyLnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy90aW1lLWNvdW50ZXIucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3NoYXJlZC5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9odHRwLXJlc3BvbnNlLWJhc2UtbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9odHRwLXJlcXVlc3QtYmFzZS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3V0aWxpdHkuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL2hlbHBlcnMvc3RyaW5nLXRlbXBsYXRlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvaGVscGVycy9jb29raWUudXRpbGl0eS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3ZhbGlkYXRvcnMvbWF0Y2gudmFsaWRhdG9yLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvcmVzcG9uc2UuaW50ZXJmYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiBcImRhdGFVbml0XCIgfSlcclxuZXhwb3J0IGNsYXNzIERhdGFVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cdHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICh2YWx1ZSA9PSAwKSByZXR1cm4gXCIwIMOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXCLDmcKGw5jCp8OZwoXDmMKtw5jCr8OZwojDmMKvXCI7XHJcblxyXG5cdFx0bGV0IEIgPSAxO1xyXG5cdFx0bGV0IEtCID0gQiAqIDEwMjQ7XHJcblx0XHRsZXQgTUIgPSBLQiAqIDEwMjQ7XHJcblx0XHRsZXQgR0IgPSBNQiAqIDEwMjQ7XHJcblxyXG5cdFx0bGV0IGNvbnZlcnRlZFZhbHVlO1xyXG5cdFx0bGV0IHN1ZmZpeCA9IFwiw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cclxuXHRcdGlmICh2YWx1ZSA+PSBHQikge1xyXG5cdFx0XHRzdWZmaXggPSBcIsOawq/Dm8KMw5rCr8OYwqcgw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9ICh2YWx1ZSAvIEdCKS50b0ZpeGVkKDIpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA+PSBNQikge1xyXG5cdFx0XHRzdWZmaXggPSBcIsOZwoXDmsKvw5jCpyDDmMKow5jCp8ObwozDmMKqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gTUIpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlID49IEtCKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5rCqcObwozDmcKEw5nCiCDDmMKow5jCp8ObwozDmMKqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gS0IpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdWZmaXggPSBcIsOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSB2YWx1ZS50b0ZpeGVkKDIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb252ZXJ0ZWRWYWx1ZSArIFwiIFwiICsgc3VmZml4O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmludGVyZmFjZSBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIHJlbWFpbmluZzogbnVtYmVyO1xyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd0aW1lVW5pdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRpbWVVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHByaXZhdGUgZ2V0RGF5cyh2YWx1ZTogbnVtYmVyKTogVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjAgKiA2MCAqIDI0XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwrHDmcKIw5jCsicsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRIb3Vycyh2YWx1ZTogbnVtYmVyKTogVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjAgKiA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCs8OYwqfDmMK5w5jCqicsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRNaW51dHModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKvw5nCgsObwozDmcKCw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcigodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKrw5jCp8OZwobDm8KMw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDApIHJldHVybiAnMCDDmMKvw5nCgsObwozDmcKCw5nChyc7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBjb25zdCBjb25uZWN0b3IgPSAnIMOZwoggJztcclxuXHJcbiAgICAgICAgbGV0IGRheXNEYXRhID0gdGhpcy5nZXREYXlzKHZhbHVlKTtcclxuICAgICAgICBsZXQgaG91cnNEYXRhID0gdGhpcy5nZXRIb3VycyhkYXlzRGF0YS5yZW1haW5pbmcpO1xyXG4gICAgICAgIGxldCBtaW51dHNEYXRhID0gdGhpcy5nZXRNaW51dHMoaG91cnNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgLy8gbGV0IHNlY29uZHNzRGF0YSA9IHRoaXMuZ2V0U2Vjb25kcyhtaW51dHNEYXRhLnJlbWFpbmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbZGF5c0RhdGEsIGhvdXJzRGF0YSwgbWludXRzRGF0YS8qLCBzZWNvbmRzc0RhdGEqL11cclxuICAgICAgICAgICAgLmZpbHRlcihpID0+IGkuY291bnQpXHJcbiAgICAgICAgICAgIC5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKGNvbm5lY3Rvcik7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgUGVyc2lhbkRhdGVFeHRyYWN0b3Ige1xyXG5cdGNvdW50OiBudW1iZXI7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHRyZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiBcInBlcnNpYW5EYXRlXCIgfSlcclxuZXhwb3J0IGNsYXNzIFBlcnNpYW5EYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cdHRyYW5zZm9ybSh2YWx1ZTogYW55LCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICghdmFsdWUpIHJldHVybiBcIlwiO1xyXG5cdFx0dmFyIGRhdGU7XHJcblx0XHRpZiAodmFsdWUudG9EYXRlKSB7XHJcblx0XHRcdGRhdGUgPSB2YWx1ZS50b0RhdGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh2YWx1ZS5yZXBsYWNlKFwiL0RhdGUoXCIsIFwiXCIpLnJlcGxhY2UoXCIpL1wiLCBcIlwiKSwgMTApKTtcclxuXHRcdH1cclxuXHRcdHZhciBwZXJzaWFuRGF0ZSA9IF8uZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xyXG5cclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHBhcnNlSW50KHBlcnNpYW5EYXRlWzBdKS50b0xvY2FsZVN0cmluZyhcImZhLUlSXCIsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pLFxyXG5cdFx0XHRwYXJzZUludChwZXJzaWFuRGF0ZVsxXSkudG9Mb2NhbGVTdHJpbmcoXCJmYS1JUlwiLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KSxcclxuXHRcdFx0cGFyc2VJbnQocGVyc2lhbkRhdGVbMl0pLnRvTG9jYWxlU3RyaW5nKFwiZmEtSVJcIiwgeyB1c2VHcm91cGluZzogZmFsc2UgfSlcclxuXHRcdF0uam9pbihcIi9cIik7XHJcblx0fVxyXG59XHJcblxyXG52YXIgXyA9IHtcclxuXHRpczogKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBpczogYW55ID0gZnVuY3Rpb24obm9kZTogYW55LCBzZWxlY3RvcjogYW55KSB7XHJcblx0XHRcdGlmIChub2RlLm1hdGNoZXMpIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xyXG5cdFx0XHR2YXIgbm9kZXMgPSB0aGlzLmFyZ1RvQXJyYXkobm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuXHRcdFx0cmV0dXJuIG5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0aXMub2JqZWN0ID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubm9kZUxpc3QgPSBmdW5jdGlvbihvYmo6IGFueSkge1xyXG5cdFx0XHRpZiAoXy5pcy5ub3QuaWUoKSkgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgTm9kZUxpc3RdXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0b2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHRvYmoucHVzaCA9PT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHQob2JqLmxlbmd0aCA+IDAgPyBvYmpbMF0udGFnTmFtZSAhPT0gdW5kZWZpbmVkIDogdHJ1ZSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVsZW1lbnQgPSBmdW5jdGlvbihvYmo6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2VhcmNoKFwiRWxlbWVudFwiKSA+IC0xO1xyXG5cdFx0XHQvL3JldHVybiAhIU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKS50b0xvd2VyQ2FzZSgpLnNlYXJjaCgnZWxlbWVudCcpOztcclxuXHRcdH07XHJcblx0XHRpcy5IVE1MQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmFycmF5ID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5udW1iZXIgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIjtcclxuXHRcdH07XHJcblx0XHRpc1tcImZ1bmN0aW9uXCJdID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5zdHJpbmcgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjsgLy8mJiAoKGlzRW1wdHkpKTtcclxuXHRcdH07XHJcblx0XHRpcy51bmRlZmluZWQgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFVuZGVmaW5lZF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ldmVudCA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKFwiZXZlbnRcIikgPiAtMTtcclxuXHRcdH07XHJcblx0XHRpcy5kZWZpbmVkID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdC8vcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSAhPT0gJ1tvYmplY3QgVW5kZWZpbmVkXScgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBOdWxsXScgJiYgT2JqZWN0ICE9PSAnJztcclxuXHRcdFx0cmV0dXJuIF92YXIgIT09IHVuZGVmaW5lZCAmJiBfdmFyICE9PSBudWxsICYmIF92YXIgIT09IFwiXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuanNvbiA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5lcnJvciA9IGZ1bmN0aW9uKCkge307XHJcblxyXG5cdFx0aXMuc3RhcnRXaXRoID0gZnVuY3Rpb24oc3RyOiBhbnksIHByZWZpeDogYW55KSB7XHJcblx0XHRcdHJldHVybiBzdHIuaW5kZXhPZihwcmVmaXgpID09PSAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVuZFdpdGggPSBmdW5jdGlvbihzdHI6IGFueSkge307XHJcblxyXG5cdFx0aXMudmFsdWUgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIF92YXIgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW1wdHkgPSBmdW5jdGlvbihvOiBhbnkpIHtcclxuXHRcdFx0aWYgKF8uaXMub2JqZWN0KDApKSBmb3IgKHZhciBpIGluIG8pIGlmIChvLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdGlmIChfLmlzLmFycmF5KG8pKSByZXR1cm4gby5sZW5ndGggPT09IDA7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdGlzLnRydXRoeSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5zY2FsYXIgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0Ly9UT0RPIDogaW1wcm92ZVxyXG5cdFx0XHRyZXR1cm4gaXMuZGVmaW5lZChfdmFyKSAmJiBpcy5ub3QuYXJyYXkoX3ZhcikgJiYgaXMubm90Lm9iamVjdChfdmFyKSAmJiBpcy5ub3RbXCJmdW5jdGlvblwiXShfdmFyKTtcclxuXHRcdH07XHJcblx0XHRpcy5wcm90b3R5cGVQcm9wID0gZnVuY3Rpb24ob2JqOiBhbnksIHByb3A6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdICYmICFvYmouaGFzT3duUHJvcGVydHkocHJvcCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXF1YWwgPSBmdW5jdGlvbihmdjogYW55LCBzdjogYW55KSB7XHJcblx0XHRcdC8vaWYgKCFmdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIGZ2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblx0XHRcdC8vaWYgKCFzdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIHN2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZnYpID09IEpTT04uc3RyaW5naWZ5KHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbFRleHQgPSBmdW5jdGlvbihmdjogYW55LCBzdjogYW55KSB7XHJcblx0XHRcdHJldHVybiBmdi50b0xvd2VyQ2FzZShmdikgPT09IHN2LnRvTG93ZXJDYXNlKHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5jbG9zZXQgPSBmdW5jdGlvbihmbzogYW55LCBzbzogYW55KSB7XHJcblx0XHRcdHJldHVybiBfLmlzLmVxdWFsKF8ucGFydGlhbChmbywgXy5yZXBvcnQuc2tlbGV0b24oc28pKSwgc28pO1xyXG5cdFx0fTtcclxuXHRcdGlzLmNvbnRhaW4gPSBmdW5jdGlvbihzdHI6IGFueSwgc2VhcmNoU3RyOiBhbnkpIHtcclxuXHRcdFx0dmFyIHJlZyA9IF8uaXMucmVnZXgoc2VhcmNoU3RyKSA/IHNlYXJjaFN0ciA6IG5ldyBSZWdFeHAoc2VhcmNoU3RyLCBcImdcIik7XHJcblx0XHRcdHJldHVybiBzdHIubWF0Y2gocmVnKSAmJiBzdHIubWF0Y2gocmVnKS5sZW5ndGggPiAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLnJlZ2V4ID0gZnVuY3Rpb24ocjogYW55KSB7XHJcblx0XHRcdHJldHVybiByLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiUmVnRXhwXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuc2FtZSA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBmdi5pc0VxdWFsTm9kZSA/IGZ2LmlzRXF1YWxOb2RlKHN2KSA6IGZ2ID09PSBzdjtcclxuXHRcdH07XHJcblx0XHRpcy5wZXJzaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuICgoKHllYXIgLSAoeWVhciA+IDAgPyA0NzQgOiA0NzMpKSAlIDI4MjAgKyA0NzQgKyAzOCkgKiA2ODIpICUgMjgxNiA8IDY4MjtcclxuXHRcdH07XHJcblx0XHRpcy5nZW9yZ2lhbkxlYXBZZWFyID0gZnVuY3Rpb24oeWVhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiB5ZWFyICUgNCA9PSAwICYmICEoeWVhciAlIDEwMCA9PSAwICYmIHllYXIgJSA0MDAgIT0gMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBub3Q6IGFueSA9IHt9O1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihpOiBhbnkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpXHJcblx0XHRcdFx0XHRub3RbaV0gPSBmdW5jdGlvbihhOiBhbnksIGI6IGFueSwgYzogYW55KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAhaXNbaV0oYSwgYiwgYyk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHR9KShpKTtcclxuXHRcdGlzLm5vdCA9IG5vdDtcclxuXHJcblx0XHQvL1RPRE8gOiBpbXBlbGVtZW50XHJcblx0XHR2YXIgYWxsOiBhbnkgPSB7fTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpIGFsbFtpXSA9IGZ1bmN0aW9uKG86IGFueSkge307XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMuYWxsID0gYWxsO1xyXG5cclxuXHRcdHZhciBhbnk6IGFueSA9IHt9O1xyXG5cdFx0Zm9yICh2YXIgaiBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGopIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaikpIGFueVtqXSA9IGZ1bmN0aW9uKG86IGFueSkge307XHJcblx0XHRcdH0pKGopO1xyXG5cdFx0aXMuYW55ID0gYW55O1xyXG5cclxuXHRcdHJldHVybiBpcztcclxuXHR9KSh0aGlzKSxcclxuXHRtYXRoOiAoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbWF0aDogYW55ID0ge307XHJcblxyXG5cdFx0bWF0aC5tb2QgPSBmdW5jdGlvbihhOiBhbnksIGI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gYSAtIGIgKiBNYXRoLmZsb29yKGEgLyBiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIG1hdGg7XHJcblx0fSkoKSxcclxuXHRkYXRlOiAoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgUEVSU0lBTl9FUE9DSCA9IDE5NDgzMjAuNSxcclxuXHRcdFx0R1JFR09SSUFOX0VQT0NIID0gMTcyMTQyNS41O1xyXG5cclxuXHRcdHZhciBkYXRlOiBhbnkgPSB7fTtcclxuXHRcdGRhdGUucGVyc2lhbiA9IHt9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvID0ge307XHJcblx0XHRkYXRlLmdlb3JnaWFuID0ge307XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvID0ge307XHJcblx0XHRkYXRlLmp1bGlhbiA9IHt9O1xyXG5cdFx0ZGF0ZS5qdWxpYW4udG8gPSB7fTtcclxuXHJcblx0XHR2YXIgaW5zZXJ0WmVybyA9IGZ1bmN0aW9uKGk6IGFueSkge1xyXG5cdFx0XHRpID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRyZXR1cm4gaS5sZW5ndGggPT0gMSA/IFwiMFwiICsgaSA6IGk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55KSB7XHJcblx0XHRcdHZhciBlcGJhc2UsIGVweWVhcjtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoKTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5KTtcclxuXHJcblx0XHRcdGVwYmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuXHRcdFx0ZXB5ZWFyID0gNDc0ICsgXy5tYXRoLm1vZChlcGJhc2UsIDI4MjApO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRkYXkgK1xyXG5cdFx0XHRcdChtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6IChtb250aCAtIDEpICogMzAgKyA2KSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoZXB5ZWFyICogNjgyIC0gMTEwKSAvIDI4MTYpICtcclxuXHRcdFx0XHQoZXB5ZWFyIC0gMSkgKiAzNjUgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoZXBiYXNlIC8gMjgyMCkgKiAxMDI5OTgzICtcclxuXHRcdFx0XHQoUEVSU0lBTl9FUE9DSCAtIDEpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oeWVhcjogYW55LCBtb250aDogYW55LCBkYXk6IGFueSwgam9pbkNoYXJhY3RlcjogYW55KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5nZW9yZ2lhbihcclxuXHRcdFx0XHRkYXRlLnBlcnNpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkgKyAxLCBwYXJzZUludChkYXkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gam9pbkNoYXJhY3RlciA/IGRhdGVBcnJheS5qb2luKGpvaW5DaGFyYWN0ZXIpIDogZGF0ZUFycmF5O1xyXG5cdFx0fTtcclxuXHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXI6IGFueSwgbW9udGg6IGFueSwgZGF5OiBhbnkpIHtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoKTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5KTtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0R1JFR09SSUFOX0VQT0NIIC1cclxuXHRcdFx0XHQxICtcclxuXHRcdFx0XHQzNjUgKiAoeWVhciAtIDEpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KSArXHJcblx0XHRcdFx0LU1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKDM2NyAqIG1vbnRoIC0gMzYyKSAvIDEyICsgKG1vbnRoIDw9IDIgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gLTEgOiAtMikgKyBkYXkpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuID0gZnVuY3Rpb24oeWVhcjogYW55LCBtb250aDogYW55LCBkYXk6IGFueSwgam9pbkNoYXJhY3RlcjogYW55KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5wZXJzaWFuKFxyXG5cdFx0XHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCksIHBhcnNlSW50KGRheSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBqb2luQ2hhcmFjdGVyID8gZGF0ZUFycmF5LmpvaW4oam9pbkNoYXJhY3RlcikgOiBkYXRlQXJyYXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oamQ6IGFueSkge1xyXG5cdFx0XHR2YXIgd2pkLFxyXG5cdFx0XHRcdGRlcG9jaCxcclxuXHRcdFx0XHRxdWFkcmljZW50LFxyXG5cdFx0XHRcdGRxYyxcclxuXHRcdFx0XHRjZW50LFxyXG5cdFx0XHRcdGRjZW50LFxyXG5cdFx0XHRcdHF1YWQsXHJcblx0XHRcdFx0ZHF1YWQsXHJcblx0XHRcdFx0eWluZGV4LFxyXG5cdFx0XHRcdGR5aW5kZXgsXHJcblx0XHRcdFx0eWVhcixcclxuXHRcdFx0XHRtb250aCxcclxuXHRcdFx0XHRkYXksXHJcblx0XHRcdFx0eWVhcmRheSxcclxuXHRcdFx0XHRsZWFwYWRqO1xyXG5cdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQpO1xyXG5cclxuXHRcdFx0d2pkID0gTWF0aC5mbG9vcihqZCAtIDAuNSkgKyAwLjU7XHJcblx0XHRcdGRlcG9jaCA9IHdqZCAtIEdSRUdPUklBTl9FUE9DSDtcclxuXHRcdFx0cXVhZHJpY2VudCA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTQ2MDk3KTtcclxuXHRcdFx0ZHFjID0gXy5tYXRoLm1vZChkZXBvY2gsIDE0NjA5Nyk7XHJcblx0XHRcdGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcclxuXHRcdFx0ZGNlbnQgPSBfLm1hdGgubW9kKGRxYywgMzY1MjQpO1xyXG5cdFx0XHRxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xyXG5cdFx0XHRkcXVhZCA9IF8ubWF0aC5tb2QoZGNlbnQsIDE0NjEpO1xyXG5cdFx0XHR5aW5kZXggPSBNYXRoLmZsb29yKGRxdWFkIC8gMzY1KTtcclxuXHRcdFx0eWVhciA9IHF1YWRyaWNlbnQgKiA0MDAgKyBjZW50ICogMTAwICsgcXVhZCAqIDQgKyB5aW5kZXg7XHJcblx0XHRcdGlmICghKGNlbnQgPT0gNCB8fCB5aW5kZXggPT0gNCkpIHtcclxuXHRcdFx0XHR5ZWFyKys7XHJcblx0XHRcdH1cclxuXHRcdFx0eWVhcmRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMSwgMSk7XHJcblx0XHRcdGxlYXBhZGogPSB3amQgPCBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIDMsIDEpID8gMCA6IF8uaXMuZ2VvcmdpYW5MZWFwWWVhcih5ZWFyKSA/IDEgOiAyO1xyXG5cdFx0XHRtb250aCA9IE1hdGguZmxvb3IoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMiArIDM3MykgLyAzNjcpO1xyXG5cdFx0XHRkYXkgPSB3amQgLSBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoLCAxKSArIDE7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUuanVsaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbihqZDogYW55KSB7XHJcblx0XHRcdHZhciB5ZWFyLCBtb250aCwgZGF5LCBkZXBvY2gsIGN5Y2xlLCBjeWVhciwgeWN5Y2xlLCBhdXgxLCBhdXgyLCB5ZGF5O1xyXG5cdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQpO1xyXG5cclxuXHRcdFx0amQgPSBNYXRoLmZsb29yKGpkKSArIDAuNTtcclxuXHJcblx0XHRcdGRlcG9jaCA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKDQ3NSwgMSwgMSk7XHJcblx0XHRcdGN5Y2xlID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxMDI5OTgzKTtcclxuXHRcdFx0Y3llYXIgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTAyOTk4Myk7XHJcblx0XHRcdGlmIChjeWVhciA9PSAxMDI5OTgyKSB7XHJcblx0XHRcdFx0eWN5Y2xlID0gMjgyMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhdXgxID0gTWF0aC5mbG9vcihjeWVhciAvIDM2Nik7XHJcblx0XHRcdFx0YXV4MiA9IF8ubWF0aC5tb2QoY3llYXIsIDM2Nik7XHJcblx0XHRcdFx0eWN5Y2xlID0gTWF0aC5mbG9vcigoMjEzNCAqIGF1eDEgKyAyODE2ICogYXV4MiArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyID0geWN5Y2xlICsgMjgyMCAqIGN5Y2xlICsgNDc0O1xyXG5cdFx0XHRpZiAoeWVhciA8PSAwKSB7XHJcblx0XHRcdFx0eWVhci0tO1xyXG5cdFx0XHR9XHJcblx0XHRcdHlkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKSArIDE7XHJcblx0XHRcdG1vbnRoID0geWRheSA8PSAxODYgPyBNYXRoLmNlaWwoeWRheSAvIDMxKSA6IE1hdGguY2VpbCgoeWRheSAtIDYpIC8gMzApO1xyXG5cdFx0XHRkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCBtb250aCwgMSkgKyAxO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZGF0ZTtcclxuXHR9KSgpXHJcbn07XHJcbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnY3VycmVuY3lVbml0JyB9KVxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUhPTApIHJldHVybiAnJztcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSAwKSByZXR1cm4gJ8OYwrHDmMKnw5vCjMOawq/DmMKnw5nChic7XHJcblxyXG4gICAgICAgIGxldCBzdWZmaXggPSAnw5jCscObwozDmMKnw5nChCc7XHJcbiAgICAgICAgcmV0dXJuIFt2YWx1ZS50b0xvY2FsZVN0cmluZygnZmEtSVInKSwgc3VmZml4XS5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3BlcnNpYW5OdW1iZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBQZXJzaWFuTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgICB2YXIgcmVzID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgcmVzICs9ICgrdmFsdWVbaW5kZXhdKS50b0xvY2FsZVN0cmluZygnZmEtSVInLCB7XHJcbiAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVtYWluaW5nOiBudW1iZXI7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWVDb3VudGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgVGltZUNvdW50ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SG91cnModmFsdWU6IG51bWJlcik6IFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwICogNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwrPDmMKnw5jCucOYwqonLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0TWludXRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCr8OZwoLDm8KMw5nCgsOZwocnLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IoKHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCq8OYwqfDmcKGw5vCjMOZwocnLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RvciA9ICcgOiAnO1xyXG5cclxuICAgICAgICAvLyBsZXQgZGF5c0RhdGEgPSB0aGlzLmdldERheXModmFsdWUpO1xyXG4gICAgICAgIGxldCBob3Vyc0RhdGEgPSB0aGlzLmdldEhvdXJzKHZhbHVlKTtcclxuICAgICAgICBsZXQgbWludXRzRGF0YSA9IHRoaXMuZ2V0TWludXRzKGhvdXJzRGF0YS5yZW1haW5pbmcpO1xyXG4gICAgICAgIGxldCBzZWNvbmRzc0RhdGEgPSB0aGlzLmdldFNlY29uZHMobWludXRzRGF0YS5yZW1haW5pbmcpO1xyXG5cclxuICAgICAgICByZXR1cm4gW3NlY29uZHNzRGF0YSwgbWludXRzRGF0YSxob3Vyc0RhdGFdXHJcbiAgICAgICAgICAgIC5tYXAoaSA9PiBpLmNvdW50KS5qb2luKGNvbm5lY3Rvcik7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhVW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy9kYXRhLXVuaXQucGlwZVwiO1xyXG5pbXBvcnQgeyBUaW1lVW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy90aW1lLXVuaXQucGlwZVwiO1xyXG5pbXBvcnQgeyBQZXJzaWFuRGF0ZVBpcGUgfSBmcm9tIFwiLi9waXBlcy9wZXJzaWFuLWRhdGUucGlwZVwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeVVuaXRQaXBlIH0gZnJvbSBcIi4vcGlwZXMvY3VycmVuY3ktdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFBlcnNpYW5OdW1iZXJQaXBlIH0gZnJvbSBcIi4vcGlwZXMvcGVyc2lhbi1udW1iZXIucGlwZVwiO1xyXG5pbXBvcnQgeyBUaW1lQ291bnRlclBpcGUgfSBmcm9tIFwiLi9waXBlcy90aW1lLWNvdW50ZXIucGlwZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFsgRGF0YVVuaXRQaXBlLCBUaW1lVW5pdFBpcGUsIFBlcnNpYW5EYXRlUGlwZSwgQ3VycmVuY3lVbml0UGlwZSwgUGVyc2lhbk51bWJlclBpcGUsIFRpbWVDb3VudGVyUGlwZSBdLFxyXG5cdGV4cG9ydHM6IFsgRGF0YVVuaXRQaXBlLCBUaW1lVW5pdFBpcGUsIFBlcnNpYW5EYXRlUGlwZSwgQ3VycmVuY3lVbml0UGlwZSwgUGVyc2lhbk51bWJlclBpcGUsIFRpbWVDb3VudGVyUGlwZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwUmVzcG9uc2VCYXNlTW9kZWw8VD4ge1xyXG4gICAgUmVzdWx0OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgYWJzdHJhY3QgZXh0cmFjdERhdGE/KCk6IGFueTtcclxufSIsImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFQ+IHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGFic3RyYWN0IGdldFJlcXVlc3RCb2R5PzxLIGV4dGVuZHMga2V5b2YgVD4oa2V5czogYW55KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuXHRhYnN0cmFjdCBnZXRSZXF1ZXN0UXVlcnlQYXJhbXM/PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXlzOiBhbnkpOiBIdHRwUGFyYW1zO1xyXG5cclxuXHQvLyBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpOiBGb3JtR3JvdXAgfCBudWxsIHtcclxuXHQvLyBcdHJldHVybjtcclxuXHQvLyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUEVSU0lBTl9NT05USF9EQVlTX0NPVU5UID0gWyAzMSwgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwIF07XHJcbmV4cG9ydCBjb25zdCBQRVJTSUFOX01PTlRIX05BTUVTID0gW1xyXG5cdFwiw5nCgcOYwrHDmcKIw5jCscOYwq/Dm8KMw5nChlwiLFxyXG5cdFwiw5jCp8OYwrHDmMKvw5vCjMOYwqjDmcKHw5jCtMOYwqpcIixcclxuXHRcIsOYwq7DmMKxw5jCr8OYwqfDmMKvXCIsXHJcblx0XCLDmMKqw5vCjMOYwrFcIixcclxuXHRcIsOZwoXDmMKxw5jCr8OYwqfDmMKvXCIsXHJcblx0XCLDmMK0w5nCh8OYwrHDm8KMw5nCiMOYwrFcIixcclxuXHRcIsOZwoXDmcKHw5jCsVwiLFxyXG5cdFwiw5jCosOYwqjDmMKnw5nChlwiLFxyXG5cdFwiw5jCosOYwrDDmMKxXCIsXHJcblx0XCLDmMKvw5vCjFwiLFxyXG5cdFwiw5jCqMOZwofDmcKFw5nChlwiLFxyXG5cdFwiw5jCp8OYwrPDmcKBw5nChsOYwq9cIlxyXG5dO1xyXG5leHBvcnQgY2xhc3MgRGF0ZUNsYXNzIHtcclxuXHR5ZWFyOiBzdHJpbmc7XHJcblx0bW9udGg6IHN0cmluZztcclxuXHRkYXRlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHllYXIsIG1vbnRoLCBkYXRlKSB7XHJcblx0XHR0aGlzLnllYXIgPSB5ZWFyO1xyXG5cdFx0dGhpcy5tb250aCA9IG1vbnRoO1xyXG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcclxuXHR9XHJcblxyXG5cdGZ1bGxEYXRlKHNlcHJhdG9yOiBzdHJpbmcgPSBcIi9cIikge1xyXG5cdFx0cmV0dXJuIFsgdGhpcy55ZWFyLCB0aGlzLm1vbnRoLCB0aGlzLmRhdGUgXS5qb2luKHNlcHJhdG9yKTtcclxuXHR9XHJcblx0bmF0aXZlRGF0ZSgpIHtcclxuXHRcdHJldHVybiBuZXcgRGF0ZShwYXJzZUludCh0aGlzLnllYXIpLCBwYXJzZUludCh0aGlzLm1vbnRoKSAtIDEsIHBhcnNlSW50KHRoaXMuZGF0ZSkpO1xyXG5cdH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XHJcblx0aXMgPSAoZnVuY3Rpb24oXywgdW5kZWZpbmVkKSB7XHJcblx0XHR2YXIgaXM6IGFueSA9IGZ1bmN0aW9uKG5vZGUsIHNlbGVjdG9yKSB7XHJcblx0XHRcdGlmIChub2RlLm1hdGNoZXMpIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xyXG5cdFx0XHR2YXIgbm9kZXMgPSB0aGlzLmFyZ1RvQXJyYXkobm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuXHRcdFx0cmV0dXJuIG5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0aXMub2JqZWN0ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLm5vZGVMaXN0ID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdGlmIChfLmlzLm5vdC5pZSgpKSByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBOb2RlTGlzdF1cIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdG9iai5wdXNoID09PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdChvYmoubGVuZ3RoID4gMCA/IG9ialswXS50YWdOYW1lICE9PSB1bmRlZmluZWQgOiB0cnVlKVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2VhcmNoKFwiRWxlbWVudFwiKSA+IC0xO1xyXG5cdFx0XHQvL3JldHVybiAhIU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKS50b0xvd2VyQ2FzZSgpLnNlYXJjaCgnZWxlbWVudCcpOztcclxuXHRcdH07XHJcblx0XHRpcy5IVE1MQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBIVE1MQ29sbGVjdGlvbl1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5hcnJheSA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLm51bWJlciA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIjtcclxuXHRcdH07XHJcblx0XHRpc1tcImZ1bmN0aW9uXCJdID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuc3RyaW5nID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgU3RyaW5nXVwiOyAvLyYmICgoaXNFbXB0eSkpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFVuZGVmaW5lZF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ldmVudCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKS50b0xvd2VyQ2FzZSgpLnNlYXJjaChcImV2ZW50XCIpID4gLTE7XHJcblx0XHR9O1xyXG5cdFx0aXMuZGVmaW5lZCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0Ly9yZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBVbmRlZmluZWRdJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IE51bGxdJyAmJiBPYmplY3QgIT09ICcnO1xyXG5cdFx0XHRyZXR1cm4gX3ZhciAhPT0gdW5kZWZpbmVkICYmIF92YXIgIT09IG51bGwgJiYgX3ZhciAhPT0gXCJcIjtcclxuXHRcdH07XHJcblx0XHRpcy5qc29uID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLmVycm9yID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcblx0XHRpcy5zdGFydFdpdGggPSBmdW5jdGlvbihzdHIsIHByZWZpeCkge1xyXG5cdFx0XHRyZXR1cm4gc3RyLmluZGV4T2YocHJlZml4KSA9PT0gMDtcclxuXHRcdH07XHJcblx0XHRpcy5lbmRXaXRoID0gZnVuY3Rpb24oc3RyKSB7fTtcclxuXHJcblx0XHRpcy52YWx1ZSA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIF92YXIgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW1wdHkgPSBmdW5jdGlvbihvKSB7XHJcblx0XHRcdGlmIChfLmlzLm9iamVjdCgwKSkgZm9yICh2YXIgaSBpbiBvKSBpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRpZiAoXy5pcy5hcnJheShvKSkgcmV0dXJuIG8ubGVuZ3RoID09PSAwO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRpcy50cnV0aHkgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0aXMuc2NhbGFyID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHQvL1RPRE8gOiBpbXByb3ZlXHJcblx0XHRcdHJldHVybiBpcy5kZWZpbmVkKF92YXIpICYmIGlzLm5vdC5hcnJheShfdmFyKSAmJiBpcy5ub3Qub2JqZWN0KF92YXIpICYmIGlzLm5vdFtcImZ1bmN0aW9uXCJdKF92YXIpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnByb3RvdHlwZVByb3AgPSBmdW5jdGlvbihvYmosIHByb3ApIHtcclxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXSAmJiAhb2JqLmhhc093blByb3BlcnR5KHByb3ApO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsID0gZnVuY3Rpb24oZnYsIHN2KSB7XHJcblx0XHRcdC8vaWYgKCFmdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIGZ2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblx0XHRcdC8vaWYgKCFzdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIHN2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZnYpID09IEpTT04uc3RyaW5naWZ5KHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbFRleHQgPSBmdW5jdGlvbihmdiwgc3YpIHtcclxuXHRcdFx0cmV0dXJuIGZ2LnRvTG93ZXJDYXNlKGZ2KSA9PT0gc3YudG9Mb3dlckNhc2Uoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmNvbnRhaW4gPSBmdW5jdGlvbihzdHIsIHNlYXJjaFN0cikge1xyXG5cdFx0XHR2YXIgcmVnID0gXy5pcy5yZWdleChzZWFyY2hTdHIpID8gc2VhcmNoU3RyIDogbmV3IFJlZ0V4cChzZWFyY2hTdHIsIFwiZ1wiKTtcclxuXHRcdFx0cmV0dXJuIHN0ci5tYXRjaChyZWcpICYmIHN0ci5tYXRjaChyZWcpLmxlbmd0aCA+IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMucmVnZXggPSBmdW5jdGlvbihyKSB7XHJcblx0XHRcdHJldHVybiByLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiUmVnRXhwXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuc2FtZSA9IGZ1bmN0aW9uKGZ2LCBzdikge1xyXG5cdFx0XHQvL2lmICghZnYpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBmdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cdFx0XHQvL2lmICghc3YpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBzdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZ2LmlzRXF1YWxOb2RlID8gZnYuaXNFcXVhbE5vZGUoc3YpIDogZnYgPT09IHN2O1xyXG5cdFx0fTtcclxuXHRcdGlzLnBlcnNpYW5MZWFwWWVhciA9IGZ1bmN0aW9uKHllYXIpIHtcclxuXHRcdFx0cmV0dXJuICgoKHllYXIgLSAoeWVhciA+IDAgPyA0NzQgOiA0NzMpKSAlIDI4MjAgKyA0NzQgKyAzOCkgKiA2ODIpICUgMjgxNiA8IDY4MjtcclxuXHRcdH07XHJcblx0XHRpcy5nZW9yZ2lhbkxlYXBZZWFyID0gZnVuY3Rpb24oeWVhcikge1xyXG5cdFx0XHRyZXR1cm4geWVhciAlIDQgPT0gMCAmJiAhKHllYXIgJSAxMDAgPT0gMCAmJiB5ZWFyICUgNDAwICE9IDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgbm90ID0ge307XHJcblx0XHR2YXIgaTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpXHJcblx0XHRcdFx0XHRub3RbaV0gPSBmdW5jdGlvbihhLCBiLCBjKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAhaXNbaV0oYSwgYiwgYyk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHR9KShpKTtcclxuXHRcdGlzLm5vdCA9IG5vdDtcclxuXHJcblx0XHQvL1RPRE8gOiBpbXBlbGVtZW50XHJcblx0XHR2YXIgYWxsID0ge307XHJcblx0XHRmb3IgKGkgaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0aWYgKGlzLmhhc093blByb3BlcnR5KGkpKSBhbGxbaV0gPSBmdW5jdGlvbihvKSB7fTtcclxuXHRcdFx0fSkoaSk7XHJcblx0XHRpcy5hbGwgPSBhbGw7XHJcblxyXG5cdFx0dmFyIGFueSA9IHt9O1xyXG5cdFx0Zm9yICh2YXIgaiBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGopIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaikpIGFueVtqXSA9IGZ1bmN0aW9uKG8pIHt9O1xyXG5cdFx0XHR9KShqKTtcclxuXHRcdGlzLmFueSA9IGFueTtcclxuXHJcblx0XHRyZXR1cm4gaXM7XHJcblx0fSkodGhpcyk7XHJcblx0bWF0aCA9IChmdW5jdGlvbihfKSB7XHJcblx0XHR2YXIgbWF0aDogYW55ID0ge307XHJcblxyXG5cdFx0bWF0aC5tb2QgPSBmdW5jdGlvbihhLCBiKSB7XHJcblx0XHRcdHJldHVybiBhIC0gYiAqIE1hdGguZmxvb3IoYSAvIGIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gbWF0aDtcclxuXHR9KSh0aGlzKTtcclxuXHJcblx0ZGF0ZSA9IChmdW5jdGlvbihfKSB7XHJcblx0XHR2YXIgUEVSU0lBTl9FUE9DSCA9IDE5NDgzMjAuNSxcclxuXHRcdFx0R1JFR09SSUFOX0VQT0NIID0gMTcyMTQyNS41O1xyXG5cclxuXHRcdHZhciBkYXRlOiB7XHJcblx0XHRcdHBlcnNpYW46IHtcclxuXHRcdFx0XHRQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQ6IG51bWJlcltdO1xyXG5cdFx0XHRcdG5vdygpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0Zm9yZXRpbWVNb250aE9mWWVhcigpOiBzdHJpbmdbXTtcclxuXHRcdFx0XHRnZXREYXlzT2ZvTW9udGgoaWR4OiBudW1iZXIpOiBzdHJpbmdbXTtcclxuXHRcdFx0XHRjcmVhdGUoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZyk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRnZXREYXlPZldlZWsoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZyk6IG51bWJlcjtcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46ICh5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKSA9PiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0XHRqdWxpYW46ICh5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKSA9PiBudW1iZXI7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Z2VvcmdpYW46IHtcclxuXHRcdFx0XHQvLyBnZXRGdXR1cmVEYXRlKG46IG51bWJlcik6IERhdGUsXHJcblx0XHRcdFx0bm93KCk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRnZXRSZWxhdGl2ZURheShuOiBudW1iZXIpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0cGFyc2UoZGF0ZTogRGF0ZSk6IERhdGVDbGFzcztcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0cGVyc2lhbih5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdFx0anVsaWFuKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXI7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdFx0anVsaWFuOiB7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdHBlcnNpYW46IChqZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmdbXTtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoamQ6IG51bWJlciB8IHN0cmluZykgPT4gc3RyaW5nW107XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdFx0YXM6IHtcclxuXHRcdFx0XHREYXRlOiAoWyB5LCBtLCBkIF06IHN0cmluZ1tdKSA9PiBEYXRlO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSA9IHtcclxuXHRcdFx0cGVyc2lhbjoge1xyXG5cdFx0XHRcdFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVDogW10sXHJcblx0XHRcdFx0bm93OiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdGNyZWF0ZTogKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IG51bGwsXHJcblx0XHRcdFx0Z2V0RGF5c09mb01vbnRoOiAoaWR4OiBudW1iZXIpID0+IG51bGwsXHJcblx0XHRcdFx0Z2V0RGF5T2ZXZWVrOiAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4gbnVsbCxcclxuXHRcdFx0XHRmb3JldGltZU1vbnRoT2ZZZWFyOiAoKSA9PiBbXSxcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46ICgpID0+IG51bGwsXHJcblx0XHRcdFx0XHRqdWxpYW46ICgpID0+IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGp1bGlhbjoge1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRcdHBlcnNpYW46ICgpID0+IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdlb3JnaWFuOiB7XHJcblx0XHRcdFx0Ly8gZ2V0RnV0dXJlRGF0ZTogKG46IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRub3c6ICgpID0+IG51bGwsXHJcblx0XHRcdFx0Z2V0UmVsYXRpdmVEYXk6IChuOiBudW1iZXIpID0+IG51bGwsXHJcblx0XHRcdFx0cGFyc2U6IChkYXRlOiBEYXRlKSA9PiBudWxsLFxyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRwZXJzaWFuOiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdFx0anVsaWFuOiAoKSA9PiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhczoge1xyXG5cdFx0XHRcdERhdGU6ICgpID0+IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdC8vIGRhdGUucGVyc2lhbiA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5wZXJzaWFuLnRvID0ge307XHJcblx0XHQvLyBkYXRlLmdlb3JnaWFuID0ge307XHJcblx0XHQvLyBkYXRlLmdlb3JnaWFuLnRvID0ge307XHJcblx0XHQvLyBkYXRlLmp1bGlhbiA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5qdWxpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuYXMgPSB7fTtcclxuXHRcdGRhdGUuYXMuRGF0ZSA9IChbIHksIG0sIGQgXTogc3RyaW5nW10pOiBEYXRlID0+IG5ldyBEYXRlKHBhcnNlSW50KHkpLCBwYXJzZUludChtKSAtIDEsIHBhcnNlSW50KGQpKTtcclxuXHJcblx0XHR2YXIgaW5zZXJ0WmVybyA9IGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0aSA9IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0cmV0dXJuIGkubGVuZ3RoID09IDEgPyBcIjBcIiArIGkgOiBpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5QRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQgPSBbIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwIF07XHJcblx0XHRkYXRlLnBlcnNpYW4ubm93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRyZXR1cm4gZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmNyZWF0ZSA9ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiBuZXcgRGF0ZUNsYXNzKHksIG0sIGQpO1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmdldERheXNPZm9Nb250aCA9IChpZHg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHR2YXIgY291bnQgPSBQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlRbaWR4XTtcclxuXHRcdFx0bGV0IHJlcyA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGNvdW50ICsgMTsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGRheU5hbWUgPSBpIDwgMTAgPyBcIjBcIiArIGkgOiBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0cmVzLnB1c2goZGF5TmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uZ2V0RGF5T2ZXZWVrID0gKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0bGV0IHBlcnNpYW5Ib2xpZGF5ID0gZGF0ZS5wZXJzaWFuLmNyZWF0ZShcIjEzOTZcIiwgXCIxXCIsIFwiMVwiKTtcclxuXHRcdFx0bGV0IHBlcnNpYW5Ib2xpZGF5SW5HZW9yZ2lhbiA9IGRhdGUucGVyc2lhbi50by5nZW9yZ2lhbihcIjEzOTZcIiwgXCIxXCIsIFwiMVwiKS5uYXRpdmVEYXRlKCk7XHJcblxyXG5cdFx0XHR2YXIgbW9udGggPSArbSAtIDE7XHJcblx0XHRcdHZhciBkYXkgPSArZDtcclxuXHRcdFx0dmFyIGRheXNPZlllYXIgPSBQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQucmVkdWNlKChhLCBiLCBpZHgpID0+IHtcclxuXHRcdFx0XHRpZiAoaWR4ID09IG1vbnRoKSByZXR1cm4gYSArIGRheTtcclxuXHRcdFx0XHRpZiAoaWR4ID4gbW9udGgpIHJldHVybiBhO1xyXG5cdFx0XHRcdHJldHVybiBhICsgYjtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKGRheXNPZlllYXIgKyBwZXJzaWFuSG9saWRheUluR2VvcmdpYW4uZ2V0RGF5KCkgLSAxKSAlIDc7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmZvcmV0aW1lTW9udGhPZlllYXIgPSAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBQRVJTSUFOX01PTlRIX05BTUVTLmZpbHRlcigoaXRlbSwgaWR4KSA9PiBpZHggPD0gK2RhdGUucGVyc2lhbi5ub3coKS5tb250aCAtIDEpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRkYXRlLnBlcnNpYW4udG8uanVsaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR2YXIgZXBiYXNlLCBlcHllYXI7XHJcblx0XHRcdHllYXIgPSBwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRlcGJhc2UgPSB5ZWFyIC0gKHllYXIgPj0gMCA/IDQ3NCA6IDQ3Myk7XHJcblx0XHRcdGVweWVhciA9IDQ3NCArIF8ubWF0aC5tb2QoZXBiYXNlLCAyODIwKTtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0ZGF5ICtcclxuXHRcdFx0XHQobW9udGggPD0gNyA/IChtb250aCAtIDEpICogMzEgOiAobW9udGggLSAxKSAqIDMwICsgNikgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKGVweWVhciAqIDY4MiAtIDExMCkgLyAyODE2KSArXHJcblx0XHRcdFx0KGVweWVhciAtIDEpICogMzY1ICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKGVwYmFzZSAvIDI4MjApICogMTAyOTk4MyArXHJcblx0XHRcdFx0KFBFUlNJQU5fRVBPQ0ggLSAxKVxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi50by5nZW9yZ2lhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuKFxyXG5cdFx0XHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhci50b1N0cmluZygpKSwgcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSksIHBhcnNlSW50KGRheS50b1N0cmluZygpKSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3MoZGF0ZUFycmF5WzBdLCBwYXJzZUludChkYXRlQXJyYXlbMV0pLCBkYXRlQXJyYXlbMl0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRkYXRlLmdlb3JnaWFuLnBhcnNlID0gKGRhdGU6IERhdGUpOiBEYXRlQ2xhc3MgPT5cclxuXHRcdFx0bmV3IERhdGVDbGFzcyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhci50b1N0cmluZygpKTtcclxuXHRcdFx0bW9udGggPSBwYXJzZUludChtb250aC50b1N0cmluZygpKSArIDE7XHJcblx0XHRcdGRheSA9IHBhcnNlSW50KGRheS50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0R1JFR09SSUFOX0VQT0NIIC1cclxuXHRcdFx0XHQxICtcclxuXHRcdFx0XHQzNjUgKiAoeWVhciAtIDEpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KSArXHJcblx0XHRcdFx0LU1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKDM2NyAqIG1vbnRoIC0gMzYyKSAvIDEyICsgKG1vbnRoIDw9IDIgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gLTEgOiAtMikgKyBkYXkpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR2YXIgZGF0ZUFycmF5ID0gZGF0ZS5qdWxpYW4udG8ucGVyc2lhbihcclxuXHRcdFx0XHRkYXRlLmdlb3JnaWFuLnRvLmp1bGlhbihwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpLCBwYXJzZUludChtb250aC50b1N0cmluZygpKSwgcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhkYXRlQXJyYXlbMF0sIGRhdGVBcnJheVsxXSwgZGF0ZUFycmF5WzJdKTtcclxuXHRcdH07XHJcblx0XHQvLyBkYXRlLmdlb3JnaWFuLmdldEZ1dHVyZURhdGUgPSBmdW5jdGlvbiAobikge1xyXG5cdFx0Ly8gICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Ly8gICAgIHJldHVybiBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkgKyBuKTtcclxuXHRcdC8vIH1cclxuXHRcdGRhdGUuZ2VvcmdpYW4ubm93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCBub3cuZ2V0RGF0ZSgpKTtcclxuXHRcdH07XHJcblx0XHQoZGF0ZS5nZW9yZ2lhbi5nZXRSZWxhdGl2ZURheSA9IChuOiBudW1iZXIpID0+IHtcclxuXHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgLTEgKiBuICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xyXG5cdFx0fSksXHJcblx0XHRcdChkYXRlLmp1bGlhbi50by5nZW9yZ2lhbiA9IGZ1bmN0aW9uKGpkKSB7XHJcblx0XHRcdFx0dmFyIHdqZCxcclxuXHRcdFx0XHRcdGRlcG9jaCxcclxuXHRcdFx0XHRcdHF1YWRyaWNlbnQsXHJcblx0XHRcdFx0XHRkcWMsXHJcblx0XHRcdFx0XHRjZW50LFxyXG5cdFx0XHRcdFx0ZGNlbnQsXHJcblx0XHRcdFx0XHRxdWFkLFxyXG5cdFx0XHRcdFx0ZHF1YWQsXHJcblx0XHRcdFx0XHR5aW5kZXgsXHJcblx0XHRcdFx0XHRkeWluZGV4LFxyXG5cdFx0XHRcdFx0eWVhcixcclxuXHRcdFx0XHRcdG1vbnRoLFxyXG5cdFx0XHRcdFx0ZGF5LFxyXG5cdFx0XHRcdFx0eWVhcmRheSxcclxuXHRcdFx0XHRcdGxlYXBhZGo7XHJcblx0XHRcdFx0amQgPSBwYXJzZUZsb2F0KGpkLnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0XHR3amQgPSBNYXRoLmZsb29yKGpkIC0gMC41KSArIDAuNTtcclxuXHRcdFx0XHRkZXBvY2ggPSB3amQgLSBHUkVHT1JJQU5fRVBPQ0g7XHJcblx0XHRcdFx0cXVhZHJpY2VudCA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTQ2MDk3KTtcclxuXHRcdFx0XHRkcWMgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTQ2MDk3KTtcclxuXHRcdFx0XHRjZW50ID0gTWF0aC5mbG9vcihkcWMgLyAzNjUyNCk7XHJcblx0XHRcdFx0ZGNlbnQgPSBfLm1hdGgubW9kKGRxYywgMzY1MjQpO1xyXG5cdFx0XHRcdHF1YWQgPSBNYXRoLmZsb29yKGRjZW50IC8gMTQ2MSk7XHJcblx0XHRcdFx0ZHF1YWQgPSBfLm1hdGgubW9kKGRjZW50LCAxNDYxKTtcclxuXHRcdFx0XHR5aW5kZXggPSBNYXRoLmZsb29yKGRxdWFkIC8gMzY1KTtcclxuXHRcdFx0XHR5ZWFyID0gcXVhZHJpY2VudCAqIDQwMCArIGNlbnQgKiAxMDAgKyBxdWFkICogNCArIHlpbmRleDtcclxuXHRcdFx0XHRpZiAoIShjZW50ID09IDQgfHwgeWluZGV4ID09IDQpKSB7XHJcblx0XHRcdFx0XHR5ZWFyKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHllYXJkYXkgPSB3amQgLSBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIDAsIDEpO1xyXG5cdFx0XHRcdGxlYXBhZGogPSB3amQgPCBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIDMsIDEpID8gMCA6IF8uaXMuZ2VvcmdpYW5MZWFwWWVhcih5ZWFyKSA/IDEgOiAyO1xyXG5cdFx0XHRcdG1vbnRoID0gTWF0aC5mbG9vcigoKHllYXJkYXkgKyBsZWFwYWRqKSAqIDEyICsgMzczKSAvIDM2Nyk7XHJcblx0XHRcdFx0ZGF5ID0gd2pkIC0gXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCBtb250aCAtIDEsIDEpICsgMTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBcnJheShpbnNlcnRaZXJvKHllYXIpLCBpbnNlcnRaZXJvKG1vbnRoKSwgaW5zZXJ0WmVybyhkYXkpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRkYXRlLmp1bGlhbi50by5wZXJzaWFuID0gZnVuY3Rpb24oamQpIHtcclxuXHRcdFx0dmFyIHllYXIsIG1vbnRoLCBkYXksIGRlcG9jaCwgY3ljbGUsIGN5ZWFyLCB5Y3ljbGUsIGF1eDEsIGF1eDIsIHlkYXk7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZC50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdGpkID0gTWF0aC5mbG9vcihqZCkgKyAwLjU7XHJcblxyXG5cdFx0XHRkZXBvY2ggPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbig0NzUsIDEsIDEpO1xyXG5cdFx0XHRjeWNsZSA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTAyOTk4Myk7XHJcblx0XHRcdGN5ZWFyID0gXy5tYXRoLm1vZChkZXBvY2gsIDEwMjk5ODMpO1xyXG5cdFx0XHRpZiAoY3llYXIgPT0gMTAyOTk4Mikge1xyXG5cdFx0XHRcdHljeWNsZSA9IDI4MjA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXV4MSA9IE1hdGguZmxvb3IoY3llYXIgLyAzNjYpO1xyXG5cdFx0XHRcdGF1eDIgPSBfLm1hdGgubW9kKGN5ZWFyLCAzNjYpO1xyXG5cdFx0XHRcdHljeWNsZSA9IE1hdGguZmxvb3IoKDIxMzQgKiBhdXgxICsgMjgxNiAqIGF1eDIgKyAyODE1KSAvIDEwMjg1MjIpICsgYXV4MSArIDE7XHJcblx0XHRcdH1cclxuXHRcdFx0eWVhciA9IHljeWNsZSArIDI4MjAgKiBjeWNsZSArIDQ3NDtcclxuXHRcdFx0aWYgKHllYXIgPD0gMCkge1xyXG5cdFx0XHRcdHllYXItLTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZGF5ID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oeWVhciwgMSwgMSkgKyAxO1xyXG5cdFx0XHRtb250aCA9IHlkYXkgPD0gMTg2ID8gTWF0aC5jZWlsKHlkYXkgLyAzMSkgOiBNYXRoLmNlaWwoKHlkYXkgLSA2KSAvIDMwKTtcclxuXHRcdFx0ZGF5ID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oeWVhciwgbW9udGgsIDEpICsgMTtcclxuXHRcdFx0cmV0dXJuIG5ldyBBcnJheShpbnNlcnRaZXJvKHllYXIpLCBpbnNlcnRaZXJvKG1vbnRoKSwgaW5zZXJ0WmVybyhkYXkpKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGRhdGU7XHJcblx0fSkodGhpcyk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHN0cmluZ1RlbXBsYXRlID0gKHRlbXBsYXRlOiBhbnksIG1vZGVsOiBhbnkpID0+IHtcclxuXHRsZXQgdXJsO1xyXG5cdHRyeSB7XHJcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZXZhbFxyXG5cdFx0dXJsID0gZXZhbChcImBcIiArIHRlbXBsYXRlICsgXCJgXCIpO1xyXG5cclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWV2YWxcclxuXHRcdHVybCA9IFwiXCI7XHJcblx0fVxyXG5cdHJldHVybiB1cmw7XHJcbn07XHJcbiIsImV4cG9ydCBjbGFzcyBDb29raWUge1xyXG4gICAgLy8gcHJpdmF0ZSBpc0NvbnNlbnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHRoaXMuaXNDb25zZW50ZWQgPSB0aGlzLmdldENvb2tpZShDT09LSUVfQ09OU0VOVCkgPT09ICcxJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBjb25zdCBjYUxlbjogbnVtYmVyID0gY2EubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBgJHtuYW1lfT1gO1xyXG4gICAgICAgIGxldCBjOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjID0gY2FbaV0ucmVwbGFjZSgvXlxccysvZywgXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZUNvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb29raWUobmFtZSwgXCJcIiwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVEYXlzOiBudW1iZXIsIHBhdGg6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleHBpcmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJlcyA9IGBleHBpcmVzPSR7ZC50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgY29uc3QgY3BhdGg6IHN0cmluZyA9IHBhdGggPyBgOyBwYXRoPSR7cGF0aH1gIDogXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTsgJHtleHBpcmVzfSR7Y3BhdGh9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uc2VudChpc0NvbnNlbnQ6IGJvb2xlYW4sIGU6IGFueSkge1xyXG4gICAgICAgIC8vIGlmICghaXNDb25zZW50KSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmlzQ29uc2VudGVkO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaXNDb25zZW50KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0Q29va2llKENPT0tJRV9DT05TRU5ULCBcIjFcIiwgQ09PS0lFX0NPTlNFTlRfRVhQSVJFX0RBWVMpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzQ29uc2VudGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0Y2hWYWxpZGF0b3IoZGVzdGluYXRpb246IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLnJvb3QudmFsdWUpIHJldHVybjtcclxuICAgICAgICBsZXQgZGVzdGluYXRpb25WYWx1ZSA9IGNvbnRyb2wucm9vdC52YWx1ZVtkZXN0aW5hdGlvbl07XHJcblxyXG4gICAgICAgIHJldHVybiAoZGVzdGluYXRpb25WYWx1ZSA9PSBjb250cm9sLnZhbHVlKVxyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiB7IGtleTogXCJkb24ndCBtYXRjaGVkXCIgfTtcclxuICAgIH07XHJcbn0iLCJleHBvcnQgY2xhc3MgSVJlc3BvbnNlPFQ+IHtcclxuXHRSZXN1bHQ6IFQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbInRoaXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BR2EsWUFBWTs7Ozs7O0lBQ3hCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDeEMsSUFB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