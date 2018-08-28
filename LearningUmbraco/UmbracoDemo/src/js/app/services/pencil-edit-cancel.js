import divInputReset from '../../lib/validations/dom/div-input-reset';
import divValidationReset from '../../lib/validations/dom/div-validation-reset';

function pencilEditCancel() {

    //get all pencil edit, cancel value enter onclick
    const penciltabs = document.querySelectorAll('.tabs-content__row-heading');
    for (let i = 0; i < penciltabs.length; i++) {

        //only act on those with id defined against
        const pencildivs = document.getElementById(penciltabs[i].id);
        if (typeof pencildivs !== 'undefined' && pencildivs !== null) {

            //get tab status and constainer to be triggered
            const header = document.getElementById(penciltabs[i].id);
            const tabOpened = document.getElementById(header.id.replace("-tab", "-open"));
            const container = document.getElementById(header.id.replace("-tab", "-container"));

            //get all element under tab 
            const pencilElm = pencildivs.querySelectorAll('div', 'span', 'input');
            for (let j = 0; j < pencilElm.length; j++) {

                pencilElm[j].addEventListener('click',
                    function(e) {

                        if (tabOpened.value === "false") {
                            header.classList.add("tabs-content__row-heading--edit-active");
                            header.parentElement.classList.add("tabs-content__row--edit-active");
                            header.parentElement.parentElement.classList.add("tabs-content__table--edit-active");
                            container.classList.add("tabs-content__table-edit-content--edit-active");
                            tabOpened.value = "true";

                        } else {
                            header.classList.remove("tabs-content__row-heading--edit-active");
                            header.parentElement.classList.remove("tabs-content__row--edit-active");
                            header.parentElement.parentElement.classList.remove("tabs-content__table--edit-active");
                            container.classList.remove("tabs-content__table-edit-content--edit-active");

                            //clear all input within the container
                            divInputReset(container);
                            divValidationReset(container);

                            tabOpened.value = "false";
                        }

                    });
            }
        }
    }

}

export default pencilEditCancel;

