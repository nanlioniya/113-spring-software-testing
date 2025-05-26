// @ts-nocheck
const assert = require('assert');
const { test } = require('node:test');

const Calculator = require('../src/calculator');

// 基本功能測試
test('基本日期差異計算', () => {
  assert.strictEqual(Calculator.main(1, 1, 1, 2), 1);
  assert.strictEqual(Calculator.main(1, 1, 1, 10), 9);
  assert.strictEqual(Calculator.main(1, 1, 2, 1), 31);
});

// 日期順序測試
test('日期順序不影響結果', () => {
  assert.strictEqual(Calculator.main(1, 1, 2, 1), Calculator.main(2, 1, 1, 1));
  assert.strictEqual(Calculator.main(1, 5, 1, 10), Calculator.main(1, 10, 1, 5));
});

// 邊界條件測試
test('邊界條件測試', () => {
  // 相同日期
  assert.strictEqual(Calculator.main(1, 1, 1, 1), 0);
  
  // 相鄰日期
  assert.strictEqual(Calculator.main(1, 31, 2, 1), 1);
  
  // 月末到月初
  assert.strictEqual(Calculator.main(1, 31, 2, 1), 1);
  assert.strictEqual(Calculator.main(2, 28, 3, 1), 1);
  
  // 年初到年末
  assert.strictEqual(Calculator.main(1, 1, 12, 31), 364);
});

// 無效輸入測試
test('無效輸入測試', () => {
  // 無效月份
  assert.strictEqual(Calculator.main(0, 1, 1, 1), -1);
  assert.strictEqual(Calculator.main(1, 1, 13, 1), -1);
  
  // 無效日期
  assert.strictEqual(Calculator.main(1, 0, 1, 1), -1);
  assert.strictEqual(Calculator.main(1, 32, 1, 1), -1);
  assert.strictEqual(Calculator.main(2, 29, 1, 1), -1); // 非閏年2月
  assert.strictEqual(Calculator.main(4, 31, 1, 1), -1); // 4月只有30天
});

// 月份天數測試
test('不同月份天數測試', () => {
  // 31天的月份
  assert.strictEqual(Calculator.main(1, 1, 2, 1), 31);
  assert.strictEqual(Calculator.main(3, 1, 4, 1), 31);
  assert.strictEqual(Calculator.main(5, 1, 6, 1), 31);
  assert.strictEqual(Calculator.main(7, 1, 8, 1), 31);
  assert.strictEqual(Calculator.main(8, 1, 9, 1), 31);
  assert.strictEqual(Calculator.main(10, 1, 11, 1), 31);
  assert.strictEqual(Calculator.main(12, 1, 12, 31), 30);
  
  // 30天的月份
  assert.strictEqual(Calculator.main(4, 1, 5, 1), 30);
  assert.strictEqual(Calculator.main(6, 1, 7, 1), 30);
  assert.strictEqual(Calculator.main(9, 1, 10, 1), 30);
  assert.strictEqual(Calculator.main(11, 1, 12, 1), 30);
  
  // 2月
  assert.strictEqual(Calculator.main(2, 1, 3, 1), 28);
});

// toDays 方法測試
test('toDays 方法測試', () => {
  assert.strictEqual(Calculator.toDays(1, 1), 1);
  assert.strictEqual(Calculator.toDays(1, 31), 31);
  assert.strictEqual(Calculator.toDays(2, 1), 32);
  assert.strictEqual(Calculator.toDays(2, 28), 59);
  assert.strictEqual(Calculator.toDays(3, 1), 60);
  assert.strictEqual(Calculator.toDays(12, 31), 365);
  
  // 確保每個月的第一天計算正確
  let days = 1;
  const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let month = 1; month <= 12; month++) {
    assert.strictEqual(Calculator.toDays(month, 1), days);
    days += monthDays[month];
  }
});

// isValid 方法測試
test('isValid 方法測試', () => {
  // 有效月份
  for (let month = 1; month <= 12; month++) {
    assert.strictEqual(Calculator.isValid(month, 1), true);
  }
  
  // 無效月份
  assert.strictEqual(Calculator.isValid(0, 1), false);
  assert.strictEqual(Calculator.isValid(13, 1), false);
  
  // 每月天數測試
  const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let month = 1; month <= 12; month++) {
    assert.strictEqual(Calculator.isValid(month, monthDays[month]), true);
    assert.strictEqual(Calculator.isValid(month, monthDays[month] + 1), false);
  }
});

// calculate 方法測試
test('calculate 方法測試', () => {
  assert.strictEqual(Calculator.calculate(1, 1, 1, 2), 1);
  assert.strictEqual(Calculator.calculate(1, 1, 1, 10), 9);
  assert.strictEqual(Calculator.calculate(1, 1, 2, 1), 31);
  
  // 無效輸入
  assert.strictEqual(Calculator.calculate(0, 1, 1, 1), -1);
  assert.strictEqual(Calculator.calculate(1, 0, 1, 1), -1);
});
