// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpXQViNXmMt105MohfWkXUhqx3_u5RMJA",
  authDomain: "sparta-react-basic-1d922.firebaseapp.com",
  projectId: "sparta-react-basic-1d922",
  storageBucket: "sparta-react-basic-1d922.appspot.com",
  messagingSenderId: "2058159255",
  appId: "1:2058159255:web:d25b114a576e66c1a555d2",
  measurementId: "G-NRXZ79DSPS",
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore();
