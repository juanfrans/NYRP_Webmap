var southWest = L.latLng(40.604313, -74.221959),
northEast = L.latLng(40.829315, -73.734233),
bounds = L.latLngBounds(southWest, northEast),
center = L.latLng(40.712398, -73.967900);

var map = L.map('map', {
	maxBounds: bounds,
	center: center
}).setView([40.711652, -73.966539], 12);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/jfs2118.k0il297k/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	minZoom: 12
}).addTo(map);

var tramStyle = {
	"color": "#ff7800",
	"weight": 5,
	"opacity": 0.65
};

var devProjectsStyle = {
	"color": "#FF0000",
	"fillColor": "#000000",
	"fillOpacity": 0.1,
	"strokeOpacity": 1,
	"weight": 2.5
};

var selBuildingsStyle = {
	"color": "#333333",
	"weight": 0
}

L.geoJson(tramLines, {
	style: tramStyle
}).addTo(map);

L.geoJson(devProjects, {
	style: devProjectsStyle,
	onEachFeature: function (feature, layer){
		layer.bindPopup("<b>"+feature.properties.Developer+"</b>"+ "<br />" + feature.properties.Name + "<br />" + feature.properties.Size + "<br />" + feature.properties.Date);
	}
}).addTo(map);