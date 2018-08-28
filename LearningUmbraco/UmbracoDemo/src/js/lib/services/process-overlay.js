function processOverlay(loadingText) {

    debugger;
    const wrapper = document.createElement("div");
    wrapper.id = "confirm-wrapper-spinner";

    const spinnerHtml =
        "<div class='spinner-center btn btn-default ld-ext-right running'><strong>" +
            loadingText +
            "</strong>" +
            "<div class='ld ld-ring ld-spin-fast'>" +
            "</div>" +
            "</div>";

    wrapper.innerHTML = spinnerHtml + "</div>";
    document.body.appendChild(wrapper);

    //cover the whole screen
    const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    wrapper.style.height = winHeight + "px";
    wrapper.style.display = 'block';
    wrapper.style.display = 1;

}

export default processOverlay;