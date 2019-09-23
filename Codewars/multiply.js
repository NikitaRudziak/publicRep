function multiply(x, cnt) {
  let arr = [];
  for (let i = 0; i < cnt; i++) {
    arr.push(x + x * i);
  }
  return arr;
}