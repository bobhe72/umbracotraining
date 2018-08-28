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
//import updateCardNumber from '../modules/update-card-number';

//function myDetails() {

//    //activate all services
//    validateAcrtivatServices();

//    //validate MySpireProfile
//    validateUpdateMySpireProfile();

//    //validate PatientDetails
//    validateUpdatePatientDetails();

//    //validate AccountSettlement
//    validateUpdateAccountSettlement();

//}

//function validateUpdateMySpireProfile() {

//    //required fields validation only
//    updateDivInputs('MySpireProfile-TitleNameModule');

//    //required fields and regex validations
//    updateEmail('MySpireProfile-EmailModule', 'InputText');
//    updateNewPassword('MySpireProfile-PasswordModule', 'Password', 'ConfrimPassword'); 
//}

//function validateAcrtivatServices() {

//    postcodeLookup('PatientDetails-AddressModule');
//    postcodeLookup('PatientDetails-NextOfKinTitleNameAddressModule-Address');
//    updateGpDetails('PatientDetails-GpDetailsModule');    
//}

//function validateUpdatePatientDetails() {
    
//    //required fields validation only
//    updateDivInputs('PatientDetails-TitleNameModule');
//    updateDivInputs('PatientDetails-AddressModule');
//    updateDivInputs('PatientDetails-ReligionModule');
//    updateDivInputs('PatientDetails-NationalityModule');
//    updateDivInputs('PatientDetails-GpDetailsModule');
//    updateDivInputs('PatientDetails-NextOfKinNameAddressModule');
//    updateDivInputs('PatientDetails-NextOfKinRelationship');

//    //required field and regex validation
//    updateDateOfBirth('PatientDetails-DateOfBirthModule');

//    //all phone regex validations
//    updateMobilePhone('PatientDetails-MobilePhoneModule', 'InputText');
//    updatePhone('PatientDetails-HomePhoneModule', 'InputText');
//    updatePhone('PatientDetails-WorkPhoneModule', 'InputText');
//    updatePhone('PatientDetails-NextOfKinHomePhoneModule', 'InputText');

//    //all email regex validations
//    updateEmail('PatientDetails-EmailModule', 'InputText');
//    updateEmail('PatientDetails-NextOfKinEmailModule', 'InputText');
//}

//function validateUpdateAccountSettlement() {

//    //required fields validation only
//    updateDivInputs('AccountSettlement-MedicalInsurerModule');
//    updateDivInputs('AccountSettlement-MembershipNumberModule');
//    updateDivInputs('AccountSettlement-CardDetailsModule');

//    //required fields and regex validations
//    updateCardNumber('AccountSettlement-CardDetailsModule', 'CardNumber');
//}

//export default myDetails;