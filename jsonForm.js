// Это скрипт отправки данных с формы на сервер в JSON формате.

let message = {
   loading: "Загрузка...",
   success: "Спасибо! Скоро мы с вами свяжемся",
   failure: "Что-то пошло не так..."
}

let form = document.querySelector('.form'),
    input = form.querySelectorAll('input'),
    statusMassage = document.createElement('div');
    
    statusMassage.classList.add('status');
console.log(form);

form.addEventListener('submit', function(event){
   event.preventDefault();
   form.appendChild(statusMassage);

   let request = new XMLHttpRequest();
       request.open('POST', 'server.php');
       request.setRequestHeader ('COntent-type', 'application/json; charset=utf-8');

   let formData = new FormData(form);

   let obj = {};
   formData.forEach(function (value, key) {
      obj[key] = value;
   });
   let json = JSON.stringify(obj);    // преобразуем объект в JSON формат
   
   request.send(json);

   request.addEventListener('readystatechange', ()=>{
      if (request.readyState < 4){
         statusMassage.innerHTML = message.loading;
      } else if ( request.readyState === 4 && request.status == 200){
         statusMassage.innerHTML = message.success;
      } else {
         statusMassage.innerHTML = message.failure;
      }
   });

   for(let i = 0; i<input.length; i++){              // делаем значение value in input пустыми
      input[i].value = '';
   }
});