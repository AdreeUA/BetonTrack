// Инициализация Google Maps

var map;

function initMap() {
    var myLatlng = new google.maps.LatLng(55.1833422, 61.4259448);
    var uluru = {
        lat: 55.183236,
        lng: 61.433177
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 14,
        scrollwheel: false,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    });

    var image = {
        url: 'static/img/content/mark.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(52, 58),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Мокской Риф',
        icon: image
    });

    marker.setMap(map);

    // var contentString = '<div id="content">' +
    //     '<div id="siteNotice">' +
    //     '</div>' +
    //     '<h1 id="firstHeading" class="firstHeading">Толстей с удовольствием!</h1>' +
    //     '<div id="bodyContent">' +
    //     '<p><b>Мак</b> - жизнь слишком коротка, чтобы думать о здоровье.' +
    //     '</p>' +
    //     '<p></p>' +
    //     '</div>' +
    //     '</div>';;

    // var infowindow = new google.maps.InfoWindow({
    //     content: contentString
    // });

    // infowindow.open(map, marker);
    // marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    // });

}
