'use strict';
(function(){
    let celsiusEl=document.getElementById("cel")
    let fahrenheitEl=document.getElementById("fah")
    celsiusEl.value=0;
    fahrenheitEl.value=0;
    let btnEl=document.querySelectorAll('.btn button');
    for (const btn of btnEl) {
       btn.addEventListener('click',()=>{
            if(btn.textContent=="Celsius"){
                let fahval=Number(fahrenheitEl.value)
                let value=(fahval-32)*5/9;
                celsiusEl.value=value.toFixed(4);
            }
            if(btn.textContent=="Fahrenheit"){
                let celval=Number(celsiusEl.value)
                let value=(celval*9/5)+32;
                fahrenheitEl.value=value.toFixed(4);
            }
          
        })
    }
})()