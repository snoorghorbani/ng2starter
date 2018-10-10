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
    return eval('`' + template + '`');
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

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

export { SharedModule, HttpResponseBaseModel, HttpRequestBaseModel, PERSIAN_MONTH_DAYS_COUNT, PERSIAN_MONTH_NAMES, DateClass, UtilityService, stringTemplate, MatchValidator, IResponse, CurrencyUnitPipe as ɵd, DataUnitPipe as ɵa, PersianDatePipe as ɵc, PersianNumberPipe as ɵe, TimeCounterPipe as ɵf, TimeUnitPipe as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNoYXJlZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL2RhdGEtdW5pdC5waXBlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvcGlwZXMvdGltZS11bml0LnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9wZXJzaWFuLWRhdGUucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL2N1cnJlbmN5LXVuaXQucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL3BlcnNpYW4tbnVtYmVyLnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy90aW1lLWNvdW50ZXIucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3NoYXJlZC5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9odHRwLXJlc3BvbnNlLWJhc2UtbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9odHRwLXJlcXVlc3QtYmFzZS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3V0aWxpdHkuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL2hlbHBlcnMvc3RyaW5nLXRlbXBsYXRlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvdmFsaWRhdG9ycy9tYXRjaC52YWxpZGF0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9yZXNwb25zZS5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwiZGF0YVVuaXRcIiB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHZhbHVlID09IDApIHJldHVybiBcIjAgw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHJldHVybiBcIsOZwobDmMKnw5nChcOYwq3DmMKvw5nCiMOYwq9cIjtcclxuXHJcblx0XHRsZXQgQiA9IDE7XHJcblx0XHRsZXQgS0IgPSBCICogMTAyNDtcclxuXHRcdGxldCBNQiA9IEtCICogMTAyNDtcclxuXHRcdGxldCBHQiA9IE1CICogMTAyNDtcclxuXHJcblx0XHRsZXQgY29udmVydGVkVmFsdWU7XHJcblx0XHRsZXQgc3VmZml4ID0gXCLDmMKow5jCp8ObwozDmMKqXCI7XHJcblxyXG5cdFx0aWYgKHZhbHVlID49IEdCKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5rCr8ObwozDmsKvw5jCpyDDmMKow5jCp8ObwozDmMKqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gR0IpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlID49IE1CKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5nChcOawq/DmMKnIMOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBNQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPj0gS0IpIHtcclxuXHRcdFx0c3VmZml4ID0gXCLDmsKpw5vCjMOZwoTDmcKIIMOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBLQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9IHZhbHVlLnRvRml4ZWQoMik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnZlcnRlZFZhbHVlICsgXCIgXCIgKyBzdWZmaXg7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW50ZXJmYWNlIFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVtYWluaW5nOiBudW1iZXI7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWVVbml0JyB9KVxyXG5leHBvcnQgY2xhc3MgVGltZVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREYXlzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwICogMjRcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCscOZwojDmMKyJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEhvdXJzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKzw5jCp8OYwrnDmMKqJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1pbnV0cyh2YWx1ZTogbnVtYmVyKTogVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwq/DmcKCw5vCjMOZwoLDmcKHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFNlY29uZHModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwqvDmMKnw5nChsObwozDmcKHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkgcmV0dXJuICcwIMOYwq/DmcKCw5vCjMOZwoLDmcKHJztcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RvciA9ICcgw5nCiCAnO1xyXG5cclxuICAgICAgICBsZXQgZGF5c0RhdGEgPSB0aGlzLmdldERheXModmFsdWUpO1xyXG4gICAgICAgIGxldCBob3Vyc0RhdGEgPSB0aGlzLmdldEhvdXJzKGRheXNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IG1pbnV0c0RhdGEgPSB0aGlzLmdldE1pbnV0cyhob3Vyc0RhdGEucmVtYWluaW5nKTtcclxuICAgICAgICAvLyBsZXQgc2Vjb25kc3NEYXRhID0gdGhpcy5nZXRTZWNvbmRzKG1pbnV0c0RhdGEucmVtYWluaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtkYXlzRGF0YSwgaG91cnNEYXRhLCBtaW51dHNEYXRhLyosIHNlY29uZHNzRGF0YSovXVxyXG4gICAgICAgICAgICAuZmlsdGVyKGkgPT4gaS5jb3VudClcclxuICAgICAgICAgICAgLm1hcChpID0+IGkudmFsdWUpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQZXJzaWFuRGF0ZUV4dHJhY3RvciB7XHJcblx0Y291bnQ6IG51bWJlcjtcclxuXHR2YWx1ZTogc3RyaW5nO1xyXG5cdHJlbWFpbmluZzogbnVtYmVyO1xyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwicGVyc2lhbkRhdGVcIiB9KVxyXG5leHBvcnQgY2xhc3MgUGVyc2lhbkRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKHZhbHVlOiBhbnksIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCI7XHJcblx0XHR2YXIgZGF0ZTtcclxuXHRcdGlmICh2YWx1ZS50b0RhdGUpIHtcclxuXHRcdFx0ZGF0ZSA9IHZhbHVlLnRvRGF0ZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoXCIvRGF0ZShcIiwgXCJcIikucmVwbGFjZShcIikvXCIsIFwiXCIpLCAxMCkpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHBlcnNpYW5EYXRlID0gXy5kYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4oZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblxyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0cGFyc2VJbnQocGVyc2lhbkRhdGVbMF0pLnRvTG9jYWxlU3RyaW5nKFwiZmEtSVJcIiwgeyB1c2VHcm91cGluZzogZmFsc2UgfSksXHJcblx0XHRcdHBhcnNlSW50KHBlcnNpYW5EYXRlWzFdKS50b0xvY2FsZVN0cmluZyhcImZhLUlSXCIsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pLFxyXG5cdFx0XHRwYXJzZUludChwZXJzaWFuRGF0ZVsyXSkudG9Mb2NhbGVTdHJpbmcoXCJmYS1JUlwiLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KVxyXG5cdFx0XS5qb2luKFwiL1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciBfID0ge1xyXG5cdGlzOiAoZnVuY3Rpb24oXykge1xyXG5cdFx0dmFyIGlzOiBhbnkgPSBmdW5jdGlvbihub2RlOiBhbnksIHNlbGVjdG9yOiBhbnkpIHtcclxuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcykgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRcdHZhciBub2RlcyA9IHRoaXMuYXJnVG9BcnJheShub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cdFx0XHRyZXR1cm4gbm9kZXMuaW5kZXhPZihub2RlKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpcy5vYmplY3QgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ub2RlTGlzdCA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdGlmIChfLmlzLm5vdC5pZSgpKSByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBOb2RlTGlzdF1cIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdG9iai5wdXNoID09PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdChvYmoubGVuZ3RoID4gMCA/IG9ialswXS50YWdOYW1lICE9PSB1bmRlZmluZWQgOiB0cnVlKVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZWxlbWVudCA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zZWFyY2goXCJFbGVtZW50XCIpID4gLTE7XHJcblx0XHRcdC8vcmV0dXJuICEhT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKCdlbGVtZW50Jyk7O1xyXG5cdFx0fTtcclxuXHRcdGlzLkhUTUxDb2xsZWN0aW9uID0gZnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuYXJyYXkgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLm51bWJlciA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgTnVtYmVyXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzW1wiZnVuY3Rpb25cIl0gPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLnN0cmluZyA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgU3RyaW5nXVwiOyAvLyYmICgoaXNFbXB0eSkpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgVW5kZWZpbmVkXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmV2ZW50ID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikudG9Mb3dlckNhc2UoKS5zZWFyY2goXCJldmVudFwiKSA+IC0xO1xyXG5cdFx0fTtcclxuXHRcdGlzLmRlZmluZWQgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0Ly9yZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBVbmRlZmluZWRdJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IE51bGxdJyAmJiBPYmplY3QgIT09ICcnO1xyXG5cdFx0XHRyZXR1cm4gX3ZhciAhPT0gdW5kZWZpbmVkICYmIF92YXIgIT09IG51bGwgJiYgX3ZhciAhPT0gXCJcIjtcclxuXHRcdH07XHJcblx0XHRpcy5qc29uID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLmVycm9yID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcblx0XHRpcy5zdGFydFdpdGggPSBmdW5jdGlvbihzdHI6IGFueSwgcHJlZml4OiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5pbmRleE9mKHByZWZpeCkgPT09IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW5kV2l0aCA9IGZ1bmN0aW9uKHN0cjogYW55KSB7fTtcclxuXHJcblx0XHRpcy52YWx1ZSA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gX3ZhciA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lbXB0eSA9IGZ1bmN0aW9uKG86IGFueSkge1xyXG5cdFx0XHRpZiAoXy5pcy5vYmplY3QoMCkpIGZvciAodmFyIGkgaW4gbykgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkobykpIHJldHVybiBvLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0aXMudHJ1dGh5ID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLnNjYWxhciA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHQvL1RPRE8gOiBpbXByb3ZlXHJcblx0XHRcdHJldHVybiBpcy5kZWZpbmVkKF92YXIpICYmIGlzLm5vdC5hcnJheShfdmFyKSAmJiBpcy5ub3Qub2JqZWN0KF92YXIpICYmIGlzLm5vdFtcImZ1bmN0aW9uXCJdKF92YXIpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnByb3RvdHlwZVByb3AgPSBmdW5jdGlvbihvYmo6IGFueSwgcHJvcDogYW55KSB7XHJcblx0XHRcdHJldHVybiBvYmpbcHJvcF0gJiYgIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbCA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShmdikgPT0gSlNPTi5zdHJpbmdpZnkoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsVGV4dCA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIGZ2LnRvTG93ZXJDYXNlKGZ2KSA9PT0gc3YudG9Mb3dlckNhc2Uoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmNsb3NldCA9IGZ1bmN0aW9uKGZvOiBhbnksIHNvOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIF8uaXMuZXF1YWwoXy5wYXJ0aWFsKGZvLCBfLnJlcG9ydC5za2VsZXRvbihzbykpLCBzbyk7XHJcblx0XHR9O1xyXG5cdFx0aXMuY29udGFpbiA9IGZ1bmN0aW9uKHN0cjogYW55LCBzZWFyY2hTdHI6IGFueSkge1xyXG5cdFx0XHR2YXIgcmVnID0gXy5pcy5yZWdleChzZWFyY2hTdHIpID8gc2VhcmNoU3RyIDogbmV3IFJlZ0V4cChzZWFyY2hTdHIsIFwiZ1wiKTtcclxuXHRcdFx0cmV0dXJuIHN0ci5tYXRjaChyZWcpICYmIHN0ci5tYXRjaChyZWcpLmxlbmd0aCA+IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMucmVnZXggPSBmdW5jdGlvbihyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJSZWdFeHBcIjtcclxuXHRcdH07XHJcblx0XHRpcy5zYW1lID0gZnVuY3Rpb24oZnY6IGFueSwgc3Y6IGFueSkge1xyXG5cdFx0XHQvL2lmICghZnYpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBmdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cdFx0XHQvL2lmICghc3YpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBzdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZ2LmlzRXF1YWxOb2RlID8gZnYuaXNFcXVhbE5vZGUoc3YpIDogZnYgPT09IHN2O1xyXG5cdFx0fTtcclxuXHRcdGlzLnBlcnNpYW5MZWFwWWVhciA9IGZ1bmN0aW9uKHllYXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gKCgoeWVhciAtICh5ZWFyID4gMCA/IDQ3NCA6IDQ3MykpICUgMjgyMCArIDQ3NCArIDM4KSAqIDY4MikgJSAyODE2IDwgNjgyO1xyXG5cdFx0fTtcclxuXHRcdGlzLmdlb3JnaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHllYXIgJSA0ID09IDAgJiYgISh5ZWFyICUgMTAwID09IDAgJiYgeWVhciAlIDQwMCAhPSAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIG5vdDogYW55ID0ge307XHJcblx0XHR2YXIgaTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGk6IGFueSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSlcclxuXHRcdFx0XHRcdG5vdFtpXSA9IGZ1bmN0aW9uKGE6IGFueSwgYjogYW55LCBjOiBhbnkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICFpc1tpXShhLCBiLCBjKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMubm90ID0gbm90O1xyXG5cclxuXHRcdC8vVE9ETyA6IGltcGVsZW1lbnRcclxuXHRcdHZhciBhbGw6IGFueSA9IHt9O1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSkgYWxsW2ldID0gZnVuY3Rpb24obzogYW55KSB7fTtcclxuXHRcdFx0fSkoaSk7XHJcblx0XHRpcy5hbGwgPSBhbGw7XHJcblxyXG5cdFx0dmFyIGFueTogYW55ID0ge307XHJcblx0XHRmb3IgKHZhciBqIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaikge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShqKSkgYW55W2pdID0gZnVuY3Rpb24obzogYW55KSB7fTtcclxuXHRcdFx0fSkoaik7XHJcblx0XHRpcy5hbnkgPSBhbnk7XHJcblxyXG5cdFx0cmV0dXJuIGlzO1xyXG5cdH0pKHRoaXMpLFxyXG5cdG1hdGg6IChmdW5jdGlvbigpIHtcclxuXHRcdHZhciBtYXRoOiBhbnkgPSB7fTtcclxuXHJcblx0XHRtYXRoLm1vZCA9IGZ1bmN0aW9uKGE6IGFueSwgYjogYW55KSB7XHJcblx0XHRcdHJldHVybiBhIC0gYiAqIE1hdGguZmxvb3IoYSAvIGIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gbWF0aDtcclxuXHR9KSgpLFxyXG5cdGRhdGU6IChmdW5jdGlvbigpIHtcclxuXHRcdHZhciBQRVJTSUFOX0VQT0NIID0gMTk0ODMyMC41LFxyXG5cdFx0XHRHUkVHT1JJQU5fRVBPQ0ggPSAxNzIxNDI1LjU7XHJcblxyXG5cdFx0dmFyIGRhdGU6IGFueSA9IHt9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuID0ge307XHJcblx0XHRkYXRlLnBlcnNpYW4udG8gPSB7fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4gPSB7fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8gPSB7fTtcclxuXHRcdGRhdGUuanVsaWFuID0ge307XHJcblx0XHRkYXRlLmp1bGlhbi50byA9IHt9O1xyXG5cclxuXHRcdHZhciBpbnNlcnRaZXJvID0gZnVuY3Rpb24oaTogYW55KSB7XHJcblx0XHRcdGkgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdHJldHVybiBpLmxlbmd0aCA9PSAxID8gXCIwXCIgKyBpIDogaTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXI6IGFueSwgbW9udGg6IGFueSwgZGF5OiBhbnkpIHtcclxuXHRcdFx0dmFyIGVwYmFzZSwgZXB5ZWFyO1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhcik7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkpO1xyXG5cclxuXHRcdFx0ZXBiYXNlID0geWVhciAtICh5ZWFyID49IDAgPyA0NzQgOiA0NzMpO1xyXG5cdFx0XHRlcHllYXIgPSA0NzQgKyBfLm1hdGgubW9kKGVwYmFzZSwgMjgyMCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGRheSArXHJcblx0XHRcdFx0KG1vbnRoIDw9IDcgPyAobW9udGggLSAxKSAqIDMxIDogKG1vbnRoIC0gMSkgKiAzMCArIDYpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKChlcHllYXIgKiA2ODIgLSAxMTApIC8gMjgxNikgK1xyXG5cdFx0XHRcdChlcHllYXIgLSAxKSAqIDM2NSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcihlcGJhc2UgLyAyODIwKSAqIDEwMjk5ODMgK1xyXG5cdFx0XHRcdChQRVJTSUFOX0VQT0NIIC0gMSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55LCBqb2luQ2hhcmFjdGVyOiBhbnkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuKFxyXG5cdFx0XHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSArIDEsIHBhcnNlSW50KGRheSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBqb2luQ2hhcmFjdGVyID8gZGF0ZUFycmF5LmpvaW4oam9pbkNoYXJhY3RlcikgOiBkYXRlQXJyYXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuID0gZnVuY3Rpb24oeWVhcjogYW55LCBtb250aDogYW55LCBkYXk6IGFueSkge1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhcik7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRHUkVHT1JJQU5fRVBPQ0ggLVxyXG5cdFx0XHRcdDEgK1xyXG5cdFx0XHRcdDM2NSAqICh5ZWFyIC0gMSkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpICtcclxuXHRcdFx0XHQtTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoMzY3ICogbW9udGggLSAzNjIpIC8gMTIgKyAobW9udGggPD0gMiA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAtMSA6IC0yKSArIGRheSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55LCBqb2luQ2hhcmFjdGVyOiBhbnkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLnBlcnNpYW4oXHJcblx0XHRcdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSwgcGFyc2VJbnQoZGF5KSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIGpvaW5DaGFyYWN0ZXIgPyBkYXRlQXJyYXkuam9pbihqb2luQ2hhcmFjdGVyKSA6IGRhdGVBcnJheTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbihqZDogYW55KSB7XHJcblx0XHRcdHZhciB3amQsXHJcblx0XHRcdFx0ZGVwb2NoLFxyXG5cdFx0XHRcdHF1YWRyaWNlbnQsXHJcblx0XHRcdFx0ZHFjLFxyXG5cdFx0XHRcdGNlbnQsXHJcblx0XHRcdFx0ZGNlbnQsXHJcblx0XHRcdFx0cXVhZCxcclxuXHRcdFx0XHRkcXVhZCxcclxuXHRcdFx0XHR5aW5kZXgsXHJcblx0XHRcdFx0ZHlpbmRleCxcclxuXHRcdFx0XHR5ZWFyLFxyXG5cdFx0XHRcdG1vbnRoLFxyXG5cdFx0XHRcdGRheSxcclxuXHRcdFx0XHR5ZWFyZGF5LFxyXG5cdFx0XHRcdGxlYXBhZGo7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZCk7XHJcblxyXG5cdFx0XHR3amQgPSBNYXRoLmZsb29yKGpkIC0gMC41KSArIDAuNTtcclxuXHRcdFx0ZGVwb2NoID0gd2pkIC0gR1JFR09SSUFOX0VQT0NIO1xyXG5cdFx0XHRxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG5cdFx0XHRkcWMgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTQ2MDk3KTtcclxuXHRcdFx0Y2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xyXG5cdFx0XHRkY2VudCA9IF8ubWF0aC5tb2QoZHFjLCAzNjUyNCk7XHJcblx0XHRcdHF1YWQgPSBNYXRoLmZsb29yKGRjZW50IC8gMTQ2MSk7XHJcblx0XHRcdGRxdWFkID0gXy5tYXRoLm1vZChkY2VudCwgMTQ2MSk7XHJcblx0XHRcdHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG5cdFx0XHR5ZWFyID0gcXVhZHJpY2VudCAqIDQwMCArIGNlbnQgKiAxMDAgKyBxdWFkICogNCArIHlpbmRleDtcclxuXHRcdFx0aWYgKCEoY2VudCA9PSA0IHx8IHlpbmRleCA9PSA0KSkge1xyXG5cdFx0XHRcdHllYXIrKztcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyZGF5ID0gd2pkIC0gXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKTtcclxuXHRcdFx0bGVhcGFkaiA9IHdqZCA8IF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMywgMSkgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gMSA6IDI7XHJcblx0XHRcdG1vbnRoID0gTWF0aC5mbG9vcigoKHllYXJkYXkgKyBsZWFwYWRqKSAqIDEyICsgMzczKSAvIDM2Nyk7XHJcblx0XHRcdGRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgbW9udGgsIDEpICsgMTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5qdWxpYW4udG8ucGVyc2lhbiA9IGZ1bmN0aW9uKGpkOiBhbnkpIHtcclxuXHRcdFx0dmFyIHllYXIsIG1vbnRoLCBkYXksIGRlcG9jaCwgY3ljbGUsIGN5ZWFyLCB5Y3ljbGUsIGF1eDEsIGF1eDIsIHlkYXk7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZCk7XHJcblxyXG5cdFx0XHRqZCA9IE1hdGguZmxvb3IoamQpICsgMC41O1xyXG5cclxuXHRcdFx0ZGVwb2NoID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oNDc1LCAxLCAxKTtcclxuXHRcdFx0Y3ljbGUgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDEwMjk5ODMpO1xyXG5cdFx0XHRjeWVhciA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxMDI5OTgzKTtcclxuXHRcdFx0aWYgKGN5ZWFyID09IDEwMjk5ODIpIHtcclxuXHRcdFx0XHR5Y3ljbGUgPSAyODIwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuXHRcdFx0XHRhdXgyID0gXy5tYXRoLm1vZChjeWVhciwgMzY2KTtcclxuXHRcdFx0XHR5Y3ljbGUgPSBNYXRoLmZsb29yKCgyMTM0ICogYXV4MSArIDI4MTYgKiBhdXgyICsgMjgxNSkgLyAxMDI4NTIyKSArIGF1eDEgKyAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHllYXIgPSB5Y3ljbGUgKyAyODIwICogY3ljbGUgKyA0NzQ7XHJcblx0XHRcdGlmICh5ZWFyIDw9IDApIHtcclxuXHRcdFx0XHR5ZWFyLS07XHJcblx0XHRcdH1cclxuXHRcdFx0eWRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIDEsIDEpICsgMTtcclxuXHRcdFx0bW9udGggPSB5ZGF5IDw9IDE4NiA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcblx0XHRcdGRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoLCAxKSArIDE7XHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBkYXRlO1xyXG5cdH0pKClcclxufTtcclxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeVVuaXQnIH0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSE9MCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDApIHJldHVybiAnw5jCscOYwqfDm8KMw5rCr8OYwqfDmcKGJztcclxuXHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9ICfDmMKxw5vCjMOYwqfDmcKEJztcclxuICAgICAgICByZXR1cm4gW3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdmYS1JUicpLCBzdWZmaXhdLmpvaW4oJyAnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncGVyc2lhbk51bWJlcicgfSlcclxuZXhwb3J0IGNsYXNzIFBlcnNpYW5OdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHZhciByZXMgPSAnJztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICByZXMgKz0gKCt2YWx1ZVtpbmRleF0pLnRvTG9jYWxlU3RyaW5nKCdmYS1JUicsIHtcclxuICAgICAgICAgICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICByZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndGltZUNvdW50ZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lQ291bnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIb3Vycyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjAgKiA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCs8OYwqfDmMK5w5jCqicsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRNaW51dHModmFsdWU6IG51bWJlcik6IFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKvw5nCgsObwozDmcKCw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcigodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKrw5jCp8OZwobDm8KMw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdG9yID0gJyA6ICc7XHJcblxyXG4gICAgICAgIC8vIGxldCBkYXlzRGF0YSA9IHRoaXMuZ2V0RGF5cyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGhvdXJzRGF0YSA9IHRoaXMuZ2V0SG91cnModmFsdWUpO1xyXG4gICAgICAgIGxldCBtaW51dHNEYXRhID0gdGhpcy5nZXRNaW51dHMoaG91cnNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IHNlY29uZHNzRGF0YSA9IHRoaXMuZ2V0U2Vjb25kcyhtaW51dHNEYXRhLnJlbWFpbmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbc2Vjb25kc3NEYXRhLCBtaW51dHNEYXRhLGhvdXJzRGF0YV1cclxuICAgICAgICAgICAgLm1hcChpID0+IGkuY291bnQpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL2RhdGEtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFBlcnNpYW5EYXRlUGlwZSB9IGZyb20gXCIuL3BpcGVzL3BlcnNpYW4tZGF0ZS5waXBlXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5VW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy9jdXJyZW5jeS11bml0LnBpcGVcIjtcclxuaW1wb3J0IHsgUGVyc2lhbk51bWJlclBpcGUgfSBmcm9tIFwiLi9waXBlcy9wZXJzaWFuLW51bWJlci5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVDb3VudGVyUGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtY291bnRlci5waXBlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF0sXHJcblx0ZXhwb3J0czogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxUPiB7XHJcbiAgICBSZXN1bHQ6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBhYnN0cmFjdCBleHRyYWN0RGF0YT8oKTogYW55O1xyXG59IiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cFJlcXVlc3RCYXNlTW9kZWw8VD4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0YWJzdHJhY3QgZ2V0UmVxdWVzdEJvZHk/PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXlzOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG5cdGFic3RyYWN0IGdldFJlcXVlc3RRdWVyeVBhcmFtcz88SyBleHRlbmRzIGtleW9mIFQ+KGtleXM6IGFueSk6IEh0dHBQYXJhbXM7XHJcblxyXG5cdC8vIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB8IG51bGwge1xyXG5cdC8vIFx0cmV0dXJuO1xyXG5cdC8vIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQgPSBbIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAgXTtcclxuZXhwb3J0IGNvbnN0IFBFUlNJQU5fTU9OVEhfTkFNRVMgPSBbXHJcblx0XCLDmcKBw5jCscOZwojDmMKxw5jCr8ObwozDmcKGXCIsXHJcblx0XCLDmMKnw5jCscOYwq/Dm8KMw5jCqMOZwofDmMK0w5jCqlwiLFxyXG5cdFwiw5jCrsOYwrHDmMKvw5jCp8OYwq9cIixcclxuXHRcIsOYwqrDm8KMw5jCsVwiLFxyXG5cdFwiw5nChcOYwrHDmMKvw5jCp8OYwq9cIixcclxuXHRcIsOYwrTDmcKHw5jCscObwozDmcKIw5jCsVwiLFxyXG5cdFwiw5nChcOZwofDmMKxXCIsXHJcblx0XCLDmMKiw5jCqMOYwqfDmcKGXCIsXHJcblx0XCLDmMKiw5jCsMOYwrFcIixcclxuXHRcIsOYwq/Dm8KMXCIsXHJcblx0XCLDmMKow5nCh8OZwoXDmcKGXCIsXHJcblx0XCLDmMKnw5jCs8OZwoHDmcKGw5jCr1wiXHJcbl07XHJcbmV4cG9ydCBjbGFzcyBEYXRlQ2xhc3Mge1xyXG5cdHllYXI6IHN0cmluZztcclxuXHRtb250aDogc3RyaW5nO1xyXG5cdGRhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoeWVhciwgbW9udGgsIGRhdGUpIHtcclxuXHRcdHRoaXMueWVhciA9IHllYXI7XHJcblx0XHR0aGlzLm1vbnRoID0gbW9udGg7XHJcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xyXG5cdH1cclxuXHJcblx0ZnVsbERhdGUoc2VwcmF0b3I6IHN0cmluZyA9IFwiL1wiKSB7XHJcblx0XHRyZXR1cm4gWyB0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF0ZSBdLmpvaW4oc2VwcmF0b3IpO1xyXG5cdH1cclxuXHRuYXRpdmVEYXRlKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHRoaXMueWVhciksIHBhcnNlSW50KHRoaXMubW9udGgpIC0gMSwgcGFyc2VJbnQodGhpcy5kYXRlKSk7XHJcblx0fVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuXHRpcyA9IChmdW5jdGlvbihfLCB1bmRlZmluZWQpIHtcclxuXHRcdHZhciBpczogYW55ID0gZnVuY3Rpb24obm9kZSwgc2VsZWN0b3IpIHtcclxuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcykgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRcdHZhciBub2RlcyA9IHRoaXMuYXJnVG9BcnJheShub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cdFx0XHRyZXR1cm4gbm9kZXMuaW5kZXhPZihub2RlKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpcy5vYmplY3QgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubm9kZUxpc3QgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0aWYgKF8uaXMubm90LmllKCkpIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE5vZGVMaXN0XVwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCAmJlxyXG5cdFx0XHRcdFx0b2JqLnB1c2ggPT09IHVuZGVmaW5lZCAmJlxyXG5cdFx0XHRcdFx0KG9iai5sZW5ndGggPiAwID8gb2JqWzBdLnRhZ05hbWUgIT09IHVuZGVmaW5lZCA6IHRydWUpXHJcblx0XHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRpcy5lbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zZWFyY2goXCJFbGVtZW50XCIpID4gLTE7XHJcblx0XHRcdC8vcmV0dXJuICEhT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKCdlbGVtZW50Jyk7O1xyXG5cdFx0fTtcclxuXHRcdGlzLkhUTUxDb2xsZWN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmFycmF5ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubnVtYmVyID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgTnVtYmVyXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzW1wiZnVuY3Rpb25cIl0gPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5zdHJpbmcgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBTdHJpbmddXCI7IC8vJiYgKChpc0VtcHR5KSk7XHJcblx0XHR9O1xyXG5cdFx0aXMudW5kZWZpbmVkID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgVW5kZWZpbmVkXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmV2ZW50ID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKFwiZXZlbnRcIikgPiAtMTtcclxuXHRcdH07XHJcblx0XHRpcy5kZWZpbmVkID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHQvL3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IFVuZGVmaW5lZF0nICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSAhPT0gJ1tvYmplY3QgTnVsbF0nICYmIE9iamVjdCAhPT0gJyc7XHJcblx0XHRcdHJldHVybiBfdmFyICE9PSB1bmRlZmluZWQgJiYgX3ZhciAhPT0gbnVsbCAmJiBfdmFyICE9PSBcIlwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmpzb24gPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0aXMuZXJyb3IgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuXHRcdGlzLnN0YXJ0V2l0aCA9IGZ1bmN0aW9uKHN0ciwgcHJlZml4KSB7XHJcblx0XHRcdHJldHVybiBzdHIuaW5kZXhPZihwcmVmaXgpID09PSAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVuZFdpdGggPSBmdW5jdGlvbihzdHIpIHt9O1xyXG5cclxuXHRcdGlzLnZhbHVlID0gZnVuY3Rpb24oX3Zhcikge1xyXG5cdFx0XHRyZXR1cm4gX3ZhciA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lbXB0eSA9IGZ1bmN0aW9uKG8pIHtcclxuXHRcdFx0aWYgKF8uaXMub2JqZWN0KDApKSBmb3IgKHZhciBpIGluIG8pIGlmIChvLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdGlmIChfLmlzLmFycmF5KG8pKSByZXR1cm4gby5sZW5ndGggPT09IDA7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdGlzLnRydXRoeSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5zY2FsYXIgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdC8vVE9ETyA6IGltcHJvdmVcclxuXHRcdFx0cmV0dXJuIGlzLmRlZmluZWQoX3ZhcikgJiYgaXMubm90LmFycmF5KF92YXIpICYmIGlzLm5vdC5vYmplY3QoX3ZhcikgJiYgaXMubm90W1wiZnVuY3Rpb25cIl0oX3Zhcik7XHJcblx0XHR9O1xyXG5cdFx0aXMucHJvdG90eXBlUHJvcCA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xyXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdICYmICFvYmouaGFzT3duUHJvcGVydHkocHJvcCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXF1YWwgPSBmdW5jdGlvbihmdiwgc3YpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShmdikgPT0gSlNPTi5zdHJpbmdpZnkoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsVGV4dCA9IGZ1bmN0aW9uKGZ2LCBzdikge1xyXG5cdFx0XHRyZXR1cm4gZnYudG9Mb3dlckNhc2UoZnYpID09PSBzdi50b0xvd2VyQ2FzZShzdikgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuY29udGFpbiA9IGZ1bmN0aW9uKHN0ciwgc2VhcmNoU3RyKSB7XHJcblx0XHRcdHZhciByZWcgPSBfLmlzLnJlZ2V4KHNlYXJjaFN0cikgPyBzZWFyY2hTdHIgOiBuZXcgUmVnRXhwKHNlYXJjaFN0ciwgXCJnXCIpO1xyXG5cdFx0XHRyZXR1cm4gc3RyLm1hdGNoKHJlZykgJiYgc3RyLm1hdGNoKHJlZykubGVuZ3RoID4gMDtcclxuXHRcdH07XHJcblx0XHRpcy5yZWdleCA9IGZ1bmN0aW9uKHIpIHtcclxuXHRcdFx0cmV0dXJuIHIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJSZWdFeHBcIjtcclxuXHRcdH07XHJcblx0XHRpcy5zYW1lID0gZnVuY3Rpb24oZnYsIHN2KSB7XHJcblx0XHRcdC8vaWYgKCFmdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIGZ2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblx0XHRcdC8vaWYgKCFzdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIHN2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZnYuaXNFcXVhbE5vZGUgPyBmdi5pc0VxdWFsTm9kZShzdikgOiBmdiA9PT0gc3Y7XHJcblx0XHR9O1xyXG5cdFx0aXMucGVyc2lhbkxlYXBZZWFyID0gZnVuY3Rpb24oeWVhcikge1xyXG5cdFx0XHRyZXR1cm4gKCgoeWVhciAtICh5ZWFyID4gMCA/IDQ3NCA6IDQ3MykpICUgMjgyMCArIDQ3NCArIDM4KSAqIDY4MikgJSAyODE2IDwgNjgyO1xyXG5cdFx0fTtcclxuXHRcdGlzLmdlb3JnaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyKSB7XHJcblx0XHRcdHJldHVybiB5ZWFyICUgNCA9PSAwICYmICEoeWVhciAlIDEwMCA9PSAwICYmIHllYXIgJSA0MDAgIT0gMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBub3QgPSB7fTtcclxuXHRcdHZhciBpO1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSlcclxuXHRcdFx0XHRcdG5vdFtpXSA9IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICFpc1tpXShhLCBiLCBjKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMubm90ID0gbm90O1xyXG5cclxuXHRcdC8vVE9ETyA6IGltcGVsZW1lbnRcclxuXHRcdHZhciBhbGwgPSB7fTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpIGFsbFtpXSA9IGZ1bmN0aW9uKG8pIHt9O1xyXG5cdFx0XHR9KShpKTtcclxuXHRcdGlzLmFsbCA9IGFsbDtcclxuXHJcblx0XHR2YXIgYW55ID0ge307XHJcblx0XHRmb3IgKHZhciBqIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaikge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShqKSkgYW55W2pdID0gZnVuY3Rpb24obykge307XHJcblx0XHRcdH0pKGopO1xyXG5cdFx0aXMuYW55ID0gYW55O1xyXG5cclxuXHRcdHJldHVybiBpcztcclxuXHR9KSh0aGlzKTtcclxuXHRtYXRoID0gKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBtYXRoOiBhbnkgPSB7fTtcclxuXHJcblx0XHRtYXRoLm1vZCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRcdFx0cmV0dXJuIGEgLSBiICogTWF0aC5mbG9vcihhIC8gYik7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBtYXRoO1xyXG5cdH0pKHRoaXMpO1xyXG5cclxuXHRkYXRlID0gKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBQRVJTSUFOX0VQT0NIID0gMTk0ODMyMC41LFxyXG5cdFx0XHRHUkVHT1JJQU5fRVBPQ0ggPSAxNzIxNDI1LjU7XHJcblxyXG5cdFx0dmFyIGRhdGU6IHtcclxuXHRcdFx0cGVyc2lhbjoge1xyXG5cdFx0XHRcdFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVDogbnVtYmVyW107XHJcblx0XHRcdFx0bm93KCk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRmb3JldGltZU1vbnRoT2ZZZWFyKCk6IHN0cmluZ1tdO1xyXG5cdFx0XHRcdGdldERheXNPZm9Nb250aChpZHg6IG51bWJlcik6IHN0cmluZ1tdO1xyXG5cdFx0XHRcdGNyZWF0ZSh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGdldERheU9mV2Vlayh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKTogbnVtYmVyO1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpID0+IERhdGVDbGFzcztcclxuXHRcdFx0XHRcdGp1bGlhbjogKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpID0+IG51bWJlcjtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRnZW9yZ2lhbjoge1xyXG5cdFx0XHRcdC8vIGdldEZ1dHVyZURhdGUobjogbnVtYmVyKTogRGF0ZSxcclxuXHRcdFx0XHRub3coKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGdldFJlbGF0aXZlRGF5KG46IG51bWJlcik6IERhdGVDbGFzcztcclxuXHRcdFx0XHRwYXJzZShkYXRlOiBEYXRlKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRwZXJzaWFuKHllYXI6IG51bWJlciB8IHN0cmluZywgbW9udGg6IG51bWJlciB8IHN0cmluZywgZGF5OiBudW1iZXIgfCBzdHJpbmcpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0XHRqdWxpYW4oeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlcjtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRqdWxpYW46IHtcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0cGVyc2lhbjogKGpkOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZ1tdO1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46IChqZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmdbXTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRhczoge1xyXG5cdFx0XHRcdERhdGU6IChbIHksIG0sIGQgXTogc3RyaW5nW10pID0+IERhdGU7XHJcblx0XHRcdH07XHJcblx0XHR9ID0ge1xyXG5cdFx0XHRwZXJzaWFuOiB7XHJcblx0XHRcdFx0UEVSU0lBTl9NT05USF9EQVlTX0NPVU5UOiBbXSxcclxuXHRcdFx0XHRub3c6ICgpID0+IG51bGwsXHJcblx0XHRcdFx0Y3JlYXRlOiAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXREYXlzT2ZvTW9udGg6IChpZHg6IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXREYXlPZldlZWs6ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiBudWxsLFxyXG5cdFx0XHRcdGZvcmV0aW1lTW9udGhPZlllYXI6ICgpID0+IFtdLFxyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRcdGp1bGlhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0anVsaWFuOiB7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdFx0cGVyc2lhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2VvcmdpYW46IHtcclxuXHRcdFx0XHQvLyBnZXRGdXR1cmVEYXRlOiAobjogbnVtYmVyKSA9PiBudWxsLFxyXG5cdFx0XHRcdG5vdzogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRnZXRSZWxhdGl2ZURheTogKG46IG51bWJlcikgPT4gbnVsbCxcclxuXHRcdFx0XHRwYXJzZTogKGRhdGU6IERhdGUpID0+IG51bGwsXHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdHBlcnNpYW46ICgpID0+IG51bGwsXHJcblx0XHRcdFx0XHRqdWxpYW46ICgpID0+IG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzOiB7XHJcblx0XHRcdFx0RGF0ZTogKCkgPT4gbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Ly8gZGF0ZS5wZXJzaWFuID0ge307XHJcblx0XHQvLyBkYXRlLnBlcnNpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4gPSB7fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4udG8gPSB7fTtcclxuXHRcdC8vIGRhdGUuanVsaWFuID0ge307XHJcblx0XHQvLyBkYXRlLmp1bGlhbi50byA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5hcyA9IHt9O1xyXG5cdFx0ZGF0ZS5hcy5EYXRlID0gKFsgeSwgbSwgZCBdOiBzdHJpbmdbXSk6IERhdGUgPT4gbmV3IERhdGUocGFyc2VJbnQoeSksIHBhcnNlSW50KG0pIC0gMSwgcGFyc2VJbnQoZCkpO1xyXG5cclxuXHRcdHZhciBpbnNlcnRaZXJvID0gZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRpID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRyZXR1cm4gaS5sZW5ndGggPT0gMSA/IFwiMFwiICsgaSA6IGk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLlBFUlNJQU5fTU9OVEhfREFZU19DT1VOVCA9IFsgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAgXTtcclxuXHRcdGRhdGUucGVyc2lhbi5ub3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHJldHVybiBkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4obm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uY3JlYXRlID0gKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IG5ldyBEYXRlQ2xhc3MoeSwgbSwgZCk7XHJcblx0XHRkYXRlLnBlcnNpYW4uZ2V0RGF5c09mb01vbnRoID0gKGlkeDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdHZhciBjb3VudCA9IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVFtpZHhdO1xyXG5cdFx0XHRsZXQgcmVzID0gW107XHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgY291bnQgKyAxOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgZGF5TmFtZSA9IGkgPCAxMCA/IFwiMFwiICsgaSA6IGkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRyZXMucHVzaChkYXlOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5nZXREYXlPZldlZWsgPSAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRsZXQgcGVyc2lhbkhvbGlkYXkgPSBkYXRlLnBlcnNpYW4uY3JlYXRlKFwiMTM5NlwiLCBcIjFcIiwgXCIxXCIpO1xyXG5cdFx0XHRsZXQgcGVyc2lhbkhvbGlkYXlJbkdlb3JnaWFuID0gZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuKFwiMTM5NlwiLCBcIjFcIiwgXCIxXCIpLm5hdGl2ZURhdGUoKTtcclxuXHJcblx0XHRcdHZhciBtb250aCA9ICttIC0gMTtcclxuXHRcdFx0dmFyIGRheSA9ICtkO1xyXG5cdFx0XHR2YXIgZGF5c09mWWVhciA9IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVC5yZWR1Y2UoKGEsIGIsIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpZHggPT0gbW9udGgpIHJldHVybiBhICsgZGF5O1xyXG5cdFx0XHRcdGlmIChpZHggPiBtb250aCkgcmV0dXJuIGE7XHJcblx0XHRcdFx0cmV0dXJuIGEgKyBiO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiAoZGF5c09mWWVhciArIHBlcnNpYW5Ib2xpZGF5SW5HZW9yZ2lhbi5nZXREYXkoKSAtIDEpICUgNztcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uZm9yZXRpbWVNb250aE9mWWVhciA9ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIFBFUlNJQU5fTU9OVEhfTkFNRVMuZmlsdGVyKChpdGVtLCBpZHgpID0+IGlkeCA8PSArZGF0ZS5wZXJzaWFuLm5vdygpLm1vbnRoIC0gMSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBlcGJhc2UsIGVweWVhcjtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSk7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSk7XHJcblx0XHRcdGRheSA9IHBhcnNlSW50KGRheS50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdGVwYmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuXHRcdFx0ZXB5ZWFyID0gNDc0ICsgXy5tYXRoLm1vZChlcGJhc2UsIDI4MjApO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRkYXkgK1xyXG5cdFx0XHRcdChtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6IChtb250aCAtIDEpICogMzAgKyA2KSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoZXB5ZWFyICogNjgyIC0gMTEwKSAvIDI4MTYpICtcclxuXHRcdFx0XHQoZXB5ZWFyIC0gMSkgKiAzNjUgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoZXBiYXNlIC8gMjgyMCkgKiAxMDI5OTgzICtcclxuXHRcdFx0XHQoUEVSU0lBTl9FUE9DSCAtIDEpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0XHR2YXIgZGF0ZUFycmF5ID0gZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4oXHJcblx0XHRcdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbihwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpLCBwYXJzZUludChtb250aC50b1N0cmluZygpKSwgcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhkYXRlQXJyYXlbMF0sIHBhcnNlSW50KGRhdGVBcnJheVsxXSksIGRhdGVBcnJheVsyXSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuZ2VvcmdpYW4ucGFyc2UgPSAoZGF0ZTogRGF0ZSk6IERhdGVDbGFzcyA9PlxyXG5cdFx0XHRuZXcgRGF0ZUNsYXNzKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHllYXIgPSBwYXJzZUludCh5ZWFyLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpICsgMTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRHUkVHT1JJQU5fRVBPQ0ggLVxyXG5cdFx0XHRcdDEgK1xyXG5cdFx0XHRcdDM2NSAqICh5ZWFyIC0gMSkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpICtcclxuXHRcdFx0XHQtTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoMzY3ICogbW9udGggLSAzNjIpIC8gMTIgKyAobW9udGggPD0gMiA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAtMSA6IC0yKSArIGRheSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5wZXJzaWFuKFxyXG5cdFx0XHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSksIHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpLCBwYXJzZUludChkYXkudG9TdHJpbmcoKSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKGRhdGVBcnJheVswXSwgZGF0ZUFycmF5WzFdLCBkYXRlQXJyYXlbMl0pO1xyXG5cdFx0fTtcclxuXHRcdC8vIGRhdGUuZ2VvcmdpYW4uZ2V0RnV0dXJlRGF0ZSA9IGZ1bmN0aW9uIChuKSB7XHJcblx0XHQvLyAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHQvLyAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSArIG4pO1xyXG5cdFx0Ly8gfVxyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi5ub3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIG5vdy5nZXREYXRlKCkpO1xyXG5cdFx0fTtcclxuXHRcdChkYXRlLmdlb3JnaWFuLmdldFJlbGF0aXZlRGF5ID0gKG46IG51bWJlcikgPT4ge1xyXG5cdFx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAtMSAqIG4gKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3MoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblx0XHR9KSxcclxuXHRcdFx0KGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oamQpIHtcclxuXHRcdFx0XHR2YXIgd2pkLFxyXG5cdFx0XHRcdFx0ZGVwb2NoLFxyXG5cdFx0XHRcdFx0cXVhZHJpY2VudCxcclxuXHRcdFx0XHRcdGRxYyxcclxuXHRcdFx0XHRcdGNlbnQsXHJcblx0XHRcdFx0XHRkY2VudCxcclxuXHRcdFx0XHRcdHF1YWQsXHJcblx0XHRcdFx0XHRkcXVhZCxcclxuXHRcdFx0XHRcdHlpbmRleCxcclxuXHRcdFx0XHRcdGR5aW5kZXgsXHJcblx0XHRcdFx0XHR5ZWFyLFxyXG5cdFx0XHRcdFx0bW9udGgsXHJcblx0XHRcdFx0XHRkYXksXHJcblx0XHRcdFx0XHR5ZWFyZGF5LFxyXG5cdFx0XHRcdFx0bGVhcGFkajtcclxuXHRcdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRcdHdqZCA9IE1hdGguZmxvb3IoamQgLSAwLjUpICsgMC41O1xyXG5cdFx0XHRcdGRlcG9jaCA9IHdqZCAtIEdSRUdPUklBTl9FUE9DSDtcclxuXHRcdFx0XHRxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG5cdFx0XHRcdGRxYyA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxNDYwOTcpO1xyXG5cdFx0XHRcdGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcclxuXHRcdFx0XHRkY2VudCA9IF8ubWF0aC5tb2QoZHFjLCAzNjUyNCk7XHJcblx0XHRcdFx0cXVhZCA9IE1hdGguZmxvb3IoZGNlbnQgLyAxNDYxKTtcclxuXHRcdFx0XHRkcXVhZCA9IF8ubWF0aC5tb2QoZGNlbnQsIDE0NjEpO1xyXG5cdFx0XHRcdHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG5cdFx0XHRcdHllYXIgPSBxdWFkcmljZW50ICogNDAwICsgY2VudCAqIDEwMCArIHF1YWQgKiA0ICsgeWluZGV4O1xyXG5cdFx0XHRcdGlmICghKGNlbnQgPT0gNCB8fCB5aW5kZXggPT0gNCkpIHtcclxuXHRcdFx0XHRcdHllYXIrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0eWVhcmRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMCwgMSk7XHJcblx0XHRcdFx0bGVhcGFkaiA9IHdqZCA8IF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMywgMSkgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gMSA6IDI7XHJcblx0XHRcdFx0bW9udGggPSBNYXRoLmZsb29yKCgoeWVhcmRheSArIGxlYXBhZGopICogMTIgKyAzNzMpIC8gMzY3KTtcclxuXHRcdFx0XHRkYXkgPSB3amQgLSBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoIC0gMSwgMSkgKyAxO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdGRhdGUuanVsaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbihqZCkge1xyXG5cdFx0XHR2YXIgeWVhciwgbW9udGgsIGRheSwgZGVwb2NoLCBjeWNsZSwgY3llYXIsIHljeWNsZSwgYXV4MSwgYXV4MiwgeWRheTtcclxuXHRcdFx0amQgPSBwYXJzZUZsb2F0KGpkLnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0amQgPSBNYXRoLmZsb29yKGpkKSArIDAuNTtcclxuXHJcblx0XHRcdGRlcG9jaCA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKDQ3NSwgMSwgMSk7XHJcblx0XHRcdGN5Y2xlID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxMDI5OTgzKTtcclxuXHRcdFx0Y3llYXIgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTAyOTk4Myk7XHJcblx0XHRcdGlmIChjeWVhciA9PSAxMDI5OTgyKSB7XHJcblx0XHRcdFx0eWN5Y2xlID0gMjgyMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhdXgxID0gTWF0aC5mbG9vcihjeWVhciAvIDM2Nik7XHJcblx0XHRcdFx0YXV4MiA9IF8ubWF0aC5tb2QoY3llYXIsIDM2Nik7XHJcblx0XHRcdFx0eWN5Y2xlID0gTWF0aC5mbG9vcigoMjEzNCAqIGF1eDEgKyAyODE2ICogYXV4MiArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyID0geWN5Y2xlICsgMjgyMCAqIGN5Y2xlICsgNDc0O1xyXG5cdFx0XHRpZiAoeWVhciA8PSAwKSB7XHJcblx0XHRcdFx0eWVhci0tO1xyXG5cdFx0XHR9XHJcblx0XHRcdHlkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKSArIDE7XHJcblx0XHRcdG1vbnRoID0geWRheSA8PSAxODYgPyBNYXRoLmNlaWwoeWRheSAvIDMxKSA6IE1hdGguY2VpbCgoeWRheSAtIDYpIC8gMzApO1xyXG5cdFx0XHRkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCBtb250aCwgMSkgKyAxO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZGF0ZTtcclxuXHR9KSh0aGlzKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc3RyaW5nVGVtcGxhdGUgPSAodGVtcGxhdGU6IGFueSwgbW9kZWw6IGFueSkgPT4ge1xyXG5cdHJldHVybiBldmFsKCdgJyArIHRlbXBsYXRlICsgJ2AnKTtcclxufTtcclxuIiwiaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdGNoVmFsaWRhdG9yKGRlc3RpbmF0aW9uOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xyXG4gICAgICAgIGlmICghY29udHJvbC5yb290LnZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGRlc3RpbmF0aW9uVmFsdWUgPSBjb250cm9sLnJvb3QudmFsdWVbZGVzdGluYXRpb25dO1xyXG5cclxuICAgICAgICByZXR1cm4gKGRlc3RpbmF0aW9uVmFsdWUgPT0gY29udHJvbC52YWx1ZSlcclxuICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgIDogeyBrZXk6IFwiZG9uJ3QgbWF0Y2hlZFwiIH07XHJcbiAgICB9O1xyXG59IiwiZXhwb3J0IGNsYXNzIElSZXNwb25zZTxUPiB7XHJcblx0UmVzdWx0OiBUO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0lBSUMsU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUN4QyxJQUFJLEtBQUssSUFBSSxDQUFDO1lBQUUsT0FBTyxRQUFRLENBQUM7UUFDaEMsSUFBSSxLQUFLLElBQUksSUFBSTtZQUFFLE9BQU8sU0FBUyxDQUFDOztRQUVwQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzs7UUFDbEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQzs7UUFDbkIsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQzs7UUFFbkIsSUFBSSxjQUFjLENBQUM7O1FBQ25CLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVwQixJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUNyQixjQUFjLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN2QixNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQ3BCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDckIsY0FBYyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDaEIsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLGNBQWMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0tBQ3JDOzs7WUE3QkQsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7Ozs7OztBQ0YxQjs7Ozs7SUFXWSxPQUFPLENBQUMsS0FBYTs7UUFDekIsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUE7O1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQzs7Ozs7O0lBRUUsUUFBUSxDQUFDLEtBQWE7O1FBQzFCLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQzs7Ozs7O0lBRUUsU0FBUyxDQUFDLEtBQWE7O1FBQzNCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7UUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPO1lBQ0gsS0FBSztZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO1NBQ2xDLENBQUM7Ozs7OztJQUVFLFVBQVUsQ0FBQyxLQUFhOztRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2hDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSztTQUMzQixDQUFDOzs7Ozs7O0lBSU4sU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7UUFFdEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDOztRQUV4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFDbEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBR3JELE9BQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBbUI7YUFDckQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUUxQzs7O1lBdkRKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Ozs7Ozs7QUNSMUI7Ozs7OztJQVVDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7UUFDdEIsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ04sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0U7O1FBQ0QsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUV0RyxPQUFPO1lBQ04sUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDeEUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDWjs7O1lBakJELElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7O1dBcUJ2QixVQUFTLENBQUM7O0lBQ2QsSUFBSSxFQUFFLEdBQVEsVUFBUyxJQUFTLEVBQUUsUUFBYTtRQUM5QyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUMvQyxDQUFDO0lBRUYsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFTLElBQVM7UUFDN0IsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLENBQUM7S0FDbEUsQ0FBQztJQUNGLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBUyxHQUFRO1FBQzlCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQUUsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssbUJBQW1CLENBQUM7O1lBRXJGLFFBQ0MsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTO2dCQUN4QixHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVM7aUJBQ3JCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxFQUNyRDtLQUNILENBQUM7SUFDRixFQUFFLENBQUMsT0FBTyxHQUFHLFVBQVMsR0FBUTtRQUM3QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0tBRWxFLENBQUM7SUFDRixFQUFFLENBQUMsY0FBYyxHQUFHLFVBQVMsR0FBUTtRQUNwQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyx5QkFBeUIsQ0FBQztLQUN6RSxDQUFDO0lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLElBQVM7UUFDNUIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssZ0JBQWdCLENBQUM7S0FDakUsQ0FBQztJQUNGLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFTO1FBQzdCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0tBQ2xFLENBQUM7SUFDRixFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBUyxJQUFTO1FBQ2xDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0tBQ3BFLENBQUM7SUFDRixFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBUztRQUM3QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztLQUNsRSxDQUFDO0lBQ0YsRUFBRSxDQUFDLFNBQVMsR0FBRyxVQUFTLElBQVM7UUFDaEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssb0JBQW9CLENBQUM7S0FDckUsQ0FBQztJQUNGLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBUyxJQUFTO1FBQzVCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMvRSxDQUFDO0lBQ0YsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQVM7O1FBRTlCLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7S0FDMUQsQ0FBQztJQUNGLEVBQUUsQ0FBQyxJQUFJLEdBQUcsZUFBYSxDQUFDO0lBQ3hCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZUFBYSxDQUFDO0lBRXpCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBUyxHQUFRLEVBQUUsTUFBVztRQUM1QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDLENBQUM7SUFDRixFQUFFLENBQUMsT0FBTyxHQUFHLFVBQVMsR0FBUSxLQUFJLENBQUM7SUFFbkMsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLElBQVM7UUFDNUIsT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUMzQixDQUFDO0lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLENBQU07UUFDekIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLEtBQUssQ0FBQztRQUMzRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7S0FDWixDQUFDO0lBQ0YsRUFBRSxDQUFDLE1BQU0sR0FBRyxlQUFhLENBQUM7SUFDMUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFTLElBQVM7O1FBRTdCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pHLENBQUM7SUFDRixFQUFFLENBQUMsYUFBYSxHQUFHLFVBQVMsR0FBUSxFQUFFLElBQVM7UUFDOUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlDLENBQUM7SUFDRixFQUFFLENBQUMsS0FBSyxHQUFHLFVBQVMsRUFBTyxFQUFFLEVBQU87OztRQUluQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQy9ELENBQUM7SUFDRixFQUFFLENBQUMsU0FBUyxHQUFHLFVBQVMsRUFBTyxFQUFFLEVBQU87UUFDdkMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUNoRSxDQUFDO0lBQ0YsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFTLEVBQU8sRUFBRSxFQUFPO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUM1RCxDQUFDO0lBQ0YsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLEdBQVEsRUFBRSxTQUFjOztRQUM3QyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDbkQsQ0FBQztJQUNGLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBUyxDQUFNO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO0tBQ3ZDLENBQUM7SUFDRixFQUFFLENBQUMsSUFBSSxHQUFHLFVBQVMsRUFBTyxFQUFFLEVBQU87OztRQUlsQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ3ZELENBQUM7SUFDRixFQUFFLENBQUMsZUFBZSxHQUFHLFVBQVMsSUFBUztRQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztLQUNoRixDQUFDO0lBQ0YsRUFBRSxDQUFDLGdCQUFnQixHQUFHLFVBQVMsSUFBUztRQUN2QyxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUM5RCxDQUFDOztJQUVGLElBQUksR0FBRyxHQUFRLEVBQUUsQ0FBQzs7SUFDbEIsSUFBSSxDQUFDLENBQUM7SUFDTixLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1gsQ0FBQyxVQUFTLENBQU07WUFDZixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBUyxDQUFNLEVBQUUsQ0FBTSxFQUFFLENBQU07b0JBQ3ZDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdkIsQ0FBQztTQUNILEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUCxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7SUFHYixJQUFJLEdBQUcsR0FBUSxFQUFFLENBQUM7SUFDbEIsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNYLENBQUMsVUFBUyxDQUFDO1lBQ1YsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBUyxDQUFNLEtBQUksQ0FBQztTQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0lBRWIsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ2xCLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtRQUNmLENBQUMsVUFBUyxDQUFDO1lBQ1YsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBUyxDQUFNLEtBQUksQ0FBQztTQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFYixPQUFPLEVBQUUsQ0FBQztDQUNWLE9BQ007O0lBQ04sSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO0lBRW5CLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFNLEVBQUUsQ0FBTTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDakMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDO0NBQ1osT0FDTTs7SUFDTixJQUFJLGFBQWEsR0FBRyxTQUFTLENBQ0E7O0lBRDdCLElBQ0MsZUFBZSxHQUFHLFNBQVMsQ0FBQzs7SUFFN0IsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO0lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDOztJQUVwQixJQUFJLFVBQVUsR0FBRyxVQUFTLENBQU07UUFDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25DLENBQUM7SUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFTLEVBQUUsS0FBVSxFQUFFLEdBQVE7O1FBQ2hFLElBQUksTUFBTSxDQUFTOztRQUFuQixJQUFZLE1BQU0sQ0FBQztRQUNuQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXhDLFFBQ0MsR0FBRzthQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO1lBQ3ZDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQU87YUFDbEMsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUNsQjtLQUNGLENBQUM7SUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBUyxJQUFTLEVBQUUsS0FBVSxFQUFFLEdBQVEsRUFBRSxhQUFrQjs7UUFDdEYsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzFFLENBQUM7UUFDRixPQUFPLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUNqRSxDQUFDO0lBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBUyxFQUFFLEtBQVUsRUFBRSxHQUFRO1FBQ2pFLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLFFBQ0MsZUFBZTtZQUNmLENBQUM7WUFDRCxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUNwRztLQUNGLENBQUM7SUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxJQUFTLEVBQUUsS0FBVSxFQUFFLEdBQVEsRUFBRSxhQUFrQjs7UUFDdEYsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDdkUsQ0FBQztRQUNGLE9BQU8sYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDO0tBQ2pFLENBQUM7SUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBUyxFQUFPOztRQUN6QyxJQUFJLEdBQUcsQ0FjRTs7UUFkVCxJQUNDLE1BQU0sQ0FhRTs7UUFkVCxJQUVDLFVBQVUsQ0FZRjs7UUFkVCxJQUdDLEdBQUcsQ0FXSzs7UUFkVCxJQUlDLElBQUksQ0FVSTs7UUFkVCxJQUtDLEtBQUssQ0FTRzs7UUFkVCxJQU1DLElBQUksQ0FRSTs7UUFkVCxJQU9DLEtBQUssQ0FPRzs7UUFkVCxJQVFDLE1BQU0sQ0FNRTs7UUFkVCxJQVVDLElBQUksQ0FJSTs7UUFkVCxJQVdDLEtBQUssQ0FHRzs7UUFkVCxJQVlDLEdBQUcsQ0FFSzs7UUFkVCxJQWFDLE9BQU8sQ0FDQzs7UUFkVCxJQWNDLE9BQU8sQ0FBQztRQUNULEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQyxNQUFNLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQztRQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDekMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN6RCxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxFQUFFLENBQUM7U0FDUDtRQUNELE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUMzRCxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUQsT0FBTyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFLENBQUM7SUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxFQUFPOztRQUN4QyxJQUFJLElBQUksQ0FBNkQ7O1FBQXJFLElBQVUsS0FBSyxDQUFzRDs7UUFBckUsSUFBaUIsR0FBRyxDQUFpRDs7UUFBckUsSUFBc0IsTUFBTSxDQUF5Qzs7UUFBckUsSUFBOEIsS0FBSyxDQUFrQzs7UUFBckUsSUFBcUMsS0FBSyxDQUEyQjs7UUFBckUsSUFBNEMsTUFBTSxDQUFtQjs7UUFBckUsSUFBb0QsSUFBSSxDQUFhOztRQUFyRSxJQUEwRCxJQUFJLENBQU87O1FBQXJFLElBQWdFLElBQUksQ0FBQztRQUNyRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUUxQixNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDckMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDckIsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNkO2FBQU07WUFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUM3RTtRQUNELElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbkMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxFQUFFLENBQUM7U0FDUDtRQUNELElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN4RSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsT0FBTyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztDQUNaOztBQS9RRixJQUFJLENBQUMsR0FBRztJQUNQLEVBQUUsRUFBRSxLQW1JREEsSUFBSSxDQUFDO0lBQ1IsSUFBSSxFQUFFLE1BUUY7SUFDSixJQUFJLEVBQUUsTUFpSUY7Q0FDSixDQUFDOzs7Ozs7QUM1U0Y7Ozs7OztJQUlJLFNBQVMsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzdCLElBQUksS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQzs7UUFFckMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1RDs7O1lBUkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7Ozs7OztBQ0Y5Qjs7Ozs7O0lBSUksU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDOztRQUN0QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUMzQyxXQUFXLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sR0FBRyxDQUFDO0tBQ2Q7OztZQWJKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7Ozs7Ozs7QUNGL0I7Ozs7O0lBYVksUUFBUSxDQUFDLEtBQWE7O1FBQzFCLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQzs7Ozs7O0lBRUUsU0FBUyxDQUFDLEtBQWE7O1FBQzNCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7UUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPO1lBQ0gsS0FBSztZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO1NBQ2xDLENBQUM7Ozs7OztJQUVFLFVBQVUsQ0FBQyxLQUFhOztRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2hDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSztTQUMzQixDQUFDOzs7Ozs7O0lBSU4sU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDOztRQUN0QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUM7O1FBR3hCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQ3JDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUNyRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6RCxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBQyxTQUFTLENBQUM7YUFDdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBRTFDOzs7WUE1Q0osSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTs7Ozs7OztBQ1Q3Qjs7O1lBUUMsUUFBUSxTQUFDO2dCQUNULFlBQVksRUFBRSxDQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBRTtnQkFDbkgsT0FBTyxFQUFFLENBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFFO2FBQzlHOzs7Ozs7Ozs7OztBQ1JEO0lBRUksaUJBQWlCO0NBRXBCOzs7Ozs7Ozs7O0FDSkQ7SUFDQyxpQkFBZ0I7Q0FRaEI7Ozs7OztBQ1pEO0FBRUEsTUFBYSx3QkFBd0IsR0FBRyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7O0FBQzNGLE1BQWEsbUJBQW1CLEdBQUc7SUFDbEMsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsS0FBSztJQUNMLE9BQU87SUFDUCxRQUFRO0lBQ1IsS0FBSztJQUNMLE1BQU07SUFDTixLQUFLO0lBQ0wsSUFBSTtJQUNKLE1BQU07SUFDTixPQUFPO0NBQ1AsQ0FBQztBQUNGOzs7Ozs7SUFLQyxZQUFZLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNqQjs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBbUIsR0FBRztRQUM5QixPQUFPLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDM0Q7Ozs7SUFDRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNwRjtDQUNEOzs7a0JBTUssQ0FBQyxVQUFTLENBQUMsRUFBRSxTQUFTOztZQUMxQixJQUFJLEVBQUUsR0FBUSxVQUFTLElBQUksRUFBRSxRQUFRO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBQ2hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUMvQyxDQUFDO1lBRUYsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFTLElBQUk7Z0JBQ3hCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGlCQUFpQixDQUFDO2FBQ2xFLENBQUM7WUFDRixFQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsR0FBRztnQkFDekIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7b0JBQUUsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssbUJBQW1CLENBQUM7O29CQUVyRixRQUNDLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUzt3QkFDeEIsR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTO3lCQUNyQixHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFDckQ7YUFDSCxDQUFDO1lBQ0YsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLEdBQUc7Z0JBQ3hCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7YUFFbEUsQ0FBQztZQUNGLEVBQUUsQ0FBQyxjQUFjLEdBQUcsVUFBUyxHQUFHO2dCQUMvQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyx5QkFBeUIsQ0FBQzthQUN6RSxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLElBQUk7Z0JBQ3ZCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGdCQUFnQixDQUFDO2FBQ2pFLENBQUM7WUFDRixFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSTtnQkFDeEIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLENBQUM7YUFDbEUsQ0FBQztZQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFTLElBQUk7Z0JBQzdCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG1CQUFtQixDQUFDO2FBQ3BFLENBQUM7WUFDRixFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSTtnQkFDeEIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLENBQUM7YUFDbEUsQ0FBQztZQUNGLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBUyxJQUFJO2dCQUMzQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxvQkFBb0IsQ0FBQzthQUNyRSxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLElBQUk7Z0JBQ3ZCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvRSxDQUFDO1lBQ0YsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQUk7O2dCQUV6QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO2FBQzFELENBQUM7WUFDRixFQUFFLENBQUMsSUFBSSxHQUFHLGVBQWEsQ0FBQztZQUN4QixFQUFFLENBQUMsS0FBSyxHQUFHLGVBQWEsQ0FBQztZQUV6QixFQUFFLENBQUMsU0FBUyxHQUFHLFVBQVMsR0FBRyxFQUFFLE1BQU07Z0JBQ2xDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxHQUFHLEtBQUksQ0FBQztZQUU5QixFQUFFLENBQUMsS0FBSyxHQUFHLFVBQVMsSUFBSTtnQkFDdkIsT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUMzQixDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUFFLE9BQU8sS0FBSyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLElBQUksQ0FBQzthQUNaLENBQUM7WUFDRixFQUFFLENBQUMsTUFBTSxHQUFHLGVBQWEsQ0FBQztZQUMxQixFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSTs7Z0JBRXhCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pHLENBQUM7WUFDRixFQUFFLENBQUMsYUFBYSxHQUFHLFVBQVMsR0FBRyxFQUFFLElBQUk7Z0JBQ3BDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QyxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLEVBQUUsRUFBRSxFQUFFOzs7Z0JBSXpCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7YUFDL0QsQ0FBQztZQUNGLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBUyxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNoRSxDQUFDO1lBQ0YsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLEdBQUcsRUFBRSxTQUFTOztnQkFDbkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekUsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNuRCxDQUFDO1lBQ0YsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFTLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO2FBQ3ZDLENBQUM7WUFDRixFQUFFLENBQUMsSUFBSSxHQUFHLFVBQVMsRUFBRSxFQUFFLEVBQUU7OztnQkFJeEIsT0FBTyxFQUFFLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUN2RCxDQUFDO1lBQ0YsRUFBRSxDQUFDLGVBQWUsR0FBRyxVQUFTLElBQUk7Z0JBQ2pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO2FBQ2hGLENBQUM7WUFDRixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsVUFBUyxJQUFJO2dCQUNsQyxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM5RCxDQUFDOztZQUVGLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7WUFDYixJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsQ0FBQyxVQUFTLENBQUM7b0JBQ1YsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOzRCQUN4QixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ3ZCLENBQUM7aUJBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNQLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztZQUdiLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsQ0FBQyxVQUFTLENBQUM7b0JBQ1YsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBUyxDQUFDLEtBQUksQ0FBQztpQkFDbEQsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNQLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztZQUViLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZixDQUFDLFVBQVMsQ0FBQztvQkFDVixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFTLENBQUMsS0FBSSxDQUFDO2lCQUNsRCxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFFYixPQUFPLEVBQUUsQ0FBQztTQUNWLEVBQUUsSUFBSSxDQUFDO29CQUNELENBQUMsVUFBUyxDQUFDOztZQUNqQixJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakMsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDO1NBQ1osRUFBRSxJQUFJLENBQUM7b0JBRUQsQ0FBQyxVQUFTLENBQUM7O1lBQ2pCLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FDQTs7WUFEN0IsSUFDQyxlQUFlLEdBQUcsU0FBUyxDQUFDOztZQUU3QixJQUFJLElBQUksR0FnQ0o7Z0JBQ0gsT0FBTyxFQUFFO29CQUNSLHdCQUF3QixFQUFFLEVBQUU7b0JBQzVCLEdBQUcsRUFBRSxNQUFNLElBQUk7b0JBQ2YsTUFBTSxFQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEtBQUssSUFBSTtvQkFDakQsZUFBZSxFQUFFLENBQUMsR0FBVyxLQUFLLElBQUk7b0JBQ3RDLFlBQVksRUFBRSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxLQUFLLElBQUk7b0JBQ3ZELG1CQUFtQixFQUFFLE1BQU0sRUFBRTtvQkFDN0IsRUFBRSxFQUFFO3dCQUNILFFBQVEsRUFBRSxNQUFNLElBQUk7d0JBQ3BCLE1BQU0sRUFBRSxNQUFNLElBQUk7cUJBQ2xCO2lCQUNEO2dCQUNELE1BQU0sRUFBRTtvQkFDUCxFQUFFLEVBQUU7d0JBQ0gsUUFBUSxFQUFFLE1BQU0sSUFBSTt3QkFDcEIsT0FBTyxFQUFFLE1BQU0sSUFBSTtxQkFDbkI7aUJBQ0Q7Z0JBQ0QsUUFBUSxFQUFFOztvQkFFVCxHQUFHLEVBQUUsTUFBTSxJQUFJO29CQUNmLGNBQWMsRUFBRSxDQUFDLENBQVMsS0FBSyxJQUFJO29CQUNuQyxLQUFLLEVBQUUsQ0FBQyxJQUFVLEtBQUssSUFBSTtvQkFDM0IsRUFBRSxFQUFFO3dCQUNILE9BQU8sRUFBRSxNQUFNLElBQUk7d0JBQ25CLE1BQU0sRUFBRSxNQUFNLElBQUk7cUJBQ2xCO2lCQUNEO2dCQUNELEVBQUUsRUFBRTtvQkFDSCxJQUFJLEVBQUUsTUFBTSxJQUFJO2lCQUNoQjthQUNELENBQUM7Ozs7Ozs7O1lBUUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFZLEtBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXBHLElBQUksVUFBVSxHQUFHLFVBQVMsQ0FBQztnQkFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRSxDQUFDO1lBQy9GLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHOztnQkFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNsRixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBVzs7Z0JBQzFDLElBQUksS0FBSyxHQUFHLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDMUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDbkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7YUFDWCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7O2dCQUMzRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztnQkFDM0QsSUFBSSx3QkFBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Z0JBRXZGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ25CLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOztnQkFDYixJQUFJLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7b0JBQzFELElBQUksR0FBRyxJQUFJLEtBQUs7d0JBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNqQyxJQUFJLEdBQUcsR0FBRyxLQUFLO3dCQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2IsQ0FBQyxDQUFDO2dCQUVILE9BQU8sQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoRSxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRztnQkFDbEMsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZGLENBQUM7WUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUc7O2dCQUNqRCxJQUFJLE1BQU0sQ0FBUzs7Z0JBQW5CLElBQVksTUFBTSxDQUFDO2dCQUNuQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUUvQixNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFeEMsUUFDQyxHQUFHO3FCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztvQkFDdkMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUc7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQU87cUJBQ2xDLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFDbEI7YUFDRixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHOztnQkFDbkQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FDdkcsQ0FBQztnQkFDRixPQUFPLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekUsQ0FBQztZQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBVSxLQUNoQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUc7Z0JBQ2xELElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUUvQixRQUNDLGVBQWU7b0JBQ2YsQ0FBQztvQkFDRCxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO29CQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFDcEc7YUFDRixDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLFVBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHOztnQkFDbkQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FDeEcsQ0FBQztnQkFDRixPQUFPLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0QsQ0FBQzs7Ozs7WUFLRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRzs7Z0JBQ25CLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDM0UsQ0FBQztZQUNGLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFTOztnQkFDekMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM5RTtpQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBUyxFQUFFOztvQkFDckMsSUFBSSxHQUFHLENBY0U7O29CQWRULElBQ0MsTUFBTSxDQWFFOztvQkFkVCxJQUVDLFVBQVUsQ0FZRjs7b0JBZFQsSUFHQyxHQUFHLENBV0s7O29CQWRULElBSUMsSUFBSSxDQVVJOztvQkFkVCxJQUtDLEtBQUssQ0FTRzs7b0JBZFQsSUFNQyxJQUFJLENBUUk7O29CQWRULElBT0MsS0FBSyxDQU9HOztvQkFkVCxJQVFDLE1BQU0sQ0FNRTs7b0JBZFQsSUFVQyxJQUFJLENBSUk7O29CQWRULElBV0MsS0FBSyxDQUdHOztvQkFkVCxJQVlDLEdBQUcsQ0FFSzs7b0JBZFQsSUFhQyxPQUFPLENBQ0M7O29CQWRULElBY0MsT0FBTyxDQUFDO29CQUNULEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBRS9CLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2pDLE1BQU0sR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQ3pDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUNoQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNoQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLElBQUksR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7b0JBQ3pELElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDaEMsSUFBSSxFQUFFLENBQUM7cUJBQ1A7b0JBQ0QsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQzNELEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRTlELE9BQU8sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdkUsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLFVBQVMsRUFBRTs7Z0JBQ25DLElBQUksSUFBSSxDQUE2RDs7Z0JBQXJFLElBQVUsS0FBSyxDQUFzRDs7Z0JBQXJFLElBQWlCLEdBQUcsQ0FBaUQ7O2dCQUFyRSxJQUFzQixNQUFNLENBQXlDOztnQkFBckUsSUFBOEIsS0FBSyxDQUFrQzs7Z0JBQXJFLElBQXFDLEtBQUssQ0FBMkI7O2dCQUFyRSxJQUE0QyxNQUFNLENBQW1COztnQkFBckUsSUFBb0QsSUFBSSxDQUFhOztnQkFBckUsSUFBMEQsSUFBSSxDQUFPOztnQkFBckUsSUFBZ0UsSUFBSSxDQUFDO2dCQUNyRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUUvQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBRTFCLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtvQkFDckIsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDZDtxQkFBTTtvQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQy9CLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2lCQUM3RTtnQkFDRCxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNuQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQ2QsSUFBSSxFQUFFLENBQUM7aUJBQ1A7Z0JBQ0QsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRCxLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkUsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDO1NBQ1osRUFBRSxJQUFJLENBQUM7Ozs7WUEvWFIsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7Ozs7Ozs7QUN0Q0QsTUFBYSxjQUFjLEdBQUcsQ0FBQyxRQUFhLEVBQUUsS0FBVTtJQUN2RCxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7QUNBRCx3QkFBK0IsV0FBbUI7SUFDOUMsT0FBTyxDQUFDLE9BQXdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPOztRQUNoQyxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZELE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsS0FBSztjQUNuQyxJQUFJO2NBQ0osRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLENBQUM7S0FDbEMsQ0FBQztDQUNMOzs7Ozs7Ozs7Ozs7OztBQ1hEO0NBRUM7Ozs7Ozs7Ozs7Ozs7OyJ9