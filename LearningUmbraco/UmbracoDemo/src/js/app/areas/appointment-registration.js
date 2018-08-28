////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Important Notice <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
////>>>>>>>>>>  Make sure all element id hard coded here match exist in html  <<<<<<<<<<< //
////>>>>>>>  An easy way to debug is to match Id specified here with what on page  <<<<<< //

//import postcodeLookup from '../services/postcode-lookup';

//import updateDivInputs from '../modules/update-div-inputs';
//import updateEmail from '../modules/update-email';
//import updateNewPassword from '../modules/update-new-password';
//import updatePhone from '../modules/update-phone';
//import updateMobilePhone from '../modules/update-mobile-phone';
//import updateDateOfBirth from '../modules/update-date-of-birth';
//import updateGpDetails from '../modules/update-gp-details';
//import updateNextOfKin from '../modules/update-next-of-kin';
//import showValidation from '../../lib/common/show-validation';
//import resetValidation from '../../lib/common/reset-validation';


//function appointmentRegistration() {

//    //activate all services
//    validateAcrtivatServices();

//    //validate Appointment Registration
//    validateUpdateAppointmentRegistration();

//    //submit register
//    validateAppointmentRegistrationMandatory();

//}

//function validateAcrtivatServices() {

//    postcodeLookup('AppointmentRegistration-AddressModule');
//    postcodeLookup('AppointmentRegistration-NextOfKinModule-Address');
//    updateGpDetails('AppointmentRegistration-GpDetailsModule');    
//}

//function validateUpdateAppointmentRegistration() {
    
//    //required fields validation only
//    updateDivInputs('AppointmentRegistration-TitleNameModule');
//    updateDivInputs('AppointmentRegistration-AddressModule');
//    updateDivInputs('AppointmentRegistration-GpDetailsModule');
//    updateDivInputs('AppointmentRegistration-MedicalInsurerModule');
//    updateDivInputs('AppointmentRegistration-MembershipNumberModule');

//    //required field and regex validation
//    updateDateOfBirth('AppointmentRegistration-DateOfBirthModule');

//    //all phone regex validations
//    updatePhone('AppointmentRegistration-HomePhoneModule', 'InputText');
//    updateMobilePhone('AppointmentRegistration-MobilePhone', 'InputText');
//    updatePhone('AppointmentRegistration-WorkPhoneModule', 'InputText');

//    //next of kin module
//    updateNextOfKin('AppointmentRegistration-NextOfKinModule');

//}

//function validateAppointmentRegistrationMandatory() {
//    const update = document.getElementById("submit-appointment-registration");
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                //reset

//                const tmValid = document.getElementById('TermsAccepted');
//                if (!tmValid.checked) {
//                    showValidation(tmValid);
//                } else {
//                    resetValidation(tmValid);
                    
//                }
//                const tnValid = document.getElementById('AppointmentRegistration-TitleNameModule-valid');
//                if (tnValid.value !== "True") {
//                    tnValid.focus();
//                }
//                const adValid = document.getElementById('AppointmentRegistration-AddressModule-valid');
//                if (adValid.value !== "True") {
//                    adValid.focus();
//                }
//                const gpValid = document.getElementById('AppointmentRegistration-GpDetailsModule-valid');
//                if (gpValid.value !== "True") {
//                    gpValid.focus();
//                }
//                const nkValid = document.getElementById('AppointmentRegistration-NextOfKinModule-valid');
//                if (nkValid.value !== "True") {
//                    nkValid.focus();
//                }
//                const inValid = document.getElementById('AppointmentRegistration-MedicalInsurerModule-valid');
//                if (inValid.value !== "True") {
//                    inValid.focus();
//                }
//                const mnValid = document.getElementById('AppointmentRegistration-MembershipNumberModule-valid');
//                if (mnValid.value !== "True") {
//                    mnValid.focus();
//                }

//                //make sure all passed
//                const validationPassed = tnValid.value === "True" &&
//                    adValid.value === "True" &&
//                    gpValid.value === "True" &&
//                    nkValid.value === "True" &&
//                    inValid.value === "True" &&
//                    mnValid.value === "True" &&
//                    tmValid.checked;

//                //any validation failed
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return false;
//                } 
                    
//                return true;
                
//            });
//    }
//}

//export default appointmentRegistration;