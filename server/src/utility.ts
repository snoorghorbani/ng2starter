"use strict";
const http = require("http");
import { Observable } from "rxjs/Observable";
import { Comparator } from "./models/comparator.enum";

export const httpGet = (endpoint: string): Observable<any> => {
  return Observable.create((observer: any) => {
    http.get(endpoint, (result: any) => {
      result.setEncoding("utf8");
      let rawData = "";
      result.on("data", (chunk: any) => rawData += chunk);
      result.on("end", () => {
        const parsedData = JSON.parse(rawData);
        observer.next(parsedData);
      });
    })
      .on("error", function (e: any) {
        observer.error(e);
      });
  });
};

export const compare = (value: string, condition: Comparator, param: string | number) => {
  switch (condition) {
    case Comparator.equal:
      return value == param;
    case Comparator.not_equal:
      return value != param;
    case Comparator.greater_than:
      return value > param;
    case Comparator.less_than:
      return value < param;
    case Comparator.contain:
      return value.toString().indexOf(param.toString()) > -1;
  }
};

export const getValue = function (objOrArr: any, pathOrIndex: any) {
  if (arguments.length == 1) {
    pathOrIndex = objOrArr;
    objOrArr = window;
  }
  if (!pathOrIndex) debugger;

  let tempobjOrArr: any;

  if (this.is.array(objOrArr)) return objOrArr[pathOrIndex];
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
      } else
        tempobjOrArr = tempobjOrArr[route];
    }
  }
  return tempobjOrArr;
};



export const is = (function (_: any) {
  const is: any = function (node: any, selector: any) {
    if (node.matches)
      return node.matches(selector);
    const nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
    return (nodes.indexOf(node) > -1) ? true : false;
  };

  is.object = function (_var: any) {
    return Object.prototype.toString.call(_var) === "[object Object]";
  };
  is.nodeList = function (obj: any) {
    if (_.is.not.ie())
      return Object.prototype.toString.call(obj) === "[object NodeList]";
    else
      return (obj.length !== undefined
        && obj.push === undefined && (obj.length > 0 ? obj[0].tagName !== undefined : true));
  };
  is.element = function (obj: any) {
    return Object.prototype.toString.call(obj).search("Element") > -1;
  };
  is.HTMLCollection = function (obj: any) {
    return Object.prototype.toString.call(obj) === "[object HTMLCollection]";
  };
  is.array = function (_var: any) {
    return Object.prototype.toString.call(_var) === "[object Array]";
  };
  is.number = function (_var: any) {
    return Object.prototype.toString.call(_var) === "[object Number]";
  };
  is["function"] = function (_var: any) {
    return Object.prototype.toString.call(_var) === "[object Function]";
  };
  is.string = function (_var: any) {
    return (Object.prototype.toString.call(_var) === "[object String]");
  };
  is.undefined = function (_var: any) {
    return Object.prototype.toString.call(_var) === "[object Undefined]";
  };
  is.event = function (_var: any) {
    return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
  };
  is.defined = function (_var: any) {
    return _var !== undefined && _var !== null && _var !== "";
  };
  is.json = function () { };
  is.error = function () { };

  is.startWith = function (str: any, prefix: any) {
    return str.indexOf(prefix) === 0;
  };
  is.endWith = function (str: any) { };

  is.value = function (_var: any) {
    return (_var) ? true : false;
  };
  is.empty = function (o: any) {
    if (_.is.object(0))
      for (const i in o)
        if (o.hasOwnProperty(i))
          return false;
    if (_.is.array(o))
      return o.length === 0;
    return true;
  };
  is.truthy = function () { };
  is.scalar = function (_var: any) {
    return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
  };
  is.prototypeProp = function (obj: any, prop: any) {
    return (obj[prop] && !obj.hasOwnProperty(prop));
  };
  is.equal = function (fv: any, sv: any) {
    return (JSON.stringify(fv) == JSON.stringify(sv)) ? true : false;
  };
  is.equalText = function (fv: any, sv: any) {
    return (fv.toLowerCase(fv) === sv.toLowerCase(sv)) ? true : false;
  };
  is.closet = function (fo: any, so: any) {
    return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
  };
  is.contain = function (str: any, searchStr: any) {
    const reg = (_.is.regex(searchStr)) ? searchStr : new RegExp(searchStr, "g");
    return str.match(reg) && str.match(reg).length > 0;
  };
  is.regex = function (r: any) {
    return r.constructor.name === "RegExp";
  };
  is.same = function (fv: any, sv: any) {
    return (fv.isEqualNode) ? fv.isEqualNode(sv) : fv === sv;
  };
  is.persianLeapYear = function (year: any) {
    return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
  };
  is.georgianLeapYear = function (year: any) {
    return ((year % 4) == 0) &&
      (!(((year % 100) == 0) && ((year % 400) != 0)));
  };


  const not: any = {};
  let i;
  for (i in is) (function (i: any) {
    if (is.hasOwnProperty(i)) not[i] = function (a: any, b: any, c: any) {
      return !is[i](a, b, c);
    };
  })(i);
  is.not = not;

  const all: any = {};
  for (i in is) (function (i: any) {
    if (is.hasOwnProperty(i)) all[i] = function (o: any) {

    };
  })(i);
  is.all = all;

  const any: any = {};
  for (const j in is) (function (j: any) {
    if (is.hasOwnProperty(j)) any[j] = function (o: any) {

    };
  })(j);
  is.any = any;

  return is;
})(this);

export const compileString = (str: string, varDef: any) => {
  const regex = /\{\{/;
  let result = [];
  const varStartIdx = str.search(regex);
  if (varStartIdx > -1) {
    result[result.length] = str.substring(0, varStartIdx);
    str = str.substring(varStartIdx);

    const varEndIdx = str.search(/\}\}/);
    const varKey = str.substring(2, varEndIdx).trim();
    const varValue = getValue(varDef, varKey);

    result[result.length] = varValue;

    str = str.substring(varEndIdx + 2);

    result = result.concat(this.compileString(str, varDef));
  } else {
    result[result.length] = str;
  }
  return result.join("");
};
