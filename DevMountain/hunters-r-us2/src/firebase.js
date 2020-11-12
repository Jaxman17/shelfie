import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDeO_coPM3IWuS8gHSLTfBZ3SjR5gcj_yw",
    authDomain: "hunters-r-us2.firebaseapp.com",
    databaseURL: "https://hunters-r-us2.firebaseio.com",
    projectId: "hunters-r-us2",
    storageBucket: "hunters-r-us2.appspot.com",
    messagingSenderId: "454797913093",
    appId: "1:454797913093:web:e24be50210ff3250bd006c",
    measurementId: "G-8FHRRPLKP5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};