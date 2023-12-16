let inputEl=document.getElementById('input');
let btnEl=Array.from(document.getElementsByTagName('button'));

console.log(btnEl);
btnEl.forEach(element => {
    element.addEventListener('click',function(){
        if(element.textContent=='C'){
            inputEl.value='';
            return;
        }
        if(element.textContent=='='){
            data=inputEl.value;
            Calculate(data);
        }
        if(element.textContent!='=')
            inputEl.value+=element.textContent;
    });
    console.log(element)
});

function Calculate(data){
    try{
        res=eval(data);
    }catch(err){
        res='Error';
    }
    inputEl.value=res;
}
