//import divValidation from '../../lib/validations/dom/div-validation';
//import emailValidate from '../regex/email-validate';

//function updateEmail(tagEmail, tagField) {

//    const update = document.getElementById(`${tagEmail}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagEmail}-container`);
//                const validationPassed = divValidation(container, false) 
//                    && emailValidate(`${tagEmail}-${tagField}`);
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagEmail}-changed`).value = "true";
//                return true;
//            });
//    }
//}

//export default updateEmail;