//function dashboardAppointment() {

//    //pastTiggerButton
//    const previousTiggerButton = document.getElementById('da-previous-trigger');
//    const upcomingTriggerButton = document.getElementById('da-upcoming-trigger');

//    if (typeof previousTiggerButton !== 'undefined' && previousTiggerButton !== null) {
//        previousTiggerButton.addEventListener('click',
//            function(e) {

//                e.preventDefault();

//                const upcoming = document.querySelectorAll('.da-upcoming');
//                for (let i = 0; i < upcoming.length; i++) {
//                    upcoming[i].style.display = "none";
//                }

//                const previous = document.querySelectorAll('.da-previous');
//                for (let i = 0; i < previous.length; i++) {
//                    previous[i].style.display = "block";
//                }

//                if (typeof upcomingTriggerButton !== 'undefined' && upcomingTriggerButton !== null) {
//                    previousTiggerButton.style.display = "none";
//                    upcomingTriggerButton.style.display = "block";
//                }

//                //change title
//                document.getElementById('da-title').innerHTML = "Previouse appointments";

//            });
//    }


//    //pastTiggerButton

//    if (typeof upcomingTriggerButton !== 'undefined' && upcomingTriggerButton !== null) {
//        upcomingTriggerButton.addEventListener('click',
//            function(e) {

//                e.preventDefault();

//                const upcoming = document.querySelectorAll('.da-upcoming');
//                for (let i = 0; i < upcoming.length; i++) {
//                    upcoming[i].style.display = "block";
//                }

//                const previous = document.querySelectorAll('.da-previous');
//                for (let i = 0; i < previous.length; i++) {
//                    previous[i].style.display = "none";
//                }

//                if (typeof previousTiggerButton !== 'undefined' && previousTiggerButton !== null) {
//                    previousTiggerButton.style.display = "block";
//                    upcomingTriggerButton.style.display = "none";
//                }

//                //change title
//                document.getElementById('da-title').innerHTML = "Upcoming appointments";

//            });
//    }

//}

//export default dashboardAppointment;