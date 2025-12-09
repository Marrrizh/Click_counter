let NumberChanged=document.querySelector('.number');
let ChangedButton=document.querySelector('.increase');
let ClearBtn=document.querySelector('.clear');

let currentCount = +localStorage.getItem('counter') || 0;
NumberChanged.textContent = currentCount;

if (currentCount === 0) {
    ClearBtn.disabled = true;
} else {
    ClearBtn.disabled = false;
}

ChangedButton.addEventListener('click', function() {
   
    currentCount = currentCount + 1;
    localStorage.setItem('counter', currentCount);
  
    if (currentCount > 0) {
        ClearBtn.disabled = false;   
    }

    NumberChanged.textContent = currentCount;
   
});

ClearBtn.addEventListener('click', function() {
  currentCount=0;
 NumberChanged.textContent = 0;  
 ClearBtn.disabled = true;
 localStorage.setItem('counter', 0);
});
