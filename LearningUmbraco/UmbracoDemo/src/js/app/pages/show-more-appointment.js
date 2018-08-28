const showMore = document.querySelectorAll('.appointments__show-more');

const showMoreAppointments = function () {
    if (typeof showMore !== 'undefined' && showMore !== null) {
        showMore.forEach((el) => {
            el.addEventListener('click', function (e) {
                el.classList.toggle("appointments__show-more--active");
                el.parentElement.nextElementSibling.classList.toggle("appointments__option-container--active");
            });
        })
    }
}

export default showMoreAppointments;