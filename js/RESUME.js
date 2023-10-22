document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#red').onclick = function(){
        document.querySelector('strong').style.color = 'red';   
     };
     document.querySelector('#green').onclick = function(){
        document.querySelector('strong').style.color = 'green';
         
    };
});