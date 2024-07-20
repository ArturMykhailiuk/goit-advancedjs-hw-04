const load = key => {
    try {
      const valueFromLS = localStorage.getItem(key);
  
      return valueFromLS === null ? undefined : JSON.parse(valueFromLS);
    } catch (err) {
      console.log(err);
    }
  };
  
const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };
  
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('.email');
    const messageInput = form.querySelector('.message');
    const formData = { email: "", message: "" };

    const storedFormData = load('feedback-form-state') || {};
    
    if (storedFormData.email) {
        emailInput.value = storedFormData.email;
        formData.email = storedFormData.email;
    }
    if (storedFormData.message) {
        messageInput.value = storedFormData.message;
        formData.message = storedFormData.message;
    }

    form.addEventListener('input', function(event) {
        const target = event.target;
        if (target.classList.contains('email')) {
            formData.email = (target.value).trim();
        } else if (target.classList.contains('message')) {
            formData.message = (target.value).trim();
        }

        save('feedback-form-state', formData);
    });
 
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!formData.email || !formData.message) {
            alert('Fill please all fields');
            return;
        }
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData.email = "";
        formData.message = "";
        emailInput.value = "";
        messageInput.value = "";
    });
});