let a = prompt('Введите a');
let b = prompt('Введите b');
let c = prompt('Введите c');
let sum = 0;

a = parseInt(a, 10);
b = parseInt(b, 10);
c = parseInt(c, 10);

sum = a + b + c;
document.write('Сумма переменных:' + ' ' + sum + '<br>');

if(a % 2 == 0) {
  document.write('a' + ' ' + '=' + ' ' + a + ' ' + '- четное число!' + '<br>');
}
if(b % 2 == 0) {
  document.write('b' + ' ' + '=' + ' ' + b + ' ' + '- четное число!' + '<br>');
}
if(c % 2 == 0) {
  document.write('c' + ' ' + '=' + ' ' + c + ' ' + '- четное число!' + '<br>');
}
