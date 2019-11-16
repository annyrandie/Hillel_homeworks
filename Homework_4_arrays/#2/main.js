let arr = [];
arr.length = 20;
let difference = 0;
let sum = 0;
let avrg = 0;
let B = [];
let a = +prompt('введите начало предела для поиска индексов','');
let b = +prompt('введите конец предела для поиска индексов','');


for( let i = 0; i < arr.length; i ++) {
  arr[i] = Math.floor(Math.random() *67) + 34;
  sum = sum + arr[i];

  //вывод индексов элементов
  if(arr[i] > a && arr[i] < b){
    console.log(i);
  }
}

document.write('исходный массив случайных чисел :' + '<br>' + arr + '<br>');
document.write('****************' + '<br>');

//поиск разницы между макс и мин
let min = arr[0];
let max = min;

for( let i = 0; i < arr.length; i ++) {
  if(arr[i] > max) {
    max = arr[i];
  }
  if(arr[i] < min) {
    min = arr[i];
  }
}
  

console.log(arr);
console.log(min);
console.log(max);
document.write('разница между max и min равна:' + ' ' + (max - min) + '<br>');

// вывод элементов больше среднего значения
avrg = sum / arr.length;
console.log(avrg);

for (let i = 0; i < arr.length; i++) {
  if(arr[i] > avrg) {
    B[B.length] = arr[i];

  } 
}
document.write('****************' + '<br>');
document.write('Массив из элементов > среднего значения :' + '<br>' + B +'<br>');
document.write('****************' + '<br>');

//удаление дубликатов в массиве

let result = [];
let tmp = {};

for ( let i = 0; i < arr.length; i++) {
  if (arr[i] in tmp) continue;
  result.push(arr[i]);
  tmp[arr[i]] = 1;
}
document.write('***********' + '<br>');
document.write('массив с уникальными элементами:' + '<br>' );
document.write(result);
