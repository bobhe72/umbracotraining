//import resetValidation from '../../lib/common/reset-validation';
//import inputValidation from '../../lib/validations/input-validation';
//import inputValidationReset from '../../lib/validations/input-validation-reset';
//import selectValidation from '../../lib/validations/select-validation';
//import selectValidationReset from '../../lib/validations/select-validation-reset';
//import birthDateValidate from '../services/birth-date-validate';

//function myDetailsPage() {

//    const formSubmit = document.getElementById('save-my-details');
//    if (typeof formSubmit !== 'undefined' && formSubmit !== null) {
//        formSubmit.addEventListener('click',
//            function(e) {
             
//                //reset validations
//                resetValidation();

//                //get all input elements validated
//                const validInputs = inputValidation();

//                //get all select elements validated
//                const validSelect = selectValidation();

//                //validate birthday is correct
//                const validBirthDate = birthDateValidate();

//                //all validation passed
//                const validationPassed = validInputs && validSelect && validBirthDate;

//                //any validation failed
//                if (!validationPassed) {
//                    e.preventDefault();

//                    //bind select change event
//                    selectValidationReset();

//                    //bind input change event
//                    inputValidationReset();

//                    return false;
//                }

//                //continue after passed validations
//                return true;
//            });
//    }
//}

//export default myDetailsPage;