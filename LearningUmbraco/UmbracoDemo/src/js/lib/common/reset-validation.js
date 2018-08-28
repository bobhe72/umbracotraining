import defaultValidation from './default-validation';

function resetValidation(field) {
    if (typeof field !== 'undefined' && field !== null) {
        const validation = defaultValidation(field);
        if (typeof validation !== 'undefined' && validation !== null) {
            validation.innerHTML = "";
        }

    } else {
        const errors = document.querySelectorAll(".field-validation-error");
        if (typeof errors !== 'undefined' && errors !== null) {
            for (let i = 0; i < errors.length; i++) {
                errors[i].innerHTML = "";
            }
        }     
    }

}

export default resetValidation;