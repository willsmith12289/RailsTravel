function initialize() {

	var myOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: {
			lat: gon.lat,
			lng: gon.lng
		},
		zoom: 12,
		scrollwheel: false,
		draggable: true,
	};
	var markers = [];
	var map = new google.maps.Map(document.getElementById('map'), myOptions);

	//auto complete / bias autocomplete to current maps bounds
	var addressInput = new google.maps.places.SearchBox(document.getElementById('marker_raw_address'));
	var form = document.getElementById('form');
	form.addEventListener("submit", autoComplete);
	var placeInput = document.getElementById('marker_place_id');
	map.addListener('bounds_changed', function() {
		addressInput.setBounds(map.getBounds());
	});


	/*
	 *  when address in autocomplete is selected place_id is posted to Marker
	 */
	addressInput.addListener('places_changed', function() {
		var places = addressInput.getPlaces();
		places.forEach(function(place) {
			var placeId = place.place_id;
			placeInput.value = placeId;
		})
	});


	/*
	 * grab correct place_id and info from marker model
	 */
	 document.addEventListener("DOMContentLoaded", function() {
	 	var tRows = document.getElementsByTagName('tr');
		for (var i = 0; i < tRows.length; i++) {
			var placeId = tRows[i].cells[6].textContent;
			placeId = placeId.toString();
			placeId = placeId.trim();
			console.log(placeId);
			getPlaceFromId(placeId);
		};
	 });
	

	/*
	 * Make place service request on place_id passed from dom event listener
	 */
	function getPlaceFromId(place) {
		var request = {
			placeId: place
		};
		var service = new google.maps.places.PlacesService(map);
		service.getDetails(request, callback);

		function callback(place, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				addMarker(place);
			}
		}
	};


	/*
	 * get place on form submit and call createMarker on place
	 */
	function autoComplete() {
		var Gplace = addressInput.getPlaces();

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
			var placeId = place.place_id;
		});
		map.fitBounds(bounds);
	};


	/*
	 * assigns icon, creates marker/infowindow, populates w/ getDetails request
	 * Pushes marker to markers array for use in marker clusterer
	 */
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

		//console.log(place);
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