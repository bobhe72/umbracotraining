
$(function() {

    var gpSearch = $(".gp-search");
    if (gpSearch.length > 0) {

        console.log('gp-search enabled');

        var gpTimeout = null;

        //practice
        var practiceName = gpSearch.find(".practice-name");
        var practiceList = gpSearch.find(".gp-results");
        var practiceVal = gpSearch.find(".practice-val");

        //doctor
        var doctorVal = gpSearch.find(".doctor-val");
        var doctorList = gpSearch.find(".doctor-list");

        //not registered
        const noGpTrigger = gpSearch.find(".no-gp");
        var noGPVal = gpSearch.find(".no-gp-val");

        //post back values
        const post = gpSearch.find(".gp-search-submit");
        var noGpChecked = gpSearch.find(".no-gp-checked");
        var practiceId = gpSearch.find(".practice-id");
        var doctorId = gpSearch.find(".doctor-id");
        var doctorName = gpSearch.find(".doctor-name");

        //hide field
        doctorList.parent().hide();
        practiceList.hide();
        if (!noGpChecked.prop('checked')) {
            noGpChecked.parent().hide();
        }

        //submit form
        post.on("click",
            function(e) {
                //e.preventDefault();
                if (noGpChecked.prop('checked')) {
                    $(this).parent('form').submit();
                } else if (noGpTrigger.val() !== "" && !noGpChecked.prop('checked')) {
                    e.preventDefault();
                    noGPVal[0].innerHTML = "Please confirm you are not registered with a GP Practice";
                } else if (!practiceName.val()) {
                    e.preventDefault();
                    practiceVal[0].innerHTML = "Please search GP by enter practice name";
                } else if (!doctorId.val()) {
                    e.preventDefault();
                    doctorVal[0].innerHTML = "Please select a GP";
                } else {
                    $(this).parent('form').submit();
                }
            });

        if (practiceId.val() !== '') {
            LookupGpDetails(practiceId.val(), doctorId);
        }

        practiceName.on("keyup",
            function() {

                //clear validation and uncheck no gp
                $(".field-validation-error").empty();

                //clear current selections
                noGpChecked.parent().hide();
                noGpChecked.prop("checked", false);
                noGpTrigger.val('');
                practiceId.val('');
                doctorId.val('');

                //ready to search GP
                var val = $(this).val();
                if (val.length >= 2) {

                    if (gpTimeout != null) {
                        clearTimeout(gpTimeout);
                    }

                    gpTimeout = setTimeout(function() {
                            gpTimeout = null;

                            $.get("/Umbraco/Api/GpSearchApi/Search?query=" + val,
                                function(response) {

                                    practiceList.empty();
                                    for (let i = 0; i < response.length; i++) {
                                        const result = response[i];

                                        practiceList.append("<div data-val='" +
                                            result.Id +
                                            "' class='gp-result'>" +
                                            result.Name +
                                            "</div>");
                                    }

                                    const gpResult = gpSearch.find(".gp-result");

                                    initClickGpResult(gpResult);
                                    practiceList.show();
                                });
                        },
                        100);

                } else {
                    practiceList.empty();
                }
            });

        //user click on no GP link
        noGpTrigger.on("click",
            function() {

                $(".field-validation-error").empty();
                noGpTrigger.val('1');
                noGpChecked.parent().show();

                practiceId.val('');
                practiceName.val('');
                practiceList.empty();

                doctorId.val('');
                doctorList.empty().append($('<option>',
                    {
                        value: '',
                        text: 'Please Select'
                    }));
                doctorList.parent().hide();
            });

        function initClickGpResult(gpResult) {
            gpResult.unbind();
            doctorList.empty().append($('<option>',
                {
                    value: '',
                    text: 'Please Select'
                }));

            gpResult.on("mousedown",
                function() {
                    $(".field-validation-error").empty();
                    practiceName.unbind("focusout");
                    const consultantId = $(this).attr("data-val");
                    const address = $(this).text();
                    practiceName.val(address);
                    LookupGpDetails(consultantId);

                    //get id of the selected practice
                    practiceId.val(consultantId);
                });
        }

        function LookupGpDetails(consultantId, gpid) {
            $.get("/Umbraco/Api/GpSearchApi/GetGp?consultantId=" + consultantId,
                function(response) {

                    noGpChecked.prop("checked", false);
                    noGpChecked.parent().hide();
                    practiceList.hide();

                    if (response.length === 0) {
                        doctorVal[0].innerHTML = "No GP available for this practice, please search again";
                    } else {

                        for (let i = 0; i < response.length; i++) {
                            doctorList.append($('<option>',
                                {
                                    value: response[i].Id,
                                    text: response[i].Name
                                }));

                        }
                        doctorList.parent().show();
                        $(this).addClass("gp-selected");

                        //if there is a matched gp 
                        if (typeof gpid !== 'undefined' && gpid !== null) {
                            if (gpid.val() !== "") {
                                doctorList.val(gpid.val());
                            }
                        }

                        doctorList.on('click',
                            function() {
                                $(".field-validation-error").empty();
                                doctorId.val($(this).val());
                                doctorName.val($(this).find('option:selected').text());
                            });

                    }
                });

        }
    }
});
