var users = [{
  userName: 'Aws',
  address: "street name / building 1/ apartment 1",
  phone: 0790000000,
  order: 'order details',
  lat: 31.971715,
  long: 35.8355179,
  createdAt: Date()
}, {
  userName: 'Husssam',
  address: "street name / building 2/ apartment 2",
  phone: 0790000000,
  order: 'order details',
  lat: 31.973715,
  long: 35.8375179,
  createdAt: Date()
}, {
  userName: 'Eshraq',
  address: "street name / building 3/ apartment 3",
  phone: 0790000000,
  order: 'order details',
  lat: 31.975715,
  long: 35.8395179,
  createdAt: Date()
}, {
  userName: 'Hadeel',
  address: "street name / building 4/ apartment 4",
  phone: 0790000000,
  order: 'order details',
  lat: 31.970715,
  long: 35.8335179,
  createdAt: Date()
}
];

//Angular App Module and Controller
angular.module('mapsApp', [])
  .controller('MapCtrl', function($scope) {

    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(31.971715, 35.8355179),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function(info) {

      var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(info.lat, info.long),
        user: info.userName,
        address: info.address,
        phone: info.phone
      });
      marker.content = '<div class="infoWindowContent">'+ info.order +'<br>'+ info.address +'<br>'+ info.phone +'<br>'+info.createdAt+ '</div>';

      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent('<h2>' + marker.user + '</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
      });

      $scope.markers.push(marker);

    }

    for (i = 0; i < users.length; i++) {
      createMarker(users[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker) {
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    }

  });

