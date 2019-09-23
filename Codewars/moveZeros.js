let moveZeros = function (arr) {
  let zeros = [];
  let others = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] ===  0) {
      zeros.push(arr[i]);
    } else {
      others.push(arr[i]);
    }
  }
  result = others.concat(zeros);
  return result;
}
console.log(moveZeros(["a",0,"b",null,"c","d",1,false,1,3,[],1,9,0,{},0,9,0,0,0,0,0,0,0]));