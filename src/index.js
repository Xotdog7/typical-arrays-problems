exports.min = function min(array) {
  if (array == null || array == 0) { return 0 }
  return Math.min.apply(null, array);
}

exports.max = function max(array) {
  if (array == null || array == 0) { return 0 }
  return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
  if (array == null || array == 0) { return 0 }
  sum = 0;
  average = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
    average = sum / array.length;
  }
  return average;
}