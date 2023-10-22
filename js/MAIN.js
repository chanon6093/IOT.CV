function INTO_WEB(){
    alert("YOU WANT INTO WEBSITE"); 
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#white').onclick = function(){
        document.querySelector('h2').style.color = 'white';   
     };
     document.querySelector('#green').onclick = function(){
        document.querySelector('h2').style.color = 'green';
         
    };
});