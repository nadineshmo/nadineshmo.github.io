/**** Personal-Website ******************************************/

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

