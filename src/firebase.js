// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPM4dnsAnyHvXunt9CIfpFQG0uGGA1pXc",
  authDomain: "linkedin-32d8a.firebaseapp.com",
  projectId: "linkedin-32d8a",
  storageBucket: "linkedin-32d8a.appspot.com",
  messagingSenderId: "846532361078",
  appId: "1:846532361078:web:738361991a8eb1555f1857",
  measurementId: "G-0WDF8ESCT1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
