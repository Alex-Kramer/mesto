
const popup = document.querySelector('.form');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.form__close-popup');

const popupToggle = function(){
  popup.classList.toggle('form_open');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);


// Находим форму в DOM
let formElement = document.querySelector('.form__admin'); 
let nameInput = document.querySelector('.form__name'); 
let jobInput = document.querySelector('.form__description');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;                   
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popupToggle);



