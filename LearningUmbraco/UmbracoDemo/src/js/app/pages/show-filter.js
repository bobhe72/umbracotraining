const filterButton = document.querySelector(".filter-dropdown__toggle");
const filterContent = document.querySelector(".filter-dropdown__content");

function showFilter() {
    if (typeof filterButton !== 'undefined' && filterButton !== null) {
        filterButton.addEventListener("click",
        function(e) {
            filterContent.classList.toggle("filter-dropdown__content--active");
            filterButton.classList.toggle("filter-dropdown__toggle--active");
        });
    }
}

export default showFilter;