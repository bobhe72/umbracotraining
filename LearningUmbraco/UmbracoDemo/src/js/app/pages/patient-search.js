import resetValidation from '../../lib/common/reset-validation';
import inputValidation from '../../lib/validations/input-validation';
import inputValidationReset from '../../lib/validations/input-validation-reset';

function patientSearchPage() {

    const formSubmit = document.getElementById('save-patient-search');
    if (typeof formSubmit !== 'undefined' && formSubmit !== null) {
        formSubmit.addEventListener('click',
            function(e) {              
                //reset validations
                resetValidation();

                //get all input elements validated
                const validInputs = inputValidation('patient-search-form');

                //any validation failed
                if (!validInputs) {
                    e.preventDefault();

                    //bind input change event
                    inputValidationReset();

                    return false;
                }

                //continue after passed validations
                return true;
            });
    }
}

export default patientSearchPage;