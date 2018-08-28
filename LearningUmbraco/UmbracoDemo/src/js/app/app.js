
//import from other pages


import ajaxForms from '../shared/form-ajax-post.js'
import formEditCancel from '../shared/form-edit-cancel.js'



import menu from './pages/menu';
import findNewAdress from './pages/find-new-address';
import showMoreAppointment from './pages/show-more-appointment';
import showFilter from './pages/show-filter';

import passwordStrength from './forms/password-strength';
import addressSearch from './forms/address-search'

findNewAdress();

passwordStrength();

addressSearch();

if(document.querySelector(".navigation") !== null) {
    menu();
}

ajaxForms();

formEditCancel();

showMoreAppointment();

showFilter();



