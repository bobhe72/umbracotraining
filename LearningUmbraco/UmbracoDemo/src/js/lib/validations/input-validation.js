import showValidation from '../common/show-validation';

function inputValidation(formName) {

    try {
        const inValids = [];
        const inputs = document.forms[formName].getElementsByTagName('input');
        if (typeof inputs !== 'undefined' && inputs !== null) {
            for (let i = 0; i < inputs.length; i++) {
                const isValid = validateInput(inputs[i]);
                if (isValid !== "") {
                    inValids.push(isValid);
                    inputs[i].focus();
                }
            }
        }
        return !inValids.some(function(e) { return e !== null; });
    }
    catch (err)
    {
        console.log(err);
        return false;
    }
}

function validateInput(input) {

    //do text input validations
    if (isText(input) || isPassword(input)) {
        if (input.value === "") {
            return showValidation(input);
        }
    } else
    //do checkbox input validations
    if (isCheckbox(input)) {
        if (input.value !== "true" || !input.checked) {
            return showValidation(input);
        }
    } else
    //do radio button list input validations
    if (isRadio(input)) {
        const radios = document.getElementsByName(input.name);
        if (typeof radios !== 'undefined' && radios !== null) {
            let oneChecked = false;
            for (let j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    oneChecked = true;
                    break;
                }
            }

            //show validation message if none checked
            if (!oneChecked) {
                return showValidation(input);
            }
        }
    }

    return "";
}

function isCheckbox (element) {
    return element instanceof HTMLInputElement && element.getAttribute('type') === 'checkbox';
}

function isPassword (element) {
    return element instanceof HTMLInputElement && element.getAttribute('type') === 'password';
}

function isText (element) {
    return element instanceof HTMLInputElement && element.getAttribute('type') === 'text';
}

function isRadio (element) {
    return element instanceof HTMLInputElement && element.getAttribute('type') === 'radio';
}

export default inputValidation;