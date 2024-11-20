let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';

form.addEventListener('input', function handleClick(event) {
  const input = event.target.name;
  if (input === 'email' || input === 'message') {
    formData[input] = event.target.value.trim();
    localStorage.setItem(key, JSON.stringify(formData));
  }
});

const inputEmail = document.querySelector('input[name="email"]');
const inputMassage = document.querySelector('textarea[name="message"]');

const saveData = JSON.parse(localStorage.getItem(key));
if (saveData) {
  inputEmail.value = saveData.email;
  formData.email = saveData.email;
  inputMassage.value = saveData.message;
  formData.message = saveData.message;
}

form.addEventListener('submit', handleForm);
function handleForm(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(key);
    formData = {
      email: '',
      message: '',
    };
    (inputEmail.value = ''), (inputMassage.value = '');
  }
}
