
var obj = {
  copy : function() {
    return this;

  },
  clear : function() {
    obj.result = 0;

  },
  doFunction : function(func, x, y) {
    
    return func(x,y);

  },
};
function sum(x, y) {
  return x+y;
}
function mul(x,y) {
  return x * y;
}
obj.result = doFunction();


obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear();