const toggler=document.querySelector('#menuToggler');
const sidebar=document.querySelector('.hideside');

toggler.addEventListener('click',function(){
    sidebar.classList.toggle('showside');
})