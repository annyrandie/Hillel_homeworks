let a = { x: 10, y: 20 }, b = { z: 30, y : 50};
let c = {x: 10}, d = {x: 20, y: 30};
function assignObjects(obj1, obj2, flag) {
   let result = {};
    let t1 = flag ? obj1 : obj2;
    let t2 = flag ? obj2 : obj1;
    for (let id in t2) {
        result[id] = t2[id];
    }
    for (let key in t1) {
        result[key] = t1[key];
    }
   return result;
}

console.log(assignObjects(a,b, false));
console.log(assignObjects(c,d, false));