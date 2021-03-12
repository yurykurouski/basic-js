const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;

  let result = '';

  arr.forEach(el => {
    if (/\w+/.test(el) && typeof (el) === 'string') {
      result += el.trim()[0].toUpperCase()
    }
  });

  return result.split('').sort().join('');
};
