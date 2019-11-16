let arr = [1,2,3,4,5,6,7];
let temp = arr[0];

if( arr.length % 2 == 0) {
  for (let i = 0; i < arr.length; i = i + 2) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
else {
  for( let i = arr.length - 2; i >= 0; i = i -2 ) {
    temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }
}

console.log(arr);
