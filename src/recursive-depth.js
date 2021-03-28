const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        return this.calculateDepth(arr.flat()) + 1;
      }
    }

    return 1;
  }
};