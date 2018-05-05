"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const Observable_1 = require("rxjs/Observable");
const comparator_enum_1 = require("./models/comparator.enum");
exports.httpGet = (endpoint) => {
    return Observable_1.Observable.create((observer) => {
        http.get(endpoint, (result) => {
            result.setEncoding("utf8");
            let rawData = "";
            result.on("data", (chunk) => rawData += chunk);
            result.on("end", () => {
                const parsedData = JSON.parse(rawData);
                observer.next(parsedData);
            });
        })
            .on("error", function (e) {
            debugger;
            observer.error(e);
        });
    });
};
exports.compare = (value, condition, param) => {
    switch (condition) {
        case comparator_enum_1.Comparator.equal:
            return value == param;
        case comparator_enum_1.Comparator.not_equal:
            return value != param;
        case comparator_enum_1.Comparator.greater_than:
            return value > param;
        case comparator_enum_1.Comparator.less_than:
            return value < param;
        case comparator_enum_1.Comparator.contain:
            return value.toString().indexOf(param.toString()) > -1;
    }
};
exports.getValue = function (objOrArr, pathOrIndex) {
    if (arguments.length == 1) {
        pathOrIndex = objOrArr;
        objOrArr = window;
    }
    if (!pathOrIndex)
        debugger;
    let tempobjOrArr;
    if (this.is.array(objOrArr))
        return objOrArr[pathOrIndex];
    else {
        tempobjOrArr = objOrArr;
        const routes = pathOrIndex.split(".");
        for (let i = 0, route; route = routes[i]; i++) {
            if (tempobjOrArr[route] === undefined || tempobjOrArr[route] === null) {
                return;
            }
            if (this.is.array(tempobjOrArr[route])) {
                const res = [];
                const partialRoutes = routes.splice(i + 1);
                for (let j = 0, item; item = tempobjOrArr[route][j]; j++)
                    res[j] = this.getValue(item, partialRoutes.join("."));
                return res;
            }
            else
                tempobjOrArr = tempobjOrArr[route];
        }
    }
    return tempobjOrArr;
};
exports.is = (function (_) {
    const is = function (node, selector) {
        if (node.matches)
            return node.matches(selector);
        const nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
        return (nodes.indexOf(node) > -1) ? true : false;
    };
    is.object = function (_var) {
        return Object.prototype.toString.call(_var) === "[object Object]";
    };
    is.nodeList = function (obj) {
        if (_.is.not.ie())
            return Object.prototype.toString.call(obj) === "[object NodeList]";
        else
            return (obj.length !== undefined
                && obj.push === undefined && (obj.length > 0 ? obj[0].tagName !== undefined : true));
    };
    is.element = function (obj) {
        return Object.prototype.toString.call(obj).search("Element") > -1;
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
        return (Object.prototype.toString.call(_var) === "[object String]");
    };
    is.undefined = function (_var) {
        return Object.prototype.toString.call(_var) === "[object Undefined]";
    };
    is.event = function (_var) {
        return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
    };
    is.defined = function (_var) {
        return _var !== undefined && _var !== null && _var !== "";
    };
    is.json = function () { };
    is.error = function () { };
    is.startWith = function (str, prefix) {
        return str.indexOf(prefix) === 0;
    };
    is.endWith = function (str) { };
    is.value = function (_var) {
        return (_var) ? true : false;
    };
    is.empty = function (o) {
        if (_.is.object(0))
            for (const i in o)
                if (o.hasOwnProperty(i))
                    return false;
        if (_.is.array(o))
            return o.length === 0;
        return true;
    };
    is.truthy = function () { };
    is.scalar = function (_var) {
        return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
    };
    is.prototypeProp = function (obj, prop) {
        return (obj[prop] && !obj.hasOwnProperty(prop));
    };
    is.equal = function (fv, sv) {
        return (JSON.stringify(fv) == JSON.stringify(sv)) ? true : false;
    };
    is.equalText = function (fv, sv) {
        return (fv.toLowerCase(fv) === sv.toLowerCase(sv)) ? true : false;
    };
    is.closet = function (fo, so) {
        return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
    };
    is.contain = function (str, searchStr) {
        const reg = (_.is.regex(searchStr)) ? searchStr : new RegExp(searchStr, "g");
        return str.match(reg) && str.match(reg).length > 0;
    };
    is.regex = function (r) {
        return r.constructor.name === "RegExp";
    };
    is.same = function (fv, sv) {
        return (fv.isEqualNode) ? fv.isEqualNode(sv) : fv === sv;
    };
    is.persianLeapYear = function (year) {
        return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    };
    is.georgianLeapYear = function (year) {
        return ((year % 4) == 0) &&
            (!(((year % 100) == 0) && ((year % 400) != 0)));
    };
    const not = {};
    let i;
    for (i in is)
        (function (i) {
            if (is.hasOwnProperty(i))
                not[i] = function (a, b, c) {
                    return !is[i](a, b, c);
                };
        })(i);
    is.not = not;
    const all = {};
    for (i in is)
        (function (i) {
            if (is.hasOwnProperty(i))
                all[i] = function (o) {
                };
        })(i);
    is.all = all;
    const any = {};
    for (const j in is)
        (function (j) {
            if (is.hasOwnProperty(j))
                any[j] = function (o) {
                };
        })(j);
    is.any = any;
    return is;
})(this);
exports.compileString = (str, varDef) => {
    const regex = /\{\{/;
    let result = [];
    const varStartIdx = str.search(regex);
    if (varStartIdx > -1) {
        result[result.length] = str.substring(0, varStartIdx);
        str = str.substring(varStartIdx);
        const varEndIdx = str.search(/\}\}/);
        const varKey = str.substring(2, varEndIdx).trim();
        const varValue = exports.getValue(varDef, varKey);
        result[result.length] = varValue;
        str = str.substring(varEndIdx + 2);
        result = result.concat(this.compileString(str, varDef));
    }
    else {
        result[result.length] = str;
    }
    return result.join("");
};
//# sourceMappingURL=utility.js.map