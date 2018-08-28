//import divValidation from '../../lib/validations/dom/div-validation';
//import passwordValidate from '../regex/password-validate';

//function updateNewPassword(tagPassword, tagField1, tagField2) {

//    const update = document.getElementById(`${tagPassword}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagPassword}-container`);
//                const validationPassed = divValidation(container, false) 
//                    && passwordValidate(`${tagPassword}-${tagField1}`,`${tagPassword}-${tagField2}`);
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagPassword}-changed`).value = "true";
//                return true;
//            });
//    }
//}

//export default updateNewPassword;