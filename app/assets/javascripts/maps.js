var markers = [],
	map;
//directionsBtn;

function initialize() {
	var lat = parseFloat(gon.lat),
		lng = parseFloat(gon.lng);

	var myOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: {
			lat: lat,
			lng: lng
		},
		zoom: 12,
		scrollwheel: false,
		draggable: true,
	};

	var directionsService = new google.maps.DirectionsService(),
		directionsDisplay = new google.maps.DirectionsRenderer(),
		directionForm = document.getElementById('directionForm'),
		mapCanvas = document.getElementById('map'),
		map = new google.maps.Map(mapCanvas, myOptions),
		placeInput = document.getElementById('marker_place_id'),
		addressInput = new google.maps.places.SearchBox(document.getElementById('marker_raw_address')),
		form = document.getElementById('form'),
		markLat = document.getElementById('marker_latitude'),
		markLng = document.getElementById('marker_longitude');


	form.addEventListener("submit", autoComplete);
	map.addListener('bounds_changed', function() {
		addressInput.setBounds(map.getBounds());
	});


	/*
	 * passes place_id from exisiting marker models to getPlaceFromId
	 * traverses hidden table and assigns place_id to the corresponding
	 * markers row
	 */
	document.addEventListener("DOMContentLoaded", function() {
		var placeIds = gon.place_id;
		var id = gon.marker;
		var j = 0;
		console.log("j:" + j);
		var interval = setInterval(function() {
			if (j >= placeIds.length) {
				console.log("caling clear interval" + j);
				clearInterval(interval);
			} else {
				var placeId = placeIds[j];
				console.log("calling place from IDs: " + "j:" + j + "pID:" + placeId);
				j++;
				getPlaceFromId(placeId);
			};
		}, 100);
	});


	/*
	 * This function adds existing markers to map
	 * gets google place object through place service request with
	 * place_id's from above;
	 * Calls addMarker on returned place.
	 */
	function getPlaceFromId(place) {

		var request = {
			placeId: place
		};
		var service = new google.maps.places.PlacesService(map);
		service.getDetails(request, callback);

		function callback(place, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {

				setInterval(addMarker(place), 100);
			} else {
				setTimeout(function() {
					service.getDetails(request, callback);
				}, 500);
			};
		};
	};


	/*
	 * Auto completes addressInput on form; then gets place on form submit.
	 * Adds place_id to hidden Marker form field
	 * Passes place to addMarker.
	 * Redraws maps bounds to focus on new place/marker
	 */
	function autoComplete() {
		var Gplace = addressInput.getPlaces();
		var bounds = new google.maps.LatLngBounds();
		Gplace.forEach(function(place) {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}

			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
			console.log("In autoComplete");
			var placeId = place.place_id;
			placeInput.value = placeId;
			addMarker(place);
		});
		map.fitBounds(bounds);
	};


	/*
	 * assigns icon; creates marker pushes to markers array; 
	 * makes Getdetails request from places api
	 * binds formatInfoWindow() to the marker(this = this.marker)
	 */
	function addMarker(place) {
		console.log("in addMarker");
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
		markers.push(marker);
		marker.infowindow = new InfoBubble({
			maxWidth: 300
		});

		var markerCluster = new MarkerClusterer(map, markers, {
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
		});

		formatInfoWindow(marker, place);
	};

	/*
	 * Creates infowindow template based on returned GetDetails request
	 * Replaces #variable# in template w/ corresponding placeInfo[prop]
	 * Opens infowindow w/ specified content
	 * calls editInfo to add tab w/ edit form
	 */
	function formatInfoWindow(marker, place) {
		var infos = gon.info,
			ids = gon.markerId,
			pIDs = gon.place_id;
		pIDs.forEach(function(pID, i) {
			if (place.place_id === pID) {
				marker.info = infos[i];
				marker.id = ids[i];
			}
		}, marker);

		try {
			var placeInfo = {
				place: place,
				name: place.name,
				open: place.opening_hours.open_now,
				address: place.vicinity,
				coords: place.geometry.location,
				phoneI: place.international_phone_number,
				phone: place.formatted_phone_number,
				rating: place.rating,
				reviewAuth: place.reviews[0].author_name,
				reviewText: place.reviews[0].text,
				reviewRate: place.reviews[0].rating,
				website: place.website,
				img: place.photos[0],
				photo: img.getUrl(),
				info: marker.info,
				id: marker.id,
				mapId: gon.map_id
			}
		} catch (e) {
			try {
				placeInfo = {
					place: place,
					name: place.name,
					open: place.opening_hours.open_now,
					address: place.vicinity,
					coords: place.geometry.location,
					phoneI: place.international_phone_number,
					phone: place.formatted_phone_number,
					rating: place.rating,
					reviewAuth: place.reviews[0].author_name,
					reviewText: place.reviews[0].text,
					reviewRate: place.reviews[0].rating,
					website: place.website,
					info: marker.info,
					id: marker.id,
					mapId: gon.map_id
				}
			} catch (e) {
				placeInfo = {
					place: place,
					name: place.name,
					address: place.vicinity,
					coords: place.geometry.location,
					phoneI: place.international_phone_number,
					phone: place.formatted_phone_number,
					rating: place.rating,
					website: place.website,
					info: marker.info,
					id: marker.id,
					mapId: gon.map_id
				}
			}
		}
		var content = HandlebarsTemplates['infowindow'](placeInfo);
		marker.infowindow.addTab(placeInfo.name, content);
		var editContent = HandlebarsTemplates['editInfo'](placeInfo);
		marker.infowindow.addTab('Edit Info', editContent);
		var eventContent = HandlebarsTemplates['calendar'](placeInfo);
		marker.infowindow.addTab('Add Event', eventContent);

		var directionsContent = HandlebarsTemplates['travelMode'](place);
		marker.infowindow.addTab('Get Directions', directionsContent);

		document.onload = google.maps.event.addListener(marker, 'click', function() {
			if (!marker.infowindow.isOpen()) {
				geoLocate(place);
				marker.infowindow.open(map, marker);
				//directionForm.style.display = "inherit";
			}
		});
		// document.onload = google.maps.event.addListener(marker.infowindow, 'closeclick', function() {
		// 		directionForm.style.display = "none";
		// });
	}


	function getDirections(place, latLng) {
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById('right-panel'));
		// var control = document.getElementsByClassName('directionForm');
		// control.style.display = 'block';
		// map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
		var start = latLng,
			end = place.geometry.location,
			mode = document.getElementById('mode').value;
		var request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode[mode]
		};
		directionsService.route(request, function(result, status) {
			if (status == 'OK') {
				directionsDisplay.setDirections(result);
			} else {
				console.log("error: " + status);
			}
		});
	}


	function geoLocate(place) {

		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(function(position) {
				var directionsBtn = document.getElementsByClassName('directionsBtn');
				directionsBtn.onclick = showPosition(position, place);
			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}


	function showPosition(position, place) {
		console.log("here");
		var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		getDirections(place, latLng);
	};

};