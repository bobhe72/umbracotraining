import nhsNoValidation from '../../lib/services/nhs-no-validation';

function nhsNoValidate() {
    const input = document.querySelector(".nhs-number");
    const message = "Please enter a valid NHS number";
    return nhsNoValidation(input, message);
}

export default nhsNoValidate;