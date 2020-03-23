var options={

  maximumAge:3000,
  timeout:5000,
  enableHighAccuracy:true
}


var onSuccess = function(position) {
  alert('Latitude: '          + position.coords.latitude          + '\n' +
    'Longitude: '         + position.coords.longitude         + '\n' +
    'Altitude: '          + position.coords.altitude          + '\n' +
    'Accuracy: '          + position.coords.accuracy          + '\n' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    'Heading: '           + position.coords.heading           + '\n' +
    'Speed: '             + position.coords.speed             + '\n' +
    'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
    'message: ' + error.message + '\n');
}


export async function getPosition(onSuccess,onError) {
  navigator.geolocation.getCurrentPosition(onSuccess, onError,options);
}
