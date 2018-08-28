import divInputReset from '../../lib/validations/dom/div-input-reset';
 
function clearCurrentDiv(currentDiv) {
    if (typeof currentDiv !== 'undefined' && currentDiv !== null) {
        currentDiv(nameDiv);
    }
}

function clearOtherDivs(exclusion) {

    const nameDiv = document.getElementById('my-spire-profile-name-container');
    if (typeof nameDiv !== 'undefined' && nameDiv !== null && exclusion.id !== nameDiv.id) {
        divInputReset(nameDiv);
    }

    const emailDiv =  document.getElementById('my-spire-profile-email-container');
    if (typeof nameDiv !== 'undefined' && nameDiv !== null && exclusion.id !== emailDiv.id) {
        divInputReset(emailDiv);
    }

    const passwordDiv = document.getElementById('my-spire-profile-password-container');
    if (typeof nameDiv !== 'undefined' && nameDiv !== null && exclusion.id !== passwordDiv.id) {
        divInputReset(passwordDiv);
    }

    return true;
}

function resetFormInputs(exclusion) {

    const nameDiv = document.getElementById('my-spire-profile-name-container');
    if (typeof nameDiv !== 'undefined' && nameDiv !== null && exclusion.id !== nameDiv.id) {
        divInputReset(nameDiv);
    }

    const emailDiv =  document.getElementById('my-spire-profile-email-container');
    if (typeof nameDiv !== 'undefined' && nameDiv !== null && exclusion.id !== emailDiv.id) {
        divInputReset(emailDiv);
    }

    const passwordDiv = document.getElementById('my-spire-profile-password-container');
    if (typeof nameDiv !== 'undefined' && nameDiv !== null && exclusion.id !== passwordDiv.id) {
        divInputReset(passwordDiv);
    }

    return true;
}

export default clearOtherDivs