import $ from 'jquery'

const passwordStrength = () => {

    //hide strength checker
    $('.password-validation').hide();

    //bind key up event
    $('#NewPassword_Password').keyup(function() {
        if ($('#NewPassword_Password').val() !== "") {
            $('.password-validation').show();
            $('#strength_value').html(checkStrength($('#NewPassword_Password').val()));
        } else {
            $('.password-validation').hide();
        }
    });

    //calculate strength
    function checkStrength(password) {
        var strength = 0;
        if (password.length > 7) strength += 1;
        // If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
        // If it has numbers and characters, increase strength value.
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;
        // If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
        // If it has two special characters, increase strength value.
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;

        // Calculated strength value, we can return messages
        // If value is less than 2
        if (strength < 2) {
            PowerReset();
            $('#strength_power_1').addClass('password-validation__bar-item--weak');
            return 'Weak';
        } else if (strength === 2) {
            PowerReset();
            $('#strength_power_1').addClass('password-validation__bar-item--weak');
            $('#strength_power_2').addClass('password-validation__bar-item--weak');
            return 'Weak';
        } else if (strength === 3) {
            PowerReset();
            $('#strength_power_1').addClass('password-validation__bar-item--strong');
            $('#strength_power_2').addClass('password-validation__bar-item--strong');
            $('#strength_power_3').addClass('password-validation__bar-item--strong');
            return 'Good';
        } else if (strength === 4) {
            PowerReset();
            $('#strength_power_1').addClass('password-validation__bar-item--strong');
            $('#strength_power_2').addClass('password-validation__bar-item--strong');
            $('#strength_power_3').addClass('password-validation__bar-item--strong');
            $('#strength_power_4').addClass('password-validation__bar-item--strong');
            return 'Strong';
        }else {
            PowerReset();
            $('#strength_power_1').addClass('password-validation__bar-item--strong');
            $('#strength_power_2').addClass('password-validation__bar-item--strong');
            $('#strength_power_3').addClass('password-validation__bar-item--strong');
            $('#strength_power_4').addClass('password-validation__bar-item--strong');
            $('#strength_power_5').addClass('password-validation__bar-item--strong');
            return 'Strong';
        }
    }

    function PowerReset() {
        const indicators = document.querySelectorAll('.password-validation__bars');
        indicators.forEach((e) => {
            e.classList.remove("password-validation__bar-item--strong");
            e.classList.remove("password-validation__bar-item--weak");
        });
    }
}

export default passwordStrength;