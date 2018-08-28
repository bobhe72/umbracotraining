import defaultValidation from './default-validation';

//validate all text fields on a form
function showValidation(field) {
    if (typeof field !== 'undefined' && field !== null) {
        const valTag = defaultValidation(field);
        if (typeof valTag !== 'undefined' && valTag !== null) {
            return valTag.innerHTML; 
        }
    }

    return "";
}

export default showValidation;
