

function resetInputValues(inputs, selects) {

    //reset validation for all inputs
    const resetInput = resetInputs(inputs);

    //reset validation for all selects
    const resetSelect = resetSelects(selects);

    //all passed
    return resetInput && resetSelect;
}

function resetInputs(inputs) {

    try {
        if (typeof inputs !== 'undefined' && inputs !== null) {
            for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = null;
            }
        }
    } catch (err) {
        console.log(err);
        return false;
    }

    return true;

}

function resetSelects(selects) {

    try {
        if (typeof selects !== 'undefined' && selects !== null) {
            for (let i = 0; i < selects.length; i++) {
                    selects[i].value = "";
            }
        }
    } catch (err) {
        console.log(err);
        return false;
    }

    return true;
}



export default resetInputValues;