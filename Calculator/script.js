var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext = e.target.innerText;
        screen.value+=btntext;
    });
}