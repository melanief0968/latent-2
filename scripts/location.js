// var x = document.getElementById("demo");
// function getLocation() {
//     if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//     // x.innerHTML = "Geolocation is not supported by this browser.";
//     console.log("Geolocation is not supported by this browser.");
//     }
//     console.log("get location");
// }

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude +
//     " Longitude: " + position.coords.longitude)
//     // x.innerHTML = "Latitude: " + position.coords.latitude +
//     // "<br>Longitude: " + position.coords.longitude;
// }

// function getPosition() {
//   // Simple wrapper
//   return new Promise((res, rej) => {
//       navigator.geolocation.getCurrentPosition(res, rej);
//   });
// }

// function main() {
//   getPosition().then(console.log); // wait for getPosition to complete
// }


// getLocation();
export default {
    // ...
    computed: {
      inRange() {
          console.log("HELLLOOOO")
        const coords = this.$geolocation.coords
        if (!coords) return '?'
        return distanceFrom(coords, this.destination) > 150
      }
    }
  }