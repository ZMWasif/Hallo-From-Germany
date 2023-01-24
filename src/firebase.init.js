// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArAjp0MOV_Z8OOglfCedMXgLbubiKLKmY",
  authDomain: "hallo-from-germany.firebaseapp.com",
  projectId: "hallo-from-germany",
  storageBucket: "hallo-from-germany.appspot.com",
  messagingSenderId: "740026916298",
  appId: "1:740026916298:web:a4a66328a1caf33448c333",
  measurementId: "G-77Y3NGDXGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
