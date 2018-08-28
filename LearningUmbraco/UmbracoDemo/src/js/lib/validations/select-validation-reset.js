import resetValidation from '../common/reset-validation';
import showValidation from '../common/show-validation';
import changeEventListener from '../events/change-event-listener';

function selectValidationReset(formName) {

    try {
        const selects = document.forms[formName].getElementsByTagName('select');
        if (typeof selects !== 'undefined' && selects !== null) {
            for (let i = 0; i < selects.length; i++) {
                changeEventListener(selects[i]);
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export default selectValidationReset;