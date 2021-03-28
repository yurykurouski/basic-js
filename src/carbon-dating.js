const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const numerized = Number(sampleActivity);

  if (!numerized || numerized <= 0 || typeof sampleActivity !== 'string') return false;

  return numerized > MODERN_ACTIVITY ? false : Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
