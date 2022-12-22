// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn1caCQMFWJak3ZFxOkzQ8QoiFH2aLSuY", 
  authDomain: "gligx-280e9.firebaseapp.com",
  projectId: "gligx-280e9",
  storageBucket: "gligx-280e9.appspot.com",
  messagingSenderId: "708090439454",
  appId: "1:708090439454:web:c250ad5beeb3c70b5f8b0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)