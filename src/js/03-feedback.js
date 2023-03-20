import throttle from 'lodash.throttle';
const Form = document.querySelector('form');

let formData = {};

Form.addEventListener('input', throttle(onTextAreaInput, 500));
Form.addEventListener('submit', onFormSubmit);
populateTextArea();

function onTextAreaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
function populateTextArea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const formDataGet = JSON.parse(savedMessage);
  Form.email.value = formDataGet.email;
  Form.message.value = formDataGet.message;
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
