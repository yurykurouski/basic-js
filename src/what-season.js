const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw Error;

  const year = {
    winter: ['Jan', 'Feb', 'Dec'],
    spring: ['Mar', 'Apr', 'May'],
    summer: ['Jun', 'Jul', 'Aug'],
    autumn: ['Sep', 'Oct', 'Nov']
  }

  const month = date.toGMTString().split(' ')[2];

  for (let key in year) {
    if (year[key].includes(month)) return key
  }
};
