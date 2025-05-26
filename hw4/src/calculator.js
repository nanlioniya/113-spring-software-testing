// src/calculator.js
const Calculator = {
    isValid: function(month, day) {
        if (month < 1 || month > 12) return false;
        
        const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return day >= 1 && day <= monthDays[month];
    },

    toDays: function(month, day) {
        let days = day;
        const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        for (let m = 1; m < month; m++) {
        days += monthDays[m];
        }
        
        return days;
    },

    calculate: function(month1, day1, month2, day2) {
        if (!this.isValid(month1, day1) || !this.isValid(month2, day2)) {
        return -1;
        }
        
        const days1 = this.toDays(month1, day1);
        const days2 = this.toDays(month2, day2);
        
        return Math.abs(days2 - days1);
    },

    main: function(month1, day1, month2, day2) {
        return this.calculate(month1, day1, month2, day2);
    }
};

module.exports = Calculator;
  