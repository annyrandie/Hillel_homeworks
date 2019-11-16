
function doMath(x, znak, y) {
  switch(znak) {
    case '+' :
    return x + y;
    break;
    case '-' :
    return x - y;
    break;
    case '*' :
    return x * y;
    break;
    case '/' :
    return x / y;
    case '%' :
    return x % y;
    case '^' :
    return x ^ y;
  }
}

console.log(doMath(2,'+', 3));
console.log(doMath(2,'-', 3));
console.log(doMath(2,'*', 3));
console.log(doMath(2,'/', 3));
console.log(doMath(2,'%', 3));
console.log(doMath(2,'^', 3));
