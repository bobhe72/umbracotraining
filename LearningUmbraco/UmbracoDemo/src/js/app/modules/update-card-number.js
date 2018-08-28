//import divValidation from '../../lib/validations/dom/div-validation';
//import cardValidate from '../regex/card-validate';

//function updateCardNumber(tagCard, tagField) {

//    const update = document.getElementById(`${tagCard}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagCard}-container`);
//                const validationPassed = divValidation(container, false) 
//                    && cardValidate(`${tagCard}-${tagField}`);
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagCard}-changed`).value = "true";
//                return true;
//            });
//    }
//}

//export default updateCardNumber;