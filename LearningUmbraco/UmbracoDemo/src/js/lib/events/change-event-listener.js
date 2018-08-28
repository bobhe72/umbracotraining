import resetValidation from '../common/reset-validation';
import showValidation from '../common/show-validation';

function changeEventListener(select, validation)
{
    select.addEventListener('change',
        function(e) {
            const selected = select.options[e.target.selectedIndex];
            if (selected.value !== "" && selected.value !== null) {
                if (validation != null) {
                    validation.innerHTML = "";
                } else {
                    resetValidation(e.target);
                }
            } else {
                showValidation(e.target);
            }
        });
}

export default changeEventListener;