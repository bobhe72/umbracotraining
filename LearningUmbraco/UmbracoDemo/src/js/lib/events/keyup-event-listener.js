import resetValidation from '../common/reset-validation';
import showValidation from '../common/show-validation';

function keyupEventListener(keyup, validation)
{
    keyup.addEventListener('keyup',
        function(e) {
            if (e.target.value !== "" && e.target.value !== null) {
                if (validation != null) {
                    validation.innerHTML = "";
                } else {
                    resetValidation(e.target);
                }
            } else
                showValidation(e.target);
        });
}

export default keyupEventListener;