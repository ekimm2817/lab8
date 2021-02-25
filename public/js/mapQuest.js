function initMap() {
	L.mapquest.key = 'VPv9LjCetyozqqdOp9btcdkVqgjrtl2M';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.88, -117.236],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12
	});

	L.marker([32.88, -117.236]).addTo(map);
}