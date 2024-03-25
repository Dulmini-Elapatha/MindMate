// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkxvGtST8v3-gnOPE8lrucJ3ZUT2UV6l0",
    authDomain: "mind-mate-e5419.firebaseapp.com",
    projectId: "mind-mate-e5419",
    storageBucket: "mind-mate-e5419.appspot.com",
    messagingSenderId: "971128135279",
    appId: "1:971128135279:web:81bb9a7342d37487d0b79a",
    measurementId: "G-PGH2SQ4WZB"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default firebase;
export { app, analytics, auth };