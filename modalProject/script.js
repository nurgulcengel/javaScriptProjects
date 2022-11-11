'use strict';

const btnShowModals=document.querySelectorAll('.show-modal');
const btnCloseModal=document.querySelector('.close-modal');
const modal=document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const openModal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnShowModals.forEach(btnModal => {
    
    btnModal.addEventListener('click',openModal)
       
});

btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
if (e.key==='Escape'&&!modal.classList.contains('hidden')) {
    closeModal();
}

});



