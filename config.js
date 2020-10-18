import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCUhCO_fZ_GDZ4LgAJikmEyfLYemgCFbOk",
    authDomain: "student-app-61a39.firebaseapp.com",
    databaseURL: "https://student-app-61a39.firebaseio.com",
    projectId: "student-app-61a39",
    storageBucket: "student-app-61a39.appspot.com",
    messagingSenderId: "63721145953",
    appId: "1:63721145953:web:5ae3540efd7d240e37cc20"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
