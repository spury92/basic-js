module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (date.hasOwnProperty('toString')) {
    throw new Error()
  }
  let month = date.getMonth();

  if ( month > 10) {
    return 'winter'
  } else if (month > 7) {
    return 'fall'
  } else if (month > 4) {
    return 'summer'
  } else if (month > 1) {
    return 'spring'
  } else {
    return 'winter'
  }
  
    
}
