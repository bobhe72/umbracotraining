import addSelectOption from '../../lib/common/add-select-option';

function gpDetailsLookup(query, practiceList, practiceId, gpList, gpId) {

    var gpTimeout = null;

    //bind autocomplete event to practice search box
    if (typeof query !== 'undefined' && query !== null) {
        query.addEventListener('keyup',
            function() {

                const val = query.value;

                //input two or more characters
                if (val.length >= 2) {
                    if (gpTimeout != null) {
                        clearTimeout(gpTimeout);
                    }

                    //clear results
                    practiceList.innerText = null;
                    addSelectOption(gpList, "", "Please Select", "doctor-result");

                    //search gp service for results
                    LookupPracticeDetails(val, practiceId);

                }
            });
    }

    //get list of practices
    function LookupPracticeDetails(val, pracId) {
        gpTimeout = setTimeout(function() {

                gpTimeout = null;

                var gsRequest = new XMLHttpRequest();
                gsRequest.open('GET',
                    `/Umbraco/Api/GpSearchApi/Search?query=${val}`,
                    true
                );
                gsRequest.onload = function() {

                    if (gsRequest.status === 200) {
                        const response = JSON.parse(gsRequest.responseText);
                        if (response.length > 0) {

                            //popluate selction list
                            practiceList.innerText = null;
                            for (let i = 0; i < response.length; i++) {
                                const result = document.createElement('div');
                                result.className = 'practice-result';
                                result.setAttribute("data-val", response[i].Id);
                                result.innerHTML = response[i].Name;
                                practiceList.appendChild(result);
                            }

                            //show selection list and bind listener to each selection
                            if (practiceList.innerText !== null) {

                                //display practice list
                                practiceList.style.display = 'block';

                                //bind selection upon click
                                const gpSelections = document.querySelectorAll(".practice-result");
                                for (let j = 0; j < gpSelections.length; j++) {

                                    gpSelections[j].addEventListener('click',
                                        function(e) {

                                            //update hidden practice id
                                            pracId.value = e.target.getAttribute("data-val");

                                            //hide practice list
                                            practiceList.style.display = 'none';

                                            //clear current list and get gp details
                                            LookupGpDetails(pracId.value, e.target.innerHTML);
                                        });
                                }

                            }
                        }
                    }
                };
                gsRequest.send();

            },
            100);
    }

    //get list of gps
    function LookupGpDetails(consultantId, consultantName) {

        query.value = consultantName;

        var gpDetailsRequest = new XMLHttpRequest();
        gpDetailsRequest.open('GET',
            `/Umbraco/Api/GpSearchApi/GetGp?consultantId=${consultantId}`,
            true
        );
        gpDetailsRequest.onload = function() {

            if (gpDetailsRequest.status === 200) {

                const response = JSON.parse(gpDetailsRequest.responseText);
                if (response.length > 0) {

                    //add all doctors to gpList
                    addSelectOption(gpList, "", "Please Select", "doctor-result");
                    for (let i = 0; i < response.length; i++) {
                        addSelectOption(gpList, response[i].Id, response[i].Name, "doctor-result");
                    }

                    //bind selection of gpList
                    gpList.addEventListener('change',
                        function(e) {
                            const selected = gpList.options[e.target.selectedIndex];
                            if (selected.value !== "" && selected.value !== null) {
                                gpId.value = selected.value;
                            }
                        });

                }
            }
        };
        gpDetailsRequest.send();
    }


}

export default gpDetailsLookup;