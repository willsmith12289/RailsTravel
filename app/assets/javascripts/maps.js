function initialize() {
	var myOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: {
			lat: gon.lat,
			lng: gon.lng
		},
		zoom: 12
	};
	//auto complete, set map, and bias autocomplete to current maps bounds
	var addressInput = new google.maps.places.SearchBox(document.getElementById('marker_raw_address'));
	var submitBtn = document.getElementById('markerFormSubmit');
	var map = new google.maps.Map(document.getElementById('map'), myOptions);
	map.addListener('bounds_changed', function() {
		addressInput.setBounds(map.getBounds());
	});

	var markers = [];
	// Listen for the event fired when the user selects a prediction and retrieve
	// more details for that place.
	submitBtn.onclick = function() {
		var places = addressInput.getPlaces();

		if (places.length == 0) {
			return;
		}

		// Clear out the old markers.
		// markers.forEach(function(marker) {
		// 	marker.setMap(null);
		// });
		markers = [];

		// For each place, get the icon, name and location.
		var bounds = new google.maps.LatLngBounds();
		places.forEach(function(place) {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}
			var icon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			// Create a marker for each place.
			markers.push(new google.maps.Marker({
				map: map,
				icon: icon,
				title: place.name,
				position: place.geometry.location
			}));

			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
	};

	// 	//push place objects into places array
	// 	var places = [];
	// 	var place = addressInput.getPlace()
	// 	places.push(place);


	// 	//Clear out the old places and add info property to marker
	// 	places.forEach(function(place) {
	// 		console.log(places);
	// 	});

	// 	// For each place, get the icon, name and location.
	// 	var bounds = new google.maps.LatLngBounds();
	// 	places.forEach(function(place) {
	// 		if (!place.geometry) {
	// 			console.log("Returned place contains no geometry");
	// 			return;
	// 		}
	// 		var icon = {
	// 			url: place.icon,
	// 			size: new google.maps.Size(71, 71),
	// 			origin: new google.maps.Point(0, 0),
	// 			anchor: new google.maps.Point(17, 34),
	// 			scaledSize: new google.maps.Size(25, 25)
	// 		};

	// 		// Create a marker for each place.
	// 		places.forEach(function(place) {
	// 			addMarker(place);
	// 		});

	// 		function addMarker(place) {
	// 			var marker = new google.maps.Marker({
	// 				map: map,
	// 				icon: icon,
	// 				title: place.name,
	// 				position: place.geometry.location
	// 			});
	// 			marker.setMap(map);
	// 			var content = "<p>" + info + "</p>";
	// 			marker.infowindow = new google.maps.InfoWindow({
	// 				content: content
	// 			});
	// 			var prevInfo = false;
	// 			google.maps.event.addListener(marker, 'click', function() {
	// 				if (prevInfo) {
	// 					prevInfo.close();
	// 				} else {
	// 					prevInfo = marker.infowindow;
	// 					this.infowindow.open(map, this);
	// 					this.setAnimation(google.maps.Animation.BOUNCE);
	// 					setTimeout(function() {
	// 						marker.setAnimation(null);
	// 					}, 2150)
	// 				}
	// 			});
	// 		}


	// 		if (place.geometry.viewport) {
	// 			// Only geocodes have viewport.
	// 			bounds.union(place.geometry.viewport);
	// 		} else {
	// 			bounds.extend(place.geometry.location);
	// 		}
	// 	});
	// 	map.fitBounds(bounds);


	// // //array of arrays containing latlng coords
	// //   var lat_lng_array = gon.lat_lng_array;
	// //   var infos = gon.info;

	// // //Set empty array of markers
	// //   var markers = [];

	// //   for (var i = 0; i < lat_lng_array.length; i++) {
	// // 	var lat_lngs = new google.maps.LatLng(lat_lng_array[i][0], lat_lng_array[i][1]);
	// // 	var info = infos[i];
	// // 	addMarker(lat_lngs, info);
	// //   };

	var markerCluster = new MarkerClusterer(map, markers, {
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	});
}