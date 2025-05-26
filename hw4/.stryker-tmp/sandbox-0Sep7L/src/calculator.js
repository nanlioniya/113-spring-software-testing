// @ts-nocheck
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
const assert = require('assert');
const Calculator = require('./calculator');
describe(stryMutAct_9fa48("0") ? "" : (stryCov_9fa48("0"), 'Calculator'), () => {
  if (stryMutAct_9fa48("1")) {
    {}
  } else {
    stryCov_9fa48("1");
    // 測試 main 方法
    describe(stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), 'main'), () => {
      if (stryMutAct_9fa48("3")) {
        {}
      } else {
        stryCov_9fa48("3");
        it(stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), '應該正確計算兩個日期之間的天數'), () => {
          if (stryMutAct_9fa48("5")) {
            {}
          } else {
            stryCov_9fa48("5");
            assert.strictEqual(Calculator.main(1, 1, 1, 2), 1);
            assert.strictEqual(Calculator.main(1, 1, 1, 10), 9);
            assert.strictEqual(Calculator.main(1, 10, 1, 1), 9);
            assert.strictEqual(Calculator.main(1, 1, 2, 1), 31);
            assert.strictEqual(Calculator.main(2, 1, 1, 1), 31);
          }
        });
        it(stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), '當輸入無效時應該返回 -1'), () => {
          if (stryMutAct_9fa48("7")) {
            {}
          } else {
            stryCov_9fa48("7");
            assert.strictEqual(Calculator.main(0, 1, 1, 1), stryMutAct_9fa48("8") ? +1 : (stryCov_9fa48("8"), -1));
            assert.strictEqual(Calculator.main(1, 0, 1, 1), stryMutAct_9fa48("9") ? +1 : (stryCov_9fa48("9"), -1));
            assert.strictEqual(Calculator.main(1, 1, 0, 1), stryMutAct_9fa48("10") ? +1 : (stryCov_9fa48("10"), -1));
            assert.strictEqual(Calculator.main(1, 1, 1, 0), stryMutAct_9fa48("11") ? +1 : (stryCov_9fa48("11"), -1));
            assert.strictEqual(Calculator.main(13, 1, 1, 1), stryMutAct_9fa48("12") ? +1 : (stryCov_9fa48("12"), -1));
            assert.strictEqual(Calculator.main(1, 32, 1, 1), stryMutAct_9fa48("13") ? +1 : (stryCov_9fa48("13"), -1));
            assert.strictEqual(Calculator.main(1, 1, 13, 1), stryMutAct_9fa48("14") ? +1 : (stryCov_9fa48("14"), -1));
            assert.strictEqual(Calculator.main(1, 1, 1, 32), stryMutAct_9fa48("15") ? +1 : (stryCov_9fa48("15"), -1));
          }
        });
      }
    });

    // 測試 calculate 方法
    describe(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), 'calculate'), () => {
      if (stryMutAct_9fa48("17")) {
        {}
      } else {
        stryCov_9fa48("17");
        it(stryMutAct_9fa48("18") ? "" : (stryCov_9fa48("18"), '應該正確計算兩個日期之間的天數'), () => {
          if (stryMutAct_9fa48("19")) {
            {}
          } else {
            stryCov_9fa48("19");
            assert.strictEqual(Calculator.calculate(1, 1, 1, 2), 1);
            assert.strictEqual(Calculator.calculate(1, 1, 1, 10), 9);
            assert.strictEqual(Calculator.calculate(1, 10, 1, 1), 9);
            assert.strictEqual(Calculator.calculate(1, 1, 2, 1), 31);
            assert.strictEqual(Calculator.calculate(2, 1, 1, 1), 31);
          }
        });
        it(stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), '當輸入無效時應該返回 -1'), () => {
          if (stryMutAct_9fa48("21")) {
            {}
          } else {
            stryCov_9fa48("21");
            assert.strictEqual(Calculator.calculate(0, 1, 1, 1), stryMutAct_9fa48("22") ? +1 : (stryCov_9fa48("22"), -1));
            assert.strictEqual(Calculator.calculate(1, 0, 1, 1), stryMutAct_9fa48("23") ? +1 : (stryCov_9fa48("23"), -1));
            assert.strictEqual(Calculator.calculate(1, 1, 0, 1), stryMutAct_9fa48("24") ? +1 : (stryCov_9fa48("24"), -1));
            assert.strictEqual(Calculator.calculate(1, 1, 1, 0), stryMutAct_9fa48("25") ? +1 : (stryCov_9fa48("25"), -1));
            assert.strictEqual(Calculator.calculate(13, 1, 1, 1), stryMutAct_9fa48("26") ? +1 : (stryCov_9fa48("26"), -1));
            assert.strictEqual(Calculator.calculate(1, 32, 1, 1), stryMutAct_9fa48("27") ? +1 : (stryCov_9fa48("27"), -1));
            assert.strictEqual(Calculator.calculate(1, 1, 13, 1), stryMutAct_9fa48("28") ? +1 : (stryCov_9fa48("28"), -1));
            assert.strictEqual(Calculator.calculate(1, 1, 1, 32), stryMutAct_9fa48("29") ? +1 : (stryCov_9fa48("29"), -1));
          }
        });
      }
    });

    // 測試 isValid 方法
    describe(stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), 'isValid'), () => {
      if (stryMutAct_9fa48("31")) {
        {}
      } else {
        stryCov_9fa48("31");
        it(stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), '應該驗證月份是否有效'), () => {
          if (stryMutAct_9fa48("33")) {
            {}
          } else {
            stryCov_9fa48("33");
            // 有效月份
            for (let month = 1; stryMutAct_9fa48("36") ? month > 12 : stryMutAct_9fa48("35") ? month < 12 : stryMutAct_9fa48("34") ? false : (stryCov_9fa48("34", "35", "36"), month <= 12); stryMutAct_9fa48("37") ? month-- : (stryCov_9fa48("37"), month++)) {
              if (stryMutAct_9fa48("38")) {
                {}
              } else {
                stryCov_9fa48("38");
                assert.strictEqual(Calculator.isValid(month, 1), stryMutAct_9fa48("39") ? false : (stryCov_9fa48("39"), true));
              }
            }

            // 無效月份
            assert.strictEqual(Calculator.isValid(0, 1), stryMutAct_9fa48("40") ? true : (stryCov_9fa48("40"), false));
            assert.strictEqual(Calculator.isValid(13, 1), stryMutAct_9fa48("41") ? true : (stryCov_9fa48("41"), false));
          }
        });
        it(stryMutAct_9fa48("42") ? "" : (stryCov_9fa48("42"), '應該驗證日期是否有效'), () => {
          if (stryMutAct_9fa48("43")) {
            {}
          } else {
            stryCov_9fa48("43");
            // 每月的天數
            const monthDays = stryMutAct_9fa48("44") ? [] : (stryCov_9fa48("44"), [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);

            // 測試每個月的有效日期
            for (let month = 1; stryMutAct_9fa48("47") ? month > 12 : stryMutAct_9fa48("46") ? month < 12 : stryMutAct_9fa48("45") ? false : (stryCov_9fa48("45", "46", "47"), month <= 12); stryMutAct_9fa48("48") ? month-- : (stryCov_9fa48("48"), month++)) {
              if (stryMutAct_9fa48("49")) {
                {}
              } else {
                stryCov_9fa48("49");
                assert.strictEqual(Calculator.isValid(month, 1), stryMutAct_9fa48("50") ? false : (stryCov_9fa48("50"), true));
                assert.strictEqual(Calculator.isValid(month, monthDays[month]), stryMutAct_9fa48("51") ? false : (stryCov_9fa48("51"), true));
                assert.strictEqual(Calculator.isValid(month, 0), stryMutAct_9fa48("52") ? true : (stryCov_9fa48("52"), false));
                assert.strictEqual(Calculator.isValid(month, stryMutAct_9fa48("53") ? monthDays[month] - 1 : (stryCov_9fa48("53"), monthDays[month] + 1)), stryMutAct_9fa48("54") ? true : (stryCov_9fa48("54"), false));
              }
            }
          }
        });
        it(stryMutAct_9fa48("55") ? "" : (stryCov_9fa48("55"), '應該處理月份邊界條件'), () => {
          if (stryMutAct_9fa48("56")) {
            {}
          } else {
            stryCov_9fa48("56");
            assert.strictEqual(Calculator.isValid(1, 1), stryMutAct_9fa48("57") ? false : (stryCov_9fa48("57"), true));
            assert.strictEqual(Calculator.isValid(1, 31), stryMutAct_9fa48("58") ? false : (stryCov_9fa48("58"), true));
            assert.strictEqual(Calculator.isValid(1, 32), stryMutAct_9fa48("59") ? true : (stryCov_9fa48("59"), false));
            assert.strictEqual(Calculator.isValid(2, 28), stryMutAct_9fa48("60") ? false : (stryCov_9fa48("60"), true));
            assert.strictEqual(Calculator.isValid(2, 29), stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61"), false));
            assert.strictEqual(Calculator.isValid(4, 30), stryMutAct_9fa48("62") ? false : (stryCov_9fa48("62"), true));
            assert.strictEqual(Calculator.isValid(4, 31), stryMutAct_9fa48("63") ? true : (stryCov_9fa48("63"), false));
          }
        });
      }
    });

    // 測試 toDays 方法
    describe(stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), 'toDays'), () => {
      if (stryMutAct_9fa48("65")) {
        {}
      } else {
        stryCov_9fa48("65");
        it(stryMutAct_9fa48("66") ? "" : (stryCov_9fa48("66"), '應該正確計算從年初到指定日期的天數'), () => {
          if (stryMutAct_9fa48("67")) {
            {}
          } else {
            stryCov_9fa48("67");
            assert.strictEqual(Calculator.toDays(1, 1), 1);
            assert.strictEqual(Calculator.toDays(1, 31), 31);
            assert.strictEqual(Calculator.toDays(2, 1), 32);
            assert.strictEqual(Calculator.toDays(2, 28), 59);
            assert.strictEqual(Calculator.toDays(3, 1), 60);
            assert.strictEqual(Calculator.toDays(3, 31), 90);
            assert.strictEqual(Calculator.toDays(4, 1), 91);
            assert.strictEqual(Calculator.toDays(4, 30), 120);
            assert.strictEqual(Calculator.toDays(5, 1), 121);
            assert.strictEqual(Calculator.toDays(5, 31), 151);
            assert.strictEqual(Calculator.toDays(6, 1), 152);
            assert.strictEqual(Calculator.toDays(6, 30), 181);
            assert.strictEqual(Calculator.toDays(7, 1), 182);
            assert.strictEqual(Calculator.toDays(7, 31), 212);
            assert.strictEqual(Calculator.toDays(8, 1), 213);
            assert.strictEqual(Calculator.toDays(8, 31), 243);
            assert.strictEqual(Calculator.toDays(9, 1), 244);
            assert.strictEqual(Calculator.toDays(9, 30), 273);
            assert.strictEqual(Calculator.toDays(10, 1), 274);
            assert.strictEqual(Calculator.toDays(10, 31), 304);
            assert.strictEqual(Calculator.toDays(11, 1), 305);
            assert.strictEqual(Calculator.toDays(11, 30), 334);
            assert.strictEqual(Calculator.toDays(12, 1), 335);
            assert.strictEqual(Calculator.toDays(12, 31), 365);
          }
        });
        it(stryMutAct_9fa48("68") ? "" : (stryCov_9fa48("68"), '應該正確處理邊界情況'), () => {
          if (stryMutAct_9fa48("69")) {
            {}
          } else {
            stryCov_9fa48("69");
            // 測試每個月的第一天
            let accumulatedDays = 0;
            const monthDays = stryMutAct_9fa48("70") ? [] : (stryCov_9fa48("70"), [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
            for (let month = 1; stryMutAct_9fa48("73") ? month > 12 : stryMutAct_9fa48("72") ? month < 12 : stryMutAct_9fa48("71") ? false : (stryCov_9fa48("71", "72", "73"), month <= 12); stryMutAct_9fa48("74") ? month-- : (stryCov_9fa48("74"), month++)) {
              if (stryMutAct_9fa48("75")) {
                {}
              } else {
                stryCov_9fa48("75");
                stryMutAct_9fa48("76") ? accumulatedDays -= month > 1 ? monthDays[month - 1] : 0 : (stryCov_9fa48("76"), accumulatedDays += (stryMutAct_9fa48("80") ? month <= 1 : stryMutAct_9fa48("79") ? month >= 1 : stryMutAct_9fa48("78") ? false : stryMutAct_9fa48("77") ? true : (stryCov_9fa48("77", "78", "79", "80"), month > 1)) ? monthDays[stryMutAct_9fa48("81") ? month + 1 : (stryCov_9fa48("81"), month - 1)] : 0);
                assert.strictEqual(Calculator.toDays(month, 1), stryMutAct_9fa48("82") ? accumulatedDays - 1 : (stryCov_9fa48("82"), accumulatedDays + 1));
              }
            }
          }
        });
      }
    });

    // 測試邊界情況和特殊情況
    describe(stryMutAct_9fa48("83") ? "" : (stryCov_9fa48("83"), '邊界和特殊情況'), () => {
      if (stryMutAct_9fa48("84")) {
        {}
      } else {
        stryCov_9fa48("84");
        it(stryMutAct_9fa48("85") ? "" : (stryCov_9fa48("85"), '應該正確處理相同日期'), () => {
          if (stryMutAct_9fa48("86")) {
            {}
          } else {
            stryCov_9fa48("86");
            assert.strictEqual(Calculator.main(1, 1, 1, 1), 0);
            assert.strictEqual(Calculator.main(2, 15, 2, 15), 0);
            assert.strictEqual(Calculator.main(12, 31, 12, 31), 0);
          }
        });
        it(stryMutAct_9fa48("87") ? "" : (stryCov_9fa48("87"), '應該正確處理相鄰日期'), () => {
          if (stryMutAct_9fa48("88")) {
            {}
          } else {
            stryCov_9fa48("88");
            assert.strictEqual(Calculator.main(1, 1, 1, 2), 1);
            assert.strictEqual(Calculator.main(1, 31, 2, 1), 1);
            assert.strictEqual(Calculator.main(2, 28, 3, 1), 1);
          }
        });
        it(stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), '應該正確處理跨月日期'), () => {
          if (stryMutAct_9fa48("90")) {
            {}
          } else {
            stryCov_9fa48("90");
            assert.strictEqual(Calculator.main(1, 15, 2, 15), 31);
            assert.strictEqual(Calculator.main(1, 1, 3, 1), 59);
            assert.strictEqual(Calculator.main(1, 1, 12, 31), 364);
          }
        });
        it(stryMutAct_9fa48("91") ? "" : (stryCov_9fa48("91"), '應該正確處理日期順序'), () => {
          if (stryMutAct_9fa48("92")) {
            {}
          } else {
            stryCov_9fa48("92");
            assert.strictEqual(Calculator.main(1, 1, 12, 31), 364);
            assert.strictEqual(Calculator.main(12, 31, 1, 1), 364);
          }
        });
      }
    });
  }
});