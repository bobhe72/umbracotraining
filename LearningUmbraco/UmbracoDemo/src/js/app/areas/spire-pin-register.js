//import resetValidation from '../../lib/common/reset-validation';
//import inputValidation from '../../lib/validations/input-validation';
//import inputValidationReset from '../../lib/validations/input-validation-reset';
//import selectValidation from '../../lib/validations/select-validation';
//import selectValidationReset from '../../lib/validations/select-validation-reset';
//import birthDateValidate from '../services/birth-date-validate';
//import emailValidate from '../regex/email-validate';
//import passwordValidate from '../regex/password-validate';

//function spirePinRegisterPage() {

//    //pin register form submit
//    const submitPinRegister = document.getElementById('submit-pin-register');
//    if (typeof submitPinRegister !== 'undefined' && submitPinRegister !== null) {
//        submitPinRegister.addEventListener('click',
//            function(e) {       
                
//                //reset validations
//                resetValidation();

//                //get all input elements validated, bind form name here
//                const validInputs = inputValidation('pin-register-form');

//                //get all select elements validated, bind form name here
//                const validSelect = selectValidation('pin-register-form');

//                //validate birthday (module validation is used here)
//                const validBirthDate = birthDateValidate('PinRegister-DateOfBirth');

//                //validate email is valid 
//                //const validEmail = emailValidate("pin-register-email");

//                //validate password meet the requirement and check confirmed password
//                const validPassword = passwordValidate("PinRegister-NewPassword-Password", "PinRegister-NewPassword-ConfirmPassword");

//                //all validation passed
//                const validationPassed = validInputs && validSelect && validBirthDate && validPassword;

//                //any validation failed
//                if (!validationPassed) {
//                    e.preventDefault();

//                    //bind select change event, bind form name here
//                    selectValidationReset('pin-register-form');

//                    //bind input change event, bind form name here
//                    inputValidationReset('pin-register-form');

//                    return false;
//                }

//                //continue after passed validations
//                return true;

//            });
//    }

//}

//export default spirePinRegisterPage;