import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyCz3DabR_37EkoVunD8ZiLdM9S57r_W_Fo",
  authDomain: "solid-retro.firebaseapp.com",
  projectId: "solid-retro",
  storageBucket: "solid-retro.appspot.com",
  messagingSenderId: "664219096070",
  appId: "1:664219096070:web:557637be41668e60065f87",
  measurementId: "G-R0GJ4MC2NY"
});
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const firestore = firebase.firestore();

export default firebase;
