// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG-gqk_QsJVPEQrSLK9uhSryfloxf7YOc",
  authDomain: "fir-688fb.firebaseapp.com",
  projectId: "fir-688fb",
  storageBucket: "fir-688fb.appspot.com",
  messagingSenderId: "22073099765",
  appId: "1:22073099765:web:44517d5c56c743a71f0cbc",
  measurementId: "G-XG02Q7RKSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };