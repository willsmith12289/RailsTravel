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
	var p = gon.place_id;
	console.log(p);
	//get latlngs from database and geocode them for a place.id to send to addMarker
	//geocodeLatLng();

	function geocodeLatLng() {
		var request = {
			placeId: gon.place_id
		};
		var service = new google.maps.places.PlacesService(map);
		service.getDetails(request, callback);

		function callback(place, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				addMarker(place);
			}
		}
	};

	submitBtn.onclick = function() {
		var Gplace = addressInput.getPlaces();
		console.log(Gplace);
		// For each place, get the icon, name and location.
		var bounds = new google.maps.LatLngBounds();
		Gplace.forEach(function(place) {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}
			// Create a marker for each place.
			addMarker(place);
			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}

			$.ajax({
				url: gon.path,
				type: "post",
				dataType: "json",
				data: JSON.stringify({
					place_id: place.place_id
				}),
				 success:function(result)//we got the response
       {
        alert('Successfully called');
       },
       error:function(exception){alert('Exeption:'+exception);}


			});
		});
		map.fitBounds(bounds);
	};

	function addMarker(place) {
		var icon = {
			url: place.icon,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(25, 25)
		};
		var marker = new google.maps.Marker({
			map: map,
			icon: icon,
			title: place.name,
			position: place.geometry.location
		});
		marker.infowindow = new google.maps.InfoWindow();

		console.log(place);
		var service = new google.maps.places.PlacesService(map);

		service.getDetails({
			placeId: place.place_id
		}, function(place, status) {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				google.maps.event.addListener(marker, 'click', function() {
					this.infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
						'Place ID: ' + place.place_id + '<br>' +
						place.formatted_address + '</div><br><p>' + place.formatted_phone_number + '</p>');
					this.infowindow.open(map, this);
				});
			};
		});
		markers.push(marker);
	};

	var markerCluster = new MarkerClusterer(map, markers, {
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	});
}