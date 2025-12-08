let NumberChanged=document.querySelector('.number');
let ChangedButton=document.querySelector('.increase');
let ClearBtn=document.querySelector('.clear');

let currentCount = localStorage.getItem('counter') || 0;

ChangedButton.addEventListener('click', function() {

    currentCount=currentCount+1;   
    NumberChanged.textContent = currentCount;

})
