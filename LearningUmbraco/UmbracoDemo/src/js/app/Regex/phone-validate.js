import regexValidation from '../../lib/validations/regex-validation';

function phoneValidate(phoneId) {

    const phone = document.getElementById(phoneId);
    if (typeof phone !== 'undefined' && phone !== null) {
        return phoneNoValidate(phone);
    }

    return true;
}

function phoneNoValidate(input) {
    const pattern = "^[0-9-+s() ]*$";
    const message ="Please enter a valid phone number";
    const validate = regexValidation(input, pattern, message);
    return validate === "";
}

export default phoneValidate;