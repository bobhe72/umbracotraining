//import breakpoint from 'js-breakpoints';

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const menuButtonIcon = document.querySelector(".fa-bars");

const showSubMenu = document.querySelector(".navigation__item-arrow");
const subMenu = document.querySelector(".navigation__sub-nav");

const header = document.querySelector(".header");

function menuSwitcher() {
    if (typeof menuButton !== 'undefined' && menuButton !== null) {
        menuButton.addEventListener("click",
        function(e) {
            header.classList.toggle("header--mobile-active");
            navigation.classList.toggle("navigation__mobile-active");
            menuButton.classList.toggle("menu-button--active");
            //menuButton.querySelector(".fas").classList.toggle("fa-times");
            //menuButton.querySelector(".fas").classList.toggle("fa-bars");
        });
        showSubMenu.addEventListener("click",
        function(f) {
            subMenu.classList.toggle("navigation__sub-nav--show");
            showSubMenu.classList.toggle("mySpire-icon-chevron-up");
        });
    }
}

export default menuSwitcher;
