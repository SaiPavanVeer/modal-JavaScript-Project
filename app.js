const signin = document.querySelector('.sign');
const modal = document.querySelector('.modalin');
const close = document.querySelector('.closeBtn');

signin.addEventListener('click', function (){
    modal.classList.add('signup');
});
close.addEventListener('click', function(){
    modal.classList.remove('signup');
});