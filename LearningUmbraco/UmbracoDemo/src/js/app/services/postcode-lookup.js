import pcaPostcodeLookup from '../../lib/services/pca-postcode-lookup';

function postcodeLookup(tagAddress) {

    const button = document.getElementById(`${tagAddress}-lookup`);
    const section = document.getElementById(`${tagAddress}-section`);
    const select = document.getElementById(`${tagAddress}-select`);
    const postcode = document.getElementById(`${tagAddress}-Postcode`);
    const address1 = document.getElementById(`${tagAddress}-Address1`);
    const address2 = document.getElementById(`${tagAddress}-Address2`);
    const townCity = document.getElementById(`${tagAddress}-TownCity`);

    if (typeof button !== 'undefined' && button !== null
            && typeof section !== 'undefined' && section !== null
            && typeof select !== 'undefined' && select !== null
            && typeof postcode !== 'undefined' && postcode !== null
            && typeof address1 !== 'undefined' && address1 !== null
            && typeof address2 !== 'undefined' && address2 !== null
            && typeof townCity !== 'undefined' && townCity !== null
        ) {    
    pcaPostcodeLookup(button, section, select, postcode, address1, address2, townCity);
    }
}

export default postcodeLookup;

