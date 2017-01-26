function initialize() {
  var myOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: {lat: gon.lat, lng: gon.lng },
    zoom: 12
  };

  var map = new google.maps.Map(document.getElementById('map'), myOptions);
//array of arrays containing latlng coords
  var lat_lng_array = gon.lat_lng_array;
  var infos = gon.info;

//Set empty array of markers
  var markers = [];

  for (var i = 0; i < lat_lng_array.length; i++) {
    var lat_lngs = new google.maps.LatLng(lat_lng_array[i][0], lat_lng_array[i][1]);
    var info = infos[i];
    addMarker(lat_lngs, info);
  };

  function addMarker(location, info) {
    var marker = new google.maps.Marker({
      position: location,
      animation: google.maps.Animation.DROP,
      map: map
    });
    marker.setMap(map);
    var content = "<p>"+"'"+info+"'"+"</p>";
    marker.infowindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', function() {
      this.infowindow.open(map, this);
    });
    markers.push(marker);
  }

  var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}