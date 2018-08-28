//import resetValidation from '../../lib/common/reset-validation';
//import inputValidation from '../../lib/validations/input-validation';
//import inputValidationReset from '../../lib/validations/input-validation-reset';
//import emailValidate from '../regex/email-validate';

//function spirePinRequestPage() {

//    //pin register form submit
//    const submitLogin = document.getElementById('submit-pin-reguest');
//    if (typeof submitLogin !== 'undefined' && submitLogin !== null) {
//        submitLogin.addEventListener('click',
//            function(e) {       
                
//                //reset validations
//                resetValidation();

//                //get all input elements validated, bind form name here
//                const validInputs = inputValidation('pin-request-form');

//                //validate email is valid
//                //const validEmail = emailValidate("pin-request-email");

//                //all validation passed
//                //const validationPassed = validInputs && validEmail;

//                //any validation failed
//                if (!validInputs) {
//                    e.preventDefault();

//                    //bind input change event, bind form name here
//                    inputValidationReset('pin-request-form');

//                    //stay on form
//                    return false;
//                }

//                //continue after passed validations
//                return true;
//            });
//    }
//}

//export default spirePinRequestPage;