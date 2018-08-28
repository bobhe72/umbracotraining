import birthDateValidation from '../../lib/services/birth-date-validation';

function birthDateValidate(tagDob) {

    const day = document.getElementById(`${tagDob}-Day`);
    const month = document.getElementById(`${tagDob}-Month`);
    const year = document.getElementById(`${tagDob}-Year`);
    const valTag = document.getElementById(`${tagDob}-validation-summary`);

    return birthDateValidation(day, month, year, valTag);
}

export default birthDateValidate;