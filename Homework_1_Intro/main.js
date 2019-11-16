const cyl_radius = +prompt('Введите значение радиуса основания цилиндра, см', '');
const cyl_height = +prompt('Введите значeние высоты цилиндра, см', '');

let base_square = Math.PI * Math.pow(cyl_radius, 2);
base_square = base_square.toFixed(2);

let volume = base_square * cyl_height;
volume = volume.toFixed(2);

document.write('**************');
document.write('<br>');
document.write('Обьем цилиндра с площадью основания' + ' ' + 
 base_square + ' ' + 'см' + '2'.sup() + ', радиусом' + ' '+ cyl_radius + ' ' + 'см' + ' ' +
  'и высотой' + ' ' + cyl_height + ' ' + 'см' + ' ' + 'равен:');
document.write('<br>');
document.write('--------------------');
document.write('<br>');
document.write('V' + ' ' + '=' + ' ' + volume + ' ' + 'см' + '3'.sup());
document.write('<br>');
document.write('--------------------');
document.write('<br>');
document.write('end.');