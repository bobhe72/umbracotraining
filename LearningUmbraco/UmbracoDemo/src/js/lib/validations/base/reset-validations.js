import keyupEventListener from '../../events/keyup-event-listener';
import changeEventListener from '../../events/change-event-listener';

function resetValidations(inputs, selects) {

    //reset validation for all inputs
    const inputReset = resetInputValidation(inputs);

    //reset validation for all selects
    const selectReset = resetSelectValidation(selects);

    //all passed
    return inputReset && selectReset;

}

function resetInputValidation(inputs) {

    try {
        //const inputs = document.forms[formName].getElementsByTagName('input');
        if (typeof inputs !== 'undefined' && inputs !== null) {
            for (let i = 0; i < inputs.length; i++) {
                keyupEventListener(inputs[i]);
            }
        }
    } catch (err) {
        console.log(err);
        return false;
    }

    return true;
}

function resetSelectValidation(selects) {

    try {
        //const selects = document.forms[formName].getElementsByTagName('select');
        if (typeof selects !== 'undefined' && selects !== null) {
            for (let i = 0; i < selects.length; i++) {
                changeEventListener(selects[i]);
            }
        }
    } catch (err) {
        console.log(err);
        return false;
    }

    return true;
}

export default resetValidations;