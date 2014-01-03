// var map;
// var ajaxRequest;
// var plotlist;
// var plotlayers=[];

function initmap() {
	// set up the map
	// map = new L.Map('map');
	var yadgir = L.latLng(16.7537,77.1482);

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © OpenStreetMap contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 10, maxZoom: 15, attribution: osmAttrib});		
	// var yadgir = L.latLng(16.7537,77.1482);


	var schoolIcon = L.icon({
	    iconUrl: 'school.png',
	    iconSize:     [16, 16], // size of the icon
	    iconAnchor:   [8, 8], // point of the icon which will correspond to marker's location
	    popupAnchor:  [0,-9] // point from which the popup should open relative to the iconAnchor
	});


	var hospitalIcon = L.icon({
	    iconUrl: 'hospital.png',
	    iconSize:     [24, 24], // size of the icon
	    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
	    popupAnchor:  [0,-9] // point from which the popup should open relative to the iconAnchor
	});


	// function createPopup (feature, layer) {
	//         layer.bindPopup(feature.properties['name']).openPopup();
	// };


	var schoolLayer = L.geoJson(schools, { pointToLayer: function(feature , latlng){ return L.marker(latlng, { icon:schoolIcon});},
	onEachFeature: createPopup
	});

	var hospitalLayer = L.geoJson(hospital, { pointToLayer: function(feature , latlng){ return L.marker(latlng, { icon:hospitalIcon});},
	onEachFeature: createPopup
	});

	function createPopup (feature, layer) {
	        layer.bindPopup(feature.properties['name']).openPopup();
	};

	var map = L.map('map', {
	        layers: [watercolor, toner, minimal, midnight]
	}
	).setView(yadgir,13);



	// map.setView(new L.LatLng(16.7537,77.1482),13);
	// map.addLayer(osm);

	var marker = L.marker([16.7524, 77.139]).addTo(map);

	marker.bindPopup("<b>Hello there!</b><br>This is a district Hospital.").openPopup();

	var overlays = {
	'Schools': schoolLayer,
	'Hospitals': hospitalLayer
	};



	L.control.layers(overlays).addTo(map);

	// start the map in Yadgir
	// map.setView(new L.LatLng(16.7537,77.1482),13);
	// map.addLayer(osm);

}