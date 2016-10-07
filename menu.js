/* menu.js
*
* This file contains functions to implement the dropdown menu
* and its search-autofill functionality
*
* Source: http://www.w3schools.com/howto/howto_js_dropdown.asp
*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropclick() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//When the user types in the search box, autocomplete
//with the relevant options
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

