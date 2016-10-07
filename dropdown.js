/* dropdown.js
*
* This file contains functions that causes the
* MBTA schedule to pop up in a window when
* the user clicks on a station from the
* drop-down menu. 
* This file is kept separate because it needed to be
* placed after the station links in the HTML file
*
*/


setMenuHandling(markers); 

function setMenuHandling(markers) {
    var stations = document.getElementsByTagName("a");

    for (var i = 0; i < stations.length ; i++) {
        stations[i].addEventListener('click', 
            
            parse_schedule.bind(this, callback, markers[i]) //need to use binding because of closures
        , 
        false);
        };
    
}

