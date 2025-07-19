let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
loadFormData();

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (!savedData) return;

  try {
    const parsedData = JSON.parse(savedData);
    if (parsedData.email) {
      form.elements.email.value = parsedData.email;
      formData.email = parsedData.email;
    }
    if (parsedData.message) {
      form.elements.message.value = parsedData.message;
      formData.message = parsedData.message;
    }
  } catch (error) {
    console.error('Error  localStorage', error);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Заполни оба поля');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
});
