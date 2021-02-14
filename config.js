import firebase from 'firebase';
// put your own firebase db configuration
   var firebaseConfig = {
    apiKey: "AIzaSyBCsMLDupNcnZ8ao5_90YOWsUK-gK6kbnI",
    authDomain: "school-attendance-app-b2913.firebaseapp.com",
    databaseURL: "https://school-attendance-app-b2913-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-b2913",
    storageBucket: "school-attendance-app-b2913.appspot.com",
    messagingSenderId: "871662151637",
    appId: "1:871662151637:web:5327d434dcbcab1b77bf5c"
  };
 // Initialize Firebase
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}


export default  firebase.database()