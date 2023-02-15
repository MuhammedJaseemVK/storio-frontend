import firebase from 'firebase/app';
import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFmKp3aYYXE4kfwjo0zOqvMQvxh39lsdo",
  authDomain: "storio-aaa61.firebaseapp.com",
  projectId: "storio-aaa61",
  storageBucket: "storio-aaa61.appspot.com",
  messagingSenderId: "202991886717",
  appId: "1:202991886717:web:a2f86b27d583a0ab282c14"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}