import resetValidation from '../../lib/common/reset-validation';
import inputValidation from '../../lib/validations/input-validation';
import inputValidationReset from '../../lib/validations/input-validation-reset';

function consentAndTermsPage() {

    const formSubmit = document.getElementById('save-consent-and-terms');
    if (typeof formSubmit !== 'undefined' && formSubmit !== null) {
        formSubmit.addEventListener('click',
            function(e) {
                
                //reset validations
                resetValidation();

                //get all input elements validated
                const validInputs = inputValidation('consent-and-terms-form');

                //any validation failed
                if (!validInputs) {
                    e.preventDefault();

                    //bind input change event
                    inputValidationReset('consent-and-terms-form');

                    //stay on form
                    return false;
                }

                //continue after passed validations
                return true;
            });
    }
}

export default consentAndTermsPage;