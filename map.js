
var map;
initMap();
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.352271, lng: -71.05524200000001},
          zoom: 11
        });
    }
placeRedline();
var markers = placeRedmarkers(); //places redline markers and 
                                 //activates infowindow on click
placeMyPin(); //places pin at my location, renders polyline, and 
              //activates infowindow on click
    

function placeRedline() {
//array of red line stops
        var main_branch = [
       		{lat: 42.395428, lng: -71.142483},
       		{lat: 42.39674, lng: -71.121815},
       		{lat: 42.3884, lng: -71.11914899999999},
       		{lat: 42.373362, lng: -71.118956},
       		{lat: 42.365486, lng: -71.103802},
       		{lat: 42.36249079, lng: -71.08617653},
       		{lat: 42.361166, lng: -71.070628},
       		{lat: 42.35639457, lng: -71.0624242},
       		{lat: 42.355518, lng: -71.060225},
	        {lat: 42.352271, lng: -71.05524200000001},
	        {lat: 42.342622, lng: -71.056967},
	        {lat: 42.330154, lng: -71.057655},
			{lat: 42.320685, lng: -71.052391},
			{lat: 42.31129, lng: -71.053331},
			{lat: 42.300093, lng: -71.061667},
			{lat: 42.29312583, lng: -71.06573796000001},
			{lat: 42.284652, lng: -71.06448899999999}		
        ];
//separate array for after the branch point
        var braintree_branch = [
       		 {lat: 42.320685, lng: -71.052391},
       		 {lat: 42.275275, lng: -71.029583},
       		 {lat: 42.2665139, lng: -71.0203369},
       		 {lat: 42.251809, lng: -71.005409},
       		 {lat: 42.233391, lng: -71.007153},
       		 {lat: 42.2078543, lng: -71.0011385}
        ];

//create polyline 
        var redline = new google.maps.Polyline({
        	path: main_branch,
        	geodesic: true,
        	strokeColor: '#FF0000',
        	strokeOpacity: 1.0,
        	strokeWeight: 2,
        	
        });

        var brainline = new google.maps.Polyline({
        	path: braintree_branch,
        	geodesic: true,
        	strokeColor: '#FF0000',
        	strokeOpacity: 1.0,
        	strokeWeight: 2,
        	
        });
//actually display polyline 
        redline.setMap(map);
        brainline.setMap(map);

}

//get geolocation
        //check if geolocation supported
function placeMyPin() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    
                    myLat = position.coords.latitude;
                    myLng = position.coords.longitude;
                    placemarker();
                });
            }

            else {
                alert("Geolocation is not supported by this browser");
            }
}

//places marker at user's location
//opens infowindow option

function placemarker() {
            myposition = new google.maps.LatLng(myLat, myLng);

            var mymarker = new google.maps.Marker({
                position: myposition,
                map: map,
                title: 'My Location'
            });
            mymarker.setMap(map);
            closestInfo(mymarker, myposition);           
}

//draws polyline from "me" to closest stop, activates infowindow on click

function closestInfo(mymarker, myposition) {

        var min = find_closest_marker(mymarker);

        mymarker.addListener('click', function() {
            showWindow(min, mymarker);
        });

        var me_to_stop = [myposition, min.coords];

        var myline = new google.maps.Polyline({
            path: me_to_stop,
            geodesic: true,
            strokeColor: '#0000FF',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            
        });

        myline.setMap(map);

}

function showWindow(min, mymarker) {

        var dist = getMiles(min.distance);
        dist = dist.toFixed(2);

        var contentString = '<h4>You Are Here</h4> <p>Closest Red Line Station: ' + String(min.station) + '</p>'
            + ' <p>Distance: ' + String(dist) + ' miles</p>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        infowindow.open(map, mymarker);

}

function getMiles(i) {
    return i*0.000621371192;
}

function find_closest_marker(marker) {

    var min = {};
    //set properties of min object to correspond to first value in the array
    min.distance = google.maps.geometry.
            spherical.computeDistanceBetween(marker.position, redstops[0][1]);
    min.station = redstops[0][0];
    min.coords = redstops[0][1];

    for (i=0; i<redstops.length; i++) {
        var dist = google.maps.geometry.
            spherical.computeDistanceBetween(marker.position, redstops[i][1]);
        if (dist < min.distance) {
            min.distance = dist;
            min.station = redstops[i][0];
            min.coords = redstops[i][1];
        }
    };

    return min;
}

/* control flow for the following functions:
* for each redline stop:
* 1. create marker
* 2. add onclick event handler that
* --parses JSON schedule data + puts in sched array
* (need to do this everytime the user clicks to keep the schedule live)
* --puts data to be printed in "toPrint array"
* --formats text in infowindow
* --displays infowindow
*/
        
function placeRedmarkers() {
    //make custom symbol
       var circ = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#660000',
            fillOpacity: 1.0,
            scale: 5,
            strokeColor: '#bf4040',
            strokeWeight: 4
        };
//Set all red line markers
    var markers = [];
    for (i=0; i<redstops.length; i++) {
        var marker = new google.maps.Marker({
            position: redstops[i][1],
            icon: circ,
            name: redstops[i][0],
            map: map
        })
        markers[i] = marker;
        redlineclick(marker);
    };
    return markers;
}

//stationlink.addlistener(...same)
//for "marker" 

//handles clicking on one marker
function redlineclick(marker) {
    
    marker.addListener('click', function() {
            parse_schedule(callback, marker); //GO TO CALLBACK FXN SORRY. handles the schedule info window
        });
}

//puts schedule data in an array, then puts the data to be printed in "toPrint" array
function callback(jsondata, marker) {
    //code that depends on sched
    var sched = convert_to_arr(jsondata); 
    var toPrint = [];
    //console.log(marker.name);
    for (i=0; i < sched.length; i++) {
            if (marker.name == sched[i].stop) {
                toPrint.push(sched[i]);
            };
    };
    redlineWindow(toPrint, marker);
}

//formats text to be displayed in infowindow, and opens the infowindow
function redlineWindow(toPrint, marker) {
    var contentString = '<h3>' + String(marker.name) + '</h3>';

    if (toPrint.length == 0) {contentString =  contentString + '<p>No Trains Available</p>'}
    else {
        
        for (i=0; i < toPrint.length; i++) {
            var mins = toPrint[i].sec/60;
            mins = mins.toFixed(0);

            contentString = contentString + '<p>Destination: ' + String(toPrint[i].dest)
                + ' | Time Until Arrival: ' + String(mins) + ' minutes</p>';
        };
    };

    var infowindow = new google.maps.InfoWindow({
            content: contentString
    });
    infowindow.open(map, marker);
}

//reads JSON MBTA schedule data
function parse_schedule(callback, marker) {

    var x = new XMLHttpRequest();

    //when request is sent and came back completed, parse the data and pass it to function
    x.onreadystatechange = function() {
        if (x.readyState == 4 && x.status == 200) {
            var jsondata = JSON.parse(x.responseText);
            callback(jsondata, marker);

        }
    }

    //specifies type of request
    x.open("GET", "https://rocky-taiga-26352.herokuapp.com/redline.json", true);
    //sends the request
    x.send();

}

//put relevant JSON data in an array 
function convert_to_arr(s) {
    var sched = [];

    for (i = 0; i < s.TripList.Trips.length; i++) {
        for (j = 0; j < s.TripList.Trips[i].Predictions.length; j++) {
            var sched_obj = {};
            sched_obj.dest = s.TripList.Trips[i].Destination;
            sched_obj.stop = s.TripList.Trips[i].Predictions[j].Stop;
            sched_obj.sec = s.TripList.Trips[i].Predictions[j].Seconds;
            sched.push(sched_obj);
        }

    };

    return sched;
}


    
    //console.log(markers[0].name);







      