import resetValidation from '../../lib/common/reset-validation';
import inputValidation from '../../lib/validations/input-validation';
import inputValidationReset from '../../lib/validations/input-validation-reset';
import selectValidation from '../../lib/validations/select-validation';
import selectValidationReset from '../../lib/validations/select-validation-reset';
import emailValidate from '../regex/email-validate';
import phoneValidate from '../regex/phone-validate';

function emergencyContactPage() {

    const formSubmit = document.getElementById('save-emergency-contact');
    if (typeof formSubmit !== 'undefined' && formSubmit !== null) {
        formSubmit.addEventListener('click',
            function(e) {
                
                //reset validations
                resetValidation();

                //get all input elements validated
                const validInputs = inputValidation('emergency-contact-form');

                //get all select elements validated
                const validSelect = selectValidation('emergency-contact-form');

                //validate email is valid
                const validEmail = emailValidate("emergency-contact-email");

                //validate phone is valid
                const validPhone = phoneValidate("emergency-contact-phone");

                //all validation passed
                const validationPassed = validInputs && validSelect && validEmail && validPhone;

                //any validation failed
                if (!validationPassed) {
                    e.preventDefault();

                    //bind select change event
                    selectValidationReset('emergency-contact-form');

                    //bind input change event
                    inputValidationReset('emergency-contact-form');

                    //stay on form
                    return false;
                }

                //continue after passed validations
                return true;
            });
    }
}

export default emergencyContactPage;