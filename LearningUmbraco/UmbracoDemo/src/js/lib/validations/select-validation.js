import showValidation from '../common/show-validation';

function selectValidation(formName) {

    try {
        const inValids = [];
        const selects = document.forms[formName].getElementsByTagName('select');
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

export default selectValidation;