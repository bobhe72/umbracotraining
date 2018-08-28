//import resetValidation from '../../lib/common/reset-validation';
//import inputValidation from '../../lib/validations/input-validation';
//import inputValidationReset from '../../lib/validations/input-validation-reset';
//import emailValidate from '../regex/email-validate';

//function spireRegisterLoginPage() {

//    //display tab content
//    DisplayRegisterLoginTabs();

//    //trigger display tab content
//    TriggerRegisterLoginTabs();

//    //login form submit
//    const submitLogin = document.getElementById('submit-login');
//    if (typeof submitLogin !== 'undefined' && submitLogin !== null) {
//        submitLogin.addEventListener('click',
//            function(e) {             
//                //reset validations
//                resetValidation();

//                //get all input elements validated for this form
//                const validInputs = inputValidation('login-form');

//                //validate email is valid
//                //const validEmail = emailValidate('login-email');

//                //all validation passed
//                //const validationPassed = validInputs && validEmail;

//                //any validation failed
//                if (!validInputs) {
//                    e.preventDefault();

//                    //bind input change event
//                    inputValidationReset('login-form');

//                    return false;
//                }

//                //continue after passed validations
//                return true;
//            });
//    }
//}

//function TriggerRegisterLoginTabs() {

//    //pin request form trigger
//    const pinRequestTrigger = document.getElementById('pin-request-form-trigger');
//    if (typeof pinRequestTrigger !== 'undefined' && pinRequestTrigger !== null) {
//        pinRequestTrigger.addEventListener('click',
//            function(e) {
//                e.preventDefault();
//                DisplayRegisterForm("block", "none");
//            });
//    }

//    //pin register form trigger
//    const pinRegisterTrigger = document.getElementById('pin-register-form-trigger');
//    if (typeof pinRegisterTrigger !== 'undefined' && pinRegisterTrigger !== null) {
//        pinRegisterTrigger.addEventListener('click',
//            function(e) {
//                e.preventDefault();
//                DisplayRegisterForm("none", "block");
//            });
//    }
//}

//function DisplayRegisterLoginTabs() {
    
//    //get current stage tep
//    const pagestep = document.getElementById('home-page-step');
//    if (typeof pagestep !== 'undefined' && pagestep !== null) {

//        //set tab inner html with step set
//        if (pagestep.value === "3") {
//            document.getElementById('tab2').checked = true;
//        } else {
//            document.getElementById('tab1').checked = true;

//            //PageStep.PIN_REQUEST
//            if (pagestep.value === "1") {
//                DisplayRegisterForm("block", "none");
//            } else if (pagestep.value === "2") {
//                DisplayRegisterForm("none", "block");
//            } 
//        }
        
//        //bind postback message
//        ResetPostbackMessage();
//    }
//}

//function DisplayRegisterForm(request, register) {

//    //hide pin request triggers
//    const pinRequestTriggers = document.getElementById('pin-request-triggers');
//    if (typeof pinRequestTriggers !== 'undefined' && pinRequestTriggers !== null) {
//        pinRequestTriggers.style.display = 'none';
//    }
                
//    //hide pin request form
//    const pinRequestForm = document.getElementById('pin-request-form');
//    if (typeof pinRequestForm !== 'undefined' && pinRequestForm !== null) {
//        pinRequestForm.style.display = request;
//    }

//    //show pin register form
//    const pinRegisterForm = document.getElementById('pin-register-form');
//    if (typeof pinRegisterForm !== 'undefined' && pinRegisterForm !== null) {
//        pinRegisterForm.style.display = register;
//    }
//}

//function ResetPostbackMessage() {

//    const homeMessageClose = document.getElementById('home-message-close');
//    if (typeof homeMessageClose !== 'undefined' && homeMessageClose !== null) {
//        homeMessageClose.addEventListener('click',
//            function() {
//                window.location.href = window.location.href.split("&msg")[0];
//            });
//    }
//}

//export default spireRegisterLoginPage;