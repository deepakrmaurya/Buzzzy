/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeuy3nE7xPHzR34MBOdUtjet0h56BGXTE",
  authDomain: "buzzzy-69829.firebaseapp.com",
  projectId: "buzzzy-69829",
  storageBucket: "buzzzy-69829.firebasestorage.app",
  messagingSenderId: "1003079618749",
  appId: "1:1003079618749:web:7fe2ddcf683bd2c1bf27d4",
  measurementId: "G-JWH7PXMQL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
