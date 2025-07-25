// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxv_3Re5s-_jlh5t_VVEJJj-rXSkkdjfg",
  authDomain: "buzzzy-buzzzy.firebaseapp.com",
  projectId: "buzzzy-buzzzy",
  storageBucket: "buzzzy-buzzzy.firebasestorage.app",
  messagingSenderId: "1092064188902",
  appId: "1:1092064188902:web:fe7ba3555881f52ad61e27",
  measurementId: "G-SZW3PBZYJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
