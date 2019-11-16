
function summarize(A, B) {
  
  let sum1 = 0;
  let sum2 = 0;
  let sumMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (typeof A[i] === 'number' && isNaN(A[i]) !== true) {
      sum1 += A[i];
    }
  }
  for (let j = 0; j <B.length; j++) {
    if (typeof B[j] === 'number' && isNaN(B[j]) !== true) {
      sum2 += B[j];
    }
  }
  console.log(sum1);
  console.log(sum2);

  if (sum1 >= sum2) {
    sumMax = sum1;
  }
  else {
    sumMax = sum2;
  }
  return sumMax;
}


let arr1 = [1,NaN,2,3, undefined,'apple',100, 300, 500];
let arr2 = [1,2,3,4, 20, 'orange', 100, NaN];
console.log(summarize(arr1, arr2));
