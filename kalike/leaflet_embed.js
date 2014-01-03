var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © OpenStreetMap contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 10, maxZoom: 15, attribution: osmAttrib});		

	// start the map in Yadgir
	map.setView(new L.LatLng(16.7537,77.1482),13);
	map.addLayer(osm);



}