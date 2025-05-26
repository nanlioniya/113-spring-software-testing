// @ts-nocheck
// src/calculator.js
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
const Calculator = stryMutAct_9fa48("0") ? {} : (stryCov_9fa48("0"), {
  isValid: function (month, day) {
    if (stryMutAct_9fa48("1")) {
      {}
    } else {
      stryCov_9fa48("1");
      if (stryMutAct_9fa48("4") ? month < 1 && month > 12 : stryMutAct_9fa48("3") ? false : stryMutAct_9fa48("2") ? true : (stryCov_9fa48("2", "3", "4"), (stryMutAct_9fa48("7") ? month >= 1 : stryMutAct_9fa48("6") ? month <= 1 : stryMutAct_9fa48("5") ? false : (stryCov_9fa48("5", "6", "7"), month < 1)) || (stryMutAct_9fa48("10") ? month <= 12 : stryMutAct_9fa48("9") ? month >= 12 : stryMutAct_9fa48("8") ? false : (stryCov_9fa48("8", "9", "10"), month > 12)))) return stryMutAct_9fa48("11") ? true : (stryCov_9fa48("11"), false);
      const monthDays = stryMutAct_9fa48("12") ? [] : (stryCov_9fa48("12"), [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
      return stryMutAct_9fa48("15") ? day >= 1 || day <= monthDays[month] : stryMutAct_9fa48("14") ? false : stryMutAct_9fa48("13") ? true : (stryCov_9fa48("13", "14", "15"), (stryMutAct_9fa48("18") ? day < 1 : stryMutAct_9fa48("17") ? day > 1 : stryMutAct_9fa48("16") ? true : (stryCov_9fa48("16", "17", "18"), day >= 1)) && (stryMutAct_9fa48("21") ? day > monthDays[month] : stryMutAct_9fa48("20") ? day < monthDays[month] : stryMutAct_9fa48("19") ? true : (stryCov_9fa48("19", "20", "21"), day <= monthDays[month])));
    }
  },
  toDays: function (month, day) {
    if (stryMutAct_9fa48("22")) {
      {}
    } else {
      stryCov_9fa48("22");
      let days = day;
      const monthDays = stryMutAct_9fa48("23") ? [] : (stryCov_9fa48("23"), [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
      for (let m = 1; stryMutAct_9fa48("26") ? m >= month : stryMutAct_9fa48("25") ? m <= month : stryMutAct_9fa48("24") ? false : (stryCov_9fa48("24", "25", "26"), m < month); stryMutAct_9fa48("27") ? m-- : (stryCov_9fa48("27"), m++)) {
        if (stryMutAct_9fa48("28")) {
          {}
        } else {
          stryCov_9fa48("28");
          stryMutAct_9fa48("29") ? days -= monthDays[m] : (stryCov_9fa48("29"), days += monthDays[m]);
        }
      }
      return days;
    }
  },
  calculate: function (month1, day1, month2, day2) {
    if (stryMutAct_9fa48("30")) {
      {}
    } else {
      stryCov_9fa48("30");
      if (stryMutAct_9fa48("33") ? !this.isValid(month1, day1) && !this.isValid(month2, day2) : stryMutAct_9fa48("32") ? false : stryMutAct_9fa48("31") ? true : (stryCov_9fa48("31", "32", "33"), (stryMutAct_9fa48("34") ? this.isValid(month1, day1) : (stryCov_9fa48("34"), !this.isValid(month1, day1))) || (stryMutAct_9fa48("35") ? this.isValid(month2, day2) : (stryCov_9fa48("35"), !this.isValid(month2, day2))))) {
        if (stryMutAct_9fa48("36")) {
          {}
        } else {
          stryCov_9fa48("36");
          return stryMutAct_9fa48("37") ? +1 : (stryCov_9fa48("37"), -1);
        }
      }
      const days1 = this.toDays(month1, day1);
      const days2 = this.toDays(month2, day2);
      return Math.abs(stryMutAct_9fa48("38") ? days2 + days1 : (stryCov_9fa48("38"), days2 - days1));
    }
  },
  main: function (month1, day1, month2, day2) {
    if (stryMutAct_9fa48("39")) {
      {}
    } else {
      stryCov_9fa48("39");
      return this.calculate(month1, day1, month2, day2);
    }
  }
});
module.exports = Calculator;