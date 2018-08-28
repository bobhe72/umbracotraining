
import findNewAddress from '../app/pages/find-new-address';
import addressSearch from '../app/forms/address-search'


const ajaxStuff = () => {

	window.ajaxPostSuccess = function(response) {


		if (typeof response !== 'undefined' && response !== null) {


			const rhtml = $.parseHTML(response);
			//console.log('rhtml', rhtml)
			
			var targetId = rhtml[0].id;
					
			if (typeof targetId === 'undefined' || targetId === null) {
				targetId = rhtml[1].id;				
			}

			if (typeof targetId !== 'undefined' && targetId !== null) {

				console.log('targetId', targetId)
				
				//rebind validation
				$.validator.unobtrusive.parse("#" + targetId);

				//rebind edit cancel toggle event
				$("#" + targetId + "-toggle").on("click", formEditCancel);

				//rebind gp search 
				if (targetId === "UpdateGpDetails") {
					$.getScript("/src/js/shared/gp-details-search.js");
				}

                //remove pink validation border
				var srcElement = $("#" + targetId);		
				var srcParent = srcElement.parent();
				if(srcParent != null){
				    srcParent.removeClass("tabs-content__row--pink");
				}
				
				
				if(targetId == "UpdateMyDetailsAddress" || targetId == "UpdateNextOfKinTitleNameAddress") {
				    findNewAddress();
				    addressSearch();
				}
			}
		}
	}

	window.ajaxPostFailed = function(response) {
		if (typeof response !== 'undefined' && response !== null) {
			console.log("Ajax form post failure: " + response);
			dialog.alert({
				message: "Ajax post back form failed, please check details in log"
			});
		}
	}

}


export default ajaxStuff;