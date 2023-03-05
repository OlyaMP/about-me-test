let myHeading = document.querySelector('h1'); //объявление переменной
myHeading.textContent = 'Hello World!'; //установка значения переменной

let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
};
let closeButton = document.querySelector('.close-popup');
closeButton.addEventListener('click', close);
function close() {
    loginPopup.classList.remove('show-popup');
};