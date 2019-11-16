//  2. Ввести с клавиатуры a и b, где а меньше b. Запустить цикл перебора от a до b с шагом h 
//  (ввод с клавиатуры). Посчитать сумму факториалов* чисел которые попадаются во время перебора.
/*
let a = +prompt('введите число a');
let b = +prompt('введите число b');
let h = +prompt('введите шаг h');

let result = 1;
let sum = 0;

for( let i = a; i <=b; i = i+h) {
  document.write(i + '<br>');
  for( let k = 1; k<=i; k++) {
    result = result * k;
  }
  //document.write(result + '<br>');
  sum +=i;
  
}
console.log(sum);
*/

const start = 0, end = 100;

for( let i = start; i<= end; i++) {
   if ( i % 2 == 0) {
    document.write(i);
  }
}
let table = '';
let rows = 5;
let cols = 1;
for (let r = 0; r <= rows; r++) {
  table += '<tr>';
  for (let c = 1; c <= cols; c++) {
    table += '<td>' + c + '</td>';
  }
  table += '</tr>';
  document.write('<table border = 1>' + table + '</table>' );
}
