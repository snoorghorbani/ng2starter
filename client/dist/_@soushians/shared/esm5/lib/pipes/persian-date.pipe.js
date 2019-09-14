/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
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
export { PersianDatePipe };
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
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lhbi1kYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wZXJzaWFuLWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFcEQsbUNBSUM7OztJQUhBLHFDQUFjOztJQUNkLHFDQUFjOztJQUNkLHlDQUFrQjs7QUFHbkI7SUFBQTtJQWtCQSxDQUFDOzs7Ozs7SUFoQkEsbUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFDbEIsSUFBSTtRQUNSLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3RTs7WUFDRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckcsT0FBTztZQUNOLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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Q0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7U0FDN0U7UUFDRCxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ25DLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksRUFBRSxDQUFDO1NBQ1A7UUFDRCxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxPQUFPLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFBLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7O0lBL1FFLENBQUMsR0FBRztJQUNQLEVBQUUsRUFBRSxNQW1JRixDQUFDLElBQUksQ0FBQztJQUNSLElBQUksRUFBRSxNQVFKLEVBQUU7SUFDSixJQUFJLEVBQUUsTUFpSUosRUFBRTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgUGVyc2lhbkRhdGVFeHRyYWN0b3Ige1xyXG5cdGNvdW50OiBudW1iZXI7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHRyZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiBcInBlcnNpYW5EYXRlXCIgfSlcclxuZXhwb3J0IGNsYXNzIFBlcnNpYW5EYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cdHRyYW5zZm9ybSh2YWx1ZTogYW55LCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICghdmFsdWUpIHJldHVybiBcIlwiO1xyXG5cdFx0dmFyIGRhdGU7XHJcblx0XHRpZiAodmFsdWUudG9EYXRlKSB7XHJcblx0XHRcdGRhdGUgPSB2YWx1ZS50b0RhdGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh2YWx1ZS5yZXBsYWNlKFwiL0RhdGUoXCIsIFwiXCIpLnJlcGxhY2UoXCIpL1wiLCBcIlwiKSwgMTApKTtcclxuXHRcdH1cclxuXHRcdHZhciBwZXJzaWFuRGF0ZSA9IF8uZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xyXG5cclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHBhcnNlSW50KHBlcnNpYW5EYXRlWzBdKS50b0xvY2FsZVN0cmluZyhcImZhLUlSXCIsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pLFxyXG5cdFx0XHRwYXJzZUludChwZXJzaWFuRGF0ZVsxXSkudG9Mb2NhbGVTdHJpbmcoXCJmYS1JUlwiLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KSxcclxuXHRcdFx0cGFyc2VJbnQocGVyc2lhbkRhdGVbMl0pLnRvTG9jYWxlU3RyaW5nKFwiZmEtSVJcIiwgeyB1c2VHcm91cGluZzogZmFsc2UgfSlcclxuXHRcdF0uam9pbihcIi9cIik7XHJcblx0fVxyXG59XHJcblxyXG52YXIgXyA9IHtcclxuXHRpczogKGZ1bmN0aW9uKF8pIHtcclxuXHRcdHZhciBpczogYW55ID0gZnVuY3Rpb24obm9kZTogYW55LCBzZWxlY3RvcjogYW55KSB7XHJcblx0XHRcdGlmIChub2RlLm1hdGNoZXMpIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xyXG5cdFx0XHR2YXIgbm9kZXMgPSB0aGlzLmFyZ1RvQXJyYXkobm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuXHRcdFx0cmV0dXJuIG5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0aXMub2JqZWN0ID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMubm9kZUxpc3QgPSBmdW5jdGlvbihvYmo6IGFueSkge1xyXG5cdFx0XHRpZiAoXy5pcy5ub3QuaWUoKSkgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgTm9kZUxpc3RdXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0b2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHRvYmoucHVzaCA9PT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHQob2JqLmxlbmd0aCA+IDAgPyBvYmpbMF0udGFnTmFtZSAhPT0gdW5kZWZpbmVkIDogdHJ1ZSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVsZW1lbnQgPSBmdW5jdGlvbihvYmo6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2VhcmNoKFwiRWxlbWVudFwiKSA+IC0xO1xyXG5cdFx0XHQvL3JldHVybiAhIU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKS50b0xvd2VyQ2FzZSgpLnNlYXJjaCgnZWxlbWVudCcpOztcclxuXHRcdH07XHJcblx0XHRpcy5IVE1MQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmFycmF5ID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5udW1iZXIgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIjtcclxuXHRcdH07XHJcblx0XHRpc1tcImZ1bmN0aW9uXCJdID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5zdHJpbmcgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjsgLy8mJiAoKGlzRW1wdHkpKTtcclxuXHRcdH07XHJcblx0XHRpcy51bmRlZmluZWQgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFVuZGVmaW5lZF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ldmVudCA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKFwiZXZlbnRcIikgPiAtMTtcclxuXHRcdH07XHJcblx0XHRpcy5kZWZpbmVkID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdC8vcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSAhPT0gJ1tvYmplY3QgVW5kZWZpbmVkXScgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBOdWxsXScgJiYgT2JqZWN0ICE9PSAnJztcclxuXHRcdFx0cmV0dXJuIF92YXIgIT09IHVuZGVmaW5lZCAmJiBfdmFyICE9PSBudWxsICYmIF92YXIgIT09IFwiXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuanNvbiA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5lcnJvciA9IGZ1bmN0aW9uKCkge307XHJcblxyXG5cdFx0aXMuc3RhcnRXaXRoID0gZnVuY3Rpb24oc3RyOiBhbnksIHByZWZpeDogYW55KSB7XHJcblx0XHRcdHJldHVybiBzdHIuaW5kZXhPZihwcmVmaXgpID09PSAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVuZFdpdGggPSBmdW5jdGlvbihzdHI6IGFueSkge307XHJcblxyXG5cdFx0aXMudmFsdWUgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIF92YXIgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW1wdHkgPSBmdW5jdGlvbihvOiBhbnkpIHtcclxuXHRcdFx0aWYgKF8uaXMub2JqZWN0KDApKSBmb3IgKHZhciBpIGluIG8pIGlmIChvLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdGlmIChfLmlzLmFycmF5KG8pKSByZXR1cm4gby5sZW5ndGggPT09IDA7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdGlzLnRydXRoeSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5zY2FsYXIgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0Ly9UT0RPIDogaW1wcm92ZVxyXG5cdFx0XHRyZXR1cm4gaXMuZGVmaW5lZChfdmFyKSAmJiBpcy5ub3QuYXJyYXkoX3ZhcikgJiYgaXMubm90Lm9iamVjdChfdmFyKSAmJiBpcy5ub3RbXCJmdW5jdGlvblwiXShfdmFyKTtcclxuXHRcdH07XHJcblx0XHRpcy5wcm90b3R5cGVQcm9wID0gZnVuY3Rpb24ob2JqOiBhbnksIHByb3A6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdICYmICFvYmouaGFzT3duUHJvcGVydHkocHJvcCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXF1YWwgPSBmdW5jdGlvbihmdjogYW55LCBzdjogYW55KSB7XHJcblx0XHRcdC8vaWYgKCFmdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIGZ2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblx0XHRcdC8vaWYgKCFzdikgdGhhdC53YXJuKCdlcXVhbCBmdW5jdGlvbiA6JyArIHN2ICsgJyBpcyBOb3QgT2JqZWN0Jyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZnYpID09IEpTT04uc3RyaW5naWZ5KHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbFRleHQgPSBmdW5jdGlvbihmdjogYW55LCBzdjogYW55KSB7XHJcblx0XHRcdHJldHVybiBmdi50b0xvd2VyQ2FzZShmdikgPT09IHN2LnRvTG93ZXJDYXNlKHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5jbG9zZXQgPSBmdW5jdGlvbihmbzogYW55LCBzbzogYW55KSB7XHJcblx0XHRcdHJldHVybiBfLmlzLmVxdWFsKF8ucGFydGlhbChmbywgXy5yZXBvcnQuc2tlbGV0b24oc28pKSwgc28pO1xyXG5cdFx0fTtcclxuXHRcdGlzLmNvbnRhaW4gPSBmdW5jdGlvbihzdHI6IGFueSwgc2VhcmNoU3RyOiBhbnkpIHtcclxuXHRcdFx0dmFyIHJlZyA9IF8uaXMucmVnZXgoc2VhcmNoU3RyKSA/IHNlYXJjaFN0ciA6IG5ldyBSZWdFeHAoc2VhcmNoU3RyLCBcImdcIik7XHJcblx0XHRcdHJldHVybiBzdHIubWF0Y2gocmVnKSAmJiBzdHIubWF0Y2gocmVnKS5sZW5ndGggPiAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLnJlZ2V4ID0gZnVuY3Rpb24ocjogYW55KSB7XHJcblx0XHRcdHJldHVybiByLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiUmVnRXhwXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuc2FtZSA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBmdi5pc0VxdWFsTm9kZSA/IGZ2LmlzRXF1YWxOb2RlKHN2KSA6IGZ2ID09PSBzdjtcclxuXHRcdH07XHJcblx0XHRpcy5wZXJzaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuICgoKHllYXIgLSAoeWVhciA+IDAgPyA0NzQgOiA0NzMpKSAlIDI4MjAgKyA0NzQgKyAzOCkgKiA2ODIpICUgMjgxNiA8IDY4MjtcclxuXHRcdH07XHJcblx0XHRpcy5nZW9yZ2lhbkxlYXBZZWFyID0gZnVuY3Rpb24oeWVhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiB5ZWFyICUgNCA9PSAwICYmICEoeWVhciAlIDEwMCA9PSAwICYmIHllYXIgJSA0MDAgIT0gMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBub3Q6IGFueSA9IHt9O1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihpOiBhbnkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpXHJcblx0XHRcdFx0XHRub3RbaV0gPSBmdW5jdGlvbihhOiBhbnksIGI6IGFueSwgYzogYW55KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAhaXNbaV0oYSwgYiwgYyk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHR9KShpKTtcclxuXHRcdGlzLm5vdCA9IG5vdDtcclxuXHJcblx0XHQvL1RPRE8gOiBpbXBlbGVtZW50XHJcblx0XHR2YXIgYWxsOiBhbnkgPSB7fTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaSkpIGFsbFtpXSA9IGZ1bmN0aW9uKG86IGFueSkge307XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMuYWxsID0gYWxsO1xyXG5cclxuXHRcdHZhciBhbnk6IGFueSA9IHt9O1xyXG5cdFx0Zm9yICh2YXIgaiBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGopIHtcclxuXHRcdFx0XHRpZiAoaXMuaGFzT3duUHJvcGVydHkoaikpIGFueVtqXSA9IGZ1bmN0aW9uKG86IGFueSkge307XHJcblx0XHRcdH0pKGopO1xyXG5cdFx0aXMuYW55ID0gYW55O1xyXG5cclxuXHRcdHJldHVybiBpcztcclxuXHR9KSh0aGlzKSxcclxuXHRtYXRoOiAoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbWF0aDogYW55ID0ge307XHJcblxyXG5cdFx0bWF0aC5tb2QgPSBmdW5jdGlvbihhOiBhbnksIGI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gYSAtIGIgKiBNYXRoLmZsb29yKGEgLyBiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIG1hdGg7XHJcblx0fSkoKSxcclxuXHRkYXRlOiAoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgUEVSU0lBTl9FUE9DSCA9IDE5NDgzMjAuNSxcclxuXHRcdFx0R1JFR09SSUFOX0VQT0NIID0gMTcyMTQyNS41O1xyXG5cclxuXHRcdHZhciBkYXRlOiBhbnkgPSB7fTtcclxuXHRcdGRhdGUucGVyc2lhbiA9IHt9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvID0ge307XHJcblx0XHRkYXRlLmdlb3JnaWFuID0ge307XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvID0ge307XHJcblx0XHRkYXRlLmp1bGlhbiA9IHt9O1xyXG5cdFx0ZGF0ZS5qdWxpYW4udG8gPSB7fTtcclxuXHJcblx0XHR2YXIgaW5zZXJ0WmVybyA9IGZ1bmN0aW9uKGk6IGFueSkge1xyXG5cdFx0XHRpID0gaS50b1N0cmluZygpO1xyXG5cdFx0XHRyZXR1cm4gaS5sZW5ndGggPT0gMSA/IFwiMFwiICsgaSA6IGk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55KSB7XHJcblx0XHRcdHZhciBlcGJhc2UsIGVweWVhcjtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoKTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5KTtcclxuXHJcblx0XHRcdGVwYmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuXHRcdFx0ZXB5ZWFyID0gNDc0ICsgXy5tYXRoLm1vZChlcGJhc2UsIDI4MjApO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRkYXkgK1xyXG5cdFx0XHRcdChtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6IChtb250aCAtIDEpICogMzAgKyA2KSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoZXB5ZWFyICogNjgyIC0gMTEwKSAvIDI4MTYpICtcclxuXHRcdFx0XHQoZXB5ZWFyIC0gMSkgKiAzNjUgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoZXBiYXNlIC8gMjgyMCkgKiAxMDI5OTgzICtcclxuXHRcdFx0XHQoUEVSU0lBTl9FUE9DSCAtIDEpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oeWVhcjogYW55LCBtb250aDogYW55LCBkYXk6IGFueSwgam9pbkNoYXJhY3RlcjogYW55KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5nZW9yZ2lhbihcclxuXHRcdFx0XHRkYXRlLnBlcnNpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkgKyAxLCBwYXJzZUludChkYXkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gam9pbkNoYXJhY3RlciA/IGRhdGVBcnJheS5qb2luKGpvaW5DaGFyYWN0ZXIpIDogZGF0ZUFycmF5O1xyXG5cdFx0fTtcclxuXHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXI6IGFueSwgbW9udGg6IGFueSwgZGF5OiBhbnkpIHtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIpO1xyXG5cdFx0XHRtb250aCA9IHBhcnNlSW50KG1vbnRoKTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5KTtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0R1JFR09SSUFOX0VQT0NIIC1cclxuXHRcdFx0XHQxICtcclxuXHRcdFx0XHQzNjUgKiAoeWVhciAtIDEpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KSArXHJcblx0XHRcdFx0LU1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKDM2NyAqIG1vbnRoIC0gMzYyKSAvIDEyICsgKG1vbnRoIDw9IDIgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gLTEgOiAtMikgKyBkYXkpXHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi50by5wZXJzaWFuID0gZnVuY3Rpb24oeWVhcjogYW55LCBtb250aDogYW55LCBkYXk6IGFueSwgam9pbkNoYXJhY3RlcjogYW55KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5wZXJzaWFuKFxyXG5cdFx0XHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCksIHBhcnNlSW50KGRheSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBqb2luQ2hhcmFjdGVyID8gZGF0ZUFycmF5LmpvaW4oam9pbkNoYXJhY3RlcikgOiBkYXRlQXJyYXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuID0gZnVuY3Rpb24oamQ6IGFueSkge1xyXG5cdFx0XHR2YXIgd2pkLFxyXG5cdFx0XHRcdGRlcG9jaCxcclxuXHRcdFx0XHRxdWFkcmljZW50LFxyXG5cdFx0XHRcdGRxYyxcclxuXHRcdFx0XHRjZW50LFxyXG5cdFx0XHRcdGRjZW50LFxyXG5cdFx0XHRcdHF1YWQsXHJcblx0XHRcdFx0ZHF1YWQsXHJcblx0XHRcdFx0eWluZGV4LFxyXG5cdFx0XHRcdGR5aW5kZXgsXHJcblx0XHRcdFx0eWVhcixcclxuXHRcdFx0XHRtb250aCxcclxuXHRcdFx0XHRkYXksXHJcblx0XHRcdFx0eWVhcmRheSxcclxuXHRcdFx0XHRsZWFwYWRqO1xyXG5cdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQpO1xyXG5cclxuXHRcdFx0d2pkID0gTWF0aC5mbG9vcihqZCAtIDAuNSkgKyAwLjU7XHJcblx0XHRcdGRlcG9jaCA9IHdqZCAtIEdSRUdPUklBTl9FUE9DSDtcclxuXHRcdFx0cXVhZHJpY2VudCA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTQ2MDk3KTtcclxuXHRcdFx0ZHFjID0gXy5tYXRoLm1vZChkZXBvY2gsIDE0NjA5Nyk7XHJcblx0XHRcdGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcclxuXHRcdFx0ZGNlbnQgPSBfLm1hdGgubW9kKGRxYywgMzY1MjQpO1xyXG5cdFx0XHRxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xyXG5cdFx0XHRkcXVhZCA9IF8ubWF0aC5tb2QoZGNlbnQsIDE0NjEpO1xyXG5cdFx0XHR5aW5kZXggPSBNYXRoLmZsb29yKGRxdWFkIC8gMzY1KTtcclxuXHRcdFx0eWVhciA9IHF1YWRyaWNlbnQgKiA0MDAgKyBjZW50ICogMTAwICsgcXVhZCAqIDQgKyB5aW5kZXg7XHJcblx0XHRcdGlmICghKGNlbnQgPT0gNCB8fCB5aW5kZXggPT0gNCkpIHtcclxuXHRcdFx0XHR5ZWFyKys7XHJcblx0XHRcdH1cclxuXHRcdFx0eWVhcmRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMSwgMSk7XHJcblx0XHRcdGxlYXBhZGogPSB3amQgPCBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIDMsIDEpID8gMCA6IF8uaXMuZ2VvcmdpYW5MZWFwWWVhcih5ZWFyKSA/IDEgOiAyO1xyXG5cdFx0XHRtb250aCA9IE1hdGguZmxvb3IoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMiArIDM3MykgLyAzNjcpO1xyXG5cdFx0XHRkYXkgPSB3amQgLSBfLmRhdGUuZ2VvcmdpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoLCAxKSArIDE7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUuanVsaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbihqZDogYW55KSB7XHJcblx0XHRcdHZhciB5ZWFyLCBtb250aCwgZGF5LCBkZXBvY2gsIGN5Y2xlLCBjeWVhciwgeWN5Y2xlLCBhdXgxLCBhdXgyLCB5ZGF5O1xyXG5cdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQpO1xyXG5cclxuXHRcdFx0amQgPSBNYXRoLmZsb29yKGpkKSArIDAuNTtcclxuXHJcblx0XHRcdGRlcG9jaCA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKDQ3NSwgMSwgMSk7XHJcblx0XHRcdGN5Y2xlID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxMDI5OTgzKTtcclxuXHRcdFx0Y3llYXIgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTAyOTk4Myk7XHJcblx0XHRcdGlmIChjeWVhciA9PSAxMDI5OTgyKSB7XHJcblx0XHRcdFx0eWN5Y2xlID0gMjgyMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhdXgxID0gTWF0aC5mbG9vcihjeWVhciAvIDM2Nik7XHJcblx0XHRcdFx0YXV4MiA9IF8ubWF0aC5tb2QoY3llYXIsIDM2Nik7XHJcblx0XHRcdFx0eWN5Y2xlID0gTWF0aC5mbG9vcigoMjEzNCAqIGF1eDEgKyAyODE2ICogYXV4MiArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyID0geWN5Y2xlICsgMjgyMCAqIGN5Y2xlICsgNDc0O1xyXG5cdFx0XHRpZiAoeWVhciA8PSAwKSB7XHJcblx0XHRcdFx0eWVhci0tO1xyXG5cdFx0XHR9XHJcblx0XHRcdHlkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKSArIDE7XHJcblx0XHRcdG1vbnRoID0geWRheSA8PSAxODYgPyBNYXRoLmNlaWwoeWRheSAvIDMxKSA6IE1hdGguY2VpbCgoeWRheSAtIDYpIC8gMzApO1xyXG5cdFx0XHRkYXkgPSBqZCAtIF8uZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbih5ZWFyLCBtb250aCwgMSkgKyAxO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEFycmF5KGluc2VydFplcm8oeWVhciksIGluc2VydFplcm8obW9udGgpLCBpbnNlcnRaZXJvKGRheSkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZGF0ZTtcclxuXHR9KSgpXHJcbn07XHJcbiJdfQ==