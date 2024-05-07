const sumItems = function(array) {
  let sum = 0;
  for (const a of array) {
    if (!Array.isArray(a)) {
      sum += a;
    } else {
      sum += sumItems(a);
    }
  }
  return sum;
};

module.exports = sumItems;