// @ts-nocheck
const assert = require('assert');
const Calculator = require('../src/calculator');

describe('Calculator', () => {
  // 基本功能測試
  describe('基本功能', () => {
    it('應正確計算日期差異', () => {
      assert.strictEqual(Calculator.main(1, 1, 1, 2), 1);
      assert.strictEqual(Calculator.main(1, 1, 1, 10), 9);
      assert.strictEqual(Calculator.main(1, 1, 2, 1), 31);
    });

    it('日期順序不應影響結果', () => {
      assert.strictEqual(Calculator.main(1, 1, 2, 1), Calculator.main(2, 1, 1, 1));
      assert.strictEqual(Calculator.main(1, 5, 1, 10), Calculator.main(1, 10, 1, 5));
    });
  });

  // 邊界條件測試
  describe('邊界條件', () => {
    it('相同日期應返回0', () => {
      assert.strictEqual(Calculator.main(1, 1, 1, 1), 0);
    });
    
    it('相鄰日期應返回1', () => {
      assert.strictEqual(Calculator.main(1, 31, 2, 1), 1);
    });
    
    it('月末到月初應正確計算', () => {
      assert.strictEqual(Calculator.main(1, 31, 2, 1), 1);
      assert.strictEqual(Calculator.main(2, 28, 3, 1), 1);
    });
    
    it('年初到年末應正確計算', () => {
      assert.strictEqual(Calculator.main(1, 1, 12, 31), 364);
    });
  });

  // 無效輸入測試
  describe('無效輸入', () => {
    it('無效月份應返回-1', () => {
      assert.strictEqual(Calculator.main(0, 1, 1, 1), -1);
      assert.strictEqual(Calculator.main(1, 1, 13, 1), -1);
    });
    
    it('無效日期應返回-1', () => {
      assert.strictEqual(Calculator.main(1, 0, 1, 1), -1);
      assert.strictEqual(Calculator.main(1, 32, 1, 1), -1);
      assert.strictEqual(Calculator.main(2, 29, 1, 1), -1); // 非閏年2月
      assert.strictEqual(Calculator.main(4, 31, 1, 1), -1); // 4月只有30天
    });
  });

  // 月份天數測試
  describe('月份天數', () => {
    it('31天的月份應正確計算', () => {
      assert.strictEqual(Calculator.main(1, 1, 2, 1), 31);
      assert.strictEqual(Calculator.main(3, 1, 4, 1), 31);
      assert.strictEqual(Calculator.main(5, 1, 6, 1), 31);
      assert.strictEqual(Calculator.main(7, 1, 8, 1), 31);
      assert.strictEqual(Calculator.main(8, 1, 9, 1), 31);
      assert.strictEqual(Calculator.main(10, 1, 11, 1), 31);
      assert.strictEqual(Calculator.main(12, 1, 12, 31), 30);
    });
    
    it('30天的月份應正確計算', () => {
      assert.strictEqual(Calculator.main(4, 1, 5, 1), 30);
      assert.strictEqual(Calculator.main(6, 1, 7, 1), 30);
      assert.strictEqual(Calculator.main(9, 1, 10, 1), 30);
      assert.strictEqual(Calculator.main(11, 1, 12, 1), 30);
    });
    
    it('2月應正確計算', () => {
      assert.strictEqual(Calculator.main(2, 1, 3, 1), 28);
    });
  });

  // toDays 方法測試
  describe('toDays 方法', () => {
    it('應正確轉換日期為天數', () => {
      assert.strictEqual(Calculator.toDays(1, 1), 1);
      assert.strictEqual(Calculator.toDays(1, 31), 31);
      assert.strictEqual(Calculator.toDays(2, 1), 32);
      assert.strictEqual(Calculator.toDays(2, 28), 59);
      assert.strictEqual(Calculator.toDays(3, 1), 60);
      assert.strictEqual(Calculator.toDays(12, 31), 365);
    });
    
    it('每個月的第一天應正確計算', () => {
      let days = 1;
      for (let m = 1; m <= 12; m++) {
        assert.strictEqual(Calculator.toDays(m, 1), days);
        if (m < 12) {
          const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          days += monthDays[m];
        }
      }
    });
  });

  // isValid 方法測試
  describe('isValid 方法', () => {
    it('應正確驗證有效日期', () => {
      assert.strictEqual(Calculator.isValid(1, 1), true);
      assert.strictEqual(Calculator.isValid(2, 28), true);
      assert.strictEqual(Calculator.isValid(12, 31), true);
    });
    
    it('應拒絕無效月份', () => {
      assert.strictEqual(Calculator.isValid(0, 1), false);
      assert.strictEqual(Calculator.isValid(13, 1), false);
    });
    
    it('應拒絕無效日期', () => {
      assert.strictEqual(Calculator.isValid(1, 0), false);
      assert.strictEqual(Calculator.isValid(1, 32), false);
      assert.strictEqual(Calculator.isValid(2, 29), false);
      assert.strictEqual(Calculator.isValid(4, 31), false);
      assert.strictEqual(Calculator.isValid(6, 31), false);
      assert.strictEqual(Calculator.isValid(9, 31), false);
      assert.strictEqual(Calculator.isValid(11, 31), false);
    });
  });

  // calculate 方法測試
  describe('calculate 方法', () => {
    it('應正確計算基本差異', () => {
      assert.strictEqual(Calculator.calculate(1, 1, 1, 2), 1);
      assert.strictEqual(Calculator.calculate(1, 1, 1, 10), 9);
      assert.strictEqual(Calculator.calculate(1, 1, 2, 1), 31);
    });
    
    it('應處理反向日期順序', () => {
      assert.strictEqual(Calculator.calculate(1, 10, 1, 1), 9);
      assert.strictEqual(Calculator.calculate(2, 1, 1, 1), 31);
    });
    
    it('應拒絕無效日期', () => {
      assert.strictEqual(Calculator.calculate(0, 1, 1, 1), -1);
      assert.strictEqual(Calculator.calculate(1, 0, 1, 1), -1);
      assert.strictEqual(Calculator.calculate(1, 1, 0, 1), -1);
      assert.strictEqual(Calculator.calculate(1, 1, 1, 0), -1);
    });
  });
});