/* redstops.js
* This file contains an array containing the red line stops.
* It is used in find_closest_marker() in map.js to calculate
* the closest red line stop to the user's current location.
* Each array element contains the name of the station, and a LatLng
* object representing the station's position. This LatLng object type is necessary
* in order to use the computeDistanceBetween() function in map.js.
*/

var redstops = [	

			['Alewife', new google.maps.LatLng(42.395428, -71.142483)],
       		['Davis', new google.maps.LatLng(42.39674, -71.121815)],
       		['Porter Square', new google.maps.LatLng(42.3884, -71.11914899999999)],
       		['Harvard Square', new google.maps.LatLng(42.373362, -71.118956)],
       		['Central Square', new google.maps.LatLng(42.365486, -71.103802)],
       		['Kendall/MIT', new google.maps.LatLng(42.36249079, -71.08617653)],
       		['Charles/MGH', new google.maps.LatLng(42.361166, -71.070628)],
       		['Park Street', new google.maps.LatLng(42.35639457, -71.0624242)],
       		['Downtown Crossing', new google.maps.LatLng(42.355518, -71.060225)],
	             ['South Station', new google.maps.LatLng(42.352271, -71.05524200000001)],
	             ['Broadway', new google.maps.LatLng(42.342622, -71.056967)],
	             ['Andrew', new google.maps.LatLng(42.330154, -71.057655)],
			['JFK/UMass', new google.maps.LatLng(42.320685, -71.052391)],
			['Savin Hill', new google.maps.LatLng(42.31129, -71.053331)],
			['Fields Corner', new google.maps.LatLng(42.300093, -71.061667)],
			['Shawmut', new google.maps.LatLng(42.29312583, -71.06573796000001)],
			['Ashmont', new google.maps.LatLng(42.284652, -71.06448899999999)],
       		['North Quincy', new google.maps.LatLng(42.275275, -71.029583)],
       		['Wollaston', new google.maps.LatLng(42.2665139, -71.0203369)],
       		['Quincy Center', new google.maps.LatLng(42.251809, -71.005409)],
       		['Quincy Adams', new google.maps.LatLng(42.233391, -71.007153)],
       		['Braintree', new google.maps.LatLng(42.2078543, -71.0011385)]	

];	