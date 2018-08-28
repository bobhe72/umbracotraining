//import divValidation from '../../lib/validations/dom/div-validation';
//import phoneValidate from '../regex/phone-validate';

//function updatePhone(tagPhone, tagField) {

//    const update = document.getElementById(`${tagPhone}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagPhone}-container`);
//                const validationPassed = divValidation(container, false) && phoneValidate(`${tagPhone}-${tagField}`);
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagPhone}-changed`).value = "true";
//                return true;
//            });
//    }
//}

//export default updatePhone;