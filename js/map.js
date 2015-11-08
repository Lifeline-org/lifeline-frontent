$(document).ready(function() {
	var latVal;
	var lngVal;
	var foundCenter;
	var map;
	
	// ------------- (Location Info) ----------------
	var denver = {lat: 39.7392358, lng: -104.990251};
	
	function initMap() {
		map = new google.maps.Map(document.getElementById("map-canvas"), {
			zoom: 10,
			center: foundCenter,
			styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
		});
		
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				
				map.setCenter(pos);
			});
		} else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
		
		// Generate legend 
		map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));
	}
	
	initMap();
	
	console.log("(TEST) " + mockData[0].location.latitude);
	
	document.getElementById('submitFind').addEventListener('click', function() {		
		if(document.getElementById('drugChoice').checked == true) {
			var drugHeatMapData = [];
		
			for(var i = 0; i < mockData.length; i++) {
				if(mockData[i].complaint == "drug") {
					drugHeatMapData.push(
						new google.maps.LatLng(mockData[i].location.latitude, mockData[i].location.longitude)
					);
				}
			}	
			
			var drugHeatMap = new google.maps.visualization.HeatmapLayer({
				data: drugHeatMapData,
				radius: 15,
				gradient: [
					'rgba(204, 255, 229, 0)',
					 'rgba(153, 255, 153, 1)',
					 'rgba(102, 255, 102, 1)',
					 'rgba(51, 255, 51, 1)',
					 'rgba(0, 204, 0, 1)',
					 'rgba(0, 102, 51, 1)'
				],
				map: map
			});

			drugHeatMap.setMap(map);
		}
		
		if(document.getElementById('gangChoice').checked == true) {
			var gangHeatMapData = [];
		
			for(var i = 0; i < mockData.length; i++) {
				if(mockData[i].complaint == "gang") {
					gangHeatMapData.push(
						new google.maps.LatLng(mockData[i].location.latitude, mockData[i].location.longitude)
					);
				}
			}	
			
			var gangHeatMap = new google.maps.visualization.HeatmapLayer({
				data: gangHeatMapData,
				radius: 15,
				gradient: [
					'rgba(255, 255, 204, 0)',
					 'rgba(255, 255, 153, 1)',
					 'rgba(255, 255, 102, 1)',
					 'rgba(255, 255, 0, 1)',
					 'rgba(153, 153, 0, 1)',
					 'rgba(102, 102, 0, 1)'
				],
				map: map
			});

			gangHeatMap.setMap(map);
		}
		
		if(document.getElementById('sexChoice').checked == true) {
			var sexHeatMapData = [];
		
			for(var i = 0; i < mockData.length; i++) {
				if(mockData[i].complaint == "sex") {
					sexHeatMapData.push(
						new google.maps.LatLng(mockData[i].location.latitude, mockData[i].location.longitude)
					);
				}
			}	
			
			var sexHeatMap = new google.maps.visualization.HeatmapLayer({
				data: sexHeatMapData,
				radius: 15,
				gradient: [
					'rgba(255, 204, 229, 0)',
					 'rgba(255, 153, 204, 1)',
					 'rgba(255, 102, 178, 1)',
					 'rgba(255, 0, 127, 1)',
					 'rgba(204, 0, 102, 1)',
					 'rgba(102, 0, 51, 1)'
				],
				map: map
			});

			sexHeatMap.setMap(map);
		}
		
		if(document.getElementById('violenceChoice').checked == true) {
			var violenceHeatMapData = [];
		
			for(var i = 0; i < mockData.length; i++) {
				if(mockData[i].complaint == "violence") {
					violenceHeatMapData.push(
						new google.maps.LatLng(mockData[i].location.latitude, mockData[i].location.longitude)
					);
				}
			}	
			
			var violenceHeatMap = new google.maps.visualization.HeatmapLayer({
				data: violenceHeatMapData,
				radius: 15,
				gradient: [
					'rgba(229, 204, 255, 0)',
					 'rgba(204, 153, 255, 1)',
					 'rgba(178, 102, 255, 1)',
					 'rgba(127, 0, 255, 1)',
					 'rgba(102, 0, 204, 1)',
					 'rgba(51, 0, 102, 1)'
				],
				map: map
			});

			violenceHeatMap.setMap(map);
		}
	});
});
