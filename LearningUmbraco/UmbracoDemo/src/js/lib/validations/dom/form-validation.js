import triggerValidation from './base/trigger-validations';
import resetValidation from './base/reset-validations';

function formValidation(formName, reset) {

    const inputs = document.forms[formName].getElementsByTagName('input');
    const selects = document.forms[formName].getElementsByTagName('select');
    return reset ? resetValidation(inputs, selects) : triggerValidation(inputs, selects);
}

export default formValidation;