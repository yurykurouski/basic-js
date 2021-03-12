const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) throw Error;

  const sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let result = [];

  sequences.forEach(el => {
    if (arr.includes(el)) {
      const index = arr.indexOf(el);

      switch (el) {
        case '--double-next':
          if (index == arr.length - 1) {
            result = result.concat(arr.slice(0, index));
            break;
          }
          result = arr.slice(0, index);
          result.push(arr[index + 1]);
          result = result.concat(arr.slice(index + 1,));
          break;

        case '--discard-next':
          if (index == arr.length - 1) {
            result = result.concat(arr.slice(0, index));
            break;
          }
          result = arr.slice(0, index);
          result = result.concat(arr.slice(index + 2,));
          break;

        case '--discard-prev':
          if (index == 0) {
            result = result.concat(arr.slice(index + 1,));
            break;
          }
          result = arr.slice(0, index - 1);
          result = result.concat(arr.slice(index + 1,));
          break;

        case '--double-prev':
          if (index == 0) {
            result = result.concat(arr.slice(index + 1,));
            break;
          }
          result = arr.slice(0, index);
          result.push(arr[index - 1]);
          result = result.concat(arr.slice(index + 1,));
          break;
      }
    }
  });

  return result.length > 0 ? result : arr;
};
