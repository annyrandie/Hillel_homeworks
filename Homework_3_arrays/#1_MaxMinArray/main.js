let A = [];
A.length = 20;
let B = [];


for( let i = 0; i < A.length; i++ ) {
  A[i] = Math.floor(Math.random() *66) - 20;
  
  isPrime = true;

  for( let k = 2; k < A[i]; k++ ) {
    if ( A[i] % k == 0) {
      isPrime = false;
      break;
    } 
  }
  if(isPrime && A[i] > 1) {
    B[B.length] = A[i]; 
  }
}
console.log(A);
console.log(B); 

let minB = B[0];
maxB = B[0];
for (let j = 0; j < B.length; j++) {
  if (maxB < B[j]) {
    maxB = B[j]; 
  }
  if (minB > B[j]) {
    minB = B[j]; 
  }
} 
document.write( 'Максимальное значение массива B:' + ' ' + maxB + '<br>');
document.write( 'Минимальное значение массива B:' + ' ' + minB + '<br>'); 




