const firebaseConfig = {
    apiKey: "AIzaSyAVpJe2882o24RSqPZiulPRXxwKiDTss-c",
    authDomain: "blog-b8466.firebaseapp.com",
    databaseURL: "https://blog-b8466.firebaseio.com",
    projectId: "blog-b8466",
    storageBucket: "blog-b8466.appspot.com",
    messagingSenderId: "519041697145",
    appId: "1:519041697145:web:4fcbb6e87ff9695aef1ba8",
    measurementId: "G-5NB5LGHTP6"
  };

import firebase from "firebase";
import "firebase/firestore";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const database = firebase.database();
export default { db, database };