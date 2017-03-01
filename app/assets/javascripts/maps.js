var markers = [],
	map,
	directionsBtn;

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
		directionsBtn = document.getElementById('directionsBtn'),
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
		var j = 0
		var interval = setInterval(function() {
			console.log("j=" + j);
			if (j >= placeIds.length) {
				console.log("clear" + j);
				clearInterval(interval);
			} else {
				var placeId = placeIds[j];
				console.log("dom Event calling place from IDs: " + j + placeId);
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
		console.log("in place from ID");
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
				id: marker.id
			}
			var contentTemplate =
				"<div class='infowindow'>" +
				"<strong><h1>##name##</h1></strong>" +
				"<address>##address##</address>" +
				"<p>" +
				"Open Now: ##open##&nbsp;&nbsp;&nbsp;" +
				"Rating: ##rating##&nbsp;&nbsp;&nbsp; " +
				"<a href='##website##''>Website</a>" +
				"</p>" +
				"<p><a href='tel:##phoneI##'>##phone##</a></p>" +
				"<h3><b>Notes:</b></h3>" +
				"<p>##info##</p>" +
				"<h4>##reviewAuth##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
				"Rating: ##reviewRate##" +
				"</h4>" +
				"<p>##reviewText##</p>" +
				"<img src='##photo##'></img>" +
				"</div>";
		} catch (e) {
			try {
				placeInfo = {
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
					id: marker.id
				}
				var contentTemplate =
					"<div class='infowindow'>" +
					"<strong><h1>##name##</h1></strong>" +

					"<address>##address##</address>" +

					"<p>" +
					"Open Now: ##open##&nbsp;&nbsp;&nbsp;" +
					"Rating: ##rating##&nbsp;&nbsp;&nbsp; " +
					"<a href='##website##''>Website</a>" +
					"</p>" +
					"<p><a href='tel:##phoneI##'>##phone##</a></p>" +
					"<h3><b>Notes:</b></h3>" +
					"<p>##info##</p>" +
					"<h4>##reviewAuth##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					"Rating: ##reviewRate##" +
					"</h4>" +
					"<p>##reviewText##</p>" +
					"</div>";
			} catch (e) {
				placeInfo = {
					name: place.name,
					address: place.vicinity,
					coords: place.geometry.location,
					phoneI: place.international_phone_number,
					phone: place.formatted_phone_number,
					rating: place.rating,
					website: place.website,
					info: marker.info,
					id: marker.id
				}
				var contentTemplate =
					"<div class='infowindow'>" +
					"<strong><h1>##name##</h1></strong>" +
					"<address>##address##</address>" +
					"<h3><b>Notes:</b></h3>" +
					"<p>##info##</p>" +
					"</div>";
			}
		}

		//replaces var between ##'s with property of placeInfo object, or empty string
		var content = contentTemplate.replace(/##(.*?)##/g, function(match, prop) {
			return placeInfo[prop];
		});

		marker.infowindow.addTab(placeInfo.name, content);

		document.onload = google.maps.event.addListener(marker, 'click', function() {

			editInfo(marker, placeInfo.name);
			addEvent(marker, marker.id);
			if (!marker.infowindow.isOpen()) {
				geoLocate(place);
				marker.infowindow.open(map, marker);
			}
		});
	}


	/*
	 *Creates infobubble tab with marker update form in it
	 */
	function editInfo(marker, name) {
		marker.infowindow.removeTab(2);
		//iForm.innerHTML = "";
		var id = marker.id,
			info = marker.info;
		var iForm =
			"<div id=infoForm >" +
			"<form action='/markers/" + id + "/update' method='patch'>" +
			"<p>" + name + "</p>" +
			"<p><textarea name='marker[info]' id='marker_info'>" + info + "</textarea></p>" +
			"<p><input type='submit' value='Update'></p>" +
			"</form>" +
			"</div>";

		marker.infowindow.addTab('Edit Info', iForm);
	};


	function addEvent(marker, id) {
		marker.infowindow.removeTab(2);
		var mapId = gon.map_id;
		var calForm =
			"<div id='calForm'>" +
			"<form class='new_event' id='new_event' enctype='multipart/form-data' action='/events' method='post'>" +
			"<div class='field'><label for='event_name'>Name:</label>" +
			"<input type='text' name='event[name]' id='event_name'></div>" +

			"<div class='field'>" +
			"<input type='hidden' name='event[map_id]' id='event_map_id' value='" + mapId + "'></div>" +

			"<div class='field'>" +
			"<input type='hidden' name='event[marker_id]' id='event_marker_id' value='" + id + "'></div>" +

			"<div class='field'><label for='event_start_time'>Start Date:</label>" +
			"<select id='event_start_time_1i' name='event[start_time(1i)]'>" +
			"<option value='2017'>2017</option>" +
			"<option value='2018'>2018</option>" +
			"<option value='2019'>2019</option>" +
			"<option value='2020'>2020</option>" +
			"<option value='2021'>2021</option>" +
			"<option value='2022'>2022</option>" +
			"<option value='2023'>2023</option>" +
			"<option value='2024'>2024</option>" +
			"</select>" +
			"<select id='event_start_time_2i' name='event[start_time(2i)]'>" +
			"<option value='1'>January</option>" +
			"<option value='2'>February</option>" +
			"<option value='3'>March</option>" +
			"<option value='4'>April</option>" +
			"<option value='5'>May</option>" +
			"<option value='6'>June</option>" +
			"<option value='7'>July</option>" +
			"<option value='8'>August</option>" +
			"<option value='9'>September</option>" +
			"<option value='10'>October</option>" +
			"<option value='11'>November</option>" +
			"<option value='12'>December</option>" +
			"</select>" +
			"<select id='event_start_time_3i' name='event[start_time(3i)]'>" +
			"<option value='1'>1</option>" +
			"<option value='2'>2</option>" +
			"<option value='3'>3</option>" +
			"<option value='4'>4</option>" +
			"<option value='5'>5</option>" +
			"<option value='6'>6</option>" +
			"<option value='7'>7</option>" +
			"<option value='8'>8</option>" +
			"<option value='9'>9</option>" +
			"<option value='10'>10</option>" +
			"<option value='11'>11</option>" +
			"<option value='12'>12</option>" +
			"<option value='13'>13</option>" +
			"<option value='14'>14</option>" +
			"<option value='15'>15</option>" +
			"<option value='16'>16</option>" +
			"<option value='17'>17</option>" +
			"<option value='18'>18</option>" +
			"<option value='19'>19</option>" +
			"<option value='20'>20</option>" +
			"<option value='21'>21</option>" +
			"<option value='22'>22</option>" +
			"<option value='23'>23</option>" +
			"<option value='24'>24</option>" +
			"<option value='25'>25</option>" +
			"<option value='26'>26</option>" +
			"<option value='27'>27</option>" +
			"<option value='28'>28</option>" +
			"<option value='29'>29</option>" +
			"<option value='30'>30</option>" +
			"<option value='31'>31</option>" +
			"</select></div>" +
			"<div class='field'><label for='event_end_time'>End Date:</label>" +
			"<select id='event_end_time_1i' name='event[end_time(1i)]'>" +
			"<option value='2017'>2017</option>" +
			"<option value='2018'>2018</option>" +
			"<option value='2019'>2019</option>" +
			"<option value='2020'>2020</option>" +
			"<option value='2021'>2021</option>" +
			"<option value='2022'>2022</option>" +
			"<option value='2023'>2023</option>" +
			"<option value='2024'>2024</option>" +
			"</select>" +
			"<select id='event_end_time_2i' name='event[end_time(2i)]'>" +
			"<option value='1'>January</option>" +
			"<option value='2'>February</option>" +
			"<option value='3'>March</option>" +
			"<option value='4'>April</option>" +
			"<option value='5'>May</option>" +
			"<option value='6'>June</option>" +
			"<option value='7'>July</option>" +
			"<option value='8'>August</option>" +
			"<option value='9'>September</option>" +
			"<option value='10'>October</option>" +
			"<option value='11'>November</option>" +
			"<option value='12'>December</option>" +
			"</select>" +
			"<select id='event_end_time_3i' name='event[end_time(3i)]'>" +
			"<option value='1'>1</option>" +
			"<option value='2'>2</option>" +
			"<option value='3'>3</option>" +
			"<option value='4'>4</option>" +
			"<option value='5'>5</option>" +
			"<option value='6'>6</option>" +
			"<option value='7'>7</option>" +
			"<option value='8'>8</option>" +
			"<option value='9'>9</option>" +
			"<option value='10'>10</option>" +
			"<option value='11'>11</option>" +
			"<option value='12'>12</option>" +
			"<option value='13'>13</option>" +
			"<option value='14'>14</option>" +
			"<option value='15'>15</option>" +
			"<option value='16'>16</option>" +
			"<option value='17'>17</option>" +
			"<option value='18'>18</option>" +
			"<option value='19'>19</option>" +
			"<option value='20'>20</option>" +
			"<option value='21'>21</option>" +
			"<option value='22'>22</option>" +
			"<option value='23'>23</option>" +
			"<option value='24'>24</option>" +
			"<option value='25'>25</option>" +
			"<option value='26'>26</option>" +
			"<option value='27'>27</option>" +
			"<option value='28'>28</option>" +
			"<option value='29'>29</option>" +
			"<option value='30'>30</option>" +
			"<option value='31'>31</option>" +
			"</select></div>" +
			"<div class='field'><label for='event_document'>Document</label>" +
			"<input type='file' name='event[document]' id='event_document'></div>" +
			"<div class='actions'>" +
			"<input type='submit' value='Create Event' name='commit'></div>" +
			"</form>" +
			"</div>";
		marker.infowindow.addTab('Add Event', calForm);
	};

	function getDirections(place, latLng) {
		directionsDisplay.setMap(map);
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
					showPosition(position, place)
			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

	function showPosition(position, place) {
		directionsBtn.onclick = function () {
			var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			getDirections(place, latLng);
		};
	};

};
