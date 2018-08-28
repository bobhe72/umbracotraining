import resetValidation from '../../lib/common/reset-validation';
import inputValidation from '../../lib/validations/input-validation';
import inputValidationReset from '../../lib/validations/input-validation-reset';
import nhsNoValidate from '../services/nhs-no-validate';
import cardValidate from '../regex/card-validate';

function accountSettlementPage() {

    const formSubmit = document.getElementById('save-account-settlement');
    if (typeof formSubmit !== 'undefined' && formSubmit !== null) {
        formSubmit.addEventListener('click',
            function(e) {
                
                //reset validations
                resetValidation();

                //get all input elements validated
                const validInputs = inputValidation('account-settlement-form');

                //validate NHS number
                const validNHSNo = nhsNoValidate();

                //validate credit card number
                const validCardNo = cardValidate();

                //all validation passed
                const validationPassed = validInputs && validNHSNo && validCardNo;

                //any validation failed
                if (!validationPassed) {
                    e.preventDefault();

                    //bind input change event
                    inputValidationReset('account-settlement-form');

                    //stay on form
                    return false;
                }

                //continue after passed validations
                return true;
            });
    }
}

export default accountSettlementPage;