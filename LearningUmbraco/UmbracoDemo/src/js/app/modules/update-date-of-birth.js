//import dateValidation from '../../lib/services/date-validation';
//import changeEventListener from '../../lib/events/change-event-listener';
//import divValidation from '../../lib/validations/dom/div-validation';
//import birthDateValidate from '../services/birth-date-validate';

//function updateDateOfBirth(tagDob) {

//    const update = document.getElementById(`${tagDob}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagDob}-container`);
//                const validationPassed = divValidation(container, false) 
//                    && birthDateValidate(tagDob);
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagDob}-changed`).value = "true";
//                return true;
//            });
//    }
//}

//export default updateDateOfBirth;