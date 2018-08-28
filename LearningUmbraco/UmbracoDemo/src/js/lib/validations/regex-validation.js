import defaultValidation from '../common/default-validation';

function regexValidation(input, pattern, message) {
    if (typeof input !== 'undefined' && input !== null) {
        if (input.value.length > 0 && typeof pattern !== 'undefined' && pattern !== null) {
            const regex = new RegExp(pattern);
            if (!regex.test(input.value)) {
                const valTag = defaultValidation(input);
                if (typeof valTag !== 'undefined' && valTag !== null) {
                    valTag.innerHTML = message !== null ? message : "Please provide a valid entry";
                    return valTag.innerHTML;
                } 
            }
        }
    }
    return "";
}

export default regexValidation;