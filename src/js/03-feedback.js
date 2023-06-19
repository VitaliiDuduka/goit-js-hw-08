import _throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector("[name='email']");
const messageInput = document.querySelector("[name='message']");

feedbackForm.addEventListener('input', _throttle(onFormInput, 500));

function onFormInput() {
  const currentFormValues = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(currentFormValues));
}

window.onload = () => {
  if (!localStorage.getItem('feedback-form-state')) {
    return;
  }
  emailInput.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  messageInput.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
};

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    window.alert('Please input both email and message');
    return;
  }
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem('feedback-form-state');
}
