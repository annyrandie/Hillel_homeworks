

const start = 0, end = 100;
document.write("<table border = '1' align = 'center'>")

for( let i = start; i <= end; i++ ) {
   if ( i % 2 == 0) {
    document.write ("<tr> <td width = '40' align = 'center' bgcolor = 'yellow'>" +i + "</td> </tr>");
  }
}
document.write('</table>');
