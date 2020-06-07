let btnModal = document.querySelector('.modalBtn'),
    overlay = document.querySelector('.modal')
    close = document.querySelector('.modal-close');

btnModal.addEventListener('click', function(){
   //overlay.style.display ='block';
   overlay.classList.remove('hidden');
   overlay.classList.add('open');
   document.body.style.overflow ='hidden';// при вызове модального окна задний фон не подвижный
})

close.addEventListener('click', function(){
   overlay.classList.add('hidden');
   overlay.classList.remove('open');
   document.body.style.overflow ='';    // делает задний фон подвижным
})

overlay.addEventListener('click', function(event){
   if(!event.target.closest('.modal-content')){
      this.classList.add('hidden');
      this.classList.remove('open');
      document.body.style.overflow ='';
   }
})



