import triggerValidation from '../base/trigger-validations';
import resetValidation from '../base/reset-validations';

function divValidation(divElem, reset) {

    const inputs = divElem.querySelectorAll('input, textarea');
    const selects =divElem.querySelectorAll('select');
    return reset ? resetValidation(inputs, selects) : triggerValidation(inputs, selects);
}

export default divValidation;