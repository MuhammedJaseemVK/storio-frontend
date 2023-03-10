import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4WllSntnzA3cL3GzYscz3ln8Lyh3yw8Y",
  authDomain: "sample-e17c3.firebaseapp.com",
  projectId: "sample-e17c3",
  storageBucket: "sample-e17c3.appspot.com",
  messagingSenderId: "1048286714389",
  appId: "1:1048286714389:web:88988f5b43097372650c1c",
  measurementId: "G-7TKD4Q726D"
};

// Initialize Firebase

const analytics = getAnalytics(app);

export {auth}