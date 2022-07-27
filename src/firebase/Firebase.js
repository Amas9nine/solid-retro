import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
firebase.initializeApp({
  apiKey: "AIzaSyC-cmrNEA9cyONQ8OY8X3kIiEseoK3i2eU",
  authDomain: "easy-retro.firebaseapp.com",
  projectId: "easy-retro",
  storageBucket: "easy-retro.appspot.com",
  messagingSenderId: "769494545713",
  appId: "1:769494545713:web:21840468216e5706522c10"
});
export const db = firebase.firestore();
export const storageRef = firebase.storage();
const fire = firebase;
export default fire;


