/**
 * Geolocation
 */
 var map;
$(document).ready(function(){
  $('#location').blur(function(){
      var map = new GMaps({
      el: '#geolocation_map',
      lat: 51.5073346,
    lng: -0.1276831,
    });

      GMaps.geocode({
      address: $('#location').val(),
      callback: function(results, status) {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          map.setCenter(latlng.lat(), latlng.lng());
          map.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng()
          });
        }
      }
    });
  });
  
});