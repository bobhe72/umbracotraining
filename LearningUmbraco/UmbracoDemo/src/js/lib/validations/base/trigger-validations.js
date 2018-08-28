import showValidation from '../../common/show-validation';

function triggerValidations(inputs, selects) {

    //validate all input within the form
    const inputVal = validateInputs(inputs);

    //validate all select within the form
    const selectVal = validateSelects(selects);

    //all passed
    return inputVal && selectVal;

}

function validateSelects(selects) {

    try {
        const inValids = [];
        if (typeof selects !== 'undefined' && selects !== null) {
            for (let i = 0; i < selects.length; i++) {
                const select = selects[i].options[selects[i].selectedIndex];
                if (typeof select !== 'undefined' && select !== null) {
                    if (select.value === "" || select.value === null) {
                        const validate = showValidation(selects[i]);
                        if (validate !== "") {
                            selects[i].focus();
                            inValids.push(validate);
                        }
                    }
                }
            }
        }

        return !inValids.some(function(e) { return e !== null; });
    } catch (err) {
        console.log(err);
        return false;
    }
}

function validateInputs(inputs) {

    try {
        const inValids = [];
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
    }else if (input.value === "") {
        return showValidation(input);
    }

    return "";
}

function isCheckbox (element) {
    return element instanceof HTMLInputElement && element.getAttribute('type') === 'checkbox';
}

function isRadio (element) {
    return element instanceof HTMLInputElement && element.getAttribute('type') === 'radio';
}

export default triggerValidations;