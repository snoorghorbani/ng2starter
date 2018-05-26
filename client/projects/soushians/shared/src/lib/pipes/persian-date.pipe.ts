import { PipeTransform, Pipe } from '@angular/core';

interface PersianDateExtractor {
	count: number;
	value: string;
	remaining: number;
}

@Pipe({ name: 'persianDate' })
export class PersianDatePipe implements PipeTransform {
	transform(value: Date | string, exponent: string): string {
		if (!value) return '';
		let date = new Date(value as string);
		var persianDate = _.date.georgian.to.persian(date.getFullYear(), date.getMonth() + 1, date.getDate());

		return [
			parseInt(persianDate[0]).toLocaleString('fa-IR', { useGrouping: false }),
			parseInt(persianDate[1]).toLocaleString('fa-IR', { useGrouping: false }),
			parseInt(persianDate[2]).toLocaleString('fa-IR', { useGrouping: false })
		].join('/');
	}
}

var _ = {
	is: (function(_) {
		var is: any = function(node: any, selector: any) {
			if (node.matches) return node.matches(selector);
			var nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
			return nodes.indexOf(node) > -1 ? true : false;
		};

		is.object = function(_var: any) {
			return Object.prototype.toString.call(_var) === '[object Object]';
		};
		is.nodeList = function(obj: any) {
			if (_.is.not.ie()) return Object.prototype.toString.call(obj) === '[object NodeList]';
			else
				return (
					obj.length !== undefined &&
					obj.push === undefined &&
					(obj.length > 0 ? obj[0].tagName !== undefined : true)
				);
		};
		is.element = function(obj: any) {
			return Object.prototype.toString.call(obj).search('Element') > -1;
			//return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
		};
		is.HTMLCollection = function(obj: any) {
			return Object.prototype.toString.call(obj) === '[object HTMLCollection]';
		};
		is.array = function(_var: any) {
			return Object.prototype.toString.call(_var) === '[object Array]';
		};
		is.number = function(_var: any) {
			return Object.prototype.toString.call(_var) === '[object Number]';
		};
		is['function'] = function(_var: any) {
			return Object.prototype.toString.call(_var) === '[object Function]';
		};
		is.string = function(_var: any) {
			return Object.prototype.toString.call(_var) === '[object String]'; //&& ((isEmpty));
		};
		is.undefined = function(_var: any) {
			return Object.prototype.toString.call(_var) === '[object Undefined]';
		};
		is.event = function(_var: any) {
			return Object.prototype.toString.call(_var).toLowerCase().search('event') > -1;
		};
		is.defined = function(_var: any) {
			//return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
			return _var !== undefined && _var !== null && _var !== '';
		};
		is.json = function() {};
		is.error = function() {};

		is.startWith = function(str: any, prefix: any) {
			return str.indexOf(prefix) === 0;
		};
		is.endWith = function(str: any) {};

		is.value = function(_var: any) {
			return _var ? true : false;
		};
		is.empty = function(o: any) {
			if (_.is.object(0)) for (var i in o) if (o.hasOwnProperty(i)) return false;
			if (_.is.array(o)) return o.length === 0;
			return true;
		};
		is.truthy = function() {};
		is.scalar = function(_var: any) {
			//TODO : improve
			return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not['function'](_var);
		};
		is.prototypeProp = function(obj: any, prop: any) {
			return obj[prop] && !obj.hasOwnProperty(prop);
		};
		is.equal = function(fv: any, sv: any) {
			//if (!fv) that.warn('equal function :' + fv + ' is Not Object');
			//if (!sv) that.warn('equal function :' + sv + ' is Not Object');

			return JSON.stringify(fv) == JSON.stringify(sv) ? true : false;
		};
		is.equalText = function(fv: any, sv: any) {
			return fv.toLowerCase(fv) === sv.toLowerCase(sv) ? true : false;
		};
		is.closet = function(fo: any, so: any) {
			return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
		};
		is.contain = function(str: any, searchStr: any) {
			var reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, 'g');
			return str.match(reg) && str.match(reg).length > 0;
		};
		is.regex = function(r: any) {
			return r.constructor.name === 'RegExp';
		};
		is.same = function(fv: any, sv: any) {
			//if (!fv) that.warn('equal function :' + fv + ' is Not Object');
			//if (!sv) that.warn('equal function :' + sv + ' is Not Object');

			return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
		};
		is.persianLeapYear = function(year: any) {
			return (((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682) % 2816 < 682;
		};
		is.georgianLeapYear = function(year: any) {
			return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
		};

		var not: any = {};
		var i;
		for (i in is)
			(function(i: any) {
				if (is.hasOwnProperty(i))
					not[i] = function(a: any, b: any, c: any) {
						return !is[i](a, b, c);
					};
			})(i);
		is.not = not;

		//TODO : impelement
		var all: any = {};
		for (i in is)
			(function(i) {
				if (is.hasOwnProperty(i)) all[i] = function(o: any) {};
			})(i);
		is.all = all;

		var any: any = {};
		for (var j in is)
			(function(j) {
				if (is.hasOwnProperty(j)) any[j] = function(o: any) {};
			})(j);
		is.any = any;

		return is;
	})(this),
	math: (function() {
		var math: any = {};

		math.mod = function(a: any, b: any) {
			return a - b * Math.floor(a / b);
		};

		return math;
	})(),
	date: (function() {
		var PERSIAN_EPOCH = 1948320.5,
			GREGORIAN_EPOCH = 1721425.5;

		var date: any = {};
		date.persian = {};
		date.persian.to = {};
		date.georgian = {};
		date.georgian.to = {};
		date.julian = {};
		date.julian.to = {};

		var insertZero = function(i: any) {
			i = i.toString();
			return i.length == 1 ? '0' + i : i;
		};

		date.persian.to.julian = function(year: any, month: any, day: any) {
			var epbase, epyear;
			year = parseInt(year);
			month = parseInt(month);
			day = parseInt(day);

			epbase = year - (year >= 0 ? 474 : 473);
			epyear = 474 + _.math.mod(epbase, 2820);

			return (
				day +
				(month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
				Math.floor((epyear * 682 - 110) / 2816) +
				(epyear - 1) * 365 +
				Math.floor(epbase / 2820) * 1029983 +
				(PERSIAN_EPOCH - 1)
			);
		};
		date.persian.to.georgian = function(year: any, month: any, day: any, joinCharacter: any) {
			var dateArray = date.julian.to.georgian(
				date.persian.to.julian(parseInt(year), parseInt(month) + 1, parseInt(day))
			);
			return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
		};

		date.georgian.to.julian = function(year: any, month: any, day: any) {
			year = parseInt(year);
			month = parseInt(month);
			day = parseInt(day);

			return (
				GREGORIAN_EPOCH -
				1 +
				365 * (year - 1) +
				Math.floor((year - 1) / 4) +
				-Math.floor((year - 1) / 100) +
				Math.floor((year - 1) / 400) +
				Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : _.is.georgianLeapYear(year) ? -1 : -2) + day)
			);
		};
		date.georgian.to.persian = function(year: any, month: any, day: any, joinCharacter: any) {
			var dateArray = date.julian.to.persian(
				date.georgian.to.julian(parseInt(year), parseInt(month), parseInt(day))
			);
			return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
		};

		date.julian.to.georgian = function(jd: any) {
			var wjd,
				depoch,
				quadricent,
				dqc,
				cent,
				dcent,
				quad,
				dquad,
				yindex,
				dyindex,
				year,
				month,
				day,
				yearday,
				leapadj;
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
		date.julian.to.persian = function(jd: any) {
			var year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
			jd = parseFloat(jd);

			jd = Math.floor(jd) + 0.5;

			depoch = jd - _.date.persian.to.julian(475, 1, 1);
			cycle = Math.floor(depoch / 1029983);
			cyear = _.math.mod(depoch, 1029983);
			if (cyear == 1029982) {
				ycycle = 2820;
			} else {
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
	})()
};
