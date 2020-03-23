// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

//import {API_base_path_url} from './serverConfig';


// Import F7 Styles
import 'framework7/css/framework7.bundle.css';


// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.css';
import $ from 'jquery';

var globalparameter = {}
// Import Routes
import routes from './routes.js';

/**/


const data = {
 // 'url_server': API_base_path_url

}

function initBackgroundGeolocation() {

  //Make sure to get at least one GPS coordinate in the foreground before starting background services
  navigator.geolocation.getCurrentPosition(function() {
    console.log("Succesfully retreived our GPS position, we can now start our background tracker.");
  }, function(error) {
    console.error(error);
  });

//Get plugin
  var bgLocationServices =  window.plugins.backgroundLocationServices;

//Congfigure Plugin
  bgLocationServices.configure({
    //Both
    desiredAccuracy: 20, // Desired Accuracy of the location updates (lower means more accurate but more battery consumption)
    distanceFilter: 5, // (Meters) How far you must move from the last point to trigger a location update
    debug: true, // <-- Enable to show visual indications when you receive a background location update
    interval: 9000, // (Milliseconds) Requested Interval in between location updates.
    useActivityDetection: true, // Uses Activitiy detection to shut off gps when you are still (Greatly enhances Battery Life)

    //Android Only
    notificationTitle: 'BG Plugin', // customize the title of the notification
    notificationText: 'Tracking', //customize the text of the notification
    fastestInterval: 5000 // <-- (Milliseconds) Fastest interval your app / server can handle updates

  });

//Register a callback for location updates, this is where location objects will be sent in the background
  bgLocationServices.registerForLocationUpdates(function(location) {
    console.log("We got an BG Update" + JSON.stringify(location));
    alert(JSON.stringify(location))
  }, function(err) {
    console.log("Error: Didnt get an update", err);
  });

//Start the Background Tracker. When you enter the background tracking will start, and stop when you enter the foreground.
  bgLocationServices.start();


///later, to stop
 // bgLocationServices.stop();
}

/*function activateSound() {

  var clickyClasses = ['sound-click', 'button','block','item-link'];

  nativeclick.watch(clickyClasses);

}*/
// Init Framework7
const app = new Framework7({
  statusbar: {
    enabled:true,
    androidTextColor:'white',
    iosOverlaysWebView: true,
    androidBackgroundColor:'#C87D45'
  },
  pushState: true,
  data: data,
  root: '#app',
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Distribucion Perufarma', // App name
  theme: 'auto', // Automatic theme detection
  touch: {
    materialRipple: false
  },
  materialPreloaderHtml: true,

  // App routes
  routes: routes,
  on: {
    init: function () {

     // activateSound();
  //   initBackgroundGeolocation()
     /* var bgGeo = window.BackgroundGeolocation;

      bgGeo.onLocation(function(location) {
        console.log('[location] -', location);
      });

      bgGeo.onMotionChange(function(event) {
        console.log('[motionchange] -', event.isMoving, event.location);
      });*/

      /*Back button*/

      console.log('--------------------------')
      console.log(this)
      document.addEventListener('backbutton', onBackKeyDown, false);
      function onBackKeyDown() {
       this.routes.back();
      }

      /*Fin back buttomn*/

      localStorage.setItem('placa','placa_envio')




    },
    pageInit: function () {
      console.log('Page initialized');
    },
  }
});


