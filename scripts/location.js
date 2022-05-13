var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    // x.innerHTML = "Geolocation is not supported by this browser.";
    console.log("Geolocation is not supported by this browser.");
    }
    console.log("get location");
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude)
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude;
}

getLocation();
