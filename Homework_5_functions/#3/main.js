
function func(a, b) {
  let arr = a.split('');
  for (let i = arr.length - 1; i >=0; i --) {
    for (let j = 0; j < b.length; j++) {
      if( arr[i] == b[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr.join('');
}

console.log(func("hello world", ['l', 'd']));