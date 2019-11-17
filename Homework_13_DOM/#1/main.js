
    var elements = document.querySelectorAll('input');

    console.log(elements);
        function getVal(){
            var result = [];
            for(var i = 0; i < elements.length; i++) {
                result[i] = elements[i].value;        
            }
            console.log(result);
            var index = -1;

            var timer = window.setInterval(function(){
                if(++index == result.length) {
                    clearInterval(timer);}
                else
                document.querySelector('textarea').value += result[index] + ',';
                
            }, 1000);
        }


     






