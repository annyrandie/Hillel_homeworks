
let A = [];
A.length = 20;
let B = [];
let C = [];


for( let i = 0; i < A.length; i++ ) {
  A[i] = Math.floor(Math.random() *66) - 20;
}

document.write(A + '<br>');

let min = A[0];
let max = min;
let min_index = 0;
let max_index = 0;
for (let i = 0; i < A.length; i++) {
  if(A[i] < min) {
    min = A[i];
    min_index = i;
  }
  if(A[i] > max) {
    max = A[i];
    max_index = i;
  }
}
A[min_index] = max;
A[max_index] = min;

document.write(A + '<br>');

console.log(min);
console.log(max);

for (let i = 0; i<A.length; i++) {
  if(A[i] != min && A[i] != max) {
    B[B.length] = A[i];
  }
}
console.log(B);


