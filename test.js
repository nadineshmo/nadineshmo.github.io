
setMenuHandling(markers); //allows schedule to pop up when you click from dropdown menu

function setMenuHandling(markers) {
    var stations = document.getElementsByTagName("a");
    console.log(stations.length);

    for (var i = 0; i < stations.length ; i++) {
        stations[i].addEventListener('click', function () {
            parse_schedule(callback, markers[i]);
        }, 
        false);
    };
}