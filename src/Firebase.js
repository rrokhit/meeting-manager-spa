import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqnVTwfo8frBjRn12i7pJUKKsYPYlFR-I",
    authDomain: "meeting-manager-1d353.firebaseapp.com",
    databaseURL: "https://meeting-manager-1d353.firebaseio.com",
    projectId: "meeting-manager-1d353",
    storageBucket: "meeting-manager-1d353.appspot.com",
    messagingSenderId: "924011904418",
    appId: "1:924011904418:web:d7cc80cb939c34896606fb",
    measurementId: "G-J5ZLZ7CXTX"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;