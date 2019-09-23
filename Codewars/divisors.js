function divisors(n) {
  let arr = [];
  for (let i = 2; i < n; i++) {
    if(!(n % i)) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return n + ' is prime';
  } else {
    return arr;
  }
}