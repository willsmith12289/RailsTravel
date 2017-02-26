var markers = [];

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
	 *  when address in autocomplete is selected place_id is posted
	 *  to Marker.
	 *	Adds place_id to hidden form field before posted to marker model
	 */
	addressInput.addListener('places_changed', function() {
		var places = addressInput.getPlaces();
		places.forEach(function(place) {
			var placeId = place.place_id;
			placeInput.value = placeId;
		})
	});


	/*
	 * passes place_id from exisiting marker models to getPlaceFromId
	 * traverses hidden table and assigns place_id to the corresponding
	 * markers row
	 */
	document.addEventListener("DOMContentLoaded", function() {
		var placeIds = gon.place_id;
		var tRows = document.getElementsByTagName('tr');
		for (var i = 0; i < tRows.length; i++) {
			var placeId = placeIds[i];
			//placeId = placeId.toString();
			//placeId = placeId.trim();
			getPlaceFromId(placeId);
		};
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
				addMarker(place);
			}
		}
	};


	/*
	 * This function adds new markers from form to map
	 * Auto completes addressInput on form; then gets place on form    * submit. Passes place to createMarker.
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
			var placeId = place.place_id;
					// Create a marker for each place.
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
			position: place.geometry.location,
			clicked: false
		});
		markers.push(marker);
		marker.infowindow = new InfoBubble({
			maxWidth: 300
		});

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
	 * Creates infowindow template based on returned GetDetails request
	 * Replaces #variable# in template w/ corresponding placeInfo[prop]
	 * Opens infowindow w/ specified content
	 * calls editInfo to add tab w/ edit form
	 */
	function formatInfoWindow(place) {
		var infos = gon.info,
				ids = gon.markerId,
				pIDs = gon.place_id;
		pIDs.forEach(function(pID, i) {
			if (place.place_id === pID) {
				this.info = infos[i];
				this.id = ids[i];
			}
		}, this);
		if (this.clicked == false) {
			this.clicked = true;
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
					info: this.info,
					id: this.id
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
						info: this.info,
						id: this.id
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
						info: this.info,
						id: this.id
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
				return placeInfo[prop];
			});
			this.infowindow.addTab(placeInfo.name, content);
			this.infowindow.open(map, this);
			editInfo(this.infowindow, this.info, this.id, placeInfo.name);
		} else {
			this.infowindow.open(map, this);
		}
	}


	/*
	*Creates infobubble tab with marker update form in it
	*/
	function editInfo(iWindow, info, id, name) {
		var iForm = document.getElementById('infoForm');
		iForm.innerHTML =
			"<form action='/markers/" + id + "' method='patch'>" +
				"<p>" + name + "</p>" +
				"<p><textarea name='marker[info]' id='marker_info'>" + info + "</textarea></p>" +
				"<p><input type='submit' value='Update'></p>" +
			"</form>";
			iWindow.addTab('Form', iForm);
			if(this.clicked == true) {
				iForm.style.display = 'inherit';
			} else {
				iForm.style.display = 'hidden';
			}
	};


	window.onload = function() {
		var markerCluster = new MarkerClusterer(map, markers, {
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
		});
	};
}