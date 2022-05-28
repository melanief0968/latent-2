let lat;
let lng;


let api_key = "8ccfb399b373416981422103bf030e78";
let api_url = "https://api.opencagedata.com/geocode/v1/json";

export default{
  
  
}

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  console.log("get location");
  // return (data.results[0].formatted)
}

export function showPosition(position) {
  console.log(position.coords);
  lat = position.coords.latitude;
  lng = position.coords.longitude;

  console.log("Latitude: " + lat + " Longitude: " + lng);
  getCity(lat,lng)
  return lat +lng
  // if(city == true){
  //   getCity(lat,lng)
  // }
}

export function getPosition() {
  // Simple wrapper
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

export function locationData() {
  getPosition().then(console.log);
}
export function getCity(lat,lng){
  let request_url =
    api_url +
    "?" +
    "key=" +
    api_key +
    "&q=" +
    encodeURIComponent(lat + "," + lng) +
    "&pretty=1" +
    "&no_annotations=1";

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  let request = new XMLHttpRequest();
  request.open("GET", request_url, true);
  request.onload = function () {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200) {
      // Success!
      let data = JSON.parse(request.responseText);
      //alert(data.results[0].formatted); // print the location
      console.log(data);
      console.log(data.results[0].components.city);
      // document.getElementById("localisation").innerHTML =
      //   data.results[0].formatted;
    } else if (request.status <= 500) {
      // We reached our target server, but it returned an error

      console.log("unable to geocode! Response code: " + request.status);
      let data = JSON.parse(request.responseText);
      console.log("error msg: " + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function () {
    // There was a connection error of some sort
    console.log("unable to connect to server");
  };

  request.send();
}
// export function watchPos() {
//   var id, target, options;

//   function success(pos) {
//     var crd = pos.coords;

//     if (
//       target.latitude === crd.latitude &&
//       target.longitude === crd.longitude
//     ) {
//       console.log("Congratulations, you reached the target");
//       navigator.geolocation.clearWatch(id);
//     }
//   }

//   function error(err) {
//     console.warn("ERROR(" + err.code + "): " + err.message);
//   }

//   target = {
//     latitude: 0,
//     longitude: 0,
//   };

//   options = {
//     enableHighAccuracy: false,
//     timeout: 5000,
//     maximumAge: 0,
//   };

//   id = navigator.geolocation.watchPosition(success, error, options);
// }
export function calcDist(coords1,coords2){
  // earth
  var R = 6371, // km
  lat1 = parseFloat(coords1.lat),
  lat2 = parseFloat(coords2.lat),
  lon1 = parseFloat(coords1.lng),
  lon2 = parseFloat(coords2.lng);

// deg2rad
  lat1 = (lat1 / 180) * Math.PI;
  lat2 = (lat2 / 180) * Math.PI;
  lon1 = (lon1 / 180) * Math.PI;
  lon2 = (lon2 / 180) * Math.PI;
  
  // Equirectangular approximation
  // lower accuracy, higher performance
  var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
  var y = (lat2-lat1);
  var d = Math.sqrt(x*x + y*y) * R;
  return Math.round(d * 1000);
}
export function inRange() {
  console.log("HELLLOOOO");
  const coords = navigator.geolocation.coords;
  console.log(coords);
  if (!coords) return "?";
  return distanceFrom(coords, this.destination) > 150;
}
