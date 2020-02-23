const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SAMPLE_ACTIVITY) {
  try {
    SAMPLE_ACTIVITY = parseFloat(SAMPLE_ACTIVITY.replace(/[^0-9.-]*/, ''))
  } catch(TypeError) {
    return false;
  }
  if (!SAMPLE_ACTIVITY || SAMPLE_ACTIVITY <= 0 || SAMPLE_ACTIVITY >= 15) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  // const k = -0.00012094240837696334;
  return Math.ceil(Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) / k);
};
