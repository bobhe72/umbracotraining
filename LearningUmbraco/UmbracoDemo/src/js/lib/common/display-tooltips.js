function displayTooltips() {

    const toolTips = document.querySelectorAll('.tooltip');
    if (typeof toolTips !== 'undefined' && toolTips !== null) {
        for (let i = 0; i < toolTips.length; i++) {
            toolTips[i].addEventListener('mouseover',
                function(e) {
                    const tooltipClass = e.target.nextElementSibling;
                    if (typeof tooltipClass !== 'undefined' && tooltipClass !== null) {
                        tooltipClass.style.display = 'block';
                    }
                });

            toolTips[i].addEventListener('mouseout',
                function(e) {
                    const tooltipClass = e.target.nextElementSibling;
                    if (typeof tooltipClass !== 'undefined' && tooltipClass !== null) {
                        tooltipClass.style.display = 'none';
                    }
                });
        };
    }

}

export default displayTooltips;