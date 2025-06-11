const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
};


const saveFormData = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


const handleSubmit = (e) => {
  e.preventDefault();
  
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  
  if (!email || !message) {
    alert('Please fill in both fields before submitting.');
    return;
  }
  
  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};


form.addEventListener('input', saveFormData);
form.addEventListener('submit', handleSubmit);


document.addEventListener('DOMContentLoaded', loadFormData);