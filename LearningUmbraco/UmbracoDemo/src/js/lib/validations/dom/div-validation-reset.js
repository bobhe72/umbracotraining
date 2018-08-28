import resetValidation from '../../common/reset-validation';

function divValidationReset(divElem) {

    const inputs = divElem.querySelectorAll('input, textarea');
    const selects =divElem.querySelectorAll('select');

    //clear all validation for inputs
    for (let i = 0; i < inputs.length; i++) {
        resetValidation(inputs[i]);
    }

    //clear all validation for select
    for (let i = 0; i < selects.length; i++) {
        resetValidation(selects[i]);
    }
}

export default divValidationReset;