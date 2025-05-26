const assert = require('assert');
const Calculator = require('../src/calculator');

describe('Calculator', () => {
  // Basic functionality tests
  describe('Basic functionality', () => {
    it('should correctly calculate date differences', () => {
      assert.strictEqual(Calculator.main(1, 1, 1, 2), 1);
      assert.strictEqual(Calculator.main(1, 1, 1, 10), 9);
      assert.strictEqual(Calculator.main(1, 1, 2, 1), 31);
    });

    it('date order should not affect the result', () => {
      assert.strictEqual(Calculator.main(1, 1, 2, 1), Calculator.main(2, 1, 1, 1));
      assert.strictEqual(Calculator.main(1, 5, 1, 10), Calculator.main(1, 10, 1, 5));
    });
  });

  // Boundary condition tests
  describe('Boundary conditions', () => {
    it('same date should return 0', () => {
      assert.strictEqual(Calculator.main(1, 1, 1, 1), 0);
    });
    
    it('adjacent dates should return 1', () => {
      assert.strictEqual(Calculator.main(1, 31, 2, 1), 1);
    });
    
    it('month end to month start should calculate correctly', () => {
      assert.strictEqual(Calculator.main(1, 31, 2, 1), 1);
      assert.strictEqual(Calculator.main(2, 28, 3, 1), 1);
    });
    
    it('year start to year end should calculate correctly', () => {
      assert.strictEqual(Calculator.main(1, 1, 12, 31), 364);
    });
  });

  // Invalid input tests
  describe('Invalid input', () => {
    it('invalid month should return -1', () => {
      assert.strictEqual(Calculator.main(0, 1, 1, 1), -1);
      assert.strictEqual(Calculator.main(1, 1, 13, 1), -1);
    });
    
    it('invalid date should return -1', () => {
      assert.strictEqual(Calculator.main(1, 0, 1, 1), -1);
      assert.strictEqual(Calculator.main(1, 32, 1, 1), -1);
      assert.strictEqual(Calculator.main(2, 29, 1, 1), -1); // Non-leap year February
      assert.strictEqual(Calculator.main(4, 31, 1, 1), -1); // April only has 30 days
    });
  });

  // Month days tests
  describe('Month days', () => {
    it('31-day months should calculate correctly', () => {
      assert.strictEqual(Calculator.main(1, 1, 2, 1), 31);
      assert.strictEqual(Calculator.main(3, 1, 4, 1), 31);
      assert.strictEqual(Calculator.main(5, 1, 6, 1), 31);
      assert.strictEqual(Calculator.main(7, 1, 8, 1), 31);
      assert.strictEqual(Calculator.main(8, 1, 9, 1), 31);
      assert.strictEqual(Calculator.main(10, 1, 11, 1), 31);
      assert.strictEqual(Calculator.main(12, 1, 12, 31), 30);
    });
    
    it('30-day months should calculate correctly', () => {
      assert.strictEqual(Calculator.main(4, 1, 5, 1), 30);
      assert.strictEqual(Calculator.main(6, 1, 7, 1), 30);
      assert.strictEqual(Calculator.main(9, 1, 10, 1), 30);
      assert.strictEqual(Calculator.main(11, 1, 12, 1), 30);
    });
    
    it('February should calculate correctly', () => {
      assert.strictEqual(Calculator.main(2, 1, 3, 1), 28);
    });
  });

  // toDays method tests
  describe('toDays method', () => {
    it('should correctly convert date to days', () => {
      assert.strictEqual(Calculator.toDays(1, 1), 1);
      assert.strictEqual(Calculator.toDays(1, 31), 31);
      assert.strictEqual(Calculator.toDays(2, 1), 32);
      assert.strictEqual(Calculator.toDays(2, 28), 59);
      assert.strictEqual(Calculator.toDays(3, 1), 60);
      assert.strictEqual(Calculator.toDays(12, 31), 365);
    });
    
    it('first day of each month should calculate correctly', () => {
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

  // isValid method tests
  describe('isValid method', () => {
    it('should correctly validate valid dates', () => {
      assert.strictEqual(Calculator.isValid(1, 1), true);
      assert.strictEqual(Calculator.isValid(2, 28), true);
      assert.strictEqual(Calculator.isValid(12, 31), true);
    });
    
    it('should reject invalid months', () => {
      assert.strictEqual(Calculator.isValid(0, 1), false);
      assert.strictEqual(Calculator.isValid(13, 1), false);
      // Added these tests to improve mutation test score
      assert.strictEqual(Calculator.isValid(-1, 1), false);
      assert.strictEqual(Calculator.isValid(100, 1), false);
    });
    
    it('should reject invalid dates', () => {
      assert.strictEqual(Calculator.isValid(1, 0), false);
      assert.strictEqual(Calculator.isValid(1, 32), false);
      assert.strictEqual(Calculator.isValid(2, 29), false);
      assert.strictEqual(Calculator.isValid(4, 31), false);
      assert.strictEqual(Calculator.isValid(6, 31), false);
      assert.strictEqual(Calculator.isValid(9, 31), false);
      assert.strictEqual(Calculator.isValid(11, 31), false);
    });
    
    // Added these tests to improve mutation test score
    it('should test month boundary conditions separately', () => {
      // Test month lower bound
      assert.strictEqual(Calculator.isValid(0, 15), false);
      assert.strictEqual(Calculator.isValid(1, 15), true);
      // Test month upper bound
      assert.strictEqual(Calculator.isValid(12, 15), true);
      assert.strictEqual(Calculator.isValid(13, 15), false);
    });
  });

  // calculate method tests
  describe('calculate method', () => {
    it('should correctly calculate basic differences', () => {
      assert.strictEqual(Calculator.calculate(1, 1, 1, 2), 1);
      assert.strictEqual(Calculator.calculate(1, 1, 1, 10), 9);
      assert.strictEqual(Calculator.calculate(1, 1, 2, 1), 31);
    });
    
    it('should handle reverse date order', () => {
      assert.strictEqual(Calculator.calculate(1, 10, 1, 1), 9);
      assert.strictEqual(Calculator.calculate(2, 1, 1, 1), 31);
    });
    
    it('should reject invalid dates', () => {
      assert.strictEqual(Calculator.calculate(0, 1, 1, 1), -1);
      assert.strictEqual(Calculator.calculate(1, 0, 1, 1), -1);
      assert.strictEqual(Calculator.calculate(1, 1, 0, 1), -1);
      assert.strictEqual(Calculator.calculate(1, 1, 1, 0), -1);
    });
  });
});