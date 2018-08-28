import $ from 'jquery'

var initials = [];

const formStuff = () => {

    window.formEditCancel = function(e) {

        //console.log(e.target);
        //if (e.target.parentNode.classList.contains("tabs-content__row-heading--edit-active")) {
        //    //confirm cancellation
        //    dialog.confirm({
        //        title: "Are you sure to cancel all changes?",
        //        message: "Please note, all information you entered will be reverted!",
        //        cancel: "Confirm cancel",
        //        button: "Continue edit",
        //        required: true,
        //        callback: function(confirmed) {
        //            if (confirmed) {
        //                //restore previous values
        //                getPreviousValues(e.target.parentNode.parentNode.id);

        //                //reset form validation
        //                resetFormValidation(e.target.parentNode.parentNode.id);

        //                //hide edit section
        //                e.target.parentNode.classList.toggle("tabs-content__row-heading--edit-active");
        //                e.target.parentNode.nextElementSibling.classList.toggle("tabs-content__table-edit-content--edit-active");

        //            }
        //        }
        //    });

        //} else {

        //other form is open
        const activeForms = document.querySelectorAll('.tabs-content__table-edit-content--edit-active');
        //if (initials.length > 0 && activeForms.length > 0) {
        //    dialog.alert({
        //        message: "You can only edit one form at a time.<br/>please save or cancel other changes before continue."
        //    });
        //} else {

        //store form data
        storePreviousValues(e.target.parentNode.parentNode.id);

        //show edit panel
        e.target.parentNode.classList.toggle("tabs-content__row-heading--edit-active");
        e.target.parentNode.nextElementSibling.classList.toggle("tabs-content__table-edit-content--edit-active");
        // }
        //}
    }


    function storePreviousValues(formid) {
        initials = [];
        $('input,select', 'form').each(function() {
            if ($(this).closest('form')[0].id === formid) {
                initials.push({
                    formid: $(this).closest('form')[0].id,
                    type: $(this).attr('type'),
                    name: $(this).attr('name'),
                    value: $(this).val()
                });
            }
        });
    }

    function getPreviousValues(formid) {

        for (let i = 0; i < initials.length; i++) {
            if (initials[i].formid === formid) {
                $('input[type="' + initials[i].type + '"][name="' + initials[i].name + '"]', 'form')
                    .val(initials[i].value);
            }
        }
    }

    function resetFormValidation(formid) {
        const validator = $("#" + formid).validate();
        if (typeof validator !== 'undefined' && validator !== null) {
            validator.resetForm();
        }
        $(".field-validation-error").empty();
    }


    $(".tabs-content__table-edit").on("click",
        function(e) {
            formEditCancel(e);
        });

    //patient information search
  
    $(".patient-info-filter #cancel-search").on("click", function () {
        $(".filter-dropdown__search .input").val('');
        if ($(this).hasClass("mySpire-icon-cross")) {
            $(this).removeClass("mySpire-icon-cross");
            $(this).addClass("mySpire-icon-search");

            $(".filter-dropdown__toggle").removeClass("filter-dropdown__toggle--active");

            $(".filter-dropdown__content").removeClass("filter-dropdown__content--active");

            $(".filter-dropdown__list > li").each(function () {
                $(this).show();
            });
						           
        }

    });

    $(".patient-info-filter .filter-dropdown__search .input").on("keyup", function () {
								
        var val = $(this).val();
								
        if ($("#cancel-search").hasClass("mySpire-icon-search")) {
            $("#cancel-search").removeClass("mySpire-icon-search");
            $("#cancel-search").addClass("mySpire-icon-cross");
        }

        $(".filter-dropdown__list > li").each(function () {
            if ($(this).text().search(val) > -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });

    });
}


export default formStuff;