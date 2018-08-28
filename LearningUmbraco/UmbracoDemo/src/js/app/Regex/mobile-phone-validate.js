import regexValidation from '../../lib/validations/regex-validation';

function mobilePhoneValidate(phoneId) {

    const phone = document.getElementById(phoneId);
    if (typeof phone !== 'undefined' && phone !== null) {
        return phoneNoValidate(phone);
    }

    return true;
}

function phoneNoValidate(input) {
    const pattern = "^(\\+44\\s?7\\d{3}|\\(?07\\d{3}\\)?)\\s?\\d{3}\\s?\\d{3}$";
    const message ="Please enter a valid UK mobile phone number";
    const validate = regexValidation(input, pattern, message);
    return validate === "";
}

export default mobilePhoneValidate;