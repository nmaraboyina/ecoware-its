// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY_W11DobrJSP7hqqn_5DEduW-HvQkrJM",
  authDomain: "ecoware-its.firebaseapp.com",
  projectId: "ecoware-its",
  storageBucket: "ecoware-its.appspot.com",
  messagingSenderId: "877748487678",
  appId: "1:877748487678:web:fbd1b907bfe93b2045acaf",
  measurementId: "G-HMY6FNB294",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
