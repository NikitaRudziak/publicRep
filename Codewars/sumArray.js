function sumArray(array) {
  let sum = 0;
  array.sort(function(a, b) {
    return a - b;
  });
  for (let i = 1; i < array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const minNum = Math.min.apply(null, args);
    return minNum;
  }
}