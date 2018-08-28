function nhsNoValidation(input, message) {

    if (typeof input !== 'undefined' && input !== null && input.value.length > 1) {
        const validator = window.nhsNumberValidator;
        if (typeof validator !== 'undefined' && validator !== null) {
            const isValid = validator.validate(input.value.replace(/\s/g, ''));
            if (!isValid) {
                const valTag = document.getElementById(input.id + "-validation");
                if (typeof valTag !== 'undefined' && valTag !== null) {
                    valTag.innerHTML = message;
                    return false;
                }
            }
        }
    }
    return true;
}

export default nhsNoValidation;