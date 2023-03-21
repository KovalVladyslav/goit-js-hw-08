import throttle from 'lodash.throttle';
const Form = document.querySelector('form');

let formData = {};

Form.addEventListener('input', throttle(onTextAreaInput, 500));

function onTextAreaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextArea() {
  try {
    const savedMessage = localStorage.getItem('feedback-form-state');
    const formDataGet = JSON.parse(savedMessage);
    Form.email.value = formDataGet.email;
    Form.message.value = formDataGet.message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
populateTextArea();
Form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  formValue.reset();
}
