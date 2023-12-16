let inputEl=document.getElementById('input');
let btnEl=Array.from(document.getElementsByTagName('button'));
let prevans=0;
inputEl.value=0;
btnEl.forEach(element => {
    element.addEventListener('click',function(){
        if(inputEl.value==0){
            inputEl.value='';
        }
        if(element.textContent=='clr'){
            inputEl.value='0';
        }else if(element.textContent=='='){
            data=inputEl.value;
            if(data.includes('Error') || data.includes('undefined')){
                data=0;
            }
            Calculate(data);
        }else if(element.textContent=='del'){
            if((inputEl.value).includes('Error') || (inputEl.value).includes('undefined')){
                inputEl.value=0;
            }
            inputEl.value=inputEl.value.slice(0,-1);
            if(inputEl.value==''){
                inputEl.value=0;
            }
        }else if(element.textContent=='ans'){
            inputEl.value+=prevans;
        }else{
            inputEl.value+=element.textContent;
            santosh=1;
        }
        
    });
});
function Calculate(data){
    try{
        res=eval(data);
    }catch(err){
        res='Error';
    }
    if(res==undefined){
        res='0';
    }
    inputEl.value=res;
    prevans=res;
    if(res=='Error' || res=='undefined'){
        prevans=0;
    }
}