import regexValidation from '../../lib/validations/regex-validation';

function passwordValidate(passwordId, confirmPasswordId) {

    const password = document.getElementById(passwordId);
    if (typeof password !== 'undefined' && password !== null) {
        const passwordVal = validatePassword(password);
        if (passwordVal && typeof confirmPasswordId !== 'undefined' && confirmPasswordId !== null) {
            const confirmPassword = document.getElementById(confirmPasswordId);
            if (typeof confirmPassword !== 'undefined' && confirmPassword !== null) {
                return validateConfirmedPassword(password, confirmPassword);
            }
        }
        return false;
    }
    return true;
}

function validatePassword(input) {
    const pattern = "^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\\d\\W])|(?=.*\\W)(?=.*\\d))|(?=.*\\W)(?=.*[A-Z])(?=.*\\d)).{8,}$";
    const message ="Please enter a password contain 1 upper, 1 lower letter, 1 number, 1 special character and a minimum of 8 characters";
    const validate =  regexValidation(input, pattern, message);
    return validate === "";
}

function validateConfirmedPassword(input1, input2) {
    const pattern = "^" + input2.value +"$";
    const message ="The password and confirmation password do not match.";
    const validate =  regexValidation(input1, pattern, message);
    return validate === "";
}

export default passwordValidate;