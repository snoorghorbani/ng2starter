(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@soushians/shared', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.shared = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            { type: core.Pipe, args: [{ name: "dataUnit" },] }
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
            { type: core.Pipe, args: [{ name: 'timeUnit' },] }
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
            { type: core.Pipe, args: [{ name: "persianDate" },] }
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
            { type: core.Pipe, args: [{ name: 'currencyUnit' },] }
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
            { type: core.Pipe, args: [{ name: 'persianNumber' },] }
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
            { type: core.Pipe, args: [{ name: 'timeCounter' },] }
        ];
        return TimeCounterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                        exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
                    },] }
        ];
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
    var   /**
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
    var   /**
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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */ UtilityService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
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
    var   /**
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

    exports.Cookie = Cookie;
    exports.DateClass = DateClass;
    exports.HttpRequestBaseModel = HttpRequestBaseModel;
    exports.HttpResponseBaseModel = HttpResponseBaseModel;
    exports.IResponse = IResponse;
    exports.MatchValidator = MatchValidator;
    exports.PERSIAN_MONTH_DAYS_COUNT = PERSIAN_MONTH_DAYS_COUNT;
    exports.PERSIAN_MONTH_NAMES = PERSIAN_MONTH_NAMES;
    exports.SharedModule = SharedModule;
    exports.UtilityService = UtilityService;
    exports.stringTemplate = stringTemplate;
    exports.ɵa = DataUnitPipe;
    exports.ɵb = TimeUnitPipe;
    exports.ɵc = PersianDatePipe;
    exports.ɵd = CurrencyUnitPipe;
    exports.ɵe = PersianNumberPipe;
    exports.ɵf = TimeCounterPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-shared.umd.js.map
