var input=document.querySelector('.input');

var item= Array.from(document.querySelectorAll('.item'));

item.forEach(function(btn){

    btn.addEventListener('click',function(){

        if (input.innerHTML=='1') 

        input.innerHTML='';

        else if (btn.innerHTML=='C'){

            var arrtext=Array.from(input.innerHTML);

            arrtext.splice(arrtext.length -1 );
            
            if(arrtext.length!='')

            input.innerHTML=arrtext.join('');

            else input.innerHTML='';
        }
        else if (btn.innerHTML=='CE'){

            var arrtext=Array.from(input.innerHTML);

            arrtext.splice(arrtext.length -10000 );
            

            if(arrtext.length!='')
 
            input.innerHTML=arrtext.join('');

            else input.innerHTML='';
 
        }

        else if (btn.innerHTML=='='){

            input.innerHTML=eval(input.innerHTML);
        }
        else input.innerHTML+=btn.innerHTML; 

    })
}) 



