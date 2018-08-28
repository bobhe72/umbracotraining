import $ from 'jquery'

const addressSearch = () => {

	window.AddressSearch = function(){

	    $(".address-search .search-box__submit").unbind("click");
		$(".address-search .search-box__submit").on("click", function (e) {

			e.preventDefault();
			var wrapper = $(this).parents().eq(2);
			var input = wrapper.find(".search-box__input");
			var postcode = input.val();

			if (postcode !== "") {
				wrapper.find(".dropdown__select").empty();
				$.get('/umbraco/api/addressapi/GetAddressList?postcode=' + postcode,
			        function(response) {

			        	wrapper.find(".address-section").show();
			        	wrapper.find(".dropdown__select").append($('<option>').val('').text('Please Select'));

			        	for (var i = 0; i < response.PostPlaces.length; i++) {
			        		wrapper.find(".dropdown__select").append($('<option>').val(response.PostPlaces[i].Id)
			                    .text(response.PostPlaces[i].StreetAddress));
			        	}

			        	wrapper.find(".dropdown__select").on("change",
			                function() {

			                	var id = $(this).val();
			                	$.get('/umbraco/api/addressapi/GetFullAddress?addressId=' + id,
			                        function(data) {
			                        	wrapper.parent().find(".address1").find("input").val(data.Line1);
			                        	wrapper.parent().find(".address2").find("input").val(data.Line2);
			                        	wrapper.parent().find(".addresscity").find("input").val(data.PostTown);
			                        	wrapper.parent().find(".addresspostcode").find("input").val(data.Postcode);

			                        });

			                });

			        });
			} else {
				wrapper.find(".address-section").hide();
				wrapper.find(".postcode-validation").html("Please enter postcode");
				input.on('keyup',
			        function() {
			        	wrapper.find(".postcode-validation").html("");
			        });
			}
		});

	}

	window.AddressSearch();
}

export default addressSearch;