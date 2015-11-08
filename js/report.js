$(document).ready(function() {
	var compHeadline;
	var compContent;
	
	document.getElementById('currentLoc').addEventListener('click', function() {
		function getLocation() {
			if (navigator.geolocation) {
				$("#currentLoc").hide();
				$("#enterAddress").hide();
				$("#foundLocation").show();
				
				// Add text to finding location 
				var text1 = "<p class='greenText'>Location found.</p>";
				$("#foundLocation").append(text1);
					
				navigator.geolocation.getCurrentPosition(showPosition);
			} else { 
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		
		function showPosition(position) {
			var latVal = position.coords.latitude;
			var lngVal = position.coords.longitude;
			var locationInfo = "Latitude: " + latVal + "<br>Longitude: " + lngVal;	
			
			console.log("(TEST) locationInfo = " + locationInfo);
			
			// Reverse geocode location
			function initMap() {
			  var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 8,
				center: {lat: 40.731, lng: -73.997}
			  });
			  var geocoder = new google.maps.Geocoder;
			  var infowindow = new google.maps.InfoWindow;

			  document.getElementById('submit').addEventListener('click', function() {
				geocodeLatLng(geocoder, map, infowindow);
			  });
			}
		}
		
		getLocation();
	});

	document.getElementById('enterAddress').addEventListener('click', function() {
		$("#enterAddress").hide();
		$("#currentLoc").hide();
		$("#addressForm").show();
		
		// Search for city 
		document.getElementById('submitAddress').addEventListener('click', function() {
			var address = document.getElementById('addressQuery').value;
			console.log("(TEST) address = " + address);
			
			var geocoder = new google.maps.Geocoder();

			geocodeAddress(geocoder, address);
		});
		
		function geocodeAddress(geocoder, address) {
		  geocoder.geocode({'address': address}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				$("#addressForm").hide();
				$("#foundLocation").show();
				
				// Add text to found location
				var text2 = "<p class='greenText'>Location found.</p>";
				$("#foundLocation").append(text2);
				
			  var latVal = results[0].geometry.location.lat();
			  var lngVal = results[0].geometry.location.lng();
			  console.log("(TEST) latitude = " + latVal + ", longitude = " + lngVal);
			} else {
			  alert('Geocode was not successful for the following reason: ' + status);
			}
		  });
		}
	});

	document.getElementById('submitReport').addEventListener('click', function() {
		var reportSel;
		
		if($('#drugChoice').is(':checked')) { 
			reportSel = "drug"; 
		}
		else if($('#gangChoice').is(':checked')) { 
			reportSel = "gang";
		}
		else if($('#sexChoice').is(':checked')) {
			reportSel = "sex";
		}
		else if($('#violenceChoice').is(':checked')) {
			reportSel = "violence";
		}
		console.log("(TEST) reportSel = " + reportSel);
		
		compHeadline = document.getElementById('compHeadline').value;
		compContent = document.getElementById('compContent').value;
	});
}); 
