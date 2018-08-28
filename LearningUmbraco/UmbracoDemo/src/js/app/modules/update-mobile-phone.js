//import divValidation from '../../lib/validations/dom/div-validation';
//import mobilePhoneValidate from '../regex/mobile-phone-validate';

//function updateMobilePhone(tagPhone, tagField) {

//    const update = document.getElementById(`${tagPhone}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagPhone}-container`);
//                const validationPassed =
//                    divValidation(container, false) && mobilePhoneValidate(`${tagPhone}-${tagField}`);
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagPhone}-changed`).value = "true";
//                return true;

//            });
//    }
//}

//export default updateMobilePhone;