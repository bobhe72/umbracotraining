//this script will validate birthday selection combo by pass in:
//day: id of day tag
//month: id of month tag
//year: id of year tag
//valTag: id of combo validation tag

import dateValidation from './date-validation';
import changeEventListener from '../events/change-event-listener';

function birthDateValidation(day, month, year, valTag) {

    if (typeof day !== 'undefined' && day !== null && day.value > 0
        && typeof month !== 'undefined' && month !== null && month.value > 0
        && typeof year !== 'undefined' && year !== null && year.value > 0)
    {
        const selDay = day.options[day.selectedIndex].value;
        const selMonth = month.options[month.selectedIndex].value;
        const selYear = year.options[year.selectedIndex].value;

        //perform validations
        const invalidDate = !dateValidation(selDay, selMonth, selYear);
        const futureDate = new Date(selYear, selMonth, selDay) > Date.now();

        //valiation failed
        if (invalidDate || futureDate) {
            if (typeof valTag !== 'undefined' && valTag !== null) {
                if (invalidDate) {
                    valTag.innerHTML = `${selDay}/${selMonth}/${selYear} is not a valid Date of Birth, please select again`;
                } else if (futureDate) {
                    valTag.innerHTML = "Date of Birth can't be in the future, please select again";
                }
            }
            day.focus();

            //add change changeEventListeners to reset validation
            changeEventListener(day, valTag);
            changeEventListener(month, valTag);
            changeEventListener(year, valTag);

            return false;
        }
    }

    return true;
}

export default birthDateValidation;