var markers = [];

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

	var map = new google.maps.Map(document.getElementById('map'), myOptions);
	// var infowindow = new InfoBubble({
	//  	maxWidth: 300
	//  });

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
	 * assigns icon, creates marker, makes getDetails request and calls
	 * formatInfoWindow() Pushes marker to markers array for use in      * marker clusterer
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
		markers.push(marker);
		marker.infowindow = new InfoBubble({
			maxWidth: 300
		});
		var infos = gon.info;
		marker.info;
		for (var i = 0; i < markers.length; i++) {
			marker.info = infos[i];
		}
		//console.log(place);
		var service = new google.maps.places.PlacesService(map);

		service.getDetails({
			placeId: place.place_id
		}, function(place, status) {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				google.maps.event.addListener(marker, 'click', formatInfoWindow.bind(marker, place));
			};
		});
	};


	/*
	 * Gets returned details and assigns them to infowindow content
	 */
	function formatInfoWindow(place) {
		try {
			var placeInfo = {
				name: place.name,
				open: place.opening_hours.open_now,
				address: place.vicinity,
				phoneI: place.international_phone_number,
				phone: place.formatted_phone_number,
				rating: place.rating,
				reviewAuth: place.reviews[0].author_name,
				reviewText: place.reviews[0].text,
				reviewRate: place.reviews[0].rating,
				website: place.website,
				img: place.photos[0],
				photo: img.getUrl(),
				info: this.info
			}
			var contentTemplate = '<div class="infowindow"><strong><h1>##name##</h1></strong>' +
				'<address>##address##</address>' +
				'<p>Open Now: ##open##&nbsp;&nbsp;&nbsp; Rating: ##rating##&nbsp;&nbsp;&nbsp; ' + '<a href="##website##">Website</a></p>' +
				'<p><a href="tel:##phoneI##">##phone##</a></p>' +
				'<h3><b>Notes:</b></h3>' +
				'<p>##info##</p>' +
				'<h4>##reviewAuth##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: ##reviewRate##</h4>' +
				'<p>##reviewText##</p>' +
				'<img src="##photo##"></img>' +
				'</div>';
		} catch (e) {
			try {
				placeInfo = {
					name: place.name,
					open: place.opening_hours.open_now,
					address: place.vicinity,
					phoneI: place.international_phone_number,
					phone: place.formatted_phone_number,
					rating: place.rating,
					reviewAuth: place.reviews[0].author_name,
					reviewText: place.reviews[0].text,
					reviewRate: place.reviews[0].rating,
					website: place.website,
					info: this.info
				}
				var contentTemplate = '<div class="infowindow"><strong><h1>##name##</h1></strong>' +
					'<address>##address##</address>' +
					'<p>Open Now: ##open##&nbsp;&nbsp;&nbsp; Rating: ##rating##&nbsp;&nbsp;&nbsp; ' + '<a href="##website##">Website</a></p>' +
					'<p><a href="tel:##phoneI##">##phone##</a></p>' +
					'<h3><b>Notes:</b></h3>' +
					'<p>##info##</p>' +
					'<h4>##reviewAuth##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: ##reviewRate##</h4>' +
					'<p>##reviewText##</p>' +
					'</div>';
			} catch (e) {
				placeInfo = {
					name: place.name,
					address: place.vicinity,
					phoneI: place.international_phone_number,
					phone: place.formatted_phone_number,
					rating: place.rating,
					website: place.website,
					info: this.info
				}
				var contentTemplate = '<div class="infowindow"><strong><h1>##name##</h1></strong>' +
					'<address>##address##</address>' +
					'<h3><b>Notes:</b></h3>' +
					'<p>##info##</p>' +
					'</div>';
			}
		}


		//replaces var between ##'s with property of placeInfo object, or empty string
		var content = contentTemplate.replace(/##(.*?)##/g, function(match, prop) {
			return placeInfo[prop] || "";
		});

		this.infowindow.addTab('Basic', content)
		customInfo(this.infowindow, this.info);
		//infowindow.setContent(content);
		this.infowindow.open(map, this);
	}

	function customInfo(iWindow, placeInfo, content) {
		var iForm = document.getElementById('infoForm'),
			iTxt = document.getElementById('info'),
			addInfo = document.getElementById('infoBtn');
		iTxt.value = placeInfo.info;

		// addInfo.onclick = function() {
		// 	var firstInfo = placeInfo.info,
		// 		newPlaceInfo = iTxt.value;
		// 	content = content.toString();
		// 	content = content.replace(firstInfo, newPlaceInfo);
		// 	iWindow.updateTab(0, placeInfo.name, content);
		// 	$.post('maps/:map_id/markers/:marker_id/edit', {
		// 		info: newPlaceInfo
		// 	}, function(data, textStatus, xhr) {
		// 		/*optional stuff to do after success */
		// 	});
		// }

		iWindow.addTab('Form', iForm);
	}
	window.onload = function() {
		var markerCluster = new MarkerClusterer(map, markers, {
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
		});
	};
}
document.onload = initialize();