const feedbackFormEl = document.querySelector('form');
let formData = {
    email: '',
    message: '',
};

const fillForm = () => {
    try {
        if (localStorage.length === 0) {
            return;
        }

        const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

        formData = formDataFromLS;

        for (const key in formDataFromLS) {
            feedbackFormEl.elements[key].value = formDataFromLS[key];
        }
    } catch(err) {
        console.log(err);
    }
}
fillForm();

const changeOnForm = evn => {
    const { target: formFieldEl } = evn;

    const fieldValue = formFieldEl.value;

    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const onFeedbackSubmit = event => {
    event.preventDefault();

    for (const key in formData) {
        if (formData[key].trim() === '') {
            alert('Fill please all fields');
            return;
        }
    }

    const { currentTarget: formEl } = event;
    formEl.reset();
    localStorage.removeItem('feedback-form-state');
}

feedbackFormEl.addEventListener('input', changeOnForm);
feedbackFormEl.addEventListener('submit', onFeedbackSubmit);