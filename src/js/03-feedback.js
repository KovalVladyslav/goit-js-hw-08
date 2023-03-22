import throttle from 'lodash.throttle';
const Form = document.querySelector('form');
const inputEL = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

let formData = {};

Form.addEventListener('input', throttle(onTextAreaInput, 500));

function onTextAreaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

Form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  if (inputEL.value !== '' && textareaEl.value !== '') {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    Form.reset();
    return;
  }
  alert('Fill in all fields');
}

populateTextArea();
function populateTextArea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    const formDataGet = JSON.parse(savedMessage);
    inputEL.value = formDataGet.email || '';
    textareaEl.value = formDataGet.message || '';
  }
}
