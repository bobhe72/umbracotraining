//validate all text fields on a form
function defaultValidation(field) {
    var valtag = document.getElementById(field.id + "-validation");
    if (typeof valtag === 'undefined' || valtag === null) {
        valtag =  document.getElementById(field.name.replace(".", "_") + "-validation");
    }

    if (typeof valtag !== 'undefined' && valtag !== null) {
        const msgError = valtag.getAttribute('data-message');
        if (typeof msgError !== 'undefined' && msgError !== null && msgError !== "") {
            valtag.innerHTML = msgError;
        } else {
            valtag.innerHTML = ""; 
        }
    }

    return valtag;
}

export default defaultValidation;
