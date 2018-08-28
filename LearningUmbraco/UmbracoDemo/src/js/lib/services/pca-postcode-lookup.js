//This script call api method defined in umbraco api controller using mentor postcode anywhere service
//btnSearch: the address search button
//ddlContainer: the address dropdown list container, empty and hidden initially
//ddlAddress: the address dropdown list to be populated from lookup service
//postcode: postcode to lookup
//line1: address line 1
//line2: address line 2
//town: town or city name

import resetValidation from '../common/reset-validation';
import regexValidation from '../validations/regex-validation';

function pcaPostcodeLookup(btnSearch, ddlContainer, ddlAddress, postcode, line1, line2, town) {

    if (typeof btnSearch !== 'undefined' &&
        btnSearch !== null &&
        typeof ddlContainer !== 'undefined' &&
        ddlContainer !== null &&
        typeof ddlAddress !== 'undefined' &&
        ddlAddress !== null &&
        typeof postcode !== 'undefined' &&
        postcode !== null &&
        typeof line1 !== 'undefined' &&
        line1 !== null &&
        typeof line2 !== 'undefined' &&
        line2 !== null &&
        typeof town !== 'undefined' &&
        town !== null) {

        //get validation tag
        var searchError = document.getElementById(postcode.id + "-validation");

        //bind address list to dropdown list
        btnSearch.addEventListener('click',
            function(e) {
                e.preventDefault();

                //search address
                if (postcode.value.length > 0) {

                    var postcodeRequest = new XMLHttpRequest();
                    postcodeRequest.open('GET',
                        `/umbraco/api/addressapi/GetAddressList?postcode=${postcode.value}`,
                        true);
                    //console.log(postcodeRequest);
                    postcodeRequest.onload = function() {

                        //success
                        if (postcodeRequest.status === 200) {
                            const response = JSON.parse(postcodeRequest.responseText).PostPlaces;
                            if (response.length > 0) {

                                //load results from lookup
                                for (let i = 0; i < response.length; i++) {
                                    const addressOption = document.createElement('option');
                                    addressOption.value = response[i].Id;
                                    addressOption.text =
                                        response[i].Place +
                                        (response[i].Place ? ", " : "") +
                                        response[i].StreetAddress;
                                    ddlAddress.add(addressOption);
                                }

                                ddlContainer.style.display = 'block';

                            } else {
                                ddlContainer.style.display = 'none';
                                searchError.innerHTML = "No address found. Please enter your address manually.";
                            }

                        } else {
                            ddlContainer.style.display = 'none';
                            searchError.innerHTML = "Serice is not availabled. Please enter your address manually.";
                        }
                    };
                    postcodeRequest.send();
                    postcodeRequest.onerror = function() {
                        ddlContainer.style.display = 'none';
                        searchError.innerHTML = "Serice error. Please enter your address manually.";
                    };
                } else {
                    ddlContainer.style.display = 'none';
                    searchError.innerHTML = "Please enter a postcode";
                }

            });

        //bind select to get address details
        ddlAddress.addEventListener('change',
            function() {
                const lookupId = this.value;
                if (lookupId !== "" && lookupId !== null) {

                    //request for address details
                    var addressRequest = new XMLHttpRequest();
                    addressRequest.open('GET',
                        `/umbraco/api/addressapi/GetFullAddress?addressId=${lookupId}`,
                        true);
                    addressRequest.onload = function() {

                        if (addressRequest.status === 200) {
                            const details = JSON.parse(addressRequest.responseText);
                            if (details != null) {
                                line1.value = details.Line1;
                                line2.value = details.Line2;
                                town.value = details.PostTown;
                                postcode.value = details.Postcode;

                                //rest validations
                                resetValidation(line1);
                                resetValidation(line2);
                                resetValidation(town);
                                resetValidation(postcode);
                            }
                        } else {
                            searchError.innerHTML = "Serice error. Please enter your address manually.";
                        }
                        ddlContainer.style.display = 'none';
                    };
                    addressRequest.send();
                    addressRequest.onerror = function() {
                        ddlContainer.style.display = 'none';
                        searchError.innerHTML = "Serice error. Please enter your address manually.";
                    };
                }
            });

    }
}

export default pcaPostcodeLookup;

