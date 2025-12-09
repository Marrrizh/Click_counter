let NumberChanged=document.querySelector('.number');
let ChangedButton=document.querySelector('.increase');
let ClearBtn=document.querySelector('.clear');

let currentCount = localStorage.getItem('counter') || 0;
if (currentCount === 0) {
    ClearBtn.disabled = true;
} else {
    ClearBtn.disabled = false;
}

ChangedButton.addEventListener('click', function() {
   
    currentCount = currentCount + 1;
  
    if (currentCount > 0) {
        ClearBtn.disabled = false;   
    }

    NumberChanged.textContent = currentCount;
   
});


