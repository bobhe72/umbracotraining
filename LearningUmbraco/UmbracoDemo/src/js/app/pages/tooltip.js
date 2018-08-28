const tooltipIcon = document.querySelectorAll('.mySpire-icon-info');

const tooltip = function () {
    if (typeof tooltipIcon !== 'undefined' && tooltipIcon !== null) {
        tooltipIcon.forEach((el) => {
            el.addEventListener('click', function (e) {
                el.nextElementSibling.classList.toggle("tooltip__content--active");
                el.classList.toggle("mySpire-icon-info---active");
            });
        })
    }
}

export default tooltip;