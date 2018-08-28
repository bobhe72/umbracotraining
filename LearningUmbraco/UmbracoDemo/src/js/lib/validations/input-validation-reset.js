import resetValidation from '../common/reset-validation';
import showValidation from '../common/show-validation';
import keyupEventListener from '../events/keyup-event-listener';

function inputValidationReset(formName) {

    try {
        const inputs = document.forms[formName].getElementsByTagName('input');
        if (typeof inputs !== 'undefined' && inputs !== null) {
            for (let i = 0; i < inputs.length; i++) {
                keyupEventListener(inputs[i]);
            }
        }
    } catch (err) {
        console.log(err);
    }

}

export default inputValidationReset;