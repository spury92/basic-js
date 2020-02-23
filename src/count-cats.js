module.exports = function countCats(matrix) {
  let cat = "^^"
  let count = 0
  matrix.map(array => {array.map(subarray => {
    if (cat == subarray) {
      count = count + 1;
    }
  }
  )
  }
  )
  return count;
};
