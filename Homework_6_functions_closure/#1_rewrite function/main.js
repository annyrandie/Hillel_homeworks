
function f(a,b,c) {
  
  function sum(a,b) {
    var a = a || 2;
    var b = b || 3;
    return a + b;
  }
  return c ? c() : sum();
}
let c = 5;
console.log(f(3,7,8));