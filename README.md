/**** Personal-Website ******************************************/

Project Description:
	Personal website created in HTML/CSS to practice these languages

Author: Nadine Shen Molesky (nadineshenm@gmail.com)
Purpose: To display portfolio to employers, and practice HTML/CSS.

HTML Pages:

index.html - Homepage
bio.html - Short biography
resume.html - Resume
projects.html - has link to MBTA map

Stylesheet:

style1.css

/**** MBTA Map **************************************************/

Project Description: 
    This webpage displays a google map with an MBTA red line
    overlaid. Users can click on the red circular stops or on a station name from
    the dropdown menu to display live MBTA schedule information. Users can also
    click on the pin the represents their current location to view their distance
    from the closest stop.
    The schedule information contains upcoming trains, their destination, and
    the number of minutes unti arrival at that stop. 

3rd Party Libraries and Services used:
    Google Maps API - Used for map display and interaction, and MBTA overlay display and 
    interaction. Coordinates of red line stops (lats/longs) were copied from a public
    website. 
    Real-time subway schedule data: This data is accessed through an ajax request
    from the following URL: https://rocky-taiga-26352.herokuapp.com/redline.json

map.html - main HTML file for the MBTA Map Webpage. Places map div, menu bar div, and 
* dropdown menu, calls javascript files to do the rest.

redstops.js - 
* This file contains an array containing the red line stops.
* It is used in find_closest_marker() in map.js to calculate
* the closest red line stop to the user's current location.

map.js - This file contains a series of functions that
* display the google map, the red line and stops, the user's geomarker,
* and allow the infowindows to pop up upon clicking on the redline stops
* and the user's geomarker.

menu.js - This file contains functions to implement the dropdown menu
* and its search-autofill functionality

dropdown.js - This file contains functions that causes the
* MBTA schedule to pop up in a window when
* the user clicks on a station from the
* drop-down menu. 
* This file is kept separate because it needed to be
* placed after the station links in the HTML file

