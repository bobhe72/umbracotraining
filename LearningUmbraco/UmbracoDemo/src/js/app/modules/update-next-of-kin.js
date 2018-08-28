//import divValidation from '../../lib/validations/dom/div-validation';
//import emailValidate from '../regex/email-validate';
//import phoneValidate from '../regex/phone-validate';

//function updateNextOfKin(tagNok) {

//    const update = document.getElementById(`${tagNok}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagNok}-container`);
                
//                const validationPassed = divValidation(container, false) 
//                    && emailValidate(`${tagNok}-EmailModule}`)
//                    && phoneValidate(`${tagNok}-HomePhoneModule}`);

//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagNok}-changed`).value = "true";
//                return true;
//            });
//    }
//}

//export default updateNextOfKin;