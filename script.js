let NumberChanged=document.querySelector('.number');
let ChangedButton=document.querySelector('.increase');
let ClearBtn=document.querySelector('.clear');

let currentCount = localStorage.getItem('counter') || 0;
