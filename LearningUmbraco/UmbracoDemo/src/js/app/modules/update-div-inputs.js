//import divValidation from '../../lib/validations/dom/div-validation';
 
//function updateDivInputs(tagId) {

//    const update = document.getElementById(`${tagId}-edit`);
//    if (typeof update !== 'undefined' && update !== null) {
//        update.addEventListener('click',
//            function(e) {
//                const container = document.getElementById(`${tagId}-container`);
//                const validationPassed = divValidation(container, false);
//                if (!validationPassed) {
//                    e.preventDefault();
//                    return divValidation(container, true);
//                }

//                document.getElementById(`${tagId}-changed`).value = "true";
//                return true;
//            });
//    }
//}

//export default updateDivInputs;