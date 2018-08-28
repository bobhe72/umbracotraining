import resetInputValues from '../base/reset-input-values';
import resetValidation from '../base/reset-validations';
import addSelectOption from '../../common/add-select-option';

function divInputReset(divElem) {

    const inputs = divElem.querySelectorAll('input, textarea');
    const selects =divElem.querySelectorAll('select');

    //hide clear any required element
    for (let i = 0; i < selects.length; i++) {
        if (selects[i].classList.contains("clear-content")) {
            addSelectOption(selects[i], "", "Please Select");
        }
    }

    //clear all input value and reset validations
    return resetInputValues(inputs, selects) && resetValidation(inputs, selects);
    
}

export default divInputReset;