//allows schedule to pop up when you click from dropdown menu
//in separate file because needed to be at end of the HTML file

setMenuHandling(markers); 

function setMenuHandling(markers) {
    var stations = document.getElementsByTagName("a");

    for (var i = 0; i < stations.length ; i++) {
        
        //console.log(markers[i].name); //works
        //console.log(stations[i].innerHTML);
        stations[i].addEventListener('click', 
            
            parse_schedule.bind(this, callback, markers[i]) //need to use binding because of closures
        , 
        false);
        };
    
}

