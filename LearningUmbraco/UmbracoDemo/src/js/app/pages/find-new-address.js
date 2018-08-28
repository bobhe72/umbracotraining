import pcaPostcodeLookup from '../../lib/services/pca-postcode-lookup';


function newAddress() {
	
	
    window.initNewAddress = function(){

        var findAddressButton= $(".find-address-button");

        findAddressButton.on("click", function(){
            $(this).parent().next().toggleClass("find-new-address--active");
        });

		//var findAddressButton = document.querySelectorAll(".find-address-button");
		//var newAddressCont = document.querySelector(".find-new-address");

		//if (typeof findAddressButton !== 'undefined' && findAddressButton !== null) {
		//	findAddressButton.forEach((el) => {
		//		el.addEventListener('click',
		//			function() {
		//				el.parentElement.nextElementSibling.classList.toggle("find-new-address--active");

		//			});
		//	});
		//}   
	}

	window.initNewAddress();
}

export default newAddress;