import regexValidation from '../../lib/validations/regex-validation';

function cardValidate(itemId) {

    const card = document.getElementById(itemId);
    if (typeof card !== 'undefined' && card !== null) {
        return cardNoValidate(card);
    }
    return true;
}

function cardNoValidate(input) {
    const pattern = "^[0-9]{15}(?:[0-9]{1})?$";
    const message ="Please enter a valid debit or credit card number";
    const validate = regexValidation(input, pattern, message);
    return validate === "";
}

export default cardValidate;