const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" } = options;
  let additionRes = "";

  for (let i = 1; i < additionRepeatTimes; i++) {
    additionRes += addition + additionSeparator;
  }

  let result = str + additionRes + addition;
  let arr = [];

  for (let i = 1; i <= repeatTimes; i++) {
    arr.push(result);
  }

  return arr.join(separator);
};