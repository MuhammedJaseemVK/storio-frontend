import firebase from 'firebase/app';
// import { initializeApp, getApps } from "firebase/app"
// import 'firebase/auth';
// import 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';

import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"

export const firebaseConfig = {
  apiKey: "AIzaSyBFmKp3aYYXE4kfwjo0zOqvMQvxh39lsdo",
  authDomain: "storio-aaa61.firebaseapp.com",
  projectId: "storio-aaa61",
  storageBucket: "storio-aaa61.appspot.com",
  messagingSenderId: "202991886717",
  appId: "1:202991886717:web:a2f86b27d583a0ab282c14"
};
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
if (!getApps().length) {
  initializeApp(firebaseConfig);

}
const app = initializeApp(firebaseConfig)
// const app = firebase.app();
// const auth = firebase.auth();
// const db = firebase.firestore();
// const now = firebase.firestore.Timestamp.now();
// const storage = firebase.storage();
const db = getFirestore(app)
const auth = getAuth(app)



export { db, auth, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, getAuth }
// export { auth, db, now, storage };
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');