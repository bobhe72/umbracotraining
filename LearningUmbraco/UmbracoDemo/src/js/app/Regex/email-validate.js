import regexValidation from '../../lib/validations/regex-validation';

function emailValidate(emailId) {

    const email = document.getElementById(emailId);
    if (typeof email !== 'undefined' && email !== null) {
        return emailAddressValidate(email);
    }
    return true;

}

function emailAddressValidate(input) {
    const pattern = "^.+@.+\\..+$";
    const message = "Please enter a valid email address";
    const validate = regexValidation(input, pattern, message);
    return validate === "";
}

export default emailValidate;