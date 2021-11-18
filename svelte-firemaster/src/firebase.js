import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  // ...your firebase credentials
  apiKey: "AIzaSyDjgyLNtnol6-PggLgIqUKuHOfWpxX6Q-g",
  authDomain: "sendamessageof.firebaseapp.com",
  projectId: "sendamessageof",
  storageBucket: "sendamessageof.appspot.com",
  messagingSenderId: "705239841314",
  appId: "1:705239841314:web:c4661d098d4d1af1ece87b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
