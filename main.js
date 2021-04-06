let map = L.map('mapid');
function error() {
    status.textContent = 'Unable to retrieve your location';
    map.setView([51.505, -0.09], 13);
}

function success(position) {
	const latitude  = position.coords.latitude;
	const longitude = position.coords.longitude;
	map.setView([latitude, longitude], 13)
}

function drawMap(){
	
	navigator.geolocation.getCurrentPosition(success, error);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

drawMap();
