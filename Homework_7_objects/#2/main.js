let a = { x: 10, y: 20, z: 57 }, b = { z: 30, y : 50};
let c = {x: 10}, d = {x: 20, y: 30, f: 56};
function assignObjects() {
   let result = {};
//    let first = arguments[0];
//    let last = arguments[arguments.length - 2];
   let flag = arguments[arguments.length - 1];

   for (let i = arguments.length - 1; i >= 0 ; i--) {
       for (let key in arguments[i]) {
        if (!result[key]){
            result[key] = arguments[i][key]
            continue;
        }

        if(flag) {
            result[key] = arguments[i][key];
        }
       }
   }
   return result;  
}

console.log(assignObjects(a,b,c,d,false));
console.log(assignObjects(c,d, true));