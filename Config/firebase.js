import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1Caol-Y88HAB3IeVWbn6RGxdHnfhCjmE",
    authDomain: "meeting-app-49cae.firebaseapp.com",
    databaseURL: "https://meeting-app-49cae.firebaseio.com",
    projectId: "meeting-app-49cae",
    storageBucket: "",
    messagingSenderId: "894238444661"
  };
  firebase.initializeApp(config);

  export default firebase;