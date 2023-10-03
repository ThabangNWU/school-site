import {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZMqFSG8g0cEXGzYTXBsX09iIIIQhG0_M",
  authDomain: "school-site-89403.firebaseapp.com",
  projectId: "school-site-89403",
  storageBucket: "school-site-89403.appspot.com",
  messagingSenderId: "250482126773",
  appId: "1:250482126773:web:d17316153b0d6f8bceb3fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
// firebase login
// firebase init
// firebase deploy